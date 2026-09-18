"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

const experiences = [
  {
    company: "PT PNM Mekaar",
    location: "Rantau Utara",
    role: "Finance Administration Officer",
    period: "May 2021 – March 2022",
    points: [
      "Mengelola administrasi keuangan harian, termasuk pencatatan transaksi, penerimaan, dan pengeluaran dana.",
      "Melakukan penutupan harian laporan keuangan untuk memastikan data keuangan tercatat dengan akurat.",
      "Menginput data nasabah ke dalam sistem informasi.",
    ],
  },
  {
    company: "PTPN 4 Regional II – Unit Kebun Bah Jambi",
    location: "Simalungun",
    role: "Magang – Administrasi (Tata Usaha)",
    period: "March 2025 – May 2025",
    points: [
      "Menginput data transaksi keuangan, laporan produksi, dan data gudang ke dalam sistem perusahaan.",
      "Menyusun dan memeriksa dokumen administrasi sebelum diserahkan ke bagian terkait.",
      "Mengelola arsip surat masuk dan surat keluar secara rapi dan sistematis.",
    ],
  },
  {
    company: "PTPN 4 Regional III – Unit Kebun Sei Garo",
    location: "Tapung",
    role: "Tugas Akhir – Pembuatan Sistem E-Arsip",
    period: "October 2024 – January 2025",
    points: [
      "Mengembangkan dan mengimplementasikan sistem pengarsipan digital untuk kebutuhan manajemen dokumen yang efisien.",
      "Merancang antarmuka pengguna (UI) menggunakan Figma dengan pendekatan yang ramah pengguna dan modern.",
      "Menggunakan HTML, CSS, Laravel, dan MySQL dalam proses pengembangan.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">Experience</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Pengalaman kerja & praktik</h2>

        <div className="mt-12 space-y-5">
          {experiences.map((item, i) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, x: i % 2 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 md:p-8"
            >
              <div className="flex flex-col gap-6 md:flex-row md:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                      <BriefcaseBusiness size={19} />
                    </span>
                    <div>
                      <h3 className="font-semibold">{item.role}</h3>
                      <p className="text-sm text-slate-400">{item.company} · {item.location}</p>
                    </div>
                  </div>
                </div>
                <span className="h-fit rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">{item.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                {item.points.map((point) => <li key={point} className="relative pl-5 before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-violet-400">{point}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
