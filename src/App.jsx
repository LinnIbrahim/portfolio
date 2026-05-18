import { profile } from './data/profile'
import Nav from './components/Nav'
import Reveal from './components/Reveal'
import BionicText from './components/BionicText'
import ColorFilters from './components/ColorFilters'
import AccessibilityPanel from './components/AccessibilityPanel'
import EasterEggs, { summonPup } from './components/EasterEggs'
import { A11yProvider, useA11y } from './a11y/A11yProvider'

function Hero() {
  return (
    <header className="hero wrap" id="top">
      <Reveal as="div" className="hero-roles">
        {profile.roles.map((r) => (
          <span key={r}>{r}</span>
        ))}
      </Reveal>
      <Reveal as="h1" delay={80}>
        I build for the people usually <em>designed&nbsp;around</em>.
      </Reveal>
      <Reveal as="p" className="hero-sub" delay={160}>
        <BionicText>{profile.intro}</BionicText>
      </Reveal>
      <Reveal className="btn-row" delay={220}>
        <a className="btn" href="#work">
          See selected work
        </a>
        <a
          className="btn btn--ghost"
          href={profile.contact.cv}
          target="_blank"
          rel="noreferrer"
        >
          Download CV ↗
        </a>
      </Reveal>
      <Reveal className="hero-meta" delay={280}>
        <span>
          <i className="dot" />
          {profile.location}
        </span>
        <span>Open to product &amp; full-stack roles</span>
      </Reveal>
    </header>
  )
}

function Work() {
  const featured = profile.work.filter((w) => w.featured)
  const rest = profile.work.filter((w) => !w.featured)
  const ordered = [...featured, ...rest]

  return (
    <section className="section" id="work">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          Selected Work
        </Reveal>
        <Reveal as="h2" className="section-title">
          Things built for people, not percentages.
        </Reveal>
        <div className="work-list" style={{ marginTop: '3.5rem' }}>
          {ordered.map((w, i) => {
            const Inner = (
              <>
                <div className="work-meta">
                  <span className="num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="yr">{w.year}</span>
                </div>
                <div className="work-main">
                  {w.image && (
                    <figure className="work-shot">
                      <img
                        src={w.image}
                        alt={w.imageAlt || w.title}
                        loading="lazy"
                        width="1200"
                        height="675"
                        style={
                          w.imagePosition
                            ? { objectPosition: w.imagePosition }
                            : undefined
                        }
                      />
                    </figure>
                  )}
                  {w.featured && (
                    <span className="featured-flag">Featured</span>
                  )}
                  <h3>
                    {w.title}
                    {w.href && <span className="arrow">↗</span>}
                  </h3>
                  <p className="work-kind">{w.kind}</p>
                  <p className="work-blurb">
                    <BionicText>{w.blurb}</BionicText>
                  </p>
                  {w.href && (
                    <span className="work-link">{w.linkLabel}</span>
                  )}
                  <div className="tags">
                    {w.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )
            return (
              <Reveal
                key={w.title}
                className={`work-item ${w.featured ? 'is-featured' : ''}`}
                delay={i * 60}
              >
                {w.href ? (
                  <a
                    className="work-main-link"
                    href={w.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: 'contents' }}
                  >
                    {Inner}
                  </a>
                ) : (
                  Inner
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <div>
          <Reveal as="p" className="eyebrow">
            About
          </Reveal>
          <Reveal as="h2" className="section-title">
            The 1% you round away is who I design for.
          </Reveal>
          <div className="about-body" style={{ marginTop: '2.4rem' }}>
            {profile.about.map((para, i) => (
              <Reveal as="p" key={i} delay={i * 70}>
                <BionicText>{para}</BionicText>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="about-aside" delay={120}>
          <figure className="portrait">
            <img
              src="/portrait.jpg"
              alt={`Portrait of ${profile.name}`}
              loading="lazy"
              width="1100"
              height="880"
            />
          </figure>
          <figcaption className="portrait">
            {profile.name} — {profile.location}
          </figcaption>
          <ul className="lang-list">
            {profile.languages.map((l) => (
              <li key={l.name}>
                <span>{l.name}</span>
                <span className="lvl">{l.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

function Path() {
  return (
    <section className="section" id="path">
      <div className="wrap split">
        <div>
          <Reveal as="p" className="eyebrow">
            Path
          </Reveal>
          <Reveal as="h2" className="section-title">
            Experience &amp; toolkit.
          </Reveal>
          <Reveal as="p" delay={120} className="work-blurb">
            {profile.education.degree}. {profile.education.school}.{' '}
            <span style={{ color: 'var(--taupe)' }}>
              {profile.education.detail}
            </span>
          </Reveal>
        </div>
        <div>
          <div className="timeline">
            {profile.experience.map((e, i) => (
              <Reveal className="tl-item" key={e.role} delay={i * 80}>
                <h3>{e.role}</h3>
                <p className="tl-org">
                  {e.org} · {e.place}
                </p>
                <p className="tl-period">{e.period}</p>
                <ul className="tl-points">
                  {e.points.map((p) => (
                    <li key={p}>
                      <BionicText>{p}</BionicText>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal
            as="p"
            className="eyebrow"
            delay={120}
            // visual gap before skills
          >
            <span style={{ marginLeft: 0 }}>Toolkit</span>
          </Reveal>
          <div className="skill-grid" style={{ marginTop: '0.5rem' }}>
            {profile.skills.map((s, i) => (
              <Reveal className="skill-group" key={s.group} delay={i * 50}>
                <h3>{s.group}</h3>
                <ul>
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Community() {
  const h = profile.humanitarian
  return (
    <section className="section invert" id="community">
      <div className="wrap split">
        <div>
          <Reveal as="p" className="eyebrow">
            Community
          </Reveal>
          <Reveal as="blockquote" className="human-quote" delay={80}>
            “{h.note}”
          </Reveal>
        </div>
        <Reveal className="human-detail" delay={140}>
          <h3>{h.role}</h3>
          <p className="tl-org">{h.org}</p>
          <p className="tl-period" style={{ color: 'rgba(244,241,234,.5)' }}>
            {h.period}
          </p>
          <ul className="tl-points" style={{ marginTop: '1.2rem' }}>
            {h.points.map((p) => (
              <li key={p}>
                <BionicText>{p}</BionicText>
              </li>
            ))}
          </ul>
          <p className="human-note">
            <BionicText>
              Building inclusive communities is the same discipline as building
              good software: notice who gets designed around, and stop doing it.
            </BionicText>
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  const c = profile.contact
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          Contact
        </Reveal>
        <Reveal as="h2" delay={60}>
          Let’s build something <em>humane</em>.
        </Reveal>
        <Reveal delay={120}>
          <a className="contact-mail" href={`mailto:${c.email}`}>
            {c.email}
          </a>
        </Reveal>
        <Reveal className="contact-links" delay={180}>
          <a
            className="btn btn--ghost"
            href={c.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            className="btn btn--ghost"
            href={c.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            className="btn btn--ghost"
            href={c.cv}
            target="_blank"
            rel="noreferrer"
          >
            CV (PDF) ↗
          </a>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  const c = profile.contact
  return (
    <footer className="footer wrap">
      <span className="nav-mark">{profile.name}</span>
      <span>
        © {new Date().getFullYear()} · Designed &amp; built for the one, not the
        aggregate.
      </span>
      <span className="footer-end">
        <a href={`mailto:${c.email}`} style={{ color: 'var(--sage-deep)' }}>
          {c.email}
        </a>
        <button
          type="button"
          className="footer-paw"
          aria-label="A small nook — say hello to the emetour pup"
          title="psst…"
          onClick={summonPup}
        >
          <img src="/mascot.jpg" alt="" aria-hidden="true" />
        </button>
      </span>
    </footer>
  )
}

function Site() {
  const { pageClassName } = useA11y()
  return (
    <div id="page" className={pageClassName}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Work />
        <About />
        <Path />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <A11yProvider>
      <ColorFilters />
      <Site />
      <AccessibilityPanel />
      <EasterEggs />
    </A11yProvider>
  )
}
