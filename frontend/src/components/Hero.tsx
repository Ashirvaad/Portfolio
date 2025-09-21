export default function Hero() {
  return (
    <section className="h-screen bg-gradient-to-b from-slate-800 to-slate-900 text-white flex items-center">
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Your Name</h1>
        <p className="text-lg md:text-2xl mb-6">Full-stack developer — React, Next.js, Node</p>
        <a href="#projects" className="inline-block px-6 py-3 bg-yellow-400 text-slate-900 rounded-md font-semibold">View Projects</a>
      </div>
    </section>
  );
}
