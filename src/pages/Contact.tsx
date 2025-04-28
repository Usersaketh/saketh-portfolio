
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import FadeInSection from '../components/FadeInSection';
import TerminalHeader from '../components/TerminalHeader';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen p-4">
      <div className="container mx-auto py-16">
        <FadeInSection>
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              <span className="text-terminal-green">$</span> contact --send-message
            </h1>
            <p className="text-white/60 max-w-2xl">
              Interested in working together or have a question? Feel free to reach out using the form below or through my social profiles.
            </p>
          </div>
        </FadeInSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <FadeInSection>
            <div className="terminal-window">
              <TerminalHeader path="~/portfolio/contact" />
              <div className="terminal-body">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                      Name<span className="text-terminal-purple">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-terminal-gray border border-white/10 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-terminal-purple"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                      Email<span className="text-terminal-purple">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-terminal-gray border border-white/10 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-terminal-purple"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                      Message<span className="text-terminal-purple">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-terminal-gray border border-white/10 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-terminal-purple"
                      placeholder="Your message here..."
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-terminal-purple bg-opacity-20 text-terminal-purple hover:bg-opacity-30 rounded-md font-medium flex items-center space-x-2 transition-colors border border-terminal-purple/30 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-pulse">Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </FadeInSection>
          
          {/* Contact Information */}
          <div>
            <FadeInSection delay={100}>
              <div className="terminal-window mb-8">
                <TerminalHeader path="~/portfolio/contact-info" />
                <div className="terminal-body">
                  <h3 className="text-lg font-bold mb-6 text-terminal-green">Get in Touch</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="text-terminal-purple" size={20} />
                      <a href="mailto:sakethdussa1234@gmail.com" className="text-white hover:text-terminal-purple transition-colors">
                        sakethdussa1234@gmail.com
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="text-terminal-purple" size={20} />
                      <span className="text-white">+91 9398085750</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Github className="text-terminal-purple" size={20} />
                      <a href="https://github.com/Usersaketh" target="_blank" rel="noopener noreferrer" className="text-white hover:text-terminal-purple transition-colors">
                      Usersaketh
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Linkedin className="text-terminal-purple" size={20} />
                      <a href="https://www.linkedin.com/in/saketh190705/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-terminal-purple transition-colors">
                        Dussa Pranay Saketh
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="terminal-window">
                <TerminalHeader path="~/portfolio/availability" />
                <div className="terminal-body">
                  <h3 className="text-lg font-bold mb-4 text-terminal-blue">Availability</h3>
                  
                  <p className="mb-4 text-white/80">
                    I'm currently <span className="text-terminal-green">available</span> for freelance work and open to discussing full-time opportunities.
                  </p>
                  
                      
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
