'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Briefcase, Code, Award, Mail, ExternalLink } from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" onClick={() => scrollToSection('home')} className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            WL
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {['home', 'about', 'experience', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition ${
                  activeSection === item 
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3">
            {['home', 'about', 'experience', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left capitalize text-gray-600 hover:text-gray-900 py-2"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-32 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Welcome to my portfolio
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
            Will Liang
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Co-CEO & AI Leader
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            Building the future of AI & Data in Financial Services
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            17+ years leading technology and AI initiatives at Fortune 500 companies. Top Voice in Data Science & AI. 
            Passionate about transforming how businesses use data and AI to solve their hardest problems.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Get in Touch
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-600">The Story</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I was originally a professional Go player. When AlphaGo beat the world's greatest Go master in 2016, 
                I had an epiphany: I couldn't compete with AI, but I could harness it to transform how we work.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Since then, I've dedicated my career to leveraging AI and data to solve the hardest problems in 
                business, particularly in financial services. I believe the most valuable work happens at the 
                intersection of deep domain expertise and cutting-edge technology.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Recognition</h3>
              <ul className="space-y-4">
                {[
                  'Top Voice on LinkedIn for Data Science & AI',
                  'Global Top 100 Data and Analytics Leader (Corinium, 2024)',
                  'Top 100 CIO in Asia (CIO.com, 2024)',
                  'Honorary Fellowship at UTS for AI Education (2024)'
                ].map((award, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Award className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: 'Co-CEO',
                company: 'Amplify AI Group',
                period: '2025 - Present',
                description: 'Leading AI transformation initiatives, solving complex business problems with data and AI for enterprise clients.'
              },
              {
                title: 'Executive Director / CTO, Asset Management',
                company: 'MA Financial Group',
                period: '2022 - 2025',
                description: 'Directed technology strategy and digital transformation for $10B+ AUM asset management division. Led enterprise modernization initiatives.'
              },
              {
                title: 'National Leader, Regulatory Technology',
                company: 'KPMG Australia',
                period: '2019 - 2022',
                description: 'Led RegTech practice across Australia, pioneering compliance solutions and digital transformation for financial services clients.'
              },
              {
                title: 'Director, Digital Transformation & Data',
                company: 'Macquarie Group',
                period: '2018 - 2019',
                description: 'Drove enterprise-wide digital transformation and data strategy initiatives across the organization.'
              }
            ].map((job, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <Briefcase className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <p className="text-blue-600 font-semibold">{job.company}</p>
                    <p className="text-sm text-gray-500 mb-3">{job.period}</p>
                    <p className="text-gray-600 leading-relaxed">{job.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI & Data',
                skills: ['Machine Learning', 'Data Analytics', 'AI Strategy', 'Data Engineering'],
                icon: '🤖'
              },
              {
                title: 'Technology',
                skills: ['Digital Transformation', 'Cloud Architecture', 'Tech Leadership', 'System Design'],
                icon: '💻'
              },
              {
                title: 'Business',
                skills: ['Fintech', 'RegTech', 'Strategy', 'Change Management'],
                icon: '📊'
              }
            ].map((category, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-100">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <Code size={16} className="text-blue-600" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Interested in discussing AI, data strategy, or technology leadership? Let's connect and explore how we can collaborate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href="mailto:xinliang.will@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/will--liang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105"
            >
              <ExternalLink size={20} />
              LinkedIn
            </a>
            <a
              href="https://amplifygroup.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105"
            >
              <ExternalLink size={20} />
              Amplify AI
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6 text-center text-gray-500 bg-white">
        <p>© 2025 Will Liang. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
