import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, MapPin, Phone, Github, Linkedin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Portfolio data directly in component
  const portfolioData = {
    personal: {
      location: "Warangal, Telangana",
      email: "Sakethdussa1234@gmail.com",
      phone: "+91 9398085750"
    },
    social: {
      github: "https://github.com/usersaketh",
      linkedin: "https://linkedin.com/in/saketh190705",
      email: "mailto:sakethdussa1234@gmail.com"
    }
  };

  // Mock form submission function
  const submitContactForm = async (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Form submitted:', formData);
        resolve({ success: true, message: 'Message sent successfully!' });
      }, 1000);
    });
  };

  const { personal, social } = portfolioData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await submitContactForm(formData);
      
      if (response.success) {
        alert("Message sent! Thanks for reaching out. I'll get back to you soon!");
        
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Get In <span className="text-blue-500">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology. Feel free to reach out!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href={`mailto:${personal.email}`}
                      className="text-muted-foreground hover:text-blue-500 transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a 
                      href={`tel:${personal.phone}`}
                      className="text-muted-foreground hover:text-blue-500 transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">{personal.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-border/50">
                <h4 className="font-medium mb-4">Follow me on</h4>
                <div className="flex space-x-4">
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-500/10 rounded-full hover:bg-blue-500/20 transition-colors group"
                  >
                    <Github className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-500/10 rounded-full hover:bg-blue-500/20 transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-background border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="w-5 h-5 mr-2 text-blue-500" />
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="border-border/50 focus:border-blue-500 focus:ring-blue-500/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="border-border/50 focus:border-blue-500 focus:ring-blue-500/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={6}
                      className="border-border/50 focus:border-blue-500 focus:ring-blue-500/20 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;