'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | 'loading' | ''; message: string }>({
    type: '',
    message: '',
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });

    try {
      // FORCED ERROR: This will immediately trigger the catch block.
      // This is a temporary solution to display the maintenance message
      // until the backend is fully deployed and connected.
      throw new Error('Backend is under maintenance.');

      // Original fetch request to your local backend (currently commented out)
      /*
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', message: data.message });
        setForm({ name: '', email: '', message: '' }); // reset form
      } else {
        setStatus({ type: 'error', message: data.message || 'Failed to send message' });
      }
      */
    } catch (err) {
      console.error(err);
      setStatus({ 
        type: 'error', 
        message: '🛠️ The contact form is currently under maintenance and will be updated soon.' 
      });
      setShowPopup(true);
    }
  };

  return (
    <div id="contact" className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <button
          type="submit"
          className={`px-4 py-2 rounded text-white transition ${
            status.type === 'loading' ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
          disabled={status.type === 'loading'}
        >
          {status.type === 'loading' ? 'Sending...' : 'Send'}
        </button>
      </form>

      {/* Popup / Modal for the maintenance message */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl max-w-sm w-full mx-4 relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3.099L13.732 4.9c-.77-1.333-2.694-1.333-3.464 0L3.34 16.9c-.77 1.432.192 3.099 1.732 3.099z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl leading-6 font-medium text-gray-900">Under Maintenance</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  The contact form is currently unavailable. Please check back soon!
                </p>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <button
                onClick={() => setShowPopup(false)}
                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}