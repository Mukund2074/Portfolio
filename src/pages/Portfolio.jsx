import React, { useState } from 'react';
import GradientTabs from '../components/GradientTabs';

const PROJECTS = [
  {
    name: 'PLAYOO',
    sub: 'Self-learned Next.js fullstack — gaming lounge booking + stores listing',
    to: 'https://playoo.vercel.app/',
    img: 'assets/imgs/playoo-preview.png',
    cat: 'Next.js',
  },
  {
    name: 'BAHLOU (FIIND)',
    sub: 'Xmatiq-built Next.js frontend — salon booking marketplace (search + categories)',
    to: 'https://mp-dev.fiind.app/',
    img: 'https://mp-dev.fiind.app/_next/static/media/banner.e8172494.png',
    cat: 'Next.js',
  },
  { name: 'BLAZEBOX', sub: 'Video Streaming Platform', to: 'https://blazebox.netlify.app/', img: 'assets/imgs/blazebox.png', cat: 'Next.js' },
  { name: 'SMART PARKING SYSTEM', sub: 'Full Stack IoT Project', to: 'https://sps-user.netlify.app/', img: '/assets/imgs/spsuser.png', cat: 'IoT' },
  { name: 'SPS ADMIN PANEL', sub: 'Full Stack IoT — Admin Side', to: 'https://sps-admin-panel.netlify.app', img: '/assets/imgs/spsadmin.png', cat: 'IoT' },
  { name: 'ANIMATION PORTFOLIO', sub: 'Portfolio with Animations', to: 'https://pratik-mehta-portfolio.netlify.app/', img: '/assets/imgs/Portfolio-Pratik.png', cat: 'Portfolio' },
  { name: 'GAME CENTER', sub: 'Mini Games built in JS', to: 'https://game-center-by-mukund.netlify.app/', img: 'assets/imgs/gamecenter.png', cat: 'React' },
  { name: 'TODO WEB PROJECT', sub: 'React Hooks + Tailwind CSS', to: 'https://todobymuku.netlify.app/', img: 'assets/imgs/todo.png', cat: 'React' },
  { name: 'DAILYBURST', sub: 'Live News API Project', to: 'https://dailyburstnews.netlify.app/', img: 'assets/imgs/dailyburst.png', cat: 'React' },
  { name: 'DAILYBURST APP', sub: 'React Native News App', to: 'https://github.com/Mukund2074/dailyburstApp', img: 'https://img.freepik.com/free-vector/modern-coming-soon-poster-with-stay-tuned-message_1017-39310.jpg', cat: 'React Native' },
  { name: 'PORTFOLIO TEMPLATE', sub: 'Self-made Design', to: 'https://portfoliotemplatemuku.netlify.app/', img: 'https://static.vecteezy.com/system/resources/previews/004/467/266/non_2x/portfolio-sketch-neon-icon-simple-thin-line-outline-of-education-icons-for-ui-and-ux-website-or-mobile-application-isolated-on-brick-wall-vector.jpg', cat: 'Portfolio' },
  { name: 'ASTUTE INFOSOL ADMIN', sub: 'React JS Admin Panel', to: '#', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlCUnNO6Xap2bDv6UKzGJtPNvsZdyGLYtEA&s', cat: 'React' },
  { name: 'CANNY CASTER', sub: 'Tailwind + React at Astute', to: '#', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlCUnNO6Xap2bDv6UKzGJtPNvsZdyGLYtEA&s', cat: 'React' },
];

const CATS = ['All', ...new Set(PROJECTS.map(p => p.cat))];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Baloo+Paaji+2:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

  .pf-root {
    position: relative;
    padding: 5rem 0 4rem;
    background: linear-gradient(180deg, #fff 0%, rgba(105,90,166,0.18) 100%);
    background-color: #faf8ff;
    font-family: 'Baloo Paaji 2', sans-serif;
    color: #2a1f3d;
    overflow: hidden;
  }

  .pf-root,
  .pf-root *,
  .pf-root *::before,
  .pf-root *::after {
    box-sizing: border-box;
  }

  .pf-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    position: relative;
  }

  /* Header */
  .pf-eyebrow {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #6c757d;
    margin-bottom: 8px;
  }

  .pf-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(60px, 10vw, 110px);
    line-height: 0.88;
    color: #2a1f3d;
    margin-bottom: 0;
    max-width: 100%;
    overflow-wrap: anywhere;
  }

  .pf-title em {
    font-style: normal;
    color: transparent;
    -webkit-text-stroke: 2px rgba(120,80,180,0.7);
  }

  @media (max-width: 480px) {
    .pf-inner { padding: 0 16px; }
    .pf-title {
      font-size: 54px;
      line-height: 0.9;
    }
    .pf-title em { -webkit-text-stroke: 1.5px rgba(120,80,180,0.65); }
  }

  .pf-rule {
    height: 1px;
    background: linear-gradient(90deg, rgba(120,80,180,0.55) 0%, transparent 60%);
    margin: 28px 0;
  }

  /* Filter tabs wrapper (actual tabs are shared component) */
  .pf-filters {
    margin-bottom: 48px;
  }

  /* Grid */
  .pf-grid {
    display: grid;
    grid-template-columns: 1fr 390px;
    gap: 64px;
    min-height: 520px;
  }

  /* List */
  .pf-list {
    display: flex;
    flex-direction: column;
    max-height: 520px; /* match spotlight height */
    overflow: auto;
    padding-right: 10px; /* space for scrollbar */
    scrollbar-width: thin;
  }

  .pf-list::-webkit-scrollbar { width: 8px; }
  .pf-list::-webkit-scrollbar-thumb {
    background: rgba(120,80,180,0.22);
    border-radius: 999px;
  }
  .pf-list::-webkit-scrollbar-track { background: transparent; }

  .pf-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 14px 0;
    border-bottom: 1px solid rgba(120,80,180,0.13);
    cursor: pointer;
    transition: transform 0.3s cubic-bezier(.4,0,.2,1), border-color 0.2s;
    opacity: 0;
    transform: translateX(-16px);
    animation: pfSlide 0.45s forwards;
  }

  @keyframes pfSlide {
    to { opacity: 1; transform: translateX(0); }
  }

  .pf-item:hover { transform: translateX(10px); border-color: rgba(120,80,180,0.45); }
  .pf-item.lit   { border-color: rgba(120,80,180,0.45); }
  .pf-item.lit .pf-item-name { color: #2a1f3d; font-weight: 700; }
  .pf-item.lit .pf-item-idx  { opacity: 1; }

  .pf-item-idx {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    color: rgba(120,80,180,0.8);
    opacity: 0.35;
    transition: opacity 0.2s;
    flex-shrink: 0;
    width: 24px;
  }

  .pf-item-thumb {
    width: 48px; height: 36px;
    border-radius: 6px;
    border: 1px solid rgba(120,80,180,0.13);
    object-fit: cover;
    flex-shrink: 0;
    transition: border-color 0.2s, box-shadow 0.2s;
    background: rgba(255,255,255,0.7);
  }

  .pf-item:hover .pf-item-thumb,
  .pf-item.lit .pf-item-thumb {
    border-color: rgba(120,80,180,0.45);
    box-shadow: 0 2px 10px rgba(120,80,180,0.15);
  }

  .pf-item-text { flex: 1; min-width: 0; }

  .pf-item-name {
    font-size: clamp(16px, 2.2vw, 24px);
    font-weight: 400;
    color: #9580b8;
    transition: color 0.25s, font-weight 0.25s;
    line-height: 1.1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .pf-item:hover .pf-item-name { color: #4a3570; }

  .pf-item-sub {
    font-size: 11px;
    color: #6c757d;
    margin-top: 2px;
    opacity: 0;
    transition: opacity 0.25s;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .pf-item:hover .pf-item-sub,
  .pf-item.lit .pf-item-sub { opacity: 1; }

  .pf-item-cat {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgba(120,80,180,0.7);
    background: linear-gradient(135deg, rgba(120,80,180,0.1), rgba(80,50,140,0.12));
    border: 1px solid rgba(120,80,180,0.15);
    border-radius: 4px;
    padding: 2px 8px;
    flex-shrink: 0;
    white-space: nowrap;
  }

  .pf-item-arrow {
    font-size: 16px;
    color: rgba(120,80,180,0.7);
    opacity: 0;
    transform: translateX(-8px);
    transition: opacity 0.2s, transform 0.2s;
    flex-shrink: 0;
  }

  .pf-item:hover .pf-item-arrow,
  .pf-item.lit .pf-item-arrow { opacity: 1; transform: translateX(0); }

  /* Mobile inline details */
  .pf-mobile-details {
    display: none;
    margin: 10px 0 6px;
    width: 100%;
    padding: 14px 14px;
    background: rgba(255,255,255,0.92);
    border: 1px solid rgba(120,80,180,0.14);
    border-radius: 14px;
    box-shadow: 0 10px 26px rgba(120,80,180,0.10);
    color: #6c757d;
    animation: pfFadeIn 0.25s ease;
  }

  .pf-mobile-thumb {
    width: 100%;
    height: 160px;
    border-radius: 12px;
    object-fit: cover;
    border: 1px solid rgba(120,80,180,0.15);
    background: rgba(255,255,255,0.7);
    margin-bottom: 10px;
  }

  .pf-mobile-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 26px;
    line-height: 1.05;
    margin: 0 0 6px;
    color: #2a1f3d;
  }

  .pf-mobile-sub {
    margin: 0 0 12px;
    font-size: 12px;
    line-height: 1.65;
  }

  .pf-mobile-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, rgba(120,80,180,0.9), rgba(80,55,140,0.95));
    color: #fff;
    text-decoration: none;
    font-family: 'Baloo Paaji 2', sans-serif;
    font-size: 12px;
    font-weight: 600;
    padding: 8px 18px;
    border-radius: 100px;
    transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 14px rgba(120,80,180,0.25);
  }

  .pf-mobile-btn.disabled {
    opacity: 0.35;
    pointer-events: none;
  }

  @keyframes pfFadeIn {
    from { opacity: 0; transform: translateY(-6px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Spotlight panel */
  .pf-spotlight {
    position: sticky;
    top: 60px;
    height: 520px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pf-panel {
    width: 100%;
    height: 100%;
    border: 1px solid rgba(120,80,180,0.18);
    border-radius: 28px;
    background: rgba(255,255,255,0.6);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 32px 28px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 40px rgba(120,80,180,0.08), inset 0 1px 0 rgba(255,255,255,0.8);
  }

  .pf-panel::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 40%, rgba(120,80,180,0.06) 0%, transparent 65%);
    pointer-events: none;
  }

  .pf-panel::after {
    content: '';
    position: absolute;
    top: 0; left: 20%; right: 20%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(120,80,180,0.4), transparent);
  }

  .pf-orbit {
    position: absolute;
    width: 200px; height: 200px;
    border-radius: 50%;
    border: 1px dashed rgba(120,80,180,0.12);
    top: 42%; left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    animation: pfOrbit 22s linear infinite;
    pointer-events: none;
  }

  .pf-orbit::before {
    content: '';
    position: absolute;
    width: 8px; height: 8px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(120,80,180,0.9), rgba(80,50,140,0.95));
    top: -4px; left: 50%;
    margin-left: -4px;
    box-shadow: 0 0 10px rgba(120,80,180,0.5);
  }

  @keyframes pfOrbit {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to   { transform: translate(-50%, -50%) rotate(360deg); }
  }

  .pf-corner {
    position: absolute;
    width: 14px; height: 14px;
    border-color: rgba(120,80,180,0.22);
    border-style: solid;
  }
  .pf-corner-tl { top: 14px; left: 14px; border-width: 1px 0 0 1px; }
  .pf-corner-tr { top: 14px; right: 14px; border-width: 1px 1px 0 0; }
  .pf-corner-bl { bottom: 14px; left: 14px; border-width: 0 0 1px 1px; }
  .pf-corner-br { bottom: 14px; right: 14px; border-width: 0 1px 1px 0; }

  .pf-sp-img-wrap {
    width: 100%;
    height: 175px;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid rgba(120,80,180,0.15);
    box-shadow: 0 4px 24px rgba(120,80,180,0.1);
    margin-bottom: 18px;
    flex-shrink: 0;
    z-index: 1;
  }

  .pf-sp-img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.175,0.885,0.32,1.275), opacity 0.3s;
  }

  .pf-sp-tag {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(120,80,180,0.8);
    display: inline-block;
    padding: 2px 10px;
    background: linear-gradient(135deg, rgba(120,80,180,0.12), rgba(80,50,140,0.15));
    border-radius: 6px;
    border: 1px solid rgba(120,80,180,0.18);
    margin-bottom: 10px;
    z-index: 1;
  }

  .pf-sp-name {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 30px;
    color: #2a1f3d;
    line-height: 1.05;
    margin-bottom: 8px;
    z-index: 1;
    transition: opacity 0.3s;
  }

  .pf-sp-desc {
    font-size: 12px;
    line-height: 1.7;
    color: #6c757d;
    margin-bottom: 18px;
    z-index: 1;
    transition: opacity 0.3s;
  }

  .pf-sp-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, rgba(120,80,180,0.9), rgba(80,55,140,0.95));
    color: #fff;
    text-decoration: none;
    font-family: 'Baloo Paaji 2', sans-serif;
    font-size: 12px;
    font-weight: 600;
    padding: 8px 20px;
    border-radius: 100px;
    z-index: 1;
    transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 14px rgba(120,80,180,0.3);
  }

  .pf-sp-btn:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(120,80,180,0.4);
    color: #fff;
    text-decoration: none;
  }

  .pf-sp-btn.disabled {
    opacity: 0.35;
    pointer-events: none;
  }

  /* Marquee */
  .pf-marquee {
    margin-top: 60px;
    padding-top: 20px;
    border-top: 1px solid rgba(120,80,180,0.13);
    overflow: hidden;
    display: flex;
    -webkit-mask: linear-gradient(90deg, transparent, #fff 8%, #fff 92%, transparent);
  }

  .pf-marquee-track {
    display: flex;
    gap: 36px;
    animation: pfMarquee 35s linear infinite;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .pf-marquee-track:nth-child(2) { animation-delay: -17.5s; }

  @keyframes pfMarquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  .pf-m-item {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(120,80,180,0.3);
    font-family: 'Space Mono', monospace;
  }

  .pf-m-sep { width: 3px; height: 3px; border-radius: 50%; background: rgba(120,80,180,0.18); }

  @media (max-width: 860px) {
    .pf-grid { grid-template-columns: 1fr; }
    .pf-spotlight { display: none; }
    .pf-item-cat { display: none; }
    .pf-item { flex-wrap: wrap; }
    .pf-mobile-details { display: block; }
    .pf-item:hover { transform: translateX(0); }
    .pf-item-arrow { opacity: 0.35; transform: translateX(0); }
    .pf-mobile-details { max-width: 100%; }
    .pf-mobile-sub { overflow-wrap: anywhere; }
    .pf-list { max-height: none; overflow: visible; padding-right: 0; }

    /* prevent row overflow on small screens */
    .pf-item { width: 100%; max-width: 100%; overflow: hidden; gap: 12px; }
    .pf-item-idx { width: 22px; }
    .pf-item-thumb { width: 44px; height: 34px; }
    .pf-item-text { min-width: 0; flex: 1 1 0; }
    .pf-item-name,
    .pf-item-sub {
      white-space: normal;
      overflow: visible;
      text-overflow: unset;
      word-break: break-word;
    }
  }
`;

export default function Portfolio({ ProjectRef }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lit, setLit] = useState(0);
  const [spotlight, setSpotlight] = useState(PROJECTS[0]);
  const [animating, setAnimating] = useState(false);
  const [selectedItem, setSelectedItem] = useState(PROJECTS[0]);

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.cat === activeFilter);

  function handleHover(item, i) {
    if (spotlight === item) return;
    setAnimating(true);
    setLit(i);
    setTimeout(() => {
      setSpotlight(item);
      setAnimating(false);
    }, 160);
  }

  function handleSelect(item, i) {
    setSelectedItem(item);
    setLit(i);
    if (spotlight !== item) {
      setSpotlight(item);
    }
  }

  function handleFilter(cat) {
    setActiveFilter(cat);
    setLit(0);
    const next = cat === 'All' ? PROJECTS[0] : PROJECTS.find(p => p.cat === cat) || PROJECTS[0];
    setSpotlight(next);
    setSelectedItem(next);
  }

  const marqueeItems = [...PROJECTS, ...PROJECTS];

  return (
    <div ref={ProjectRef}>
      <style>{CSS}</style>
      <section className="pf-root grid-bg" id="portfolio">
        <div className="pf-inner">

          {/* Header */}
          <p className="pf-eyebrow">{'// what I built'}</p>
          <h2 className="pf-title">MY<br /><em>WORK</em></h2>
          <div className="pf-rule" />

          {/* Filters */}
          <div className="pf-filters">
            <GradientTabs
              tabs={CATS.map((c) => ({ id: c, label: c }))}
              activeId={activeFilter}
              onChange={handleFilter}
              ariaLabel="Project filters"
              style={{
                marginBottom: 0,
                borderBottomColor: 'rgba(120,80,180,0.13)',
              }}
            />
          </div>

          {/* Main grid */}
          <div className="pf-grid">

            {/* List */}
            <div className="pf-list">
              {filtered.map((item, i) => (
                <div
                  key={item.name}
                  className={`pf-item${lit === i ? ' lit' : ''}`}
                  style={{ animationDelay: `${i * 45}ms` }}
                  onMouseEnter={() => handleHover(item, i)}
                  onClick={() => handleSelect(item, i)}
                >
                  <span className="pf-item-idx">0{i + 1 > 9 ? '' : '0'}{i + 1 > 9 ? i + 1 : i + 1}</span>
                  <img
                    className="pf-item-thumb"
                    src={item.img}
                    alt={item.name}
                    onError={e => { e.target.style.opacity = '0'; }}
                  />
                  <div className="pf-item-text">
                    <div className="pf-item-name">{item.name}</div>
                    <div className="pf-item-sub">{item.sub}</div>
                  </div>
                  <span className="pf-item-cat">{item.cat}</span>
                  <span className="pf-item-arrow">→</span>

                  {/* Mobile-only: inline details (since sticky spotlight is hidden) */}
                  {selectedItem?.name === item.name && (
                    <div className="pf-mobile-details">
                      <img
                        className="pf-mobile-thumb"
                        src={item.img}
                        alt={item.name}
                        loading="lazy"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      <div className="pf-mobile-title">{item.name}</div>
                      <p className="pf-mobile-sub">{item.sub}</p>
                      <a
                        className={`pf-mobile-btn${item.to === '#' ? ' disabled' : ''}`}
                        href={item.to}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Project →
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Spotlight */}
            <div className="pf-spotlight">
              <div className="pf-panel">
                <div className="pf-corner pf-corner-tl" />
                <div className="pf-corner pf-corner-tr" />
                <div className="pf-corner pf-corner-bl" />
                <div className="pf-corner pf-corner-br" />
                <div className="pf-orbit" />

                <div className="pf-sp-img-wrap">
                  <img
                    className="pf-sp-img"
                    src={spotlight.img}
                    alt={spotlight.name}
                    style={{
                      transform: animating ? 'scale(0.92)' : 'scale(1)',
                      opacity: animating ? 0 : 1,
                    }}
                  />
                </div>

                <div className="pf-sp-tag">{spotlight.cat}</div>
                <div
                  className="pf-sp-name"
                  style={{ opacity: animating ? 0 : 1 }}
                >
                  {spotlight.name}
                </div>
                <p
                  className="pf-sp-desc"
                  style={{ opacity: animating ? 0 : 1 }}
                >
                  {spotlight.sub}
                </p>
                <a
                  className={`pf-sp-btn${spotlight.to === '#' ? ' disabled' : ''}`}
                  href={spotlight.to}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project →
                </a>
              </div>
            </div>
          </div>

          {/* Marquee */}
          <div className="pf-marquee">
            {[0, 1].map(t => (
              <div className="pf-marquee-track" key={t}>
                {marqueeItems.map((item, i) => (
                  <span className="pf-m-item" key={i}>
                    {item.name}
                    <span className="pf-m-sep" />
                  </span>
                ))}
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}