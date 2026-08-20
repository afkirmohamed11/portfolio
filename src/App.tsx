import {
  Award,
  Briefcase,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  User,
  Download,
  ExternalLink,
  Sparkles,
  ChevronRight,
  Check,
  Copy,
  MapPin,
  Calendar,
  Cloud,
  Cpu,
  Layers,
  Terminal,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Server
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ProjectsSection from './ProjectsSection';

// Import images
import dataScience365Logo from './images/365DataScience.png';
import awsLogo from './images/AWS.png';
import googleLogo from './images/Google.png';
import ibmLogo from './images/IBM.png';
import talendLogo from './images/Talend.png';
import profile from './images/profile.png';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mohamedafkir078@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const navItems = [
    { href: "#about", text: "About" },
    { href: "#experience", text: "Experience" },
    { href: "#education", text: "Education" },
    { href: "#skills", text: "Skills" },
    { href: "#projects", text: "Projects" },
    { href: "#certifications", text: "Certifications" },
    { href: "#contact", text: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* Fixed Glass Navbar */}
      <nav className="fixed top-0 left-0 w-full glass-nav z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand Logo */}
            <a href="#about" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-600 flex items-center justify-center font-bold text-slate-950 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
                MA
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-100 group-hover:text-cyan-400 transition-colors">
                Mohamed <span className="text-gradient">Afkir</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 border border-slate-800/60 bg-slate-900/60 p-1.5 rounded-full backdrop-blur-md">
              {navItems.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                        : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50"
                    }`}
                  >
                    {item.text}
                  </a>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
              ref={buttonRef}
              onClick={toggleMobileMenu}
              className="lg:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div ref={menuRef} className="lg:hidden bg-slate-900/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors"
              >
                {item.text}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="about" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        {/* Ambient Glow Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
          

              {/* Main Name & Title */}
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-none mb-4">
                Hi, I'm <span className="text-gradient">Mohamed Afkir</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-6 flex items-center gap-2">
                <Cloud className="w-6 h-6 text-sky-400 inline" />
                Data & AI Engineer
              </p>

              {/* Bio Summary */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                Master 2 Data Science candidate @UCBL and AWS Certified Cloud Practitioner. Specializing in building scalable, production-grade ELT/ETL pipelines (Airflow, dbt, Kestra, Kafka) across <strong className="text-slate-100 font-semibold">AWS, GCP, and Azure</strong> environments, Medallion data architectures, and AI integrations (RAG, LLMs, AI Agents).
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10 w-full sm:w-auto">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-slate-950 font-bold text-base hover:brightness-110 transition-all duration-300 shadow-xl shadow-cyan-500/20 group"
                >
                  Explore Projects
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6 text-slate-400 pt-2 border-t border-slate-900 w-full">
                <span className="text-xs uppercase tracking-wider font-mono text-slate-500">Connect:</span>
                <a
                  href="https://github.com/afkirmohamed11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-sm"
                >
                  <Github className="w-5 h-5" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-afkir-1bbb9729a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-sm"
                >
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
                <a
                  href="mailto:mohamedafkir078@gmail.com"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-sm"
                >
                  <Mail className="w-5 h-5" /> Email
                </a>
              </div>
            </div>

            {/* Right Profile Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                {/* Glowing Aura Ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-500"></div>
                
                <div className="relative glass-card p-4 rounded-3xl max-w-sm overflow-hidden border border-slate-800">
                  <div className="relative overflow-hidden rounded-2xl bg-slate-950 mb-6">
                    <img
                      src={profile}
                      alt="Mohamed Afkir"
                      className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                  </div>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800/80">
                      <p className="text-2xl font-bold text-gradient">Multi-Cloud</p>
                      <p className="text-xs text-slate-400 font-medium">AWS • GCP • Azure</p>
                    </div>
                    <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800/80">
                      <p className="text-2xl font-bold text-gradient-purple">AWS</p>
                      <p className="text-xs text-slate-400 font-medium">Certified Cloud Prac.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE SKILLS HIGHLIGHT STRIP */}
      <section className="py-8 bg-slate-900/40 border-y border-slate-800/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3 text-slate-300">
              <Cloud className="w-5 h-5 text-cyan-400" />
              <span className="font-mono text-sm sm:text-base font-medium">AWS & GCP Data Stacks</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-slate-300">
              <Layers className="w-5 h-5 text-sky-400" />
              <span className="font-mono text-sm sm:text-base font-medium">Medallion & ELT Architecture</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-slate-300">
              <Terminal className="w-5 h-5 text-indigo-400" />
              <span className="font-mono text-sm sm:text-base font-medium">Airflow • dbt • Kestra • Kafka</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-slate-300">
              <Cpu className="w-5 h-5 text-purple-400" />
              <span className="font-mono text-sm sm:text-base font-medium">RAG Pipelines & LLM Apps</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400">
              <Briefcase className="w-6 h-6" />
            </div>
            <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">Career Track</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12">
            Work <span className="text-gradient">Experience</span>
          </h2>

          {/* Timeline Wrapper */}
          <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 space-y-12">
            
            {/* Experience Item 1 */}
            <div className="relative pl-8 sm:pl-10 group">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
              </div>

              <div className="glass-card p-6 sm:p-8 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                      Data Analytics Intern
                    </h3>
                    <p className="text-lg font-semibold text-cyan-400">HANALYTICS</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-slate-400 text-sm font-mono">
                    <span className="flex items-center gap-1 bg-slate-800/80 px-3 py-1 rounded-md border border-slate-700">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Paris, France
                    </span>
                    <span className="flex items-center gap-1 bg-slate-800/80 px-3 py-1 rounded-md border border-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" /> Feb 2026 – Aug 2026
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 text-slate-300 text-base leading-relaxed mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Collaborate closely with client teams to translate business needs into concrete data solutions, from data collection to decision-ready reporting.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Build and maintain ELT pipelines (<strong className="text-slate-100">Airbyte → BigQuery → dbt</strong>) following Medallion architecture (raw → bronze → silver → gold), orchestrated via <strong className="text-slate-100">Kestra</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Develop <strong className="text-slate-100">Looker Studio dashboards</strong> to track key business indicators (revenue, commercial performance), contributing to a <strong className="text-cyan-400 font-semibold">20% increase in tracked revenue</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Build data products and AI agents for business teams, deploying a conversational agent in <strong className="text-slate-100">Gemini Enterprise</strong> that lets teams query <strong className="text-cyan-400 font-semibold">25+ BigQuery tables across 3 business domains</strong> in natural language.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Optimize queries and data models on <strong className="text-slate-100">GCP/BigQuery</strong> using partitioning and clustering strategies, cutting processing costs by <strong className="text-cyan-400 font-semibold">30%</strong> and processing times by <strong className="text-cyan-400 font-semibold">60%</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Set up automated alerting on Slack/Teams to monitor <strong className="text-cyan-400 font-semibold">100+ dbt tests</strong> and data quality checks, proactively detecting anomalies and pipeline failures.</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
                  {['DBT', 'BigQuery', 'SQL', 'GCP', 'Python','Looker Studio', 'Gemini Enterprise', 'AI Agents', 'Kestra', 'Airbyte', 'Git', 'Jira'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 rounded-full text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="relative pl-8 sm:pl-10 group">
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-sky-400 flex items-center justify-center shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform">
                <div className="w-2.5 h-2.5 rounded-full bg-sky-400"></div>
              </div>

              <div className="glass-card p-6 sm:p-8 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                      Data & AI Engineer Intern
                    </h3>
                    <p className="text-lg font-semibold text-sky-400">Wasit</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm font-mono">
                    <span className="flex items-center gap-1 bg-slate-800/80 px-3 py-1 rounded-md border border-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" /> Feb 2025 – Aug 2025
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 text-slate-300 text-base leading-relaxed mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                    <span>Contributed to the development of a serverless multi-agent AI system supporting farmers through WhatsApp, achieving an average <strong className="text-cyan-400 font-semibold">4-second response time</strong> per query.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                    <span>Built and deployed <strong className="text-cyan-400 font-semibold">3 Azure Functions</strong> to orchestrate components in a scalable, event-driven cloud architecture.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                    <span>Integrated a <strong className="text-slate-100">Retrieval-Augmented Generation (RAG)</strong> pipeline drawing on <strong className="text-cyan-400 font-semibold">10+ sources and documents</strong> to deliver context-aware, personalized responses.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                    <span>Designed and managed a <strong className="text-slate-100">PostgreSQL</strong> database to enable semantic search and structured tracking of <strong className="text-cyan-400 font-semibold">3+ agricultural projects</strong>.</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
                  {['Python', 'Azure Functions', 'Azure OpenAI', 'LangChain', 'RAG', 'PostgreSQL', 'pgvector', 'Blob Storage'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-sky-950/60 border border-sky-500/30 text-sky-300 rounded-full text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="relative pl-8 sm:pl-10 group">
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-indigo-400 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-400"></div>
              </div>

              <div className="glass-card p-6 sm:p-8 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                      Data Engineering & Science Intern
                    </h3>
                    <p className="text-lg font-semibold text-indigo-400">Shiftbricks</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm font-mono">
                    <span className="flex items-center gap-1 bg-slate-800/80 px-3 py-1 rounded-md border border-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" /> Jun 2024 – Sept 2024
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 text-slate-300 text-base leading-relaxed mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>Developed an automated data processing pipeline following Medallion architecture (bronze, silver, gold layers) to process <strong className="text-cyan-400 font-semibold">80+ Arabic legal documents</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>Extracted <strong className="text-cyan-400 font-semibold">15+ fields/metadata per document</strong> using OCR (<strong className="text-slate-100">Tesseract, EasyOCR</strong>) and LLM models (<strong className="text-slate-100">Cohere</strong>), converting content into structured JSON schemas stored in <strong className="text-slate-100">MongoDB</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>Automated end-to-end workflows using <strong className="text-slate-100">Apache Airflow</strong> incorporating human validation UI steps, containerized with <strong className="text-slate-100">Docker</strong>.</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
                  {['Apache Airflow', 'Python', 'OCR', 'LLM Models', 'MongoDB', 'Docker', 'FastAPI', 'React'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 rounded-full text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="py-24 bg-slate-900/30 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12">
            Education & <span className="text-gradient">Degrees</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Education 1 */}
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between border-t-4 border-t-cyan-400">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">2025 – 2026</span>
                <h3 className="text-xl font-bold text-slate-100 mb-2">Master 2 in Data Science</h3>
                <p className="text-slate-300 font-medium mb-4">Claude Bernard Lyon 1 University</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Advanced specialization in machine learning, statistical modeling, big data processing, and enterprise data architecture.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Lyon, France</span>
                <span className="text-cyan-400 font-semibold">M2 Candidate</span>
              </div>
            </div>

            {/* Education 2 */}
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between border-t-4 border-t-sky-400">
              <div>
                <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-2">2022 – 2025</span>
                <h3 className="text-xl font-bold text-slate-100 mb-2">Data Engineering Diploma</h3>
                <p className="text-slate-300 font-medium mb-4">National School of Applied Sciences of Al Hoceima</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Engineering degree focused on distributed systems, databases, cloud computing, algorithms, and software development.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>ENSA Al Hoceima</span>
                <span className="text-sky-400 font-semibold">State Engineer</span>
              </div>
            </div>

            {/* Education 3 */}
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between border-t-4 border-t-indigo-400">
              <div>
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">2020 – 2022</span>
                <h3 className="text-xl font-bold text-slate-100 mb-2">Preparatory Cycle</h3>
                <p className="text-slate-300 font-medium mb-4">National School of Applied Sciences of Al Hoceima</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Intensive foundation in mathematics, physics, computer science fundamentals, and engineering principles.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>ENSA Al Hoceima</span>
                <span className="text-indigo-400 font-semibold">Integrated Prep</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400">
              <Database className="w-6 h-6" />
            </div>
            <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">Technical Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Cloud AWS */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <Cloud className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-bold text-slate-100">Amazon Web Services</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['AWS S3', 'AWS Glue', 'AWS Redshift', 'AWS Lambda', 'AWS Athena', 'AWS IAM', 'AWS EC2', 'AWS RDS'].map((s) => (
                  <span key={s} className="px-3 py-1 bg-amber-950/40 border border-amber-500/30 text-amber-300 rounded-lg text-xs font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud GCP */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <Cloud className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-slate-100">Google Cloud (GCP)</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['BigQuery', 'Looker Studio', 'Dataflow', 'Pub/Sub', 'Cloud Storage', 'Compute Engine', 'Dataproc', 'Cloud Functions', 'Kestra'].map((s) => (
                  <span key={s} className="px-3 py-1 bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 rounded-lg text-xs font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud Azure */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <Cloud className="w-6 h-6 text-sky-400" />
                <h3 className="text-xl font-bold text-slate-100">Microsoft Azure</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Azure Functions', 'Blob Storage', 'Azure OpenAI', 'Azure PostgreSQL', 'pgvector'].map((s) => (
                  <span key={s} className="px-3 py-1 bg-sky-950/40 border border-sky-500/30 text-sky-300 rounded-lg text-xs font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Big Data & Orchestration */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <Server className="w-6 h-6 text-indigo-400" />
                <h3 className="text-xl font-bold text-slate-100">Orchestration & ETL</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['SQL', 'dbt', 'Apache Airflow', 'Apache Kafka', 'Apache Spark', 'Airbyte', 'Kestra', 'Hadoop', 'Medallion Arch.'].map((s) => (
                  <span key={s} className="px-3 py-1 bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 rounded-lg text-xs font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases & NoSQL */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <Database className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-slate-100">Databases & Storage</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'MySQL', 'MongoDB', 'Cassandra', 'Oracle', 'SQL Server', 'PL-SQL'].map((s) => (
                  <span key={s} className="px-3 py-1 bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 rounded-lg text-xs font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages & DevOps */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <Code2 className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-slate-100">Languages & DevOps</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Java', 'Docker', 'Terraform', 'Git / GitHub', 'Linux', 'FastAPI'].map((s) => (
                  <span key={s} className="px-3 py-1 bg-purple-950/40 border border-purple-500/30 text-purple-300 rounded-lg text-xs font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* AI, Machine Learning & LLMs */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <Cpu className="w-6 h-6 text-pink-400" />
                <h3 className="text-xl font-bold text-slate-100">AI, Machine Learning & LLMs</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Machine Learning', 'RAG & LLMs', 'Deep Learning', 'AI Agents', 'NLP', 'Classification & Clustering'].map((s) => (
                  <span key={s} className="px-3 py-1 bg-pink-950/40 border border-pink-500/30 text-pink-300 rounded-lg text-xs font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS SECTION (Component) */}
      <ProjectsSection />

      {/* CERTIFICATIONS SECTION */}
      <section id="certifications" className="py-24 bg-slate-900/30 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12">
            Certifications & <span className="text-gradient">Badges</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* AWS Certification */}
            <div className="glass-card p-6 rounded-2xl flex items-center space-x-4 border border-slate-800 hover:border-amber-500/50 transition-colors">
              <div className="w-16 h-16 rounded-xl bg-slate-950 p-2.5 border border-slate-800 flex-shrink-0 flex items-center justify-center">
                <img src={awsLogo} alt="AWS" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-slate-100 truncate">AWS Certified Cloud Practitioner</h3>
                <p className="text-xs text-slate-400 mb-2">Amazon Web Services</p>
                <a
                  href="https://www.credly.com/badges/de5100d5-958e-49ca-982a-9d4f4ac4c24a/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Verify Badge <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* IBM Data Engineering */}
            <div className="glass-card p-6 rounded-2xl flex items-center space-x-4 border border-slate-800 hover:border-sky-500/50 transition-colors">
              <div className="w-16 h-16 rounded-xl bg-slate-950 p-2.5 border border-slate-800 flex-shrink-0 flex items-center justify-center">
                <img src={ibmLogo} alt="IBM" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-slate-100 truncate">IBM Data Engineering Professional</h3>
                <p className="text-xs text-slate-400 mb-2">IBM</p>
                <a
                  href="https://www.coursera.org/account/accomplishments/professional-cert/R3VCTZT4H887"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Verify Certificate <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* Google Agile */}
            <div className="glass-card p-6 rounded-2xl flex items-center space-x-4 border border-slate-800 hover:border-indigo-500/50 transition-colors">
              <div className="w-16 h-16 rounded-xl bg-slate-950 p-2.5 border border-slate-800 flex-shrink-0 flex items-center justify-center">
                <img src={googleLogo} alt="Google" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-slate-100 truncate">Agile Project Management</h3>
                <p className="text-xs text-slate-400 mb-2">Google</p>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/VU8WWTRDJQJN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Verify Certificate <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* IBM NoSQL & Big Data */}
            <div className="glass-card p-6 rounded-2xl flex items-center space-x-4 border border-slate-800 hover:border-emerald-500/50 transition-colors">
              <div className="w-16 h-16 rounded-xl bg-slate-950 p-2.5 border border-slate-800 flex-shrink-0 flex items-center justify-center">
                <img src={ibmLogo} alt="IBM" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-slate-100 truncate">NoSQL, Big Data & Spark</h3>
                <p className="text-xs text-slate-400 mb-2">IBM Specialization</p>
                <a
                  href="https://www.coursera.org/account/accomplishments/specialization/3BSMCBVP2D75"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Verify Certificate <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* 365 Data Science */}
            <div className="glass-card p-6 rounded-2xl flex items-center space-x-4 border border-slate-800 hover:border-purple-500/50 transition-colors">
              <div className="w-16 h-16 rounded-xl bg-slate-950 p-2.5 border border-slate-800 flex-shrink-0 flex items-center justify-center">
                <img src={dataScience365Logo} alt="365 Data Science" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-slate-100 truncate">Advanced SQL for Data Engineering</h3>
                <p className="text-xs text-slate-400 mb-2">365 Data Science</p>
                <a
                  href="https://learn.365datascience.com/certificates/CC-A4B7A0EC0F/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Verify Certificate <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* Talend */}
            <div className="glass-card p-6 rounded-2xl flex items-center space-x-4 border border-slate-800 hover:border-rose-500/50 transition-colors">
              <div className="w-16 h-16 rounded-xl bg-slate-950 p-2.5 border border-slate-800 flex-shrink-0 flex items-center justify-center">
                <img src={talendLogo} alt="Talend" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-slate-100 truncate">Talend Data Integration Prep</h3>
                <p className="text-xs text-slate-400 mb-2">Talend</p>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/D8AXDXHLPJ4L"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Verify Certificate <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-100 mb-4">
              Let's Build Something <span className="text-gradient">Great Together</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              I am actively seeking full-time Data Engineering, Data Analytics, or Cloud Data Science roles. Have an opening or interesting project? Feel free to connect!
            </p>
          </div>

          <div className="max-w-xl mx-auto glass-card p-8 rounded-3xl text-center border border-slate-800">
            <div className="inline-flex p-4 rounded-2xl bg-slate-950 border border-slate-800 text-cyan-400 mb-6 shadow-inner">
              <Mail className="w-8 h-8" />
            </div>

            <p className="text-xs uppercase tracking-widest font-mono text-slate-400 mb-2">Direct Email Address</p>
            <p className="text-xl sm:text-2xl font-mono font-bold text-slate-100 mb-6">mohamedafkir078@gmail.com</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm hover:brightness-110 transition-all duration-300 shadow-lg shadow-cyan-500/20"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 mr-2" /> Email Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" /> Copy Email Address
                  </>
                )}
              </button>

              <a
                href="https://www.linkedin.com/in/mohamed-afkir-1bbb9729a"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold text-sm hover:bg-slate-800 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 mr-2 text-cyan-400" /> LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-slate-950 border-t border-slate-900 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-slate-950 text-xs">
              MA
            </div>
            <span className="font-semibold text-slate-200">Mohamed Afkir</span>
          </div>

          <p className="text-center text-slate-400 font-mono text-xs">
            © {new Date().getFullYear()} Mohamed Afkir
          </p>

          <div className="flex space-x-5">
            <a href="https://github.com/afkirmohamed11" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/mohamed-afkir-1bbb9729a" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:mohamedafkir078@gmail.com" className="hover:text-cyan-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
