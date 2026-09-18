export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Retno Anggraini. All rights reserved.</p>
        <p>Administration · Information Technology · UI Design</p>
      </div>
    </footer>
  );
}
