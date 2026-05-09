// Path: src/theme/ThemeContext.tsx

import React, { createContext, useContext, ReactNode } from 'react';

/**
 * KitchenOS Theme Engine
 * Focus: Premium ambient smart kitchen dashboard aesthetics. 
 */
interface ThemeContextType {
  glassClass: string;   // Standardized glassmorphism (Blur/Border/Depth) 
  ambientGlow: string;  // Premium ambient lighting effects 
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Requirement: Glassmorphism, blur, and layered depth. 
  const glassClass = "backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-500";
  
  const ambientGlow = "absolute rounded-full blur-[120px] opacity-25 pointer-events-none";

  return (
    <ThemeContext.Provider value={{ glassClass, ambientGlow }}>
      <div className="min-h-screen bg-[#050505] text-white font-sans antialiased">
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};