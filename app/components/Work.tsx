"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Database, Figma } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
          Selected Work
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Proyek</h2>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03]"
        >
          <div className="grid lg:grid-cols-[1fr_.9fr]">
            <div className="min-h-[330px] bg-gradient-to-br from-violet-500/20 via-slate-900 to-cyan-500/10 p-8 md:p-12">
              <Link
                href="https://www.linkedin.com/in/retno-anggraini-2957542a2"
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="relative h-full min-h-[330px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/30">
                  <Image
                    src="/images/projects/earsip.png"
                    alt="E-Arsip Management System - Retno Anggraini"
                    fill
                    className="object-cover object-center transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 transition duration-300 group-hover:opacity-90" />

                  {/* Project information */}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-300">
                          Tugas Akhir
                        </p>

                        <p className="mt-2 text-lg font-semibold text-white">
                          E-Arsip Management System
                        </p>

                        <p className="mt-1 text-sm text-slate-300">
                          Digital Archive Management
                        </p>
                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition duration-300 group-hover:bg-white group-hover:text-slate-950">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Hover label */}
                  <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-xs text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                    View on LinkedIn
                  </div>
                </div>
              </Link>
            </div>

            <div className="p-8 md:p-12">
              <p className="text-sm text-violet-300">Tugas Akhir</p>
              <h3 className="mt-2 text-2xl font-bold">Sistem E-Arsip</h3>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                Sistem pengarsipan digital untuk membantu kebutuhan manajemen
                dokumen yang lebih efisien. Proyek mencakup perancangan UI dan
                pengembangan aplikasi berbasis web.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 p-4">
                  <Figma size={18} className="text-violet-300" />
                  <p className="mt-2 text-xs text-slate-400">UI Design</p>
                  <p className="mt-1 text-sm">Figma</p>
                </div>
                <div className="rounded-2xl border border-white/10 p-4">
                  <Code2Icon />
                  <p className="mt-2 text-xs text-slate-400">Development</p>
                  <p className="mt-1 text-sm">HTML · CSS · Laravel</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["HTML", "CSS", "Laravel", "MySQL", "Figma"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

function Code2Icon() {
  return <Database size={18} className="text-cyan-300" />;
}
