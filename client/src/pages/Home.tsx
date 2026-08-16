/* Ember Editorial — page composition: asymmetric narrative, system panels, signal lines, and restrained ember/cyan motion.
   Bilingue EN/PT: todo o texto vem de i18n.ts, alternado pelo botao na nav e persistido em localStorage. */
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { detectLang, dict, type Lang, type Project } from "@/i18n";

const heroAsset = "/assets/fenixrise-phoenix-miniature-refined_c3d73712.png";
const emberAsset = "/assets/fenixrise-ember-case_c10be5ae.png";
const forgeAsset = "/assets/fenixrise-forge-case_5fe61788.png";
const markAsset = "/assets/fenixrise-mark_e04811b4.png";

function Mark() {
  return <img className="mark" src={markAsset} alt="" aria-hidden="true" />;
}

export default function Home() {
  const [mobileNav, setMobileNav] = useState(false);
  const [lang, setLang] = useState<Lang>(() => detectLang());
  const [filterIndex, setFilterIndex] = useState(0);
  const [selected, setSelected] = useState<Project | null>(null);

  const t = dict[lang];
  const activeFilter = t.work.filters[filterIndex];
  const filtered = filterIndex === 0 ? t.projects : t.projects.filter((project) => project.type === activeFilter);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === "pt" ? "FenixRise — Sistemas que sobrevivem à produção" : "FenixRise — Systems that survive production";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        lang === "pt"
          ? "A FenixRise constrói agentes de IA, apps e plataformas que sustentam negócios reais. Em silêncio, com precisão, em produção."
          : "FenixRise builds AI agents, apps and platforms that run real businesses. Quietly, precisely, in production.",
      );
    }
    try {
      localStorage.setItem("fr_lang", lang);
    } catch {
      /* localStorage bloqueado, a escolha vale so nesta sessao */
    }
  }, [lang]);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  const closeNav = () => setMobileNav(false);

  // O formulario abre o cliente de e-mail do visitante. Trocar por endpoint
  // real (Formspree, Resend, rota /api) quando o dominio fenixrise.ai estiver ativo.
  const handleContact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value ?? "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value ?? "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value ?? "";
    const subject = encodeURIComponent(`FenixRise — ${name || "new signal"}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:hello@fenixrise.ai?subject=${subject}&body=${body}`;
  };

  return (
    <div className="site-shell noise">
      <header className="topbar">
        <div className="topbar-inner">
          <a href="#top" className="wordmark" onClick={closeNav}>
            <Mark />
            <span>
              Fenix<b>Rise</b>
            </span>
          </a>
          <nav className={mobileNav ? "navlinks mobile-open" : "navlinks"} aria-label="Primary navigation">
            <a href="#services" onClick={closeNav}>{t.nav.services}</a>
            <a href="#work" onClick={closeNav}>{t.nav.work}</a>
            <a href="#process" onClick={closeNav}>{t.nav.process}</a>
            <a href="#about" onClick={closeNav}>{t.nav.about}</a>
            <a className="nav-cta" href="#contact" onClick={closeNav}>{t.nav.cta}</a>
            <button
              className="lang-toggle"
              type="button"
              onClick={() => { setLang(lang === "en" ? "pt" : "en"); setFilterIndex(filterIndex); }}
              aria-label={lang === "en" ? "Mudar para português" : "Switch to English"}
            >
              {t.langLabel}
            </button>
          </nav>
          <button className="menu-button" aria-label={mobileNav ? "Close menu" : "Open menu"} onClick={() => setMobileNav(!mobileNav)}>
            {mobileNav ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div>
              <div className="eyebrow">{t.hero.eyebrow}</div>
              <h1 id="hero-title" className="display">
                {t.hero.titleA}
                <em>{t.hero.titleEm}</em>
                <br />
                {t.hero.titleB}
              </h1>
              <p className="hero-copy">{t.hero.copy}</p>
              <div className="button-row">
                <a href="#work" className="btn-primary">{t.hero.primary} <ArrowDownRight size={17} /></a>
                <a href="#contact" className="btn-secondary">{t.hero.secondary} <ArrowRight size={15} /></a>
              </div>
            </div>
            <div className="hero-art">
              <div className="brand-arc" aria-hidden="true"><img src={markAsset} alt="" /></div>
              <div className="signal-rail" aria-hidden="true"><span /><span /><span /></div>
              <div className="phoenix-build" aria-label={t.hero.artAlt}>
                <div className="circuit-origin" aria-hidden="true"><span /><span /><span /><span /><i /><i /><i /></div>
                <img className="hero-flow" src={heroAsset} alt={t.hero.artAlt} />
              </div>
              <div className="signal-card">
                <div className="mono">{t.hero.statusLabel}</div>
                <div className="signal-status"><i /> {t.hero.statusValue}</div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section" aria-labelledby="services-title">
          <div className="section-wrap">
            <div className="chapter-line" aria-hidden="true"><span />01</div>
            <div className="section-kicker">
              <div>
                <span className="index">{t.services.index}</span>
                <h2 id="services-title" className="display">{t.services.title}</h2>
              </div>
              <p>{t.services.lead}</p>
            </div>
            <div className="services-grid">
              {t.services.items.map(([number, title, description]) => (
                <article className="service" key={number}>
                  <span className="service-num">{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section work-section" aria-labelledby="work-title">
          <div className="section-wrap">
            <div className="chapter-line" aria-hidden="true"><span />02</div>
            <div className="section-kicker">
              <div>
                <span className="index">{t.work.index}</span>
                <h2 id="work-title" className="display">{t.work.title}</h2>
              </div>
              <p>{t.work.lead}</p>
            </div>
            <article className="featured">
              <div className="featured-copy">
                <div>
                  <span className="case-meta mono">{t.work.featuredMeta}</span>
                  <h3>{t.work.featuredName}</h3>
                  <p>{t.work.featuredCopy}</p>
                </div>
                <div className="case-foot">
                  <span className="mono">{t.work.featuredFoot}</span>
                  <button
                    className="case-link"
                    onClick={() =>
                      setSelected({
                        name: t.work.featuredName,
                        category: t.work.featuredMeta,
                        type: t.work.filters[1],
                        description: t.work.featuredCopy,
                      })
                    }
                  >
                    {t.work.featuredLink} <ArrowRight size={15} />
                  </button>
                </div>
              </div>
              <div className="featured-visual">
                <span className="visual-stamp mono">{t.work.featuredStamp}</span>
                <img src={emberAsset} alt="Abstract dashboard visualization for EMBER" />
              </div>
            </article>
            <div className="archive-head">
              <h3>
                {t.work.archiveTitle} <span className="text-dim">/ {filtered.length.toString().padStart(2, "0")}</span>
              </h3>
              <div className="filter-row" role="group" aria-label="Filter systems">
                {t.work.filters.map((option, index) => (
                  <button
                    className={filterIndex === index ? "filter active" : "filter"}
                    key={option}
                    onClick={() => setFilterIndex(index)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="archive-grid">
              {filtered.map((project) => (
                <article
                  className="archive-card"
                  key={project.name}
                  tabIndex={0}
                  onClick={() => setSelected(project)}
                  onKeyDown={(event) => event.key === "Enter" && setSelected(project)}
                >
                  <span className="case-meta mono">{project.category}</span>
                  <span className="card-arrow"><ArrowUpRight size={15} /></span>
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                  <span className="card-state mono">{t.work.cardState}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section signal-section" aria-labelledby="process-title">
          <div className="section-wrap process-layout">
            <div className="process-intro">
              <span className="index">{t.process.index}</span>
              <h2 id="process-title" className="display">{t.process.title}</h2>
            </div>
            <div className="process-list">
              {t.process.items.map(([number, title, description]) => (
                <article className="process-item" key={number}>
                  <span className="num">{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section signal-section" aria-labelledby="about-title">
          <div className="section-wrap about-grid">
            <div className="about-copy">
              <span className="index">{t.about.index}</span>
              <h2 id="about-title" className="display">{t.about.title}</h2>
              <p>{t.about.copy}</p>
            </div>
            <div className="about-note">{t.about.note}</div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="section-wrap contact-grid">
            <div className="contact-copy">
              <span className="index">{t.contact.index}</span>
              <h2 id="contact-title" className="display">{t.contact.title}</h2>
              <p>{t.contact.copy}</p>
            </div>
            <form className="contact-form" onSubmit={handleContact}>
              <label>
                {t.contact.name}
                <input id="name" name="name" type="text" placeholder={t.contact.namePh} required />
              </label>
              <label>
                {t.contact.email}
                <input id="email" name="email" type="email" placeholder={t.contact.emailPh} required />
              </label>
              <label>
                {t.contact.message}
                <textarea id="message" name="message" placeholder={t.contact.messagePh} required />
              </label>
              <button className="btn-primary" type="submit">{t.contact.submit} <ArrowRight size={16} /></button>
            </form>
          </div>
          <footer className="footer">
            <span>{t.footer.left}</span>
            <span>{t.footer.right}</span>
          </footer>
        </section>
      </main>

      {selected && (
        <div className="drawer-backdrop" role="presentation" onClick={() => setSelected(null)}>
          <aside
            className="drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="drawer-close" aria-label={t.drawer.close} onClick={() => setSelected(null)}><X /></button>
            <span className="case-meta mono">{selected.category}</span>
            <h3 id="drawer-title">{selected.name}</h3>
            <p>{selected.description} {t.drawer.body}</p>
            <img className="drawer-image" src={selected.name === "FORGE" ? forgeAsset : emberAsset} alt="System interface visualization" />
            <div className="drawer-stats">
              {t.drawer.stats.map(([value, label]) => (
                <div className="drawer-stat" key={label}>
                  <b>{value}</b>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
