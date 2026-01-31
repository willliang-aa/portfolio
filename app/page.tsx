'use client';

import { useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            WL
          </a>
          
          <div className="hidden md:flex gap-8">
            {['About', 'Experience', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="px-4 py-2 rounded-full border border-blue-500/50 bg-blue-500/10 text-blue-400 text-sm font-semibold">
                Welcome to my portfolio
              </div>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Will Liang
              </span>
            </h1>

            <p className="text-3xl md:text-4xl font-bold text-gray-100">
              Co-CEO & AI Leader
            </p>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Building the future of AI & Data. 17+ years transforming financial services through technology.
            </p>
          </div>

          <div className="flex justify-center gap-4 pt-8">
            <a href="#contact" className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 flex items-center gap-2">
              Get in Touch
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a href="#experience" className="px-8 py-4 border border-gray-600 hover:border-gray-400 rounded-full font-bold text-gray-300 hover:text-white transition-all">
              Learn More
            </a>
          </div>

          <div className="pt-12 animate-bounce">
            <ChevronDown size={24} className="mx-auto text-gray-500" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-20">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I was a professional Go player until AlphaGo defeated the world champion in 2016. That moment changed everything.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Instead of competing with AI, I decided to harness it. For the past 17 years, I've built a career at the intersection of business, technology, and AI—solving problems no one thought were solvable.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Recognition</h3>
              <div className="space-y-4">
                {[
                  { icon: '🏆', text: 'Top Voice in Data Science & AI on LinkedIn' },
                  { icon: '🌍', text: 'Global Top 100 Data & Analytics Leader (Corinium)' },
                  { icon: '👑', text: 'Top 100 CIO in Asia (CIO.com, 2024)' },
                  { icon: '📚', text: 'Honorary Fellowship at UTS for AI Education' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors">
                    <span className="text-2xl">{item.icon}</span>
                    <p className="text-gray-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-20">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="space-y-6">
            {[
              {
                title: 'Co-CEO',
                company: 'Amplify AI Group',
                period: '2025 - Present',
                desc: 'Leading AI transformation, solving enterprise problems with data and machine learning.'
              },
              {
                title: 'Executive Director / CTO',
                company: 'MA Financial Group',
                period: '2022 - 2025',
                desc: 'Directed technology strategy for $10B+ AUM. Led digital transformation and modernization.'
              },
              {
                title: 'National Leader, RegTech',
                company: 'KPMG Australia',
                period: '2019 - 2022',
                desc: 'Led regulatory technology practice. Pioneered compliance solutions for financial services.'
              },
              {
                title: 'Director, Digital Transformation',
                company: 'Macquarie Group',
                period: '2018 - 2019',
                desc: 'Drove enterprise-wide digital transformation initiatives and data strategy.'
              }
            ].map((job, idx) => (
              <div key={idx} className="group p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 bg-gradient-to-r from-gray-900/50 to-transparent hover:from-blue-950/20 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{job.title}</h3>
                    <p className="text-blue-400 font-semibold">{job.company}</p>
                  </div>
                  <span className="text-sm text-gray-500">{job.period}</span>
                </div>
                <p className="text-gray-400">{job.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-20">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI & Data',
                skills: ['Machine Learning', 'Data Analytics', 'AI Strategy', 'Deep Learning'],
                gradient: 'from-blue-600 to-cyan-600'
              },
              {
                title: 'Technology',
                skills: ['Digital Transformation', 'Cloud Architecture', 'System Design', 'Tech Leadership'],
                gradient: 'from-purple-600 to-pink-600'
              },
              {
                title: 'Business',
                skills: ['Fintech', 'RegTech', 'Strategy', 'Change Management'],
                gradient: 'from-pink-600 to-red-600'
              }
            ].map((category, idx) => (
              <div key={idx} className={`p-8 rounded-2xl border border-gray-800 hover:border-gray-600 bg-gradient-to-br ${category.gradient} bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 transition-all group`}>
                <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Build Something
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Interested in discussing AI, technology strategy, or transforming your business? Let's connect.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="mailto:xinliang.will@gmail.com"
              className="group px-8 py-4 rounded-full font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/will--liang"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-full font-bold border border-gray-600 text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all flex items-center justify-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://amplifygroup.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-full font-bold border border-gray-600 text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all flex items-center justify-center gap-2"
            >
              <ArrowRight size={20} />
              Amplify AI
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            Also on{' '}
            <a href="https://github.com" className="text-gray-300 hover:text-white transition-colors">GitHub</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-800 py-12 px-6 text-center text-gray-500">
        <p>© 2025 Will Liang. Built with Next.js, Tailwind CSS & Vercel.</p>
      </footer>
    </div>
  );
}
