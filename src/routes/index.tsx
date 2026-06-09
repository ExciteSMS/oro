import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oro Puro — Gold Refinery in Zambia" },
      {
        name: "description",
        content:
          "Oro Puro Gold Refinery: doré refining, bullion production, assaying, and precious stones verification in Zambia. Responsible processing for regional and international clients.",
      },
      { property: "og:title", content: "Oro Puro — Gold Refinery in Zambia" },
      {
        property: "og:description",
        content:
          "Doré refining, bullion production, assaying, and precious stones verification — responsibly processed in Zambia.",
      },
      { property: "og:image", content: "/assets/images/slider/hero-Img-1.png" },
    ],
  }),
  component: Home,
});

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#values", label: "Core Values" },
  { href: "#partners", label: "Partners" },
  { href: "#contact", label: "Contact" },
];

const SERVICES = [
  {
    n: "01",
    title: "Gold Refining",
    desc: "Doré bar refining to 999.9 fineness using modern Miller and Aqua Regia processes.",
  },
  {
    n: "02",
    title: "Bullion Production",
    desc: "Investment-grade cast and minted bars with serialized assay certificates.",
  },
  {
    n: "03",
    title: "Assaying & Quality",
    desc: "Fire assay and XRF analysis from our in-house laboratory, calibrated to LBMA standards.",
  },
  {
    n: "04",
    title: "Precious Stones Verification",
    desc: "Authentication and grading of diamonds and coloured gemstones by certified gemologists.",
  },
  {
    n: "05",
    title: "Jewelry Manufacturing",
    desc: "Bespoke jewelry crafted from our own refined gold, designed in-house and finished by hand.",
  },
  {
    n: "06",
    title: "Responsible Processing",
    desc: "Conflict-free sourcing, mercury-free refining, and full chain-of-custody traceability.",
  },
];

const VALUES = [
  { k: "Integrity", v: "Transparent assays, sealed lots, audited chain of custody." },
  { k: "Precision", v: "Every gram accounted for — to four decimals of fineness." },
  { k: "Responsibility", v: "Zero-mercury process. Compliant with OECD due diligence." },
  { k: "Heritage", v: "A Zambian refinery built on craft, science, and trust." },
];

const STATS = [
  { v: "999.9", l: "Refined Fineness" },
  { v: "12+", l: "Years of Practice" },
  { v: "30 T", l: "Annual Capacity" },
  { v: "100%", l: "Traceable Sourcing" },
];

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div className="bg-noir-grain min-h-screen text-foreground">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-gold/60 flex items-center justify-center">
              <span className="text-gradient-gold font-display font-black text-lg">O</span>
            </div>
            <div className="leading-tight">
              <div className="font-display font-extrabold tracking-[0.2em] text-sm text-foreground">
                ORO PURO
              </div>
              <div className="text-[10px] tracking-[0.3em] text-gold/80 uppercase">
                Gold Refinery
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[13px] uppercase tracking-[0.18em] font-medium text-foreground/80 hover:text-gold transition-colors relative group"
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="btn-gold hidden md:inline-flex">
              Book Refinery
              <span aria-hidden>→</span>
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
              <a href="#contact" className="btn-gold mt-2 justify-center">
                Book Refinery →
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(13,13,13,0.96) 0%, rgba(13,13,13,0.72) 45%, rgba(13,13,13,0.4) 100%), url('/assets/images/slider/home-7-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.06] mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(rgba(240,215,140,0.4) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7">
            <span className="eyebrow">Zambia · Est. Refinery</span>
            <h1 className="mt-6 font-display font-black leading-[0.95] tracking-tight text-5xl md:text-7xl lg:text-[5.5rem]">
              Refining gold
              <br />
              with <span className="text-gradient-gold italic font-display">precision</span>
              <br />
              and integrity.
            </h1>
            <p className="mt-8 max-w-xl text-foreground/70 text-lg leading-relaxed">
              Oro Puro is a Zambian gold refinery delivering doré refining, bullion
              production, assaying, and precious stones verification — for regional
              miners and international clients alike.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-gold">
                Book Refinery Service <span aria-hidden>→</span>
              </a>
              <a href="#services" className="btn-ghost-gold">
                Explore Services
              </a>
            </div>

            <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 border border-border max-w-3xl">
              {STATS.map((s) => (
                <div key={s.l} className="bg-background px-5 py-6">
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-foreground/55">
                    {s.l}
                  </dt>
                  <dd className="mt-2 font-display text-3xl font-bold text-gradient-gold">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative aspect-[4/5] border border-gold/40">
              <img
                src="/assets/images/slider/hero-Img-1.png"
                alt="Refined gold bullion"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-background border border-gold/50 px-5 py-4 max-w-[220px]">
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                  Assay Mark
                </div>
                <div className="mt-1 font-display text-2xl font-bold">Au 999.9</div>
                <div className="text-xs text-foreground/60">LBMA-grade fineness</div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-gold/60 rotate-12" />
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-foreground/50 hover:text-gold flex items-center gap-2"
        >
          Scroll <span className="inline-block w-8 h-px bg-foreground/40" />
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/assets/images/about/about-1.jpg"
                alt="Inside the Oro Puro refinery"
                className="w-full h-full object-cover grayscale-[15%]"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "/assets/images/about/about-5.jpg";
                }}
              />
              <div className="absolute inset-0 ring-1 ring-gold/40" />
            </div>
            <div className="absolute -bottom-8 -right-4 bg-card border border-gold/40 px-6 py-5">
              <div className="font-display text-4xl font-extrabold text-gradient-gold">
                12+
              </div>
              <div className="text-xs uppercase tracking-[0.25em] text-foreground/60 mt-1">
                Years Refining
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="eyebrow">About Oro Puro</span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              A Zambian refinery built on{" "}
              <span className="text-gradient-gold italic">craft, science, and trust.</span>
            </h2>
            <p className="mt-6 text-foreground/75 leading-relaxed">
              From doré collection to delivered bullion, every step at Oro Puro is
              audited, sealed, and certified. Our refinery combines modern Aqua
              Regia and Miller-process techniques with rigorous assay control,
              producing investment-grade gold for banks, jewelers, and institutional
              buyers.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-6">
              {[
                ["LBMA-aligned assays", "Fire assay verified to four decimals."],
                ["Sealed chain of custody", "Tamper-evident transit from mine to vault."],
                ["Mercury-free process", "Environmentally responsible refining."],
                ["In-house gemology", "Certified verification of stones."],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-4">
                  <div className="mt-1 w-2 h-2 rotate-45 bg-gold shrink-0" />
                  <div>
                    <div className="font-display font-semibold text-foreground">{t}</div>
                    <div className="text-sm text-foreground/65 mt-1">{d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a href="#contact" className="btn-ghost-gold">
                Visit the Refinery →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 relative border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="eyebrow">What We Do</span>
              <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
                Six services. One <span className="text-gradient-gold">standard.</span>
              </h2>
            </div>
            <p className="text-foreground/65 max-w-md">
              Each service is delivered under sealed chain of custody, with assay
              certificates issued at every stage.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 border border-border">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="group bg-background p-8 lg:p-10 relative transition-colors duration-300 hover:bg-card"
              >
                <div className="flex items-start justify-between">
                  <span className="text-gradient-gold font-display font-extrabold text-2xl tracking-tight">
                    {s.n}
                  </span>
                  <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-6px] group-hover:translate-x-0 duration-300">
                    ↗
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-4 text-sm text-foreground/65 leading-relaxed">
                  {s.desc}
                </p>
                <div className="hairline-gold mt-8 opacity-40 group-hover:opacity-100 transition-opacity" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section
        id="values"
        className="py-28 relative border-t border-border"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(13,13,13,0.92), rgba(13,13,13,0.96)), url('/assets/images/about/hom-3-ab-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow justify-center">Core Values</span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              The four pillars of <span className="text-gradient-gold italic">Oro Puro.</span>
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <div
                key={v.k}
                className="relative border border-gold/30 bg-background/70 backdrop-blur p-8 hover:border-gold/70 transition-colors"
              >
                <div className="text-gold/40 font-display font-black text-5xl">
                  0{i + 1}
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-gradient-gold">
                  {v.k}
                </h3>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                  {v.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow">Trusted Partners</span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold">
                Working alongside institutions across three continents.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px bg-border border border-border">
            {[1, 2, 3, 4, 5, 6, 7, 8].slice(0, 6).map((i) => (
              <div
                key={i}
                className="bg-background aspect-[3/2] flex items-center justify-center p-6"
              >
                <img
                  src={`/assets/images/brand/brand-${i}.png`}
                  alt={`Partner ${i}`}
                  className="max-h-12 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
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
          style={{
            background:
              "radial-gradient(circle, #c9a84c 0%, transparent 65%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <span className="eyebrow">Get in touch</span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl font-bold leading-[1.05]">
              Book a refinery service or request an assay.
            </h2>
            <p className="mt-5 text-foreground/70 leading-relaxed">
              Send us the details of your lot and our team will respond within one
              business day with logistics, pricing, and the assay protocol.
            </p>

            <ul className="mt-10 space-y-5">
              {[
                ["Office", "Lusaka, Zambia"],
                ["Email", "contact@oropuro.co.zm"],
                ["Phone", "+260 000 000 000"],
                ["Hours", "Mon — Fri · 08:00 – 17:00 CAT"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-start gap-5 border-b border-border pb-4">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold w-20 pt-1">
                    {k}
                  </div>
                  <div className="font-display text-lg text-foreground">{v}</div>
                </li>
              ))}
            </ul>
          </div>

          <form
            className="lg:col-span-7 bg-card border border-border p-8 lg:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              const status = document.getElementById("form-status");
              if (status)
                status.textContent =
                  "Thank you — your booking request has been received. We will contact you shortly.";
              (e.currentTarget as HTMLFormElement).reset();
            }}
          >
            <h3 className="font-display text-2xl font-bold">Book Refinery Service</h3>
            <p className="text-sm text-foreground/60 mt-1">All fields marked * are required.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <Field label="Full Name *" name="name" required />
              <Field label="Company" name="company" />
              <Field label="Email *" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field
                label="Service *"
                name="service"
                as="select"
                options={[
                  "Gold Refining",
                  "Bullion Production",
                  "Assaying & Quality",
                  "Precious Stones",
                  "Jewelry Manufacturing",
                  "Other",
                ]}
                required
              />
              <Field label="Estimated Weight (g)" name="weight" type="number" />
            </div>

            <div className="mt-5">
              <Field label="Tell us about your lot" name="message" as="textarea" />
            </div>

            <div className="mt-8 flex items-center justify-between gap-6 flex-wrap">
              <p id="form-status" className="text-xs text-gold/90"></p>
              <button type="submit" className="btn-gold">
                Submit Request <span aria-hidden>→</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-ink">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold/60 flex items-center justify-center">
                <span className="text-gradient-gold font-display font-black text-lg">O</span>
              </div>
              <div className="font-display font-extrabold tracking-[0.2em] text-foreground">
                ORO PURO
              </div>
            </div>
            <p className="mt-5 text-sm text-foreground/60 max-w-sm leading-relaxed">
              Doré refining, bullion production, assaying, and precious stones
              verification — responsibly processed in Zambia.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
              Navigate
            </div>
            <ul className="space-y-2 text-sm text-foreground/70">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a className="hover:text-gold transition-colors" href={n.href}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
              Contact
            </div>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>Lusaka, Zambia</li>
              <li>contact@oropuro.co.zm</li>
              <li>+260 000 000 000</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground/50">
            <div>© {new Date().getFullYear()} Oro Puro Gold Refinery. All rights reserved.</div>
            <div className="tracking-[0.3em] uppercase">Au · 999.9 · Zambia</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  as,
  options,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "select" | "textarea";
  options?: string[];
}) {
  const base =
    "w-full bg-background border border-border focus:border-gold focus:outline-none px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 transition-colors";
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-[0.25em] text-foreground/60 mb-2">
        {label}
      </span>
      {as === "select" ? (
        <select name={name} required={required} className={base} defaultValue="">
          <option value="" disabled>
            Select…
          </option>
          {options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : as === "textarea" ? (
        <textarea name={name} rows={4} className={base} placeholder="Lot weight, source, expected fineness…" />
      ) : (
        <input name={name} type={type} required={required} className={base} />
      )}
    </label>
  );
}
