const navbar = document.getElementById("navbar");

if (navbar) {
  navbar.innerHTML = `
    <header id="siteHeader" class="fixed inset-x-0 top-0 z-50">
      <div id="navContainer" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 transition-all duration-300">
        <div id="navBar" class="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-transparent px-4 py-3 transition-all duration-300 sm:px-6">
          <a href="index.html" class="inline-flex min-w-0 items-center gap-3">
            <span class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-lime-300 via-emerald-300 to-cyan-300 text-slate-950 shadow-lg shadow-emerald-950/30">
              <i class="fa-solid fa-futbol text-lg"></i>
            </span>
            <span class="min-w-0">
              <span class="block truncate text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-emerald-100/80">
                Football Arena
              </span>
              <span class="block truncate text-sm font-black uppercase tracking-[0.1em] text-white sm:text-lg">
                Saleem Football Field
              </span>
            </span>
          </a>

          <a
            href="#"
            id="ctaBtn"
            class="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-4 py-2.5 text-xs font-black uppercase tracking-[0.22em] text-slate-950 transition hover:bg-lime-200 sm:px-6 sm:text-sm"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  `;

  const navContainer = document.getElementById("navContainer");
  const navBar = document.getElementById("navBar");
  const ctaBtn = document.getElementById("ctaBtn");

  const setTopStyle = () => {
    if (navContainer) {
      navContainer.className =
        "mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 transition-all duration-300";
    }

    if (navBar) {
      navBar.className =
        "mt-4 flex items-center justify-between rounded-full border border-white/15 bg-slate-950/70 px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 sm:px-6";
    }

    if (ctaBtn) {
      ctaBtn.className =
        "inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-lime-300 to-cyan-300 px-4 py-2.5 text-xs font-black uppercase tracking-[0.22em] text-slate-950 transition hover:brightness-105 sm:px-6 sm:text-sm";
    }
  };

  const setScrolledStyle = () => {
    if (navContainer) {
      navContainer.className =
        "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 transition-all duration-300";
    }

    if (navBar) {
      navBar.className =
        "mt-3 flex items-center justify-between rounded-full border border-white/15 bg-slate-950/70 px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 sm:px-6";
    }

    if (ctaBtn) {
      ctaBtn.className =
        "inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-lime-300 to-cyan-300 px-4 py-2.5 text-xs font-black uppercase tracking-[0.22em] text-slate-950 transition hover:brightness-105 sm:px-6 sm:text-sm";
    }
  };

  const applyNavState = () => {
    if (window.scrollY <= 1) setTopStyle();
    else setScrolledStyle();
  };

  let ticking = false;

  const onScroll = () => {
    if (ticking) return;

    ticking = true;
    requestAnimationFrame(() => {
      applyNavState();
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  applyNavState();
}
