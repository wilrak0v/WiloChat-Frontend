"use client";

import { createContext, useContext, useState } from "react";

type ParticlesContextType = {
  enabled: boolean;
  setEnabled: (value: boolean) => void;
};

const ParticlesContext = createContext<ParticlesContextType | null>(null);

export function ParticlesProvider({ children }) {
  const [enabled, setEnabled] = useState(true);

  return (
    <ParticlesContext.Provider value={{ enabled, setEnabled }}>
      {children}
    </ParticlesContext.Provider>
  );
}

export function useParticles() {
  return useContext(ParticlesContext);
}
