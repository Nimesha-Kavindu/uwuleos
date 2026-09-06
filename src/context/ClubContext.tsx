"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { CLUBS_DATA, ClubConfig } from "@/config/club.config";

interface ClubContextType {
  activeClubId: string;
  club: ClubConfig;
  setClubId: (id: string) => void;
  availableClubs: { id: string; name: string; shortName: string; district: string }[];
}

const ClubContext = createContext<ClubContextType | undefined>(undefined);

export function ClubProvider({ children }: { children: ReactNode }) {
  const [activeClubId, setActiveClubId] = useState<string>("leo-uwu");

  const club = CLUBS_DATA[activeClubId] || CLUBS_DATA["leo-uwu"];

  const availableClubs = Object.values(CLUBS_DATA).map((c) => ({
    id: c.id,
    name: c.name,
    shortName: c.shortName,
    district: c.district,
  }));

  const setClubId = (id: string) => {
    if (CLUBS_DATA[id]) {
      setActiveClubId(id);
    }
  };

  return (
    <ClubContext.Provider value={{ activeClubId, club, setClubId, availableClubs }}>
      {children}
    </ClubContext.Provider>
  );
}

export function useClub() {
  const context = useContext(ClubContext);
  if (!context) {
    throw new Error("useClub must be used within a ClubProvider");
  }
  return context;
}
