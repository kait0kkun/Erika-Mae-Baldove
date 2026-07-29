import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type HairColor = 'gray' | 'red' | 'blue';

interface ThemeContextType {
  hairColor: HairColor;
  cycleHairColor: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeColors {
  primary: string;
  secondary: string;
  bgDark: string;
  bgCard: string;
  textMuted: string;
}

const COLORS: Record<HairColor, ThemeColors> = {
  gray: { primary: '#8c8c8c', secondary: '#b3b3b3', bgDark: '#161616', bgCard: '#2d2d2d', textMuted: '#cccccc' },
  red: { primary: '#e63946', secondary: '#ff7eb3', bgDark: '#1a0f14', bgCard: '#2d1822', textMuted: '#e2c2cd' },
  blue: { primary: '#2a85ff', secondary: '#7eb3ff', bgDark: '#0f141f', bgCard: '#182233', textMuted: '#c2d2e8' },
};

const CYCLE: HairColor[] = ['gray', 'red', 'blue'];

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [hairColor, setHairColor] = useState<HairColor>('red');

  const cycleHairColor = () => {
    setHairColor((prev) => {
      const idx = CYCLE.indexOf(prev);
      return CYCLE[(idx + 1) % CYCLE.length];
    });
  };

  useEffect(() => {
    const colors = COLORS[hairColor];
    const root = document.documentElement;
    root.style.setProperty('--primary', colors.primary);
    root.style.setProperty('--secondary', colors.secondary);
    root.style.setProperty('--bg-dark', colors.bgDark);
    root.style.setProperty('--bg-card', colors.bgCard);
    root.style.setProperty('--text-muted', colors.textMuted);
    root.style.setProperty('--primary-glow', `${colors.primary}66`);
    root.style.setProperty('--border', `${colors.primary}26`);
  }, [hairColor]);

  return (
    <ThemeContext.Provider value={{ hairColor, cycleHairColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
