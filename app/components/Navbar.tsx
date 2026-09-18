"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="font-semibold tracking-tight">
          <span className="text-white">Retno </span>
          <span className="text-violet-400">Anggraini</span>
          <span className="text-violet-400">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          className="rounded-lg border border-white/10 p-2 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-300"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
