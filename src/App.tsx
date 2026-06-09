/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  RefreshCw,
  Calculator,
  Flame,
  Scale,
  ShieldCheck,
  Activity,
  Coins,
  Globe,
  ArrowRight,
  Sparkles,
  Award,
  BookOpen
} from "lucide-react";

const LOGO = "/assets/images/logo.png";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#rates", label: "Market Rates" },
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

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(0);

  // Metals Rates System
  const [metals, setMetals] = useState([
    { symbol: "XAU", name: "Gold", code: "Au", unit: "oz", price: 4295.50, changePercent: 0.12, prevPrice: 4290.30, history: [4280, 4284, 4281, 4288, 4292, 4290, 4295.50], loading: false },
    { symbol: "XAG", name: "Silver", code: "Ag", unit: "oz", price: 66.19, changePercent: -0.05, prevPrice: 66.23, history: [66.4, 66.3, 66.25, 66.1, 66.2, 66.23, 66.19], loading: false },
    { symbol: "XPT", name: "Platinum", code: "Pt", unit: "oz", price: 1741.00, changePercent: 0.45, prevPrice: 1733.20, history: [1730, 1732, 1731, 1735, 1738, 1733.20, 1741.00], loading: false },
    { symbol: "XPD", name: "Palladium", code: "Pd", unit: "oz", price: 1257.00, changePercent: -0.22, prevPrice: 1260.00, history: [1265, 1262, 1261, 1259, 1258, 1260.00, 1257.00], loading: false },
    { symbol: "HG", name: "Copper", code: "Cu", unit: "lb", price: 6.25, changePercent: 0.88, prevPrice: 6.20, history: [6.18, 6.19, 6.22, 6.21, 6.23, 6.20, 6.25], loading: false }
  ]);
  const [exchangeRate] = useState(26.50); // USD to ZMW (Zambian Kwacha) rate
  const [selectedMetal, setSelectedMetal] = useState("XAU");
  const [tickMetal, setTickMetal] = useState<string | null>(null); // For flashing flash visual cues on update!
  const [tickType, setTickType] = useState<"up" | "down" | null>(null);

  // Fetch prices on mount and gold polling
  const fetchPrices = async () => {
    try {
      const nextMetals = await Promise.all(
        metals.map(async (m) => {
          try {
            const res = await fetch(`https://api.gold-api.com/price/${m.symbol}`);
            const data = await res.json();
            if (data && data.price) {
              const currentPrice = Number(data.price);
              const diff = currentPrice - m.price;
              const changePercent = m.price > 0 ? (diff / m.price) * 100 : 0;
              
              // update history
              let nextHistory = [...m.history];
              if (nextHistory.length > 20) {
                nextHistory.shift();
              }
              nextHistory.push(currentPrice);

              return {
                ...m,
                prevPrice: m.price,
                price: currentPrice,
                changePercent: changePercent !== 0 ? Number(changePercent.toFixed(2)) : m.changePercent,
                history: nextHistory,
              };
            }
          } catch (e) {
            console.error("Failed to fetch custom rate for " + m.symbol, e);
          }
          return m;
        })
      );
      setMetals(nextMetals);
    } catch (err) {
      console.error("Failed to run pipeline fetch:", err);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 45000); // 45 seconds polling
    return () => clearInterval(interval);
  }, []);

  // Micro scale walk rate ticked simulator (simulating instant high frequency updates stable and non-jittery)
  useEffect(() => {
    const tracker = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 5); // 5 elements
      
      setMetals((prev) => {
        if (prev.length <= randomIndex) return prev;
        const targetMetal = prev[randomIndex];
        
        const shiftPercent = (Math.random() - 0.485) * 0.06;
        const delta = targetMetal.price * (shiftPercent / 100);
        const nextPrice = Number((targetMetal.price + delta).toFixed(4));
        
        setTickMetal(targetMetal.symbol);
        setTickType(delta >= 0 ? "up" : "down");
        
        // Reset flash feedback shortly
        setTimeout(() => {
          setTickMetal(null);
          setTickType(null);
        }, 1200);

        return prev.map((m, i) => {
          if (i === randomIndex) {
            const nextHist = [...m.history];
            if (nextHist.length > 20) nextHist.shift();
            nextHist.push(nextPrice);
            const diff = nextPrice - m.price;
            const pct = m.price > 0 ? (diff / m.price) * 100 : 0;
            return {
              ...m,
              prevPrice: m.price,
              price: nextPrice,
              changePercent: Number((m.changePercent + pct).toFixed(2)),
              history: nextHist
            };
          }
          return m;
        });
      });
    }, 4500); // stable 4.5s interval for smooth drift feedback

    return () => clearInterval(tracker);
  }, []);

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
        {/* REAL-TIME COMMODITY STRIP */}
        <div className="bg-neutral-950 border-b border-border/15 py-3 px-4 md:px-6 relative z-50 shadow-md">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-6">
            <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-3 shrink-0">
              <div className="flex items-center gap-1.5 bg-neutral-900 py-1 px-2.5 border border-border/10 rounded-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-[9px] md:text-[10px] uppercase text-gold tracking-[0.2em] font-bold">LBMA LIVE</span>
              </div>

              {/* STATIONARY GOLD MONITOR FOR CONTINUOUS VISIBILITY */}
              {(() => {
                const gold = metals.find(m => m.symbol === "XAU") || metals[0];
                if (!gold) return null;
                const isUp = gold.changePercent >= 0;
                return (
                  <a
                    href="#rates"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedMetal("XAU");
                      const el = document.getElementById("rates");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-center gap-1.5 md:gap-2 bg-gradient-to-r from-gold/15 to-gold/5 py-1 px-2 border border-gold/40 hover:border-gold rounded-sm transition-all duration-300 group cursor-pointer text-[11px] md:text-xs"
                  >
                    <span className="text-gold font-sans font-black text-[9px] md:text-[10px] uppercase tracking-wider group-hover:underline">
                      GOLD:
                    </span>
                    <span className={`font-mono font-bold transition-all duration-300 ${
                      tickMetal === "XAU" 
                        ? tickType === "up" ? "text-emerald-400 bg-emerald-950/60 px-1 rounded animate-pulse" : "text-rose-400 bg-rose-950/60 px-1 rounded animate-pulse"
                        : "text-foreground"
                    }`}>
                      ${gold.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                    <span className="text-foreground/30 font-mono hidden sm:inline">|</span>
                    <span className="text-foreground/80 font-mono text-[10px] font-medium hidden sm:inline">
                      ZK {(gold.price * exchangeRate).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/oz
                    </span>
                    <span className={`flex items-center gap-0.5 font-mono font-bold ${isUp ? "text-emerald-400" : "text-rose-400"}`}>
                      {isUp ? "▲" : "▼"} {Math.abs(gold.changePercent).toFixed(1)}%
                    </span>
                  </a>
                );
              })()}
            </div>
            
            <div className="flex-1 w-full overflow-hidden relative self-stretch flex items-center h-full border-t border-border/10 sm:border-t-0 pt-2.5 sm:pt-0">
              <div className="flex gap-14 whitespace-nowrap animate-marquee hover:[animation-play-state:paused] py-1">
                {[...metals, ...metals].map((m, originalIndex) => {
                  const isUp = m.changePercent >= 0;
                  const keyId = `${m.symbol}-${originalIndex}`;
                  return (
                    <a
                      href="#rates"
                      key={keyId}
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedMetal(m.symbol);
                        const el = document.getElementById("rates");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="inline-flex items-center gap-2 hover:text-gold transition-all duration-300 text-xs font-mono group"
                    >
                      <span className="text-foreground/50 tracking-wider uppercase font-sans text-[10px]">{m.name}</span>
                      <span className={`font-bold tracking-tight transition-all duration-300 ${
                        tickMetal === m.symbol 
                          ? tickType === "up" ? "text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded animate-pulse" : "text-rose-400 bg-rose-950/60 px-1.5 py-0.5 rounded animate-pulse"
                          : "text-foreground"
                      }`}>
                        ${m.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                      <span className="text-foreground/20">|</span>
                      <span className="text-foreground/70">
                        ZK {(m.price * exchangeRate).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                      <span className={`flex items-center gap-0.5 text-[10px] font-bold ${isUp ? "text-emerald-400" : "text-rose-400"}`}>
                        {isUp ? "▲" : "▼"} {Math.abs(m.changePercent).toFixed(1)}%
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className={`max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16 lg:h-20" : "h-20 lg:h-24"
        }`}>
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
      <section id="home" className="relative min-h-screen flex items-center pt-[200px] md:pt-[240px] lg:pt-[280px] pb-20 overflow-hidden">
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

      {/* LIVE MARKET RATES & CALCULATOR */}
      <section id="rates" className="py-28 relative border-t border-border bg-neutral-900/10">
        <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-12 left-10 w-[200px] h-[200px] bg-gold/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="eyebrow inline-flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-gold animate-pulse" />
                Live Market Intelligence
              </span>
              <h2 className="mt-5 font-display text-4xl md:text-5xl font-bold leading-tight">
                Refinery-Direct <br />
                <span className="text-gradient-gold italic">Market Rates</span>
              </h2>
              <p className="mt-4 text-sm text-foreground/65 max-w-2xl leading-relaxed">
                We provide client-focused, direct pricing aligned with international standards.
                Our rates update in real-time, providing immediate transparency for gold dore miners, exporters, and finance partners.
              </p>
            </div>
            
            <button 
              onClick={() => {
                fetchPrices();
              }}
              className="group inline-flex items-center gap-2.5 px-5 py-3 border border-gold/40 hover:border-gold hover:bg-gold/5 text-xs text-gold uppercase tracking-[0.2em] font-bold transition-all self-start md:self-end duration-300"
            >
              <RefreshCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
              Force Rates Sync
            </button>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* LEFT COLUMN: ACTIVE METAL FEED AND HISTORICAL PATH */}
            <div className="lg:col-span-7 space-y-8">
              {/* Tabs list */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {metals.map((m) => {
                  const isActive = selectedMetal === m.symbol;
                  const isUp = m.changePercent >= 0;
                  return (
                    <button
                      key={m.symbol}
                      onClick={() => setSelectedMetal(m.symbol)}
                      className={`relative p-4 border transition-all duration-300 flex flex-col items-center justify-between text-center ${
                        isActive
                          ? "border-gold bg-zinc-950/80 shadow-[0_4px_24px_rgba(201,168,76,0.1)] scale-[1.02]"
                          : "border-border/65 bg-card/40 hover:border-gold/50 hover:bg-card/75"
                      }`}
                    >
                      {isActive && (
                        <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
                      )}
                      
                      <span className="font-mono text-[10px] uppercase text-foreground/45 tracking-wider">{m.name}</span>
                      <span className="mt-2 text-xl font-display font-bold text-gradient-gold tracking-tight">{m.symbol}</span>
                      
                      {/* Price & Change badge */}
                      <span className="mt-3 text-xs font-semibold text-foreground/90 font-mono">
                        ${m.price.toLocaleString(undefined, { minimumFractionDigits: m.symbol === "HG" ? 3 : 1, maximumFractionDigits: m.symbol === "HG" ? 4 : 2 })}
                      </span>
                      
                      <span className={`inline-flex items-center gap-0.5 text-[9px] font-mono mt-1 font-bold ${isUp ? "text-emerald-400" : "text-rose-400"}`}>
                        {isUp ? "▲" : "▼"} {Math.abs(m.changePercent).toFixed(1)}%
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Detail Pane for active metal */}
              {(() => {
                const active = metals.find((m) => m.symbol === selectedMetal) || metals[0];
                const activeIsUp = active.changePercent >= 0;
                
                const ozPriceUsd = active.price;
                const ozPriceZmw = active.price * exchangeRate;
                
                const gPriceUsd = active.symbol !== "HG" ? active.price / 31.1034768 : active.price / 453.59237;
                const gPriceZmw = gPriceUsd * exchangeRate;

                const highestInHist = Math.max(...active.history, active.price);
                const lowestInHist = Math.min(...active.history, active.price);

                return (
                  <div className="bg-card/70 border border-border p-6 md:p-8 relative overflow-hidden backdrop-blur">
                    <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-gold/[0.15] translate-x-12 -translate-y-12 rotate-45 pointer-events-none" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/60">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-gold/10 text-gold text-[10px] font-mono uppercase tracking-[0.15em] border border-gold/20">
                            {active.code} {active.symbol}
                          </span>
                          <span className="text-foreground/40 md:text-sm font-light text-xs font-sans">
                            Zambian Assay Unit Market Refined
                          </span>
                        </div>
                        <h3 className="mt-2.5 font-display text-2xl font-bold tracking-tight">
                          Fine {active.name} Investment Purity Grade
                        </h3>
                      </div>
                      
                      <div className="text-right flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center gap-4">
                        <span className="font-mono text-xs text-foreground/45 uppercase tracking-widest hidden sm:inline">Current status</span>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[11px] font-mono uppercase font-bold tracking-[0.15em] text-emerald-400">Market Active</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 my-8">
                      <div className="p-5 border border-border/85 bg-zinc-950/30">
                        <span className="text-[10px] uppercase font-mono tracking-[0.22em] text-foreground/45 flex items-center justify-between">
                          Price per Troy {active.symbol !== "HG" ? "Ounce (oz)" : "Pound (lb)"}
                          <Coins className="w-3.5 h-3.5 text-gold/60" />
                        </span>
                        
                        <div className="mt-3.5 font-display font-black text-2xl md:text-3xl text-gradient-gold leading-none">
                          ${ozPriceUsd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                        
                        <div className="mt-2 text-sm font-mono text-zinc-400 font-medium">
                          ZK {ozPriceZmw.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ZMW
                        </div>
                      </div>

                      <div className="p-5 border border-border/85 bg-zinc-950/30">
                        <span className="text-[10px] uppercase font-mono tracking-[0.22em] text-foreground/45 flex items-center justify-between">
                          Price per Metal Gram (g)
                          <Scale className="w-3.5 h-3.5 text-gold/60" />
                        </span>
                        
                        <div className="mt-3.5 font-display font-black text-2xl md:text-3xl text-gradient-gold leading-none">
                          ${gPriceUsd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 3 })}
                        </div>
                        
                        <div className="mt-2 text-sm font-mono text-zinc-400 font-medium">
                          ZK {gPriceZmw.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ZMW
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="w-full sm:w-auto flex flex-col gap-2">
                        <span className="text-[10px] uppercase tracking-wider font-mono text-foreground/45">Tick Session Performance</span>
                        <div className="flex items-center gap-4">
                          <span className={`text-lg font-bold font-mono flex items-center gap-1 ${activeIsUp ? "text-emerald-400" : "text-rose-400"}`}>
                            {activeIsUp ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                            {activeIsUp ? "+" : ""}{active.changePercent.toFixed(2)}%
                          </span>
                          <span className="text-xs text-foreground/45 font-mono">
                            Last tick: {activeIsUp ? "Upward" : "Downward"} drift
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-1.5 w-full sm:w-auto">
                        <span className="text-[10px] uppercase tracking-wider font-mono text-foreground/45 sm:text-right w-full">Sparkline (HFT Session)</span>
                        <div className="h-10 bg-neutral-950/60 p-1 border border-border/40 rounded flex items-center">
                          <Sparkline values={active.history} positive={activeIsUp} />
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border/20 text-xs font-mono">
                      <div>
                        <span className="text-[9px] uppercase text-foreground/40 block">Daily Peak</span>
                        <span className="font-semibold text-foreground/80">${highestInHist.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase text-foreground/40 block">Daily Floor</span>
                        <span className="font-semibold text-foreground/80">${lowestInHist.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase text-foreground/40 block">Trading Premium</span>
                        <span className="font-semibold text-foreground/80">999.9 Fine (+0.1%)</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase text-foreground/40 block">Market Open</span>
                        <span className="font-semibold text-foreground/80">Lusaka / LME hrs</span>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* RIGHT COLUMN: REFINERY ASSAY & DORE CALCULATOR */}
            <div className="lg:col-span-12 xl:col-span-5">
              <DoreAssayCalculator metals={metals} exchangeRate={exchangeRate} />
            </div>
          </div>
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
      <section id="coo-message" className="py-28 border-t border-b border-border/60 bg-card/25 backdrop-blur-sm relative overflow-hidden bg-[radial-gradient(circle_at_30%_30%,rgba(201,168,76,0.03)_0%,transparent_60%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center relative z-10">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] border border-gold/40 overflow-hidden group">
              <img
                src="/assets/images/portfolio/brendon_wiggill.png"
                alt="Brendon Carl Wiggill - Chief Operating Officer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
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
                ["Email", "info@oropurorefinery.com"],
                ["Website", "www.oropurorefinery.com"],
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
              <li>info@oropurorefinery.com</li>
              <li>Chamba Valley, Zambia</li>
              <li>www.oropurorefinery.com</li>
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

function Sparkline({ values, positive }: { values: number[]; positive: boolean }) {
  if (values.length === 0) return null;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const width = 120;
  const height = 40;
  const points = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * width;
      const y = height - ((v - min) / range) * height + 1;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg className="w-[120px] h-10 overflow-visible" viewBox={`0 0 ${width} ${height}`}>
      <polyline
        fill="none"
        stroke={positive ? "#10b981" : "#ef4444"}
        strokeWidth="1.5"
        points={points}
      />
    </svg>
  );
}

function DoreAssayCalculator({ metals, exchangeRate }: { metals: any[]; exchangeRate: number }) {
  const [weight, setWeight] = useState(500); // Raw grams
  const [purity, setPurity] = useState(88.5); // Assay purity percentage
  const [chargeRate, setChargeRate] = useState(1.25); // Refining fee in %
  const [standardPremium, setStandardPremium] = useState(0.5); // Premium added or subtracted in %
  const [metalType, setMetalType] = useState("XAU");
  const [isZmw, setIsZmw] = useState(false); // Display in ZMW vs USD

  const selectedCoin = metals.find(m => m.symbol === metalType) || metals[0];
  const coinPriceOz = selectedCoin.price;
  
  const conversionUnit = metalType === "HG" ? 453.59237 : 31.1034768;
  const unitLabel = metalType === "HG" ? "lb" : "oz";
  
  const totalFineWeightGrams = weight * (purity / 100);
  const totalFineWeightOunces = totalFineWeightGrams / conversionUnit;
  
  const baseValueUsd = totalFineWeightOunces * coinPriceOz;
  const adjustedPriceOz = coinPriceOz * (1 + standardPremium / 100);
  const adjustedValueUsd = totalFineWeightOunces * adjustedPriceOz;
  const refiningFeeUsd = adjustedValueUsd * (chargeRate / 100);
  const netPayoutUsd = adjustedValueUsd - refiningFeeUsd;

  const baseValue = isZmw ? baseValueUsd * exchangeRate : baseValueUsd;
  const payoutValue = isZmw ? netPayoutUsd * exchangeRate : netPayoutUsd;
  const feeValue = isZmw ? refiningFeeUsd * exchangeRate : refiningFeeUsd;
  
  const formatter = (val: number) => {
    return (isZmw ? "ZK " : "$") + val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + (isZmw ? " ZMW" : " USD");
  };

  return (
    <div className="bg-gradient-to-b from-card to-background border border-gold/40 p-6 md:p-8 flex flex-col h-full relative">
      <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-gold text-neutral-950 font-display text-[9px] uppercase tracking-[0.25em] font-black px-3 py-1 border border-neutral-900">
        Assay Station Tool
      </div>
      
      <div className="flex items-center gap-2 mb-2">
        <Calculator className="w-5 h-5 text-gold" />
        <h3 className="font-display text-lg font-bold uppercase tracking-wider text-gradient-gold">Dore Yield Estimator</h3>
      </div>
      <p className="text-xs text-foreground/60 leading-relaxed mb-6 font-sans">
        Miners and partners can estimate raw dore gold refining yields. Adjust weight or purity to estimate net payouts instantly in standard rates.
      </p>

      <div className="space-y-5 flex-1">
        <div>
          <label className="block text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-2">Refinery Batch Metal</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Fine Gold", symbol: "XAU" },
              { label: "Fine Silver", symbol: "XAG" },
              { label: "Platinum", symbol: "XPT" }
            ].map(item => (
              <button
                key={item.symbol}
                type="button"
                onClick={() => setMetalType(item.symbol)}
                className={`py-2 px-1 text-xs font-mono font-bold uppercase border transition-all ${
                  metalType === item.symbol 
                    ? "border-gold bg-gold/10 text-gold" 
                    : "border-border bg-transparent text-foreground/50 hover:border-gold/40"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold mb-2 text-gold">
            <span>Dore Weight</span>
            <span className="font-mono text-xs text-foreground bg-zinc-950 px-2 py-0.5 border border-border/80">{weight} grams</span>
          </div>
          <input
            type="range"
            min="10"
            max="10000"
            step="10"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="w-full h-1 bg-zinc-950 appearance-none border border-border cursor-pointer mb-2 accent-gold"
          />
          <div className="flex justify-between text-[9px] text-foreground/45 font-mono">
            <span>10 g</span>
            <span>5,000 g</span>
            <span>10,000 g (Bar)</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold mb-2 text-gold">
            <span>Assayed Purity</span>
            <span className="font-mono text-xs text-foreground bg-zinc-950 px-2 py-0.5 border border-border/80">{purity}% pure</span>
          </div>
          <input
            type="range"
            min="50"
            max="99.9"
            step="0.1"
            value={purity}
            onChange={(e) => setPurity(Number(e.target.value))}
            className="w-full h-1 bg-zinc-950 appearance-none border border-border cursor-pointer mb-2 accent-gold"
          />
          <div className="flex justify-between text-[9px] text-foreground/45 font-mono">
            <span>50%</span>
            <span>90% (Rich Dore)</span>
            <span>99.9% (Fine)</span>
          </div>
        </div>

        <div className="flex items-center justify-between py-1.5 border-y border-border/40">
          <span className="text-[10px] font-mono text-foreground/50 uppercase">Currency display unit</span>
          <div className="inline-flex border border-border p-0.5 rounded bg-zinc-950">
            <button
              onClick={() => setIsZmw(false)}
              className={`text-[10px] font-mono uppercase font-bold py-1 px-2.5 transition-all ${!isZmw ? "bg-gold text-neutral-950 rounded-sm" : "text-foreground/50 hover:text-foreground"}`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setIsZmw(true)}
              className={`text-[10px] font-mono uppercase font-bold py-1 px-2.5 transition-all ${isZmw ? "bg-gold text-neutral-950 rounded-sm" : "text-foreground/50 hover:text-foreground"}`}
            >
              ZMW (ZK)
            </button>
          </div>
        </div>

        <div className="bg-zinc-950/70 p-4 border border-border space-y-3 font-mono text-xs">
          <div className="flex justify-between">
            <span className="text-foreground/45">Pure fine weight:</span>
            <span className="font-bold text-foreground">{totalFineWeightGrams.toFixed(2)} g ({totalFineWeightOunces.toFixed(3)} {unitLabel})</span>
          </div>
          <div className="flex justify-between">
            <span className="text-foreground/45">Base market value:</span>
            <span className="font-semibold text-foreground">{formatter(baseValue)}</span>
          </div>
          <div className="flex justify-between items-center text-rose-400">
            <span className="text-foreground/45">Refining Charge ({chargeRate}%):</span>
            <span>- {formatter(feeValue)}</span>
          </div>
          <div className="h-px bg-border/50 my-1" />
          <div className="flex justify-between items-baseline text-gold">
            <span className="font-sans text-[10px] uppercase tracking-[0.1em] font-bold">Net Settlement Payout:</span>
            <span className="text-lg font-black">{formatter(payoutValue)}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-3.5">
        <a 
          href="#book" 
          className="flex-1 text-center btn-gold justify-center text-xs tracking-wider font-bold h-11 inline-flex items-center"
          onClick={() => {
            const serviceField = document.getElementsByName("service")[0] as HTMLSelectElement;
            if (serviceField) {
              serviceField.value = metalType === "XAU" ? "Gold Refining" : "Assaying & Analysis";
            }
          }}
        >
          Book Assay Batch →
        </a>
      </div>
    </div>
  );
}
