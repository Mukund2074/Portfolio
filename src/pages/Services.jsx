import React, { useState } from 'react';
import GradientTabs from '../components/GradientTabs';

const STACK = [
  {
    id: 'frontend',
    label: 'Frontend',
    number: '01',
    color: '#00d4ff',
    glow: 'rgba(0, 212, 255, 0.15)',
    summary: 'Pixel-perfect interfaces designed for high-performance user engagement.',
    items: [
      { name: 'React', desc: 'Responsive, user-friendly UIs with React and Bootstrap.', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
      { name: 'React Native', desc: 'Cross-platform mobile apps with React Native.', img: 'https://cdn.worldvectorlogo.com/logos/react-native-1.svg' },
      { name: 'Next.js', desc: 'Scalable, performant full-stack and SSR apps.', img: 'https://logowik.com/content/uploads/images/nextjs2106.logowik.com.webp' },
      { name: 'Tailwind CSS', desc: 'Utility-first, modern UI with Tailwind CSS.', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
      { name: 'Bootstrap', desc: 'Responsive, mobile-first layouts with Bootstrap.', img: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
      { name: 'MUI', desc: 'Rich interfaces with Material-UI components.', img: 'https://delta-dev-software.fr/wp-content/uploads/2024/02/1_fEyeESs-HxVR7Zlr-fdlvw.png' },
      { name: 'shadcn/ui', desc: 'Accessible, customizable components with shadcn/ui.', img: 'https://ui.shadcn.com/apple-touch-icon.png' },
      { name: 'Radix UI', desc: 'Unstyled, accessible primitives for design systems.', img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0NSIgZmlsbD0iIzE2MTYxOCIvPjx0ZXh0IHg9IjUwIiB5PSI2NSIgZm9udC1zaXplPSI0MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlI8L3RleHQ+PC9zdmc+' },
      { name: 'TanStack', desc: 'TanStack Query, Table, Router — data & routing at scale.', img: 'assets/imgs/tanstack-logo.png' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    number: '02',
    color: '#39ff8f',
    glow: 'rgba(57, 255, 143, 0.15)',
    summary: 'Robust server-side architecture and data modeling for real-time scale.',
    items: [
      { name: 'Node.js', desc: 'APIs and server-side logic with Node.js.', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
      { name: 'Express', desc: 'Web apps and REST APIs with Express.js.', img: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
      { name: 'Fastify', desc: 'Fast, low-overhead APIs with Fastify.', img: 'https://cdn.simpleicons.org/fastify/000000' },
      { name: 'MongoDB', desc: 'Cloud DB and high-frequency operations with MongoDB Atlas.', img: 'assets/imgs/mongo.png' },
      { name: 'PostgreSQL', desc: 'Relational data and complex queries with PostgreSQL.', img: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
      { name: 'Drizzle', desc: 'Type-safe SQL and migrations with Drizzle ORM.', img: 'https://orm.drizzle.team/favicon.ico' },
      { name: 'Redis', desc: 'Caching, pub/sub and real-time with Redis.', img: 'https://cdn.simpleicons.org/redis/DC382D' },
      { name: 'Webhooks & Sockets', desc: 'Real-time events, webhooks and WebSockets.', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & IoT',
    number: '03',
    color: '#ff6b35',
    glow: 'rgba(255, 107, 53, 0.15)',
    summary: 'DevOps automation and hardware integration for the physical world.',
    items: [
      { name: 'TypeScript', desc: 'Type-safe JS — used across frontend and backend.', img: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
      { name: 'Orval', desc: 'API clients and types from OpenAPI with Orval.', img: 'assets/imgs/orval-logo.svg' },
      { name: 'GitHub', desc: 'Version control and collaboration with Git and GitHub.', img: 'https://github.githubassets.com/favicons/favicon.svg' },
      { name: 'GitLab', desc: 'CI/CD, repos and DevOps with GitLab.', img: 'https://about.gitlab.com/images/press/logo/svg/gitlab-logo-500.svg' },
      { name: 'Arduino Uno', desc: 'Prototyping and IoT with Arduino.', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Arduino_Uno_-_R3.jpg' },
      { name: 'NodeMCU', desc: 'IoT apps with NodeMCU (ESP8266) and Node.js.', img: 'assets/imgs/nodemcu.png' },
      { name: 'Raspberry Pi', desc: 'Single-board computing and IoT with Raspberry Pi.', img: 'https://cdn.simpleicons.org/raspberrypi/C51A4A' },
    ],
  },
];

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;600&display=swap');

.sv2-root {
  --sv2-accent: var(--accent, #7850b4);
  --sv2-accent-2: rgba(80, 55, 140, 1);
  --sv2-ink: #2d2d3a;
  --sv2-muted: #6c757d;
  --sv2-surface: rgba(255,255,255,0.78);
  --sv2-border: rgba(120,80,180,0.14);

  padding: 90px 0;
  overflow: hidden;
  font-family: 'Outfit', sans-serif;
  color: var(--sv2-ink);
  position: relative;
  background:
    radial-gradient(900px 700px at 82% 10%, rgba(120,80,180,0.16), transparent 60%),
    radial-gradient(900px 700px at 10% 86%, rgba(120,80,180,0.10), transparent 62%),
    linear-gradient(180deg, #f8f6fc 0%, #ffffff 100%);
}

.sv2-root::before {
  content: '';
  position: absolute;
  width: 800px; height: 800px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(120,80,180,0.14) 0%, transparent 70%);
  top: -200px; right: -200px;
  pointer-events: none;
  z-index: 0;
}

.sv2-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
}

.sv2-eyebrow {
  font-size: 12px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: rgba(120,80,180,0.85);
  margin-bottom: 12px;
  font-weight: 700;
}

.sv2-heading {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(64px, 10vw, 120px);
  line-height: 0.88;
  color: var(--sv2-ink);
  margin: 0;
  letter-spacing: -2px;
}

.sv2-heading em {
  font-style: normal;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(120,80,180,0.75);
}

.sv2-tabs { margin: 48px 0 40px; }

.sv2-body {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 60px;
  min-height: 400px;
}

.sv2-sidebar-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 120px;
  color: transparent;
  -webkit-text-stroke: 1px rgba(120,80,180,0.18);
  line-height: 1;
}

.sv2-sidebar-label {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 48px;
  color: var(--sv2-ink);
  margin: -20px 0 15px;
}

.sv2-sidebar-summary {
  font-size: 14px;
  line-height: 1.6;
  color: var(--sv2-muted);
  max-width: 220px;
}

.sv2-chips {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 14px 14px;
  align-content: start;
  grid-auto-flow: dense;
}

.sv2-chip {
  background: var(--sv2-surface);
  border: 1px solid var(--sv2-border);
  border-radius: 18px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: sv2SlideIn 0.5s ease backwards;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 12px 30px rgba(120,80,180,0.08);
  transform: translateZ(0);
}

.sv2-chip:hover {
  border-color: rgba(120,80,180,0.35);
  transform: translateY(-5px) rotate(-0.4deg);
  box-shadow: 0 18px 46px rgba(120,80,180,0.14);
}

.sv2-chip img {
  width: 28px; height: 28px;
  object-fit: contain;
  flex-shrink: 0;
}

.sv2-chip-name { font-weight: 700; color: var(--sv2-ink); font-size: 14px; }
.sv2-chip-desc { font-size: 11px; color: rgba(108, 117, 125, 0.95); line-height: 1.4; }

/* messy/organic layout: subtle stagger + tiny rotations (no perfect grid look) */
.sv2-chip:nth-child(3n + 1) { transform: rotate(-0.7deg) translateY(3px); }
.sv2-chip:nth-child(3n + 2) { transform: rotate(0.6deg) translateY(-2px); }
.sv2-chip:nth-child(5n)     { transform: rotate(-0.3deg) translateY(6px); }
.sv2-chip:nth-child(7n)     { transform: rotate(0.3deg) translateY(-6px); }
.sv2-chip:hover { transform: translateY(-6px) rotate(0deg); }

@keyframes sv2SlideIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 850px) {
  .sv2-body { grid-template-columns: 1fr; }
  .sv2-sidebar { text-align: center; }
  .sv2-sidebar-summary { max-width: 100%; }
  .sv2-tabs { margin: 32px 0 22px; }
  .sv2-chips { grid-template-columns: 1fr; }
}
`;

export default function Services({ ServiceRef }) {
  const [activeId, setActiveId] = useState('frontend');
  const active = STACK.find((s) => s.id === activeId) || STACK[0];

  return (
    <div ref={ServiceRef}>
      <style>{CSS}</style>
      <section id="service" className="sv2-root grid-bg" style={{ '--accent': active.color, '--accent-glow': active.glow, '--glow': active.glow }}>
        <div className="sv2-container">
          <p className="sv2-eyebrow">Expertise</p>
          <h2 className="sv2-heading">
            CRAFTING<br /><em>DIGITAL</em>
          </h2>

          <div className="sv2-tabs">
            <GradientTabs
              tabs={STACK.map((s) => ({ id: s.id, label: `${s.number} ${s.label}` }))}
              activeId={activeId}
              onChange={setActiveId}
              ariaLabel="Services categories"
              style={{
                marginBottom: 0,
                borderBottomColor: 'rgba(120,80,180,0.14)',
                '--gt-accent': active.color,
              }}
            />
          </div>

          <div className="sv2-body">
            <aside className="sv2-sidebar">
              <div className="sv2-sidebar-num">{active.number}</div>
              <div className="sv2-sidebar-label">{active.label}</div>
              <p className="sv2-sidebar-summary">{active.summary}</p>
            </aside>

            <div className="sv2-chips" key={activeId}>
              {active.items.map((item, i) => (
                <div className="sv2-chip" key={item.name} style={{ animationDelay: `${i * 50}ms` }}>
                  <img src={item.img} alt={item.name} />
                  <div>
                    <div className="sv2-chip-name">{item.name}</div>
                    <div className="sv2-chip-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
