"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-5 pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
            Administration • Information Technology • UI Design
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Retno Anggraini
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Lulusan D3 Teknik Informatika dengan pengalaman di bidang
            administrasi, pengolahan data, sistem informasi, dan perancangan
            antarmuka website modern.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              Lihat Pengalaman <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              Hubungi Saya <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-slate-400">
            <MapPin size={16} className="text-violet-300" />
            Rantau Prapat, Indonesia
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-violet-950/30 backdrop-blur-xl">
            <div className="relative aspect-square overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-violet-500/20 via-slate-900 to-cyan-500/10">
              <Image
                src="/images/profile/retno-anggraini.jpg"
                alt="Retno Anggraini"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 380px"
              />

              {/* Overlay tipis agar tetap menyatu dengan desain */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
