import React from 'react';

const CSS = `
.gt-tabs {
  --gt-accent: #7850b4;
  --gt-accent-2: #50378c;
  --gt-ink: #2d2d3a;
  --gt-muted: #6c757d;
  --gt-border: rgba(120, 80, 180, 0.15);

  display: flex;
  gap: 10px;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--gt-border);
  overflow-x: auto;
  scrollbar-width: none;
  padding-bottom: 0;
}

.gt-tabs::-webkit-scrollbar { display: none; }

.gt-tab {
  appearance: none;
  background: transparent;
  border: 1px solid transparent;
  border-bottom: none;
  padding: 10px 16px;
  white-space: nowrap;
  font-weight: 700;
  letter-spacing: 0.4px;
  color: var(--gt-muted);
  cursor: pointer;
  position: relative;
  border-radius: 14px 14px 0 0;
  transition: background 180ms ease, color 180ms ease, transform 180ms ease;
}

.gt-tab:hover {
  color: var(--gt-ink);
  transform: translateY(-1px);
}

/* user asked: no focus border */
.gt-tab:focus,
.gt-tab:focus-visible {
  outline: none;
  box-shadow: none;
}

.gt-tab.gt-active {
  color: rgba(45, 45, 58, 0.92);
  border-color: rgba(120, 80, 180, 0.28);
  background-color: rgba(255,255,255,0.75);
  background-image:
    /* light gradient base */
    linear-gradient(135deg, rgba(120,80,180,0.16), rgba(80,55,140,0.10) 55%, rgba(255,255,255,0.65)),
    /* pixel-spray (no grid): sparse speckles */
    radial-gradient(circle at 18% 35%, rgba(120,80,180,0.14) 0 1.4px, transparent 2px),
    radial-gradient(circle at 26% 62%, rgba(80,55,140,0.12) 0 1.2px, transparent 2px),
    radial-gradient(circle at 42% 28%, rgba(120,80,180,0.10) 0 1.1px, transparent 2px),
    radial-gradient(circle at 61% 44%, rgba(80,55,140,0.12) 0 1.3px, transparent 2px),
    radial-gradient(circle at 72% 70%, rgba(120,80,180,0.10) 0 1.1px, transparent 2px),
    radial-gradient(circle at 86% 32%, rgba(120,80,180,0.08) 0 1.1px, transparent 2px);
  background-size:
    auto,
    60px 60px,
    74px 74px,
    86px 86px,
    92px 92px,
    98px 98px,
    104px 104px,
    110px 110px;
  background-blend-mode: normal, normal, normal, normal, normal, normal, normal;
}

.gt-tab.gt-active::after {
  content: '';
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: -2px;
  height: 3px;
  background: linear-gradient(90deg, rgba(120,80,180,0.0), rgba(120,80,180,0.55), rgba(80,55,140,0.0));
  border-radius: 999px;
}
`;

export default function GradientTabs({
  tabs,
  activeId,
  onChange,
  ariaLabel = 'Tabs',
  className = '',
  style,
}) {
  return (
    <>
      <style>{CSS}</style>
      <nav className={`gt-tabs ${className}`} aria-label={ariaLabel} style={style}>
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`gt-tab${t.id === activeId ? ' gt-active' : ''} mt-4`}
            onClick={() => onChange(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>
    </>
  );
}

