import { useEffect } from "react";

const EN_LABEL = "Switch to Vietnamese";
const VI_LABEL = "Switch to English";

function setLanguage(language: "en" | "vi") {
  document.body.dataset.lang = language;
  document.documentElement.lang = language;
  localStorage.setItem("portfolio-language", language);

  const toggle = document.querySelector<HTMLButtonElement>("[data-language-toggle]");
  const menu = document.querySelector<HTMLButtonElement>("[data-menu-button]");
  const nav = document.querySelector<HTMLElement>("[data-nav-list]");

  if (toggle) {
    toggle.setAttribute("aria-pressed", String(language === "vi"));
    toggle.setAttribute("aria-label", language === "vi" ? VI_LABEL : EN_LABEL);
  }

  if (menu) {
    const isOpen = nav?.classList.contains("is-open") || false;
    const label = isOpen
      ? language === "vi"
        ? "Đóng menu"
        : "Close menu"
      : language === "vi"
        ? "Mở menu"
        : "Open menu";
    menu.setAttribute("aria-label", label);
    menu.querySelector(".sr-only")?.replaceChildren(label);
  }
}

export default function GlobalInteractions() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nav = document.querySelector<HTMLElement>("[data-nav-list]");
    const menu = document.querySelector<HTMLButtonElement>("[data-menu-button]");
    const languageToggle = document.querySelector<HTMLButtonElement>("[data-language-toggle]");
    const progressBar = document.querySelector<HTMLElement>("[data-scroll-progress]");

    try {
      const stored = localStorage.getItem("portfolio-language");
      setLanguage(stored === "vi" ? "vi" : "en");
    } catch {
      setLanguage("en");
    }

    const onLanguageClick = () => {
      setLanguage(document.body.dataset.lang === "vi" ? "en" : "vi");
    };

    const closeMenu = () => {
      nav?.classList.remove("is-open");
      menu?.setAttribute("aria-expanded", "false");
      setLanguage(document.body.dataset.lang === "vi" ? "vi" : "en");
    };

    const onMenuClick = () => {
      if (!menu || !nav) {
        return;
      }

      const isOpen = nav.classList.toggle("is-open");
      menu.setAttribute("aria-expanded", String(isOpen));
      setLanguage(document.body.dataset.lang === "vi" ? "vi" : "en");
    };

    const onNavClick = (event: Event) => {
      const target = event.target as Element | null;
      if (target?.closest("a")) {
        closeMenu();
      }
    };

    languageToggle?.addEventListener("click", onLanguageClick);
    menu?.addEventListener("click", onMenuClick);
    nav?.addEventListener("click", onNavClick);

    let scrollCleanup = () => {};
    if (progressBar) {
      let ticking = false;
      const update = () => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
        progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
        ticking = false;
      };
      const requestUpdate = () => {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(update);
        }
      };
      window.addEventListener("scroll", requestUpdate, { passive: true });
      window.addEventListener("resize", requestUpdate);
      update();
      scrollCleanup = () => {
        window.removeEventListener("scroll", requestUpdate);
        window.removeEventListener("resize", requestUpdate);
      };
    }

    let gsapCleanup = () => {};
    if (!reduceMotion) {
      document.body.classList.add("motion-ready");
      void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapModule, scrollModule]) => {
        const gsap = gsapModule.gsap;
        const ScrollTrigger = scrollModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          gsap.from("[data-intro]", {
            y: 30,
            opacity: 0,
            filter: "blur(12px)",
            duration: 1.1,
            stagger: 0.08,
            ease: "power4.out",
          });

          gsap.from(".signal-tile", {
            y: 18,
            opacity: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            delay: 0.4,
          });

          gsap.fromTo(
            ".signal-band article",
            { y: 28, autoAlpha: 0.52 },
            {
              y: 0,
              autoAlpha: 1,
              stagger: 0.08,
              ease: "none",
              scrollTrigger: {
                trigger: ".signal-band",
                start: "top 92%",
                end: "bottom 68%",
                scrub: 0.75,
              },
            },
          );

          gsap.utils.toArray<HTMLElement>(".project-story").forEach((story) => {
            const visual = story.querySelector<HTMLElement>(".story-visual");
            const visualCore = story.querySelector<HTMLElement>(".visual-pickle, .visual-audio, .visual-waste");
            const contentItems = story.querySelectorAll<HTMLElement>(".story-content > *");

            gsap.fromTo(
              story,
              { y: 72, autoAlpha: 0.42, scale: 0.982 },
              {
                y: 0,
                autoAlpha: 1,
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: story,
                  start: "top 92%",
                  end: "top 48%",
                  scrub: 0.9,
                },
              },
            );

            if (visual) {
              gsap.fromTo(
                visual,
                { xPercent: -3.5, scale: 0.975 },
                {
                  xPercent: 0,
                  scale: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: story,
                    start: "top 86%",
                    end: "center 42%",
                    scrub: 1,
                  },
                },
              );
            }

            if (visualCore) {
              gsap.to(visualCore, {
                yPercent: -4,
                ease: "none",
                scrollTrigger: {
                  trigger: story,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.2,
                },
              });
            }

            gsap.fromTo(
              contentItems,
              { y: 24, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                stagger: 0.055,
                ease: "none",
                scrollTrigger: {
                  trigger: story,
                  start: "top 82%",
                  end: "top 48%",
                  scrub: 0.85,
                },
              },
            );

            ScrollTrigger.create({
              trigger: story,
              start: "top 58%",
              end: "bottom 42%",
              toggleClass: { targets: story, className: "is-active" },
            });
          });

          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((item) => {
            gsap.fromTo(
              item,
              { y: 42, autoAlpha: 0.2 },
              {
                y: 0,
                autoAlpha: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: item,
                  start: "top 92%",
                  end: "top 68%",
                  scrub: 0.8,
                },
              },
            );
          });

          gsap.utils.toArray<HTMLElement>(".capability-grid article, .proof-grid article, .timeline-item").forEach((item) => {
            gsap.fromTo(
              item,
              { y: 34, autoAlpha: 0.28, scale: 0.985 },
              {
                y: 0,
                autoAlpha: 1,
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: item,
                  start: "top 92%",
                  end: "top 66%",
                  scrub: 0.85,
                },
              },
            );
          });

          gsap.utils.toArray<HTMLElement>("[data-count]").forEach((item) => {
            const raw = item.dataset.count || "0";
            const value = Number.parseInt(raw, 10);
            if (Number.isNaN(value)) {
              return;
            }
            const state = { value: 0 };
            gsap.to(state, {
              value,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 88%",
                once: true,
              },
              onUpdate: () => {
                item.textContent = String(Math.round(state.value));
              },
            });
          });
        });

        const magneticItems = document.querySelectorAll<HTMLElement>("[data-magnetic]");
        const onPointerMove = (event: PointerEvent) => {
          const item = event.currentTarget as HTMLElement;
          const rect = item.getBoundingClientRect();
          const x = event.clientX - rect.left - rect.width / 2;
          const y = event.clientY - rect.top - rect.height / 2;
          gsap.to(item, { x: x * 0.12, y: y * 0.18, duration: 0.35, ease: "power3.out" });
        };
        const onPointerLeave = (event: PointerEvent) => {
          gsap.to(event.currentTarget, { x: 0, y: 0, duration: 0.45, ease: "elastic.out(1, 0.45)" });
        };
        magneticItems.forEach((item) => {
          item.addEventListener("pointermove", onPointerMove);
          item.addEventListener("pointerleave", onPointerLeave);
        });

        gsapCleanup = () => {
          ctx.revert();
          magneticItems.forEach((item) => {
            item.removeEventListener("pointermove", onPointerMove);
            item.removeEventListener("pointerleave", onPointerLeave);
          });
        };
      });
    }

    return () => {
      languageToggle?.removeEventListener("click", onLanguageClick);
      menu?.removeEventListener("click", onMenuClick);
      nav?.removeEventListener("click", onNavClick);
      scrollCleanup();
      gsapCleanup();
    };
  }, []);

  return null;
}
