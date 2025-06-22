
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create properly formatted mailto link with all form data
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
    const body = encodeURIComponent(
      `Hello Najath,\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name}`
    );
    
    const mailtoLink = `mailto:najamhd037@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Clear form after opening email client
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on data science projects or discuss opportunities? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-white mb-8">Let's Start a Conversation</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4 group transform transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                  <Mail className="text-blue-400 group-hover:animate-pulse" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">Email</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">najamhd037@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group transform transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-300">
                  <MapPin className="text-purple-400 group-hover:animate-pulse" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-purple-400 transition-colors duration-300">Location</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Warakapola, Sabaragamuwa Province, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h4 className="text-white font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/najath-m-7321812a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <Linkedin className="text-white" size={24} />
                </a>
                <a
                  href="https://github.com/Najathmhd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-gray-500/30"
                >
                  <Github className="text-white" size={24} />
                </a>
                <a
                  href="mailto:najamhd037@gmail.com"
                  className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-red-500/30"
                >
                  <Mail className="text-white" size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 transform hover:scale-105"
                  placeholder="Your full name"
                />
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 transform hover:scale-105"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 transform hover:scale-105"
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 transform hover:scale-105 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 animate-fade-in"
                style={{ animationDelay: '0.9s' }}
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
