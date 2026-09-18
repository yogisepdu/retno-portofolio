"use client";

import { motion } from "framer-motion";
import { FileSpreadsheet, Palette, Code2, Video, HeartHandshake } from "lucide-react";

const groups = [
  { title: "Administration", icon: FileSpreadsheet, items: ["Microsoft Office", "Data Entry", "Data Validation", "Document Management", "Archiving", "Financial Administration"] },
  { title: "Design", icon: Palette, items: ["Figma", "Canva", "Adobe", "UI Design"] },
  { title: "Development", icon: Code2, items: ["HTML", "CSS", "Laravel", "MySQL"] },
  { title: "Media", icon: Video, items: ["CapCut"] },
  { title: "Soft Skills", icon: HeartHandshake, items: ["Komunikatif", "Tepat waktu", "Kolaboratif", "Problem solving", "Adaptif", "Disiplin", "Teliti"] },
];

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">Skills</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Kemampuan yang saya gunakan</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-6"
              >
                <Icon className="text-violet-300" />
                <h3 className="mt-5 font-semibold">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300">{item}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
