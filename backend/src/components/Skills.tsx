export default function Skills() {
  const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'TailwindCSS'];
  return (
    <section id="skills" className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map(s => (
          <div key={s} className="px-3 py-1 border rounded text-sm">{s}</div>
        ))}
      </div>
    </section>
  );
}
