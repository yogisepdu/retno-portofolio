"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">Education</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Pendidikan</h2>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-3xl border border-white/10 bg-white/[0.05] p-7 md:p-9"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                <GraduationCap />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Diploma 3 Teknik Informatika</h3>
                <p className="mt-1 text-slate-400">Politeknik Kampar · Kampar</p>
              </div>
            </div>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">Oct 2022 – Oct 2025</span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <p className="text-sm text-slate-400">GPA</p>
              <p className="mt-1 text-2xl font-bold">3.57 / 4.00</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <p className="text-sm text-slate-400">Focus Areas</p>
              <p className="mt-1 text-sm leading-6 text-slate-300">Programming, jaringan komputer, basis data, aplikasi perkantoran, dan UI.</p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-400">
            Aktif dalam organisasi Himpunan Mahasiswa Teknik Informatika, melakukan praktik kerja lapangan,
            serta mengikuti pelatihan dan seminar terkait teknologi informasi, aplikasi perkantoran,
            web development, dan desain grafis.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
