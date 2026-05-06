const footer = document.getElementById("footer");

if (footer) {
  const year = new Date().getFullYear();

  footer.innerHTML = `
    <footer class="relative overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486286701208-1d58e9338013?auto=format&fit=crop&w=1600&q=80"
          alt="Football field background"
          loading="lazy"
          decoding="async"
          class="h-full w-full object-cover"
        />
        <div class="absolute inset-0 bg-[#000]/50"></div>
      </div>

      <div class="relative border-t border-white/10">
        <div class="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 sm:pt-20 lg:px-8">
          <div class="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div class="lg:col-span-5" data-aos="fade-up" data-aos-duration="800">
              <a href="./index.html" class="inline-flex items-center gap-3">
                <span class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#115631] text-white shadow-lg">
                  <i class="fa-solid fa-futbol"></i>
                </span>
                <div>
                  <p class="text-lg font-extrabold leading-tight text-white">Saleem Football Field</p>
                  <p class="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100/70">
                    Friendly Football Space
                  </p>
                </div>
              </a>

              <p class="mt-4 max-w-md text-sm leading-7 text-emerald-50/80 sm:text-base">
                A simple and welcoming place to enjoy football, book casual matches, join training sessions, and spend
                quality time on the field with friends and teammates.
              </p>

              <div class="mt-5 flex flex-wrap gap-2">
                <span class="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur-sm">
                  Easy Booking
                </span>
                <span class="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur-sm">
                  Friendly Atmosphere
                </span>
              </div>
            </div>

            <div class="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800">
              <div>
                <p class="text-sm font-extrabold tracking-wide text-white">Quick Links</p>
                <ul class="mt-4 space-y-3 text-sm text-emerald-50/75">
                  <li><a class="transition text-emerald-50/75 hover:text-white" href="./index.html">Home</a></li>
                  <li><a class="transition text-emerald-50/75 hover:text-white" href="#stats">Why Choose Us</a></li>
                  <li><a class="transition text-emerald-50/75 hover:text-white" href="#">What We Offer</a></li>
                  <li><a class="transition text-emerald-50/75 hover:text-white" href="#">FAQ</a></li>
                  <li><a class="transition text-emerald-50/75 hover:text-white" href="#contact-section">Book Now</a></li>
                </ul>
              </div>

              <div>
                <p class="text-sm font-extrabold tracking-wide text-white">Our Services</p>
                <ul class="mt-4 space-y-3 text-sm text-emerald-50/75">
                  <li>Casual Match Booking</li>
                  <li>Training Sessions</li>
                  <li>Group Play Time</li>
                  <li>Friendly Football Environment</li>
                  <li>Easy Schedule Support</li>
                </ul>
              </div>

              <div class="sm:col-span-2 lg:col-span-1">
                <p class="text-sm font-extrabold tracking-wide text-white">Contact</p>

                <div class="mt-4 space-y-3 text-sm text-emerald-50/75">
                  <div class="flex items-start gap-3">
                    <span class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm">
                      <i class="fa-solid fa-location-dot"></i>
                    </span>
                    <p class="leading-relaxed">
                      Saleem Football Field<br />
                      Your local football destination
                    </p>
                  </div>

                  <a href="tel:+920000000000" class="flex items-center gap-3 transition hover:text-white">
                    <span class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm">
                      <i class="fa-solid fa-phone"></i>
                    </span>
                    <span class="text-emerald-50/75">+92 000 0000000</span>
                  </a>

                  <a href="mailto:info@saleemfootballfield.com" class="flex items-center gap-3 transition hover:text-white">
                    <span class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm">
                      <i class="fa-solid fa-envelope"></i>
                    </span>
                    <span class="text-emerald-50/75">info@saleemfootballfield.com</span>
                  </a>
                </div>

                <div class="mt-5 flex items-center gap-2">
                  <a
                    href="#"
                    class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white/85 backdrop-blur-sm transition hover:bg-white hover:text-[#115631]"
                    aria-label="Facebook"
                  >
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white/85 backdrop-blur-sm transition hover:bg-white hover:text-[#115631]"
                    aria-label="Instagram"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white/85 backdrop-blur-sm transition hover:bg-white hover:text-[#115631]"
                    aria-label="YouTube"
                  >
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-10 border-t border-white/10 pt-8">
            <div class="flex items-center justify-center text-center">
              <p class="text-xs text-emerald-50/65">
                &copy; ${year} Saleem Football Field. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
}
