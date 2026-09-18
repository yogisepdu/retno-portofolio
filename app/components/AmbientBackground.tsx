export default function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
      <div className="absolute left-[-10%] top-[-12%] h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute right-[-10%] top-[25%] h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-[-15%] left-[25%] h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:56px_56px]" />
    </div>
  );
}
