"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
export function NavBar() {
  const navItems = [
    {
      name: "Inicio",
      link: "#",
    },
    {
      name: "Comunidad",
      link: "#Comunidad",
    },
    {
      name: "Sobre mi",
      link: "#Sobremi",
     
    },
    {
      name: "Planes",
      link: "#Planes",
    },
    {
      name: "Kickboxing",
      link: "#Kickboxing",
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}