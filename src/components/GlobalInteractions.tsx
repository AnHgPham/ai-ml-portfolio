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

        const mm = gsap.matchMedia();

        const countSignals = () => {
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
        };

        mm.add("(min-width: 761px)", () => {
          const ctx = gsap.context(() => {
            gsap.from("[data-intro]", {
              y: 30,
              opacity: 0,
              filter: "blur(12px)",
              duration: 1.1,
              stagger: 0.08,
              ease: "power4.out",
            });

            gsap.from(".signal-module", {
              y: 24,
              autoAlpha: 0,
              rotateX: -12,
              transformPerspective: 900,
              duration: 0.9,
              stagger: 0.08,
              ease: "power4.out",
              delay: 0.36,
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
                { y: 72, autoAlpha: 0.42, scale: 0.982, rotateX: 1.8 },
                {
                  y: 0,
                  autoAlpha: 1,
                  scale: 1,
                  rotateX: 0,
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
                { y: 24, autoAlpha: 0.08 },
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

            countSignals();
          });

          return () => ctx.revert();
        });

        mm.add("(max-width: 760px)", () => {
          const ctx = gsap.context(() => {
            gsap.from("[data-intro]", {
              y: 14,
              opacity: 0.84,
              duration: 0.5,
              stagger: 0.055,
              ease: "power3.out",
            });

            gsap.from(".signal-module", {
              x: 18,
              autoAlpha: 0.82,
              duration: 0.55,
              stagger: 0.06,
              ease: "power3.out",
              delay: 0.18,
            });

            gsap.from(".mobile-command-dock", {
              y: 34,
              autoAlpha: 0,
              duration: 0.7,
              ease: "power3.out",
              delay: 0.28,
            });

            gsap.utils.toArray<HTMLElement>(".project-story, .stack-lab, .proof-chain article, .profile-console, .timeline-item, .contact-band").forEach((item) => {
              gsap.fromTo(
                item,
                { y: 32, autoAlpha: 0.78, scale: 0.992 },
                {
                  y: 0,
                  autoAlpha: 1,
                  scale: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: item,
                    start: "top 94%",
                    end: "top 70%",
                    scrub: 0.7,
                  },
                },
              );
            });

            gsap.utils.toArray<HTMLElement>(".story-visual, .stack-core").forEach((item) => {
              gsap.fromTo(
                item,
                { yPercent: 2 },
                {
                  yPercent: -2,
                  ease: "none",
                  scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                  },
                },
              );
            });

            gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((item) => {
              gsap.fromTo(
                item,
                { y: 24, autoAlpha: 0.82 },
                {
                  y: 0,
                  autoAlpha: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: item,
                    start: "top 94%",
                    end: "top 76%",
                    scrub: 0.65,
                  },
                },
              );
            });

            countSignals();
          });

          return () => ctx.revert();
        });

        mm.add("(pointer: fine)", () => {
          const magneticItems = document.querySelectorAll<HTMLElement>("[data-magnetic]");
          const signalItems = document.querySelectorAll<HTMLElement>(".signal-module");
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
          const onSignalMove = (event: PointerEvent) => {
            const item = event.currentTarget as HTMLElement;
            const rect = item.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;
            gsap.to(item, {
              rotateX: y * -8,
              rotateY: x * 10,
              y: -4,
              duration: 0.32,
              ease: "power3.out",
            });
          };
          const onSignalLeave = (event: PointerEvent) => {
            gsap.to(event.currentTarget, {
              rotateX: 0,
              rotateY: 0,
              y: 0,
              duration: 0.55,
              ease: "elastic.out(1, 0.42)",
            });
          };
          magneticItems.forEach((item) => {
            item.addEventListener("pointermove", onPointerMove);
            item.addEventListener("pointerleave", onPointerLeave);
          });
          signalItems.forEach((item) => {
            item.addEventListener("pointermove", onSignalMove);
            item.addEventListener("pointerleave", onSignalLeave);
          });

          return () => {
            magneticItems.forEach((item) => {
              item.removeEventListener("pointermove", onPointerMove);
              item.removeEventListener("pointerleave", onPointerLeave);
            });
            signalItems.forEach((item) => {
              item.removeEventListener("pointermove", onSignalMove);
              item.removeEventListener("pointerleave", onSignalLeave);
            });
          };
        });

        gsapCleanup = () => {
          mm.revert();
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
