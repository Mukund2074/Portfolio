import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import CursorFollower from './CursorFollower';
import CursorFollowerSettingsModal from './CursorFollowerSettingsModal';

const STORAGE_KEY = 'cursorFollowerMode';

const CursorFollowerContext = createContext(null);

export function CursorFollowerProvider({ children }) {
  const [mode, setModeState] = useState('cloud');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setModeState(saved);
    } catch {
      // ignore
    }
  }, []);

  const setMode = useCallback((next) => {
    setModeState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo(() => ({
    mode,
    setMode,
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((v) => !v),
  }), [mode, setMode, isOpen]);

  return (
    <CursorFollowerContext.Provider value={value}>
      {children}
      <CursorFollower mode={mode} />
      <CursorFollowerSettingsModal
        open={isOpen}
        mode={mode}
        onClose={() => setIsOpen(false)}
        onSelect={(m) => {
          setMode(m);
          setIsOpen(false);
        }}
      />
    </CursorFollowerContext.Provider>
  );
}

export function useCursorFollower() {
  const ctx = useContext(CursorFollowerContext);
  if (!ctx) {
    throw new Error('useCursorFollower must be used within CursorFollowerProvider');
  }
  return ctx;
}

