import { useEffect, useRef, useState } from "react";

type NodePoint = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
};

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const compactViewport = window.matchMedia("(max-width: 900px)").matches;

    if (!mount || reduceMotion || compactViewport || !supportsWebGL()) {
      setFallback(true);
      return undefined;
    }

    let disposed = false;
    let cleanup = () => {};

    void import("three")
      .then((THREE) => {
        if (disposed || !mountRef.current) {
          return;
        }

        const container = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
        camera.position.set(0, 0.2, 7.6);

        const renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        const group = new THREE.Group();
        scene.add(group);

        const nodes: NodePoint[] = Array.from({ length: 84 }, (_, index) => {
          const ring = index % 7;
          const angle = index * 0.88;
          const radius = 1.2 + ring * 0.32;
          return {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle * 0.83) * 1.58,
            z: Math.sin(angle) * radius * 0.52,
            vx: 0.4 + (index % 5) * 0.06,
            vy: 0.3 + (index % 3) * 0.05,
          };
        });

        const pointsGeometry = new THREE.BufferGeometry();
        const pointPositions = new Float32Array(nodes.length * 3);
        pointsGeometry.setAttribute("position", new THREE.BufferAttribute(pointPositions, 3));
        const pointMaterial = new THREE.PointsMaterial({
          color: 0x8cf6df,
          size: 0.045,
          transparent: true,
          opacity: 0.78,
          depthWrite: false,
        });
        const points = new THREE.Points(pointsGeometry, pointMaterial);
        group.add(points);

        const lineGeometry = new THREE.BufferGeometry();
        const linePositions = new Float32Array(nodes.length * 2 * 3);
        lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
        const lineMaterial = new THREE.LineBasicMaterial({
          color: 0x52a5ff,
          transparent: true,
          opacity: 0.16,
          depthWrite: false,
        });
        const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
        group.add(lines);

        const torusMaterial = new THREE.MeshBasicMaterial({
          color: 0xf6b44b,
          transparent: true,
          opacity: 0.2,
          wireframe: true,
        });
        const torus = new THREE.Mesh(new THREE.TorusKnotGeometry(1.15, 0.08, 120, 10), torusMaterial);
        torus.rotation.set(0.75, 0.2, 0.1);
        group.add(torus);

        const resize = () => {
          const rect = container.getBoundingClientRect();
          const width = Math.max(320, rect.width);
          const height = Math.max(320, rect.height);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height, false);
        };

        const observer = new ResizeObserver(resize);
        observer.observe(container);
        resize();

        let frameId = 0;
        const startTime = performance.now();

        const render = () => {
          const time = (performance.now() - startTime) / 1000;
          const positions = pointsGeometry.attributes.position.array as Float32Array;
          const connections = lineGeometry.attributes.position.array as Float32Array;
          let lineCursor = 0;

          nodes.forEach((node, index) => {
            const x = node.x + Math.sin(time * node.vx + index) * 0.05;
            const y = node.y + Math.cos(time * node.vy + index * 0.2) * 0.05;
            const z = node.z + Math.sin(time * 0.28 + index) * 0.12;
            positions[index * 3] = x;
            positions[index * 3 + 1] = y;
            positions[index * 3 + 2] = z;

            const peerIndex = (index + 11) % nodes.length;
            const peer = nodes[peerIndex];
            connections[lineCursor++] = x;
            connections[lineCursor++] = y;
            connections[lineCursor++] = z;
            connections[lineCursor++] = peer.x;
            connections[lineCursor++] = peer.y;
            connections[lineCursor++] = peer.z;
          });

          pointsGeometry.attributes.position.needsUpdate = true;
          lineGeometry.attributes.position.needsUpdate = true;
          group.rotation.y = time * 0.11;
          group.rotation.x = Math.sin(time * 0.18) * 0.08;
          torus.rotation.y = time * 0.24;
          torus.rotation.z = time * 0.08;
          renderer.render(scene, camera);
          frameId = window.requestAnimationFrame(render);
        };

        render();

        cleanup = () => {
          window.cancelAnimationFrame(frameId);
          observer.disconnect();
          pointsGeometry.dispose();
          lineGeometry.dispose();
          pointMaterial.dispose();
          lineMaterial.dispose();
          torus.geometry.dispose();
          torusMaterial.dispose();
          renderer.dispose();
          renderer.domElement.remove();
        };
      })
      .catch(() => setFallback(true));

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div className="hero-scene" ref={mountRef} aria-hidden="true">
      {fallback ? (
        <div className="scene-fallback">
          <span />
          <span />
          <span />
          <span />
        </div>
      ) : null}
    </div>
  );
}
