import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oro Puro - Home Official" },
      {
        name: "description",
        content:
          "Gold refining in Zambia by Oro Puro Gold Refinery. Experts in doré refining, gold assaying, bullion production, precious stones verification, and responsible gold processing for regional and international clients.",
      },
      { property: "og:title", content: "Oro Puro - Home Official" },
      {
        property: "og:description",
        content:
          "Gold refining in Zambia by Oro Puro Gold Refinery. Experts in doré refining, gold assaying, bullion production, precious stones verification, and responsible gold processing.",
      },
      { property: "og:image", content: "/assets/images/slider/hero-Img-1.png" },
    ],
  }),
  component: Home,
});

const LOGO = "/assets/images/logo.png";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#values", label: "Core Values" },
  { href: "#partners", label: "Partners" },
  { href: "#contact", label: "Contact" },
];

const SLIDES = [
  {
    n: "01",
    eyebrow: "GOLD REFINING IN LUSAKA, ZAMBIA",
    titleHtml: (
      <>
        Integrity. <span className="text-gradient-gold italic">Precision.</span>
        <br /> Refined Excellence
        <br /> In Every Bar
      </>
    ),
    cta: { label: "Explore Our Services", href: "#services" },
    image: "/assets/images/slider/hero-Img-1.png",
  },
  {
    n: "02",
    eyebrow: "WORLD-CLASS GOLD PROCESSING",
    titleHtml: (
      <>
        From Raw Gold <span className="text-gradient-gold italic">To</span>
        <br /> High-Purity Bullion
        <br /> You Can Trust
      </>
    ),
    cta: { label: "Get in Touch", href: "#contact" },
    image: "/assets/images/slider/hero-Img-2.png",
  },
];

const SERVICES = [
  {
    n: "01",
    title: "Gold Refining",
    desc: "Professional refining of doré and raw gold into high-purity semi-processed bullion that meets international quality and compliance standards.",
    icon: "/assets/images/service/icon_img-1.png",
  },
  {
    n: "02",
    title: "Assaying & Analysis",
    desc: "Accurate gold and precious metal testing using advanced laboratory techniques to determine purity and composition.",
    icon: "/assets/images/service/icon_img-2.png",
  },
  {
    n: "03",
    title: "Bullion Production (Coming Soon)",
    desc: "Production of refined gold bars for investment, commercial, and institutional clients in local and global markets.",
    icon: "/assets/images/service/icon_img-3.png",
  },
  {
    n: "04",
    title: "Precious Stones Verification",
    desc: "Professional verification and certification of precious stones and base metals with transparency and integrity.",
    icon: "/assets/images/service/icon_img-4.png",
  },
  {
    n: "05",
    title: "Quality Control",
    desc: "Rigorous quality assurance processes ensuring precision, traceability, and international-grade compliance.",
    icon: "/assets/images/service/icon_img-5.png",
  },
  {
    n: "06",
    title: "Responsible Gold Processing",
    desc: "Supporting compliant, traceable, and ethically sourced gold supply while protecting people and the environment.",
    icon: "/assets/images/service/inner-icon-6.png",
  },
];

const VALUE_CARDS = [
  {
    k: "Our Vision",
    v: "To be a leading gold refinery in Southern Africa, recognized for uncompromising integrity, precision, and refined excellence.",
  },
  {
    k: "Our Mission",
    v: "To deliver world-class gold refining services through advanced technology, ethical sourcing, and rigorous quality control, supporting Zambia’s mining industry and global precious metals markets.",
  },
  {
    k: "Core Values",
    v: "Integrity, precision, accountability, and refined excellence guide every gram we process and every relationship we build.",
  },
];

const MARQUEE_ITEMS = [
  "GOLD REFINING",
  "ASSAYING & CERTIFICATION",
  "BULLION PRODUCTION",
  "RESPONSIBLE SOURCING",
  "PRECIOUS STONES VERIFICATION",
  "QUALITY CONTROL",
];

const COUNTERS = [
  { v: 85, suffix: "%", label: "LICENSED MINING COMPANIES" },
  { v: 25, suffix: "%", label: "ASM MINERS" },
  { v: 40, suffix: "%", label: "FINANCIAL INSTITUTIONS & BULLION BUYERS" },
  { v: 65, suffix: "%", label: "GOLD TRADERS & EXPORTERS" },
];

const GALLERY = [
  { src: "/assets/images/resource/gallery-1.jpg", eyebrow: "Gold Refining", title: "Advanced Gold Processing Facility", span: "lg" },
  { src: "/assets/images/resource/gallery-2.jpg", eyebrow: "Assaying & Testing", title: "Precision Laboratory Analysis" },
  { src: "/assets/images/resource/gallery-3.jpg", eyebrow: "Bullion Production", title: "High-Purity Gold Bars" },
  { src: "/assets/images/resource/gallery-4.jpg", eyebrow: "Responsible Processing", title: "Ethical & Traceable Gold Supply", span: "wide" },
];

const PARTNERS = [
  { src: "/assets/images/brand/1.png", alt: "Jigwe Mining" },
  { src: "/assets/images/brand/2.png", alt: "Kairos" },
  { src: "/assets/images/brand/3.png", alt: "ZCCM" },
  { src: "/assets/images/brand/4.png", alt: "Access Bank" },
];

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-noir-grain min-h-screen text-foreground overflow-x-hidden">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/85 backdrop-blur-lg border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3" title="Oro Puro">
            <img src={LOGO} alt="Oro Puro Logo" className="h-10 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[12.5px] uppercase tracking-[0.18em] font-medium text-foreground/80 hover:text-gold transition-colors relative group"
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#book" className="btn-gold hidden md:inline-flex">
              Book Refinery Service <span aria-hidden>→</span>
            </a>
            <button
              className="lg:hidden w-10 h-10 grid place-items-center border border-border rounded"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
            >
              <span className="text-gold text-xl">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
            <div className="px-6 py-4 flex flex-col gap-3">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-[0.18em] py-2 border-b border-border/50 text-foreground/85 hover:text-gold"
                >
                  {n.label}
                </a>
              ))}
              <a href="#book" className="btn-gold mt-2 justify-center">
                Book Refinery Service →
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SLIDER */}
      <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(13,13,13,0.96) 0%, rgba(13,13,13,0.78) 45%, rgba(13,13,13,0.55) 100%), url('/assets/images/slider/home-7-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.06] mix-blend-screen"
          style={{
            backgroundImage: "radial-gradient(rgba(240,215,140,0.4) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center w-full relative">
          <div className="lg:col-span-7 relative">
            {SLIDES.map((s, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  i === slide ? "opacity-100 translate-y-0 relative" : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                }`}
              >
                <span className="eyebrow">{s.eyebrow}</span>
                <h1 className="mt-6 font-display font-black leading-[0.98] tracking-tight text-4xl md:text-6xl lg:text-[4.75rem]">
                  {s.titleHtml}
                </h1>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a href={s.cta.href} className="btn-gold">
                    {s.cta.label} <span aria-hidden>→</span>
                  </a>
                  <a href="#about" className="btn-ghost-gold">
                    About Oro Puro
                  </a>
                </div>
              </div>
            ))}

            <div className="mt-12 flex items-center gap-5">
              <span className="font-display text-5xl font-black text-gradient-gold">
                {SLIDES[slide].n}
              </span>
              <div className="flex-1 max-w-[160px] h-px bg-border relative overflow-hidden">
                <div
                  key={slide}
                  className="absolute inset-y-0 left-0 bg-gold"
                  style={{ animation: "slideBar 6.5s linear forwards" }}
                />
              </div>
              <div className="flex gap-2">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => setSlide(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === slide ? "bg-gold scale-110" : "bg-foreground/25 hover:bg-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </div>
            <style>{`@keyframes slideBar { from { width: 0% } to { width: 100% } }`}</style>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative aspect-[4/5] border border-gold/40 overflow-hidden">
              {SLIDES.map((s, i) => (
                <img
                  key={i}
                  src={s.image}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === slide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute -bottom-6 -left-6 bg-background border border-gold/50 px-5 py-4 max-w-[220px]">
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Refined</div>
                <div className="mt-1 font-display text-2xl font-bold">Au 999.9</div>
                <div className="text-xs text-foreground/60">High-purity standard</div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-gold/60 rotate-12" />
            </div>
          </div>
        </div>

        <div className="absolute right-6 bottom-8 hidden md:flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-foreground/60">
          <span>Follow Us</span>
          <span className="w-px h-10 bg-foreground/30" />
          <a href="#" aria-label="Facebook" className="hover:text-gold">FB</a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gold">IN</a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 relative border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow">About Oro Puro</span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Integrity & Precision <br />
              In Every <span className="text-gradient-gold italic">Process</span>
            </h2>
            <p className="mt-6 text-foreground/75 leading-relaxed">
              Oro Puro Gold Refinery is a Zambian-based gold refining company
              headquartered in Lusaka, specializing in the processing and purification
              of gold to the highest international standards. As a subsidiary of Jigwe
              Mining, we transform responsibly sourced gold into high-purity refined
              products for local and global markets.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#services" className="btn-gold">Read More <span aria-hidden>→</span></a>
              <a href="#contact" className="btn-ghost-gold">Contact Us</a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[5/4] border border-gold/40 overflow-hidden">
              <img
                src="/assets/images/about/hom-3-ab.jpg"
                alt="Oro Puro refinery"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-4 bg-card border border-gold/50 px-6 py-5">
              <div className="font-display text-2xl font-bold leading-tight">
                Refined<br />Excellence
              </div>
              <div className="hairline-gold mt-3 w-16" />
            </div>
          </div>
        </div>

        {/* Vision / Mission / Values cards */}
        <div id="values" className="max-w-7xl mx-auto px-6 lg:px-10 mt-20 grid md:grid-cols-3 gap-6">
          {VALUE_CARDS.map((v, i) => (
            <article
              key={v.k}
              className="relative border border-gold/30 bg-card/60 backdrop-blur p-8 hover:border-gold/70 transition-colors group"
            >
              <div className="text-gold/40 font-display font-black text-5xl">0{i + 1}</div>
              <h3 className="mt-3 font-display text-2xl font-bold text-gradient-gold">{v.k}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{v.v}</p>
              <img
                src="/assets/images/fav-icon/icon.png"
                alt=""
                aria-hidden
                className="absolute top-6 right-6 w-10 opacity-30 group-hover:opacity-60 transition-opacity"
              />
            </article>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border bg-background overflow-hidden py-6">
        <div className="flex gap-12 animate-[marquee_40s_linear_infinite] whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((m, i) => (
            <span
              key={i}
              className="font-display text-3xl md:text-5xl font-extrabold text-foreground/15 tracking-tight inline-flex items-center gap-12"
            >
              · {m} <span className="text-gold">★</span>
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </div>

      {/* GALLERY */}
      <section id="operations" className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow">Operations</span>
              <h2 className="mt-5 font-display text-4xl md:text-5xl font-bold leading-[1.05]">
                Inside the <span className="text-gradient-gold italic">refinery.</span>
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-5">
            <GalleryCard className="lg:col-span-5 aspect-[4/5]" item={GALLERY[0]} />
            <div className="lg:col-span-7 grid grid-cols-2 gap-5">
              <GalleryCard className="aspect-square" item={GALLERY[1]} />
              <GalleryCard className="aspect-square" item={GALLERY[2]} />
              <GalleryCard className="col-span-2 aspect-[16/7]" item={GALLERY[3]} />
            </div>
          </div>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="py-20 border-y border-border relative"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(13,13,13,0.92), rgba(13,13,13,0.96)), url('/assets/images/about/hom-3-ab-bg.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {COUNTERS.map((c) => (
            <div key={c.label} className="bg-background/80 backdrop-blur p-8">
              <Counter to={c.v} suffix={c.suffix} />
              <div className="hairline-gold w-12 my-4" />
              <div className="text-[11px] uppercase tracking-[0.22em] text-foreground/70 leading-relaxed">
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="eyebrow">Our Services</span>
              <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
                Comprehensive Gold<br />
                <span className="text-gradient-gold italic">Refining Solutions</span>
              </h2>
            </div>
            <a href="#contact" className="btn-gold self-start lg:self-end">
              Enquire Now <span aria-hidden>→</span>
            </a>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 border border-border">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="group bg-background p-8 lg:p-10 relative transition-colors duration-300 hover:bg-card"
              >
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-full border border-gold/40 grid place-items-center bg-card/40 group-hover:border-gold transition-colors">
                    <img src={s.icon} alt="" className="w-7 h-7 object-contain" />
                  </div>
                  <span className="text-gradient-gold font-display font-extrabold text-2xl tracking-tight">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-4 text-sm text-foreground/65 leading-relaxed">{s.desc}</p>
                <div className="hairline-gold mt-8 opacity-40 group-hover:opacity-100 transition-opacity" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COO MESSAGE */}
      <section id="coo-message" className="py-28 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] border border-gold/40 overflow-hidden">
              <img
                src="/assets/images/portfolio/cascading-1.jpg"
                alt="COO - Oro Puro Gold Refinery"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background via-background/60 to-transparent p-6">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Leadership</div>
                <div className="font-display text-xl font-bold mt-1">Brendon Carl Wiggill</div>
                <div className="text-sm text-foreground/70">Chief Operating Officer</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="eyebrow">Message from the COO</span>
            <h2 className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1]">
              Experience. Integrity.<br />
              <span className="text-gradient-gold italic">Authenticity in Gold Trade.</span>
            </h2>
            <p className="mt-6 text-foreground/75 leading-relaxed">
              As a fourth-generation gold miner with over 25 years of experience in the
              industry, my journey has been rooted in hands-on mining operations, with
              a strong emphasis on final reduction processes. Over the years, we have
              designed, built, and optimised numerous CIP plants across Southern
              Africa, supporting efficient and responsible gold recovery.
            </p>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              At Oro Puro Gold Refinery, we are deeply committed to authenticity in
              the gold trade. The precious metals industry has increasingly faced
              challenges related to fraud and gold scams. Our mission is to help curb
              these practices by promoting transparency, rigorous verification, and
              ethical refining standards. Through precision assaying, certified
              refining, and responsible sourcing, we ensure that every transaction is
              built on trust and integrity.
            </p>
            <div className="mt-8">
              <a href="#contact" className="btn-gold">Partner With Oro Puro <span aria-hidden>→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="eyebrow justify-center">Partners</span>
            <h2 className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-gradient-gold italic">Trusted</span> by Mining, Financial<br className="hidden md:block" /> & Global Trade Partners
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {PARTNERS.map((p) => (
              <div key={p.alt} className="bg-background aspect-[3/2] flex items-center justify-center p-8">
                <img
                  src={p.src}
                  alt={p.alt}
                  className="max-h-16 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 border-t border-border relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #c9a84c 0%, transparent 65%)" }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <span className="eyebrow">Get in Touch</span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl font-bold leading-[1.05]">
              Contact Our Support Team<br />
              <span className="text-gradient-gold italic">To Grow Your Business</span>
            </h2>

            <ul className="mt-10 space-y-5">
              {[
                ["Address", "Chamba Valley, Zambia"],
                ["Phone", "+260 968324831"],
                ["Email", "info@oropuro.co.zm"],
                ["Website", "www.oropuro.co.zm"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-start gap-5 border-b border-border pb-4">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold w-20 pt-1">{k}</div>
                  <div className="font-display text-lg text-foreground">{v}</div>
                </li>
              ))}
            </ul>
          </div>

          <BookingForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-ink">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <img src={LOGO} alt="Oro Puro Logo" className="h-12 w-auto" />
            <p className="mt-5 text-sm text-foreground/60 max-w-sm leading-relaxed">
              Oro Puro Gold Refinery is a Zambian-based gold refining company
              headquartered in Lusaka, delivering high-purity refined products
              through integrity, precision, and rigorous quality control.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Facebook" className="w-10 h-10 grid place-items-center border border-border hover:border-gold hover:text-gold transition-colors text-foreground/70 text-sm">FB</a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 grid place-items-center border border-border hover:border-gold hover:text-gold transition-colors text-foreground/70 text-sm">IN</a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Get In Touch</div>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>+260 968324831</li>
              <li>info@oropuro.co.zm</li>
              <li>Chamba Valley, Zambia</li>
              <li>www.oropuro.co.zm</li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Newsletter</div>
            <p className="text-sm text-foreground/70 mb-4">Subscribe for Updates</p>
            <form
              action="https://formspree.io/f/myyleorq"
              method="POST"
              className="flex border border-border focus-within:border-gold"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Your E-mail"
                className="flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-foreground/40"
              />
              <button className="btn-gold !rounded-none" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground/50">
            <div>© Copyright Oro Puro. All Rights Reserved.</div>
            <div className="tracking-[0.3em] uppercase">Au · 999.9 · Lusaka, Zambia</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function GalleryCard({ item, className = "" }: { item: (typeof GALLERY)[number]; className?: string }) {
  return (
    <figure className={`relative group overflow-hidden border border-border ${className}`}>
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
      <figcaption className="absolute bottom-0 inset-x-0 p-6">
        <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{item.eyebrow}</div>
        <div className="font-display text-xl md:text-2xl font-bold mt-1">{item.title}</div>
      </figcaption>
    </figure>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const dur = 1400;
            const t0 = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - t0) / dur);
              setV(Math.round(p * to));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return (
    <div ref={ref} className="font-display font-black text-5xl md:text-6xl text-gradient-gold leading-none">
      {v}
      {suffix}
    </div>
  );
}

function BookingForm() {
  const [status, setStatus] = useState("");
  return (
    <form
      id="book"
      className="lg:col-span-7 bg-card border border-border p-8 lg:p-10"
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("Thank you — your booking request has been received. We will contact you shortly.");
        (e.currentTarget as HTMLFormElement).reset();
      }}
    >
      <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Book Refinery Service</div>
      <h3 className="font-display text-2xl md:text-3xl font-bold mt-2">
        Schedule Gold Refining<br className="hidden md:block" /> or Assaying Services
      </h3>

      <div className="mt-8 grid sm:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" required placeholder="e.g., John Banda" />
        <Field label="Email Address" name="email" type="email" required placeholder="e.g., john@company.com" />
        <Field label="Company / Organization" name="company" placeholder="e.g., ABC Mining Ltd" />
        <Field label="Phone Number" name="phone" type="tel" placeholder="e.g., +260 9xx xxx xxx" />
      </div>
      <div className="mt-5">
        <Field label="Subject" name="subject" placeholder="e.g., Refining enquiry / Assay request" />
      </div>
      <div className="mt-5">
        <Field
          label="Service"
          name="service"
          as="select"
          required
          options={[
            "Gold Refining",
            "Assaying & Analysis",
            "Bullion Production",
            "Precious Stones Verification",
            "Quality Control",
            "Responsible Gold Processing",
          ]}
        />
      </div>
      <div className="mt-5 grid sm:grid-cols-2 gap-5">
        <Field label="Preferred Date" name="preferred_date" type="date" />
        <Field label="Preferred Time" name="preferred_time" type="time" />
      </div>
      <div className="mt-5">
        <Field
          label="Message"
          name="message"
          as="textarea"
          placeholder="Provide details (material type, estimated quantity, certification needs, timelines)"
        />
      </div>

      <div className="mt-8 flex items-center justify-between gap-6 flex-wrap">
        <p className="text-xs text-gold/90 max-w-xs">{status}</p>
        <button type="submit" className="btn-gold">
          Submit Booking Request <span aria-hidden>→</span>
        </button>
      </div>
    </form>
  );
}

function Field({
  label, name, type = "text", required, placeholder, as, options,
}: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string;
  as?: "select" | "textarea"; options?: string[];
}) {
  const base =
    "w-full bg-background border border-border focus:border-gold focus:outline-none px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 transition-colors";
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-[0.25em] text-gold/90 mb-2">
        {label}{required && " *"}
      </span>
      {as === "select" ? (
        <select name={name} required={required} className={base} defaultValue="">
          <option value="" disabled>Select Service</option>
          {options?.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : as === "textarea" ? (
        <textarea name={name} rows={5} className={base} placeholder={placeholder} />
      ) : (
        <input name={name} type={type} required={required} className={base} placeholder={placeholder} />
      )}
    </label>
  );
}
