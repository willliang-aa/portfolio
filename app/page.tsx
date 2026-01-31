'use client';

import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Will Liang
          </h1>
          <div className="flex gap-8 text-sm font-medium">
            {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize hover:text-blue-400 transition ${
                  activeSection === item ? 'text-blue-400' : 'text-slate-300'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-6">Co-CEO & AI Leader</h2>
          <p className="text-xl text-slate-300 mb-4">
            Transforming Business with AI, Data & Technology
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            17+ years in fintech & technology. Top Voice in Data Science & AI on LinkedIn.
            Honorary Fellowship at UTS for AI Education. Solving complex problems with data-driven solutions.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition"
          >
            Get in Touch
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-blue-400">Background</h4>
              <p className="text-slate-300 leading-relaxed mb-6">
                Originally a professional Go player, I realized in 2016 that I couldn't beat AI at its own game. 
                Instead, I decided to harness AI to transform how we work. This epiphany led me to build a career 
                solving complex business problems with data and technology.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Passionate about the intersection of data, technology, and AI's impact on financial services, 
                I've built expertise across industry verticals from regulatory technology to digital transformation.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-blue-400">Recognition</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">★</span>
                  <span>Top Voice on LinkedIn for Data Science & AI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">★</span>
                  <span>Global Top 100 Data and Analytics Leader (Corinium, 2024)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">★</span>
                  <span>Top 100 CIO in Asia (CIO.com, 2024)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">★</span>
                  <span>Honorary Fellowship at UTS for AI Education (2024)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12">Experience</h3>
          <div className="space-y-8">
            {[
              {
                title: 'Co-CEO',
                company: 'Amplify AI Group',
                period: 'May 2025 - Present',
                description: 'Leading AI transformation initiatives solving hardest problems with data and AI.'
              },
              {
                title: 'Executive Director / CTO, Asset Management',
                company: 'MA Financial Group',
                period: 'Jan 2022 - May 2025',
                description: 'Led technology strategy and digital transformation for asset management division.'
              },
              {
                title: 'National Leader, Regulatory Technology',
                company: 'KPMG Australia',
                period: 'Aug 2019 - Jan 2022',
                description: 'Pioneering RegTech solutions and digital transformation across the firm.'
              },
              {
                title: 'Director, Digital Transformation and Data',
                company: 'Macquarie Group',
                period: 'Aug 2018 - Aug 2019',
                description: 'Driving digital transformation and data strategy initiatives.'
              }
            ].map((job, idx) => (
              <div key={idx} className="border-l-2 border-blue-400 pl-6">
                <h4 className="text-xl font-semibold">{job.title}</h4>
                <p className="text-blue-400">{job.company}</p>
                <p className="text-sm text-slate-400 mb-2">{job.period}</p>
                <p className="text-slate-300">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12">Skills & Expertise</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI & Data',
                skills: ['Machine Learning', 'Data Analytics', 'Data Science', 'AI Strategy']
              },
              {
                title: 'Technology',
                skills: ['Digital Transformation', 'System Architecture', 'Cloud Solutions', 'Tech Leadership']
              },
              {
                title: 'Business',
                skills: ['Fintech', 'RegTech', 'Business Strategy', 'Client Relations']
              }
            ].map((category, idx) => (
              <div key={idx} className="bg-slate-700/50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4 text-blue-400">{category.title}</h4>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-slate-300">✓ {skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">Let's Connect</h3>
          <p className="text-xl text-slate-300 mb-8">
            Always interested in discussing AI, technology, and transforming business.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://linkedin.com/in/will--liang"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:xinliang.will@gmail.com"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition"
            >
              Email
            </a>
            <a
              href="https://amplifygroup.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-600 px-6 py-2 rounded-lg transition"
            >
              Amplify AI Group
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 px-6 text-center text-slate-400">
        <p>© 2025 Will Liang. All rights reserved.</p>
      </footer>
    </div>
  );
}
