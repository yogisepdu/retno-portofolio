"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/15 via-white/[0.05] to-cyan-500/10 p-8 md:p-12"
      >
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">Contact</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-5xl">Mari terhubung dan bekerja bersama.</h2>
        <p className="mt-5 max-w-2xl leading-7 text-slate-300">
          Untuk peluang kerja, kolaborasi, atau kebutuhan profesional lainnya, silakan hubungi saya melalui informasi berikut.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <a href="mailto:retnoanggraini535@gmail.com" className="rounded-2xl border border-white/10 bg-slate-950/30 p-5 transition hover:bg-white/10">
            <Mail size={19} className="text-violet-300" />
            <p className="mt-3 text-xs text-slate-500">Email</p>
            <p className="mt-1 break-all text-sm">retnoanggraini535@gmail.com</p>
          </a>
          <a href="https://www.linkedin.com/in/retno-anggraini-2957542a2" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-slate-950/30 p-5 transition hover:bg-white/10">
            <Linkedin size={19} className="text-cyan-300" />
            <p className="mt-3 text-xs text-slate-500">LinkedIn</p>
            <p className="mt-1 text-sm">Retno Anggraini</p>
          </a>
          <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-5">
            <MapPin size={19} className="text-fuchsia-300" />
            <p className="mt-3 text-xs text-slate-500">Location</p>
            <p className="mt-1 text-sm">Rantau Prapat</p>
          </div>
        </div>

        <a href="mailto:retnoanggraini535@gmail.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950">
          Send an Email <ArrowUpRight size={16} />
        </a>
      </motion.div>
    </section>
  );
}
