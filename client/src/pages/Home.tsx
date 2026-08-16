/* Ember Editorial — page composition: asymmetric narrative, system panels, signal lines, and restrained ember/cyan motion. */
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";

const heroAsset = "/assets/fenixrise-phoenix-miniature-refined_c3d73712.png";
const emberAsset = "/assets/fenixrise-ember-case_c10be5ae.png";
const forgeAsset = "/assets/fenixrise-forge-case_5fe61788.png";
const markAsset = "/assets/fenixrise-mark_e04811b4.png";

type Project = {
  name: string;
  category: string;
  type: string;
  description: string;
};

const projects: Project[] = [
  { name: "ShAPPherd", category: "Faith tech · Mobile", type: "Mobile", description: "A free mobile app to spread the Word, built for iOS and Android." },
  { name: "The War App", category: "Faith tech · Mobile", type: "Mobile", description: "A prayer generator for the moments when words will not come." },
  { name: "FORGE", category: "Custom platforms", type: "Platforms", description: "CRM, cost control, scheduling and content in one operating loop." },
  { name: "BEACON", category: "Ops · Mobile", type: "Operations", description: "Curbside pickup where the customer signals and the kitchen moves." },
  { name: "LANE", category: "Ops · Drive-thru", type: "Operations", description: "Drive-thru ordering built for fewer taps and faster lanes." },
  { name: "HERALD", category: "AI agents · Content", type: "AI agents", description: "Research, copy and production with human approval gates." },
  { name: "VEIL", category: "Security", type: "Security", description: "Encrypted messaging where even the provider cannot read you." },
  { name: "LUMEN", category: "Custom platforms", type: "Platforms", description: "Documents, status and approvals without the email back-and-forth." },
  { name: "PULSE", category: "AI agents · Content", type: "AI agents", description: "A healthcare content engine with human approval at every gate." },
  { name: "ATLAS", category: "Custom platforms", type: "Platforms", description: "CRM, deadlines, process and AI reporting for global education." },
  { name: "LEDGER", category: "AI agents · Finance", type: "AI agents", description: "Expenses in, categorized ledgers and spending answers out." },
];

const services = [
  ["01", "AI Agents", "Autonomous systems that read, verify and act."],
  ["02", "App Development", "Native mobile products with AI inside."],
  ["03", "Custom Platforms", "SaaS and web systems tailored to your operation."],
  ["04", "AI Configuration", "OpenAI, Claude and Gemini inside real workflows."],
  ["05", "Integrations & APIs", "REST, GraphQL and webhooks until silos disappear."],
  ["06", "Intelligent Content", "AI pipelines with human approval gates."],
  ["07", "AI Consulting", "Where AI pays off, mapped with ROI first."],
];

const process = [
  ["01", "Discovery", "We learn your operation before touching a tool."],
  ["02", "AI Strategy", "Where AI pays off, mapped against the real workflow."],
  ["03", "Development", "Built custom and tested against your data."],
  ["04", "Deploy & Scale", "Shipped, monitored and grown in production."],
];

function Mark() {
  return <img className="mark" src={markAsset} alt="" aria-hidden="true" />;
}

export default function Home() {
  const [mobileNav, setMobileNav] = useState(false);
  const [filter, setFilter] = useState("All systems");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = filter === "All systems" ? projects : projects.filter((project) => project.type === filter);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  const closeNav = () => setMobileNav(false);

  return (
    <div className="site-shell noise">
      <header className="topbar">
        <div className="topbar-inner">
          <a href="#top" className="wordmark" onClick={closeNav}><Mark /><span>Fenix<b>Rise</b></span></a>
          <nav className={mobileNav ? "navlinks mobile-open" : "navlinks"} aria-label="Primary navigation">
            <a href="#services" onClick={closeNav}>Services</a>
            <a href="#work" onClick={closeNav}>Work</a>
            <a href="#process" onClick={closeNav}>Process</a>
            <a href="#about" onClick={closeNav}>About</a>
            <a className="nav-cta" href="#contact" onClick={closeNav}>Start a system</a>
          </nav>
          <button className="menu-button" aria-label={mobileNav ? "Close menu" : "Open menu"} onClick={() => setMobileNav(!mobileNav)}>{mobileNav ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div>
              <div className="eyebrow">Independent AI systems studio</div>
              <h1 id="hero-title" className="display">Born from <em>intelligence.</em><br />Risen with purpose.</h1>
              <p className="hero-copy">We build AI agents, apps and platforms that run real businesses. Quietly, precisely, in production.</p>
              <div className="button-row">
                <a href="#work" className="btn-primary">See the systems <ArrowDownRight size={17} /></a>
                <a href="#contact" className="btn-secondary">Tell us what should exist <ArrowRight size={15} /></a>
              </div>
            </div>
            <div className="hero-art">
              <div className="brand-arc" aria-hidden="true"><img src={markAsset} alt="" /></div>
              <div className="signal-rail" aria-hidden="true"><span /><span /><span /></div>
              <div className="phoenix-build" aria-label="Phoenix rising from circuit signals"><div className="circuit-origin" aria-hidden="true"><span /><span /><span /><span /><i /><i /><i /></div><img className="hero-flow" src={heroAsset} alt="Phoenix rising from circuit signals" /></div>
              <div className="signal-card">
                <div className="mono">System status / 001</div>
                <div className="signal-status"><i /> Operational · verified</div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section" aria-labelledby="services-title">
          <div className="section-wrap">
            <div className="chapter-line" aria-hidden="true"><span />01</div>
            <div className="section-kicker"><div><span className="index">01 / capabilities</span><h2 id="services-title" className="display">Seven ways we build.</h2></div><p>From first signal to a system your team can trust. No black boxes beside the work.</p></div>
            <div className="services-grid">
              {services.map(([number, title, description]) => <article className="service" key={number}><span className="service-num">{number}</span><h3>{title}</h3><p>{description}</p></article>)}
            </div>
          </div>
        </section>

        <section id="work" className="section work-section" aria-labelledby="work-title">
          <div className="section-wrap">
            <div className="chapter-line" aria-hidden="true"><span />02</div>
            <div className="section-kicker"><div><span className="index">02 / production systems</span><h2 id="work-title" className="display">Systems that survived production.</h2></div><p>Client names are confidential. The work is not. Explore the signals we can share.</p></div>
            <article className="featured">
              <div className="featured-copy">
                <div><span className="case-meta mono">Featured system / 01 · AI operations</span><h3>EMBER</h3><p>Reads the daily numbers. Verifies the anomalies. Surfaces the next action before the operation starts asking.</p></div>
                <div className="case-foot"><span className="mono">Food service · Live · supported</span><button className="case-link" onClick={() => setSelected({ name: "EMBER", category: "AI agents · Operations", type: "AI agents", description: "An operations agent that reads, verifies and reports a food-service chain's daily numbers." })}>Explore the system <ArrowRight size={15} /></button></div>
              </div>
              <div className="featured-visual"><span className="visual-stamp mono">Verified / human-reviewed</span><img src={emberAsset} alt="Abstract dashboard visualization for EMBER" /></div>
            </article>
            <div className="archive-head"><h3>System archive <span className="text-dim">/ {filtered.length.toString().padStart(2, "0")}</span></h3><div className="filter-row" role="group" aria-label="Filter systems">{["All systems", "AI agents", "Mobile", "Platforms", "Operations", "Security"].map((option) => <button className={filter === option ? "filter active" : "filter"} key={option} onClick={() => setFilter(option)}>{option}</button>)}</div></div>
            <div className="archive-grid">{filtered.map((project) => <article className="archive-card" key={project.name} tabIndex={0} onClick={() => setSelected(project)} onKeyDown={(event) => event.key === "Enter" && setSelected(project)}><span className="case-meta mono">{project.category}</span><span className="card-arrow"><ArrowUpRightIcon /></span><h4>{project.name}</h4><p>{project.description}</p><span className="card-state mono">Live signal ↗</span></article>)}</div>
          </div>
        </section>

        <section id="process" className="section signal-section" aria-labelledby="process-title"><div className="section-wrap process-layout"><div className="process-intro"><span className="index">03 / method</span><h2 id="process-title" className="display">From ember to system.</h2></div><div className="process-list">{process.map(([number, title, description]) => <article className="process-item" key={number}><span className="num">{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>

        <section id="about" className="section signal-section" aria-labelledby="about-title"><div className="section-wrap about-grid"><div className="about-copy"><span className="index">04 / the studio</span><h2 id="about-title" className="display">A studio, not a vendor.</h2><p>FenixRise was born to put serious AI within reach of real businesses: systems that verify before they speak, protect what they touch and keep working after the demo ends. We run on AWS, GCP and Azure, comply with LGPD, and support what we ship.</p></div><div className="about-note">We do not build demos that look intelligent. We build systems that make the operation more intelligent.</div></div></section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title"><div className="section-wrap contact-grid"><div className="contact-copy"><span className="index">05 / next signal</span><h2 id="contact-title" className="display">Tell us what should exist.</h2><p>What is slow, repetitive or impossible to see? Bring us the operation. We will help map the system.</p></div><form className="contact-form" onSubmit={(event) => event.preventDefault()}><label>Name<input id="name" type="text" placeholder="Your name" /></label><label>Email<input id="email" type="email" placeholder="you@company.com" /></label><label>What are we building?<textarea id="message" placeholder="Tell us what should exist..." /></label><button className="btn-primary" type="submit">Send the signal <ArrowRight size={16} /></button></form></div><footer className="footer"><span>© 2026 FenixRise · Rise. Build. Protect.</span><span>hello@fenixrise.ai · São Paulo / Global</span></footer></section>
      </main>

      {selected && <div className="drawer-backdrop" role="presentation" onClick={() => setSelected(null)}><aside className="drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title" onClick={(event) => event.stopPropagation()}><button className="drawer-close" aria-label="Close case" onClick={() => setSelected(null)}><X /></button><span className="case-meta mono">{selected.category} · system signal</span><h3 id="drawer-title">{selected.name}</h3><p>{selected.description} Every case is built around a real workflow, verified against real constraints and supported after launch.</p><img className="drawer-image" src={selected.name === "FORGE" ? forgeAsset : emberAsset} alt="System interface visualization" /><div className="drawer-stats"><div className="drawer-stat"><b>Live</b><span>status</span></div><div className="drawer-stat"><b>Human</b><span>approval gate</span></div><div className="drawer-stat"><b>Built</b><span>around operations</span></div></div></aside></div>}
    </div>
  );
}

function ArrowUpRightIcon() { return <ArrowUpRight size={15} />; }
