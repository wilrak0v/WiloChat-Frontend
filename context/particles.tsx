"use client";

import { createContext, useContext, useState } from "react";

const ParticlesContext = createContext();

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
