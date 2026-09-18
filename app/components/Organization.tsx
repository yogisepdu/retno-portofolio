"use client";

import { motion } from "framer-motion";
import { UsersRound } from "lucide-react";

const organizations = [
  {
    role: "Sekretaris",
    name: "Dewan Perwakilan Mahasiswa – Politeknik Kampar",
    period: "Dec 2022 – Jul 2023",
    points: [
      "Mengelola administrasi korespondensi, termasuk surat masuk, surat keluar, dan disposisi.",
      "Membantu Ketua dan anggota DPM dalam mempersiapkan agenda pertemuan dan jadwal kegiatan organisasi.",
      "Menyusun agenda rapat, undangan resmi, dan dokumen pendukung.",
    ],
  },
  {
    role: "Anggota",
    name: "Himpunan Mahasiswa Teknik Informatika – Politeknik Kampar",
    period: "Dec 2022 – Oct 2025",
    points: [
      "Berpartisipasi aktif dalam pertemuan rutin dan diskusi internal terkait program kerja.",
      "Mendukung pencapaian visi dan misi HIMATIF sebagai forum pengembangan minat, bakat, dan keterampilan profesional mahasiswa teknologi informasi.",
    ],
  },
];

export default function Organization() {
  return (
    <section id="organization" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">Organization</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Pengalaman organisasi</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {organizations.map((item, i) => (
            <motion.article key={item.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-3xl border border-white/10 bg-white/[0.05] p-7">
              <UsersRound className="text-violet-300" />
              <p className="mt-5 text-sm text-violet-300">{item.role}</p>
              <h3 className="mt-1 text-lg font-semibold">{item.name}</h3>
              <p className="mt-2 text-xs text-slate-500">{item.period}</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-400">
                {item.points.map((point) => <li key={point} className="pl-4 before:mr-2 before:text-violet-300 before:content-['•']">{point}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
