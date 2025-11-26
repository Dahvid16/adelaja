import React, { useState } from 'react';
import { FaArrowRight, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-[#1a1a1a]">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* CTA Side */}
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-8">
              Begin Your <br />
              <span className="text-gray-500">Metamorphosis</span>
            </h2>
            <p className="text-gray-300 mb-12 text-lg font-light">
              Visit our flagship atelier for a private consultation or reach out to discuss bespoke commissions. Experience the future of couture in person.
            </p>
            
            <div className="space-y-6">
              <a href="tel:+15551234567" className="flex items-center gap-4 text-white text-xl hover:text-gray-400 transition-colors group">
                <span className="p-4 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                  <FaPhone size={24} />
                </span>
                +1 (555) 123-4567
              </a>
              <a href="mailto:contact@brandname.com" className="flex items-center gap-4 text-white text-xl hover:text-gray-400 transition-colors group">
                <span className="p-4 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                  <FaEnvelope size={24} />
                </span>
                contact@brandname.com
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-black/40 p-8 md:p-12 border border-white/10 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-brand-black border border-gray-800 p-4 text-white focus:outline-none focus:border-white transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-brand-black border border-gray-800 p-4 text-white focus:outline-none focus:border-white transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Inquiry</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-brand-black border border-gray-800 p-4 text-white focus:outline-none focus:border-white transition-colors"
                  placeholder="Tell us about your needs..."
                />
              </div>
              
              <button 
                type="submit"
                disabled={status === 'success'}
                className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 px-8 hover:bg-gray-300 transition-colors flex justify-center items-center gap-2 disabled:bg-green-500 disabled:text-white"
              >
                {status === 'success' ? 'Sent Successfully' : (
                  <>Send Message <FaArrowRight size={18} /></>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact