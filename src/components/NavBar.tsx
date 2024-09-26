"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function NavBar() {
  const navItems = [
    {
      name: "Inicio",
      link: "#",
    },
    {
      name: "Planes",
      link: "#Planes",
    },
    {
      name: "Sobre mi",
      link: "#Sobremi",
     
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}