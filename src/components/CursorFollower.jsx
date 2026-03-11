import React, { useEffect, useMemo, useRef } from 'react';

const MODES = new Set([
  'off',
  'cloud',
  'splatter',
  'particles',
  'streak',
  'drip',
  'geo',
  'pulse',
  'glow',
  'spark',
  'orbit',
  'dust',
  'trail',
]);

function canRun(mode) {
  if (!mode || mode === 'off') return false;
  if (typeof window === 'undefined') return false;
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return false;
  return true;
}

export default function CursorFollower({ mode = 'cloud' }) {
  const containerRef = useRef(null);
  const cloud1Ref = useRef(null);
  const cloud2Ref = useRef(null);

  const normalizedMode = useMemo(() => (MODES.has(mode) ? mode : 'cloud'), [mode]);

  useEffect(() => {
    if (!canRun(normalizedMode)) return;

    let rafId = 0;
    let lastSpawn = 0;
    let lastX = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const ensureContainer = () => {
      if (containerRef.current) return containerRef.current;
      return null;
    };

    const spawn = (kind, opts) => {
      const root = ensureContainer();
      if (!root) return;

      const el = document.createElement('div');
      el.className = kind;
      if (opts?.size) {
        el.style.width = `${opts.size}px`;
        el.style.height = `${opts.size}px`;
      }
      el.style.left = `${opts.left}px`;
      el.style.top = `${opts.top}px`;
      if (opts?.width) el.style.width = `${opts.width}px`;
      if (opts?.height) el.style.height = `${opts.height}px`;
      if (opts?.anim) el.style.animation = opts.anim;

      root.appendChild(el);

      const ttl = opts?.ttl ?? 900;
      window.setTimeout(() => {
        try { el.remove(); } catch { /* ignore */ }
      }, ttl);

      // keep DOM under control
      if (root.childNodes.length > 70) {
        for (let i = 0; i < 15; i += 1) {
          const n = root.firstChild;
          if (!n) break;
          root.removeChild(n);
        }
      }
    };

    const onMove = (e) => {
      if (typeof e.clientX !== 'number' || typeof e.clientY !== 'number') return;
      tx = e.clientX;
      ty = e.clientY;
    };

    const rootEl = containerRef.current;

    const loop = (t) => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;

      const c1 = cloud1Ref.current;
      const c2 = cloud2Ref.current;
      if (c1) c1.style.transform = `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0)`;
      if (c2) c2.style.transform = `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0)`;

      const dt = t - lastSpawn;
      const speed = Math.abs(tx - lastX);
      lastX = tx;

      const doSpawn = (minInterval) => dt >= minInterval;

      if (normalizedMode === 'cloud') {
        // handled by transforms only
      } else if (normalizedMode === 'splatter' && doSpawn(28)) {
        lastSpawn = t;
        spawn('cf-dot', { left: tx, top: ty, size: 10, anim: 'cf-fadeOut .8s forwards', ttl: 900 });
      } else if (normalizedMode === 'particles' && doSpawn(22)) {
        lastSpawn = t;
        if (Math.random() > 0.72) {
          spawn('cf-dot', { left: tx, top: ty, size: 6, anim: 'cf-fadeOut .7s forwards', ttl: 850 });
        }
      } else if (normalizedMode === 'streak' && doSpawn(22)) {
        lastSpawn = t;
        const w = 10 + speed * 2;
        spawn('cf-streak', { left: tx, top: ty, width: w, height: 6, anim: 'cf-fadeOut .22s forwards', ttl: 240 });
      } else if (normalizedMode === 'drip' && doSpawn(26)) {
        lastSpawn = t;
        spawn('cf-dot', { left: tx, top: ty, size: 6, anim: 'cf-dripDown 1s forwards', ttl: 1050 });
      } else if (normalizedMode === 'geo' && doSpawn(30)) {
        lastSpawn = t;
        const size = Math.random() * 10 + 8;
        spawn('cf-geo', { left: tx, top: ty, width: size, height: size, anim: 'cf-geoOut 1s forwards', ttl: 1050 });
      } else if (normalizedMode === 'pulse' && doSpawn(34)) {
        lastSpawn = t;
        spawn('cf-dot', { left: tx, top: ty, size: 12, anim: 'cf-pulse .6s forwards', ttl: 650 });
      } else if (normalizedMode === 'glow' && doSpawn(30)) {
        lastSpawn = t;
        spawn('cf-dot', { left: tx, top: ty, size: 14, anim: 'cf-fadeOut 1s forwards', ttl: 1050 });
      } else if (normalizedMode === 'spark' && doSpawn(40)) {
        lastSpawn = t;
        for (let i = 0; i < 3; i += 1) {
          spawn('cf-dot', {
            left: tx + Math.random() * 10 - 5,
            top: ty + Math.random() * 10 - 5,
            size: 4,
            anim: 'cf-fadeOut .6s forwards',
            ttl: 650,
          });
        }
      } else if (normalizedMode === 'orbit' && doSpawn(32)) {
        lastSpawn = t;
        spawn('cf-dot', { left: tx, top: ty, size: 6, anim: 'cf-geoOut 1s forwards', ttl: 1050 });
      } else if (normalizedMode === 'dust' && doSpawn(20)) {
        lastSpawn = t;
        if (Math.random() > 0.78) {
          spawn('cf-dot', { left: tx, top: ty, size: 3, anim: 'cf-fadeOut 1s forwards', ttl: 1050 });
        }
      } else if (normalizedMode === 'trail' && doSpawn(22)) {
        lastSpawn = t;
        spawn('cf-dot', { left: tx, top: ty, size: 8, anim: 'cf-fadeOut .5s forwards', ttl: 540 });
      }

      rafId = window.requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('mousemove', onMove, { passive: true });
    rafId = window.requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('mousemove', onMove);
      window.cancelAnimationFrame(rafId);
      if (rootEl) rootEl.innerHTML = '';
    };
  }, [normalizedMode]);

  if (!canRun(normalizedMode)) return null;

  const showCloud = normalizedMode === 'cloud';

  return (
    <div className="cf-root" aria-hidden="true">
      <div ref={containerRef} className="cf-spawn-layer" />
      {showCloud && (
        <>
          <div ref={cloud1Ref} className="cf-cloud cf-cloud-1" />
          <div ref={cloud2Ref} className="cf-cloud cf-cloud-2" />
        </>
      )}
    </div>
  );
}

