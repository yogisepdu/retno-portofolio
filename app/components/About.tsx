"use client";

import { motion } from "framer-motion";
import { Database, Layout, ClipboardCheck, Users } from "lucide-react";

const highlights = [
  { icon: ClipboardCheck, title: "Administrasi", text: "Dokumen, arsip, input, validasi data, dan administrasi keuangan." },
  { icon: Database, title: "Data & Sistem", text: "Pengolahan data dan pemanfaatan sistem informasi dalam pekerjaan." },
  { icon: Layout, title: "UI Design", text: "Perancangan antarmuka website menggunakan Figma dengan pendekatan modern." },
  { icon: Users, title: "Kolaborasi", text: "Komunikatif, kolaboratif, disiplin, adaptif, dan teliti." },
];

export default function About() {
  return (
    <section id="about" className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">About Me</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Administrasi yang didukung pemahaman teknologi.</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
            Saya merupakan lulusan Diploma 3 Teknik Informatika dengan pengalaman di bidang administrasi,
            pengolahan data, pemanfaatan sistem informasi, serta perancangan antarmuka website menggunakan Figma.
            Saya tertarik berkarier di bidang administrasi maupun desain dengan tujuan memberikan kontribusi optimal
            melalui kerja yang terstruktur dan efisien.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur"
              >
                <Icon className="text-violet-300" size={24} />
                <h3 className="mt-5 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
