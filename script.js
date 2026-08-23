(function () {
  "use strict";

  const content = window.portfolioContent;
  const state = {
    language: "en",
    lastFocusedElement: null
  };

  const getCopy = (root, path) => path.split(".").reduce((value, key) => value && value[key], root);

  const renderCapabilities = (locale) => {
    const list = document.querySelector("#capabilities-list");
    list.innerHTML = locale.capabilities.items
      .map(
        (item) => `
          <article class="capability-row">
            <div class="capability-number" aria-hidden="true">${item.number}</div>
            <div>
              <h3>${item.title}</h3>
              <p>${item.body}</p>
              <p class="capability-flow"><strong>${item.flowLabel}</strong><span>${item.flow}</span></p>
              <p class="capability-example"><strong>${item.exampleLabel}</strong>${item.example}</p>
            </div>
          </article>
        `
      )
      .join("");
  };

  const renderAgentDiagram = (diagram) => `
    <div class="agent-diagram" role="img" aria-label="${diagram.brief} to ${diagram.review} workflow">
      <div class="flow-column">
        <div class="flow-node">${diagram.brief}</div>
        <div class="flow-arrow" aria-hidden="true">↓</div>
        <div class="flow-node">${diagram.search}</div>
        <div class="flow-arrow" aria-hidden="true">↓</div>
        <div class="flow-node">${diagram.quality}</div>
        <div class="flow-branch">
          <div class="flow-question">${diagram.weak}</div>
          <div class="flow-branch-path">
            <span>${diagram.yes}</span>
            <strong>${diagram.retry}</strong>
          </div>
          <div class="flow-branch-path">
            <span>${diagram.no}</span>
            <strong>${diagram.continue}</strong>
          </div>
        </div>
        <div class="flow-node">${diagram.previous}</div>
        <div class="flow-arrow" aria-hidden="true">↓</div>
        <div class="flow-node">${diagram.remove}</div>
        <div class="flow-arrow" aria-hidden="true">↓</div>
        <div class="flow-node">${diagram.draft}</div>
        <div class="flow-arrow" aria-hidden="true">↓</div>
        <div class="flow-node flow-node--final">${diagram.review}</div>
      </div>
    </div>
  `;

  const renderInteractiveMedia = (item, locale) => `
    <figure class="project-media project-media--interactive">
      <div class="interactive-build-card project-media-frame project-media-frame--interactive-frame">
        <div class="interactive-build-card-header">
          <span>${item.label}</span>
          <span class="accent">${locale.hero.gameAction}</span>
        </div>
        <div class="project-game-shell game-shell" data-game-shell>
          <img class="game-fallback-image" src="${item.asset}" alt="" width="1145" height="987" aria-hidden="true" />
          <iframe
            class="game-iframe"
            src="https://patbehar.github.io/QuantChaos/"
            title="${locale.hero.gameFrameTitle}"
            loading="lazy"
            allow="fullscreen"
            allowfullscreen
            sandbox="allow-scripts allow-same-origin allow-pointer-lock"
            referrerpolicy="no-referrer"
            tabindex="-1"
          ></iframe>
          <button class="game-activation" type="button" data-game-activate>
            <span class="game-activation-mark" aria-hidden="true">↗</span>
            <span>${locale.hero.gameActivation}</span>
          </button>
        </div>
        <button class="mobile-game-launcher" type="button" data-game-open aria-haspopup="dialog">
          <img src="${item.asset}" alt="" width="1145" height="987" aria-hidden="true" />
          <span class="mobile-game-overlay">
            <span class="mobile-game-title">${locale.hero.mobileCta}</span>
            <span class="mobile-game-hint">${locale.hero.mobileHint}</span>
          </span>
        </button>
      </div>
      <figcaption class="media-note">${item.mediaNote}</figcaption>
      <div class="interactive-build-actions">
        <button class="game-modal-trigger text-link" type="button" data-game-open>${locale.hero.fullscreenCta}</button>
      </div>
    </figure>
  `;

  const renderProjectMedia = (item, locale) => {
    if (item.interactive) return renderInteractiveMedia(item, locale);

    if (item.asset) {
      const dimensions = item.asset.includes("quantummedia-reference")
        ? 'width="1280" height="720"'
        : 'width="1280" height="900"';
      return `
        <figure class="project-media">
          <div class="project-media-frame project-media-frame--screenshot">
            <div class="browser-bar" aria-hidden="true"><span></span><span></span><span></span></div>
            <img src="${item.asset}" alt="${item.alt}" ${dimensions} loading="lazy" />
          </div>
          <figcaption class="media-note">${item.mediaNote}</figcaption>
        </figure>
      `;
    }

    return `
      <figure class="project-media project-media--diagram">
        <div class="project-media-frame project-media-frame--diagram">
          ${renderAgentDiagram(locale.projects.diagram)}
        </div>
        <figcaption class="media-note">${item.mediaNote}</figcaption>
      </figure>
    `;
  };

  const renderProjects = (locale) => {
    const list = document.querySelector("#projects-list");
    list.innerHTML = locale.projects.items
      .map(
        (item, index) => `
          <article class="project-feature${index % 2 ? " project-feature--reverse" : ""}" data-project="${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}">
            <div class="project-copy">
              <p class="project-number" aria-hidden="true">${item.number}</p>
              <p class="project-label">${item.label}</p>
              <h3 class="${item.title === "QuantumMedia" ? "project-title-quantummedia" : ""}">${item.title}</h3>
              <p class="project-body">${item.body}</p>
              ${item.bodyTwo ? `<p class="project-body-two">${item.bodyTwo}</p>` : ""}
              <div class="project-stack">
                <strong>${item.stackLabel}</strong>
                <span>${item.stack}</span>
              </div>
              ${item.link && !item.interactive ? `<a class="project-link" href="${item.link}" target="_blank" rel="noopener noreferrer">${item.linkLabel}</a>` : ""}
            </div>
            ${renderProjectMedia(item, locale)}
          </article>
        `
      )
      .join("");
  };

  const renderMethod = (locale) => {
    const list = document.querySelector("#method-list");
    list.innerHTML = locale.method.items
      .map(
        (item) => `
          <li class="method-item">
            <span class="method-number" aria-hidden="true">${item.number}</span>
            <h3 class="method-title">${item.title}</h3>
            <div class="method-copy"><strong>${item.headline}</strong><p>${item.body}</p></div>
          </li>
        `
      )
      .join("");
  };

  const renderProof = (locale) => {
    const grid = document.querySelector("#proof-grid");
    grid.innerHTML = locale.proof.items
      .map(
        (item) => `
          <article class="proof-item">
            <span class="proof-value">${item.value}</span>
            <span class="proof-unit">${item.unit || "&nbsp;"}</span>
            <p class="proof-label">${item.label}</p>
          </article>
        `
      )
      .join("");
  };

  const renderLearning = (locale) => {
    const list = document.querySelector("#learning-list");
    list.innerHTML = locale.learning.items
      .map(
        (item) => `
          <article class="learning-item">
            <h3 class="learning-name">${item.name}</h3>
            <p class="learning-detail">${item.detail}</p>
          </article>
        `
      )
      .join("");
  };

  const renderBring = (locale) => {
    const list = document.querySelector("#bring-list");
    list.innerHTML = locale.bring.items
      .map(
        (item) => `
          <div class="bring-item">
            <span class="bring-number" aria-hidden="true">${item.number}</span>
            <p>${item.title}</p>
          </div>
        `
      )
      .join("");
  };

  const applyLanguage = (language) => {
    const locale = content[language] || content.en;
    state.language = content[language] ? language : "en";
    document.documentElement.lang = state.language;

    document.querySelectorAll("[data-copy]").forEach((element) => {
      const value = getCopy(locale, element.dataset.copy);
      if (typeof value === "string") element.textContent = value;
    });

    document.querySelectorAll("[data-copy-html]").forEach((element) => {
      const value = getCopy(locale, element.dataset.copyHtml);
      if (typeof value === "string") element.innerHTML = value;
    });

    renderCapabilities(locale);
    renderProjects(locale);
    renderMethod(locale);
    renderLearning(locale);
    renderBring(locale);

    const navToggle = document.querySelector("[data-nav-toggle]");
    const navOpen = document.querySelector("#site-nav").classList.contains("is-open");
    navToggle.setAttribute("aria-label", navOpen ? locale.nav.close : locale.nav.open);
    navToggle.querySelector("[data-copy]").textContent = navOpen ? locale.nav.close : locale.nav.open;

    document.querySelectorAll(".language-button").forEach((button) => {
      const active = button.dataset.language === state.language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    document.querySelector(".language-switch").setAttribute("aria-label", locale.nav.languageLabel);

    document.querySelectorAll(".game-iframe").forEach((frame) => {
      frame.title = locale.hero.gameFrameTitle;
    });
    document.querySelector(".modal-close").setAttribute("aria-label", locale.hero.closeGame);
  };

  const closeNav = () => {
    const nav = document.querySelector("#site-nav");
    const toggle = document.querySelector("[data-nav-toggle]");
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    const locale = content[state.language];
    toggle.setAttribute("aria-label", locale.nav.open);
    toggle.querySelector("[data-copy]").textContent = locale.nav.open;
  };

  const updateActiveNav = () => {
    const point = document.elementFromPoint(
      window.innerWidth / 2,
      Math.min(window.innerHeight * 0.58, window.innerHeight - 1)
    );
    const visibleSection = point?.closest(".stage, .project-stage, .project-feature");
    const projectSection = visibleSection?.closest(".projects-section");
    const sectionId = projectSection?.id || visibleSection?.id || "top";
    const navId =
      sectionId === "top"
        ? "top"
        : sectionId === "about" || sectionId === "learning" || sectionId === "what-i-bring"
          ? "about"
          : sectionId === "capabilities" || sectionId === "method" || sectionId === "projects"
            ? "projects"
            : sectionId === "contact"
              ? "contact"
              : null;

    document.querySelectorAll(".site-nav a").forEach((link) => {
      const active = navId && (link.dataset.navId === navId || link.getAttribute("href") === `#${navId}`);
      link.classList.toggle("is-active", Boolean(active));
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  };

  const initActiveNav = () => {
    let scheduled = false;
    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(() => {
        scheduled = false;
        updateActiveNav();
      });
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
  };

  const initCustomCursor = () => {
    const cursor = document.querySelector("[data-cursor]");
    if (!cursor || window.innerWidth <= 820 || !window.matchMedia("(pointer: fine)").matches) return;

    document.documentElement.classList.add("has-custom-cursor");
    let frame = 0;
    let x = -100;
    let y = -100;

    const render = () => {
      frame = 0;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      cursor.classList.add("is-visible");
    };

    const updatePosition = (event) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    document.addEventListener("pointermove", updatePosition, { passive: true });
    document.addEventListener("mousemove", updatePosition, { passive: true });

    document.addEventListener(
      "pointerover",
      (event) => {
        const target = event.target instanceof Element
          ? event.target.closest("a, button, .project-media-frame, .about-photo")
          : null;
        cursor.classList.toggle("is-hovering", Boolean(target));
      },
      { passive: true }
    );

    document.addEventListener(
      "pointerout",
      (event) => {
        if (!event.relatedTarget) cursor.classList.remove("is-visible");
      },
      { passive: true }
    );

    window.addEventListener("blur", () => cursor.classList.remove("is-visible"));
  };

  const openGameModal = () => {
    const modal = document.querySelector("[data-game-modal]");
    state.lastFocusedElement = document.activeElement;
    modal.hidden = false;
    document.querySelectorAll("body > *:not([data-game-modal])").forEach((element) => {
      element.inert = true;
    });
    document.body.classList.add("modal-open");
    document.querySelector(".modal-close").focus();
  };

  const closeGameModal = () => {
    const modal = document.querySelector("[data-game-modal]");
    modal.hidden = true;
    document.querySelectorAll("body > *:not([data-game-modal])").forEach((element) => {
      element.inert = false;
    });
    document.body.classList.remove("modal-open");
    if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === "function") {
      state.lastFocusedElement.focus();
    }
    state.lastFocusedElement = null;
  };

  const trapModalFocus = (event) => {
    const modal = document.querySelector("[data-game-modal]");
    if (modal.hidden || event.key !== "Tab") return;

    const focusable = Array.from(
      modal.querySelectorAll('button:not([disabled]), iframe, a[href], [tabindex]:not([tabindex="-1"])')
    ).filter((element) => !element.hidden && element.getClientRects().length > 0);
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!modal.contains(document.activeElement)) {
      event.preventDefault();
      first.focus();
    } else if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const initInteractions = () => {
    const navToggle = document.querySelector("[data-nav-toggle]");
    navToggle.addEventListener("click", () => {
      const nav = document.querySelector("#site-nav");
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      const locale = content[state.language];
      navToggle.setAttribute("aria-label", isOpen ? locale.nav.close : locale.nav.open);
      navToggle.querySelector("[data-copy]").textContent = isOpen ? locale.nav.close : locale.nav.open;
    });

    document.querySelectorAll(".site-nav a").forEach((link) => link.addEventListener("click", closeNav));

    document.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () => applyLanguage(button.dataset.language));
    });

    document.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) return;

      const activate = event.target.closest("[data-game-activate]");
      if (activate) {
        const gameShell = activate.closest("[data-game-shell]");
        const frame = gameShell?.querySelector(".game-iframe");
        if (gameShell && frame) {
          gameShell.classList.add("is-active");
          activate.hidden = true;
          frame.style.pointerEvents = "auto";
          frame.setAttribute("tabindex", "0");
          frame.focus();
        }
        return;
      }

      if (event.target.closest("[data-game-open]")) openGameModal();
    });

    document.querySelectorAll("[data-game-close]").forEach((element) => element.addEventListener("click", closeGameModal));

    document.addEventListener("keydown", (event) => {
      const modal = document.querySelector("[data-game-modal]");
      if (!modal.hidden) {
        if (event.key === "Escape") {
          closeGameModal();
          return;
        }
        trapModalFocus(event);
        return;
      }
      if (event.key === "Escape") {
        closeNav();
      }
    });
  };

  const initReveal = () => {
    if (!("IntersectionObserver" in window)) return;
    const targets = document.querySelectorAll(".stage, .project-stage, .project-feature");
    targets.forEach((target) => target.classList.add("reveal-ready"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.07 }
    );
    targets.forEach((target) => observer.observe(target));
  };

  applyLanguage(state.language);
  initInteractions();
  initReveal();
  initActiveNav();
  initCustomCursor();
})();
