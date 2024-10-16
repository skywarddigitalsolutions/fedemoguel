"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { User, BicepsFlexed, PersonStanding, NotepadText, Home } from "lucide-react";

export function NavBar() {
  const navItems = [
    {
      link: "#",
      icon: <Home />,
    },
    {
      link: "#Comunidad",
      icon: <BicepsFlexed />,
    },
    {
      link: "#Sobremi",
      icon: <PersonStanding />,
    },
    {
      link: "#Planes",
      icon: <NotepadText />,
    },
    {
      link: "#Testimonio",
      icon: <User />,
    }
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
