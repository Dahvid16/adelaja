import React, { useState } from 'react';
import { FaArrowRight, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

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
    // Show success toast immediately
    toast.success("Message sent successfully!");
    
    // Update status and reset form
    setStatus('success');
    
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* CTA Side */}
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 font-semibold">
              Your Story, <br />
              <span className="text-gray-500">Your Silhouette</span>
            </h2>
            <p className="text-gray-300 mb-12 text-lg font-light">
              Reach out to share your vision. Whether you're seeking bespoke African confidence, trust in perfect fit, or a love letter in fabric, we craft singular pieces that celebrate your uniqueness. Let's create something extraordinary, just for you.
            </p>
            
            <div className="space-y-6">
              <a href="tel:+2349072095067" className="flex items-center gap-4 text-white text-xl hover:text-gray-400 transition-colors group w-1/2">
                <span className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                  <FaPhoneAlt size={24} />
                </span>
                +234 907 209 5067
              </a>
              <a href="mailto:adelajaolamide24@gmail.com" className="flex items-center gap-4 text-white text-xl hover:text-gray-400 transition-colors group w-[60%]">
                <span className="p-4 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                  <FaEnvelope size={24} />
                </span>
                adelajaolamide24@gmail.com
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
                  className="w-full bg-brand-black border border-gray-800 p-4 text-white focus:outline-none focus:border-white transition-colors placeholder:italic"
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
                  className="w-full bg-brand-black border border-gray-800 p-4 text-white focus:outline-none focus:border-white transition-colors placeholder:italic"
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
                  className="w-full bg-brand-black border border-gray-800 p-4 text-white focus:outline-none focus:border-white transition-colors placeholder:italic"
                  placeholder="Tell us about your needs..."
                />
              </div>
              
              <button 
                type="submit"
                disabled={status === 'success'}
                className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 px-8 hover:bg-gray-300 transition-colors flex justify-center items-center gap-2 disabled:bg-gray-500 disabled:text-white"
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