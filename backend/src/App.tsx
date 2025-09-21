import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  github: string;
  demo?: string;
}

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('Message sent!');
        setForm({ name: '', email: '', message: '' });
      } else setStatus('Failed to send message.');
    } catch {
      setStatus('Error sending message.');
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <header className="flex justify-between p-4 bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-yellow-500 dark:bg-yellow-400 text-gray-900 px-3 py-1 rounded"
        >
          Toggle Dark Mode
        </button>
      </header>

      <section id="projects" className="max-w-5xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(p => (
            <div
              key={p.id}
              className="border rounded p-4 shadow hover:shadow-lg transition"
              data-aos="fade-up"
            >
              <img src={p.image} alt={p.name} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mb-2">{p.description}</p>
              <div className="flex gap-4">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  GitHub
                </a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-green-500">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 border rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="p-3 border rounded"
          />
          <button
            type="submit"
            className="bg-yellow-500 dark:bg-yellow-400 text-gray-900 p-3 rounded font-semibold hover:bg-yellow-400"
          >
            Send
          </button>
          <p>{status}</p>
        </form>
      </section>
    </div>
  );
};

export default App;
