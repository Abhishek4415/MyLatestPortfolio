import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Tilt from 'react-parallax-tilt';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status message when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Extract form data: sender's name, email, and message
    const senderName = formData.name.trim();
    const senderEmail = formData.email.trim();
    const senderMessage = formData.message.trim();

    // Validate form data
    if (!senderName || !senderEmail || !senderMessage) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    // Log form data for debugging (remove in production if needed)
    console.log('Form Data Captured:', {
      name: senderName,
      email: senderEmail,
      message: senderMessage
    });

    // EmailJS Configuration
    const serviceId = "service_p747esb"; // Your EmailJS Service ID
    const templateId = "template_rjo8ggw"; // Your EmailJS Template ID
    const publicKey = "mf3Kf55tUV1qrt3Lc"; // Your EmailJS Public Key

    // Template parameters - sending sender's name, email, and message to EmailJS
    // These values are captured from the form inputs above
    const templateParams = {
      from_name: senderName,        // Sender's name from form
      from_email: senderEmail,      // Sender's email from form
      to_email: "abhishekumar4410@gmail.com", // Your Gmail address (recipient)
      message: senderMessage,       // Sender's message from form
      reply_to: senderEmail,        // Reply-to email (sender's email)
    };

    // Send email with captured form data
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        console.log('Sent data:', {
          senderName: senderName,
          senderEmail: senderEmail,
          message: senderMessage
        });
        setSubmitStatus('success');
        // Clear form after successful submission
        setFormData({ name: "", email: "", message: "" });
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        console.error('Failed to send data:', {
          senderName: senderName,
          senderEmail: senderEmail,
          message: senderMessage
        });
        setSubmitStatus('error');
        // Clear error message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  

  return (
    <section id="contact" className="relative py-24 px-4 md:px-[7vw] overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-amber-900/20 animate-pulse"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            GET IN <span className="text-amber-500">TOUCH</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-amber-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info Cards */}
          <div className="space-y-6">
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
              <div className="bg-gray-900/80 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(130,69,236,0.5)]">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-amber-500 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Email</h3>
                    <a href="mailto:abhishek@example.com" className="text-gray-400 hover:text-amber-500 transition">
                      abhishekumar4410@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>

            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
              <div className="bg-gray-900/80 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(130,69,236,0.5)]">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-purple-600 rounded-full flex items-center justify-center">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Phone</h3>
                    <a href="tel:+91 ----------" className="text-gray-400 hover:text-amber-500 transition">
                      +91 ----------
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>

            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
              <div className="bg-gray-900/80 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(130,69,236,0.5)]">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 via-amber-500 to-purple-600 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Location</h3>
                    <p className="text-gray-400">Bihar, India</p>
                  </div>
                </div>
              </div>
            </Tilt>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="text-white font-semibold text-lg mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Abhishek4415"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900/80 border border-purple-500/30 rounded-full flex items-center justify-center text-2xl text-gray-400 hover:text-amber-500 hover:border-amber-500/50 hover:scale-110 transition-all duration-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/abhishek-kumar441/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900/80 border border-purple-500/30 rounded-full flex items-center justify-center text-2xl text-gray-400 hover:text-amber-500 hover:border-amber-500/50 hover:scale-110 transition-all duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://leetcode.com/u/abhishek_441/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900/80 border border-purple-500/30 rounded-full flex items-center justify-center text-2xl text-gray-400 hover:text-amber-500 hover:border-amber-500/50 hover:scale-110 transition-all duration-300"
                >
                  <SiLeetcode />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02}>
            <div className="bg-gray-900/80 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-amber-500 text-white font-bold rounded-xl hover:from-purple-700 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <FaPaperPlane className="inline" />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center animate-fade-in">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center animate-fade-in">
                    ✗ Failed to send message. Please try again or contact me directly at abhishekumar4410@gmail.com
                  </div>
                )}
              </form>
            </div>
          </Tilt>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
