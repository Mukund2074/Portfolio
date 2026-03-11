import React, { useEffect } from 'react';

const OPTIONS = [
  { id: 'off', label: 'Off' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'splatter', label: 'Splatter' },
  { id: 'particles', label: 'Particles' },
  { id: 'streak', label: 'Streak' },
  { id: 'drip', label: 'Drip' },
  { id: 'geo', label: 'Geo' },
  { id: 'pulse', label: 'Pulse' },
  { id: 'glow', label: 'Glow' },
  { id: 'spark', label: 'Spark' },
  { id: 'orbit', label: 'Orbit' },
  { id: 'dust', label: 'Dust' },
  { id: 'trail', label: 'Trail' },
];

export default function CursorFollowerSettingsModal({ open, mode, onClose, onSelect }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="cfm-backdrop" role="dialog" aria-modal="true" aria-label="Cursor follower settings" onMouseDown={onClose}>
      <div className="cfm-modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="cfm-head">
          <div>
            <div className="cfm-title">Cursor follower</div>
            <div className="cfm-sub">Choose a style for the whole site.</div>
          </div>
          <button type="button" className="cfm-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        <div className="cfm-grid">
          {OPTIONS.map((o) => (
            <button
              key={o.id}
              type="button"
              className={`cfm-btn${o.id === mode ? ' active' : ''}`}
              onClick={() => onSelect?.(o.id)}
            >
              {o.label}
            </button>
          ))}
        </div>

        <div className="cfm-foot">
          <span>Tip: press <kbd>Esc</kbd> to close.</span>
        </div>
      </div>
    </div>
  );
}

