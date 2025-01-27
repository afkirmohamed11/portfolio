import React, { useState, useEffect, useRef } from 'react';
import { Database, GraduationCap, Briefcase, FolderGit2, Phone, Award, Mail, Github, Linkedin, ExternalLink, User, Twitter } from 'lucide-react';
import ProjectsSection from './ProjectsSection';
import profile from './images/profile.png';
import ibmLogo from './images/IBM.png';
import googleLogo from './images/Google.png';
import dataCampLogo from './images/DataCamp.png';
import dataScience365Logo from './images/365DataScience.png';
import talendLogo from './images/Talend.png';


function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (isMobileMenuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) &&
          !buttonRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { href: "#about", text: "About" },
    { href: "#education", text: "Education" },
    { href: "#experience", text: "Experience" },
    { href: "#skills", text: "Skills" },
    { href: "#projects", text: "Projects" },
    { href: "#certifications", text: "Certifications" },
    { href: "#contact", text: "Contact" }
  ];

  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 mt-8">
            <div className="flex items-center">
              <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                AFKIR Mohamed
              </span>
            </div>
            
            {/* Mobile menu button */}
            <button 
              ref={buttonRef}
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4 ml-auto">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg font-semibold hover:bg-blue-600 px-4 py-2 rounded-lg"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div ref={menuRef} className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:bg-gray-700"
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* About Section */}
{/* About Section */}
<section id="about" className="pt-32 pb-20 bg-gray-800 px-6">
  <div className="container mx-auto">
    <div className="flex items-center mb-12">
      <User className="w-8 h-8 text-blue-400 mr-4" />
      <h2 className="text-3xl font-bold">About Me</h2>
    </div>
    <div className="bg-gray-900 shadow-lg p-4 md:p-8 rounded-lg flex flex-col md:flex-row md:gap-8 items-center">
      <img
        src={profile}
        alt="Profile"
        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover mb-6 md:mb-0"
      />
      <div className="flex flex-col justify-between">
        <p className="text-gray-300 text-xl leading-relaxed">
          I'm <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Afkir Mohamed
          </span>, a versatile <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Data Engineer</span> and <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Data Scientist</span> who transforms complex data challenges into actionable insights. With expertise in data pipelines, ETL processes, and database management, I bring a comprehensive skill set in Machine Learning, Data Science, and Advanced Analytics. My experience spans from developing predictive models to implementing scalable data solutions. I leverage my analytical capabilities to extract meaningful patterns from data, applying statistical analysis and ML algorithms to drive data-informed decisions. I'm constantly expanding my technical toolkit and seeking opportunities where I can apply my combined expertise in data engineering and advanced analytics to create innovative solutions.
        </p>

        <p className="text-gray-300 text-xl leading-relaxed">
          I am a strong team player with excellent communication and leadership skills, fluent in <span className="font-bold text-blue-300">Arabic</span>, and proficient in both <span className="font-bold text-blue-300">French</span> and <span className="font-bold text-blue-300">English</span>, allowing me to collaborate effectively in diverse environments.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <div className="flex space-x-4">
            <a href="https://github.com/afkirmohamed11" target="_blank" rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mohamed-afkir-1bbb9729a" target="_blank" rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a href="https://x.com/mohamed1910118?s=09" target="_blank" rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300">
              <Twitter className="w-5 h-5 mr-2" />
              Twitter
            </a>
            <a href="tel:+212645766901" className="flex items-center text-blue-400 hover:text-blue-300">
              <Phone className="w-5 h-5 mr-2" />
              +212 645-766901
            </a>
          </div>

          {/* Get Resume Button */}
          <a
            href="https://drive.google.com/file/d/1dASBOJtIV-82mmEUyI3yy1ngcqmdAJSH/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:bg-gradient-to-l transition-colors duration-200 group ml-auto"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Get Resume
          </a>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Education Section */}
<section id="education" className="py-16 bg-gray-800 px-6">
  <div className="container mx-auto">
    <div className="flex items-center mb-12">
      <GraduationCap className="w-8 h-8 text-blue-400 mr-4" />
      <h2 className="text-3xl font-bold">Education</h2>
    </div>
    <div className="grid gap-8">
      {/* Entry 1 */}
      <div className="bg-gray-900 shadow-lg p-6 rounded-lg">
        <h3 className="text-xl font-bold text-blue-400 text-2xl">Data Engineering Diploma</h3>
        <p className="font-bold text-gray-300 text-xl">
          National School of Applied Sciences of Al Hoceima
        </p>
        <p className="text-gray-300 text-xl">2022 - Present</p>
      </div>

      {/* Entry 2 */}
      <div className="bg-gray-900 shadow-lg p-6 rounded-lg">
        <h3 className="text-xl font-bold text-blue-400 text-2xl">Preparatory Cycle</h3>
        <p className="font-bold text-gray-300 text-xl">
          National School of Applied Sciences of Al Hoceima
        </p>
        <p className="text-gray-300 text-xl">2020 - 2022</p>
      </div>
      {/* Entry 3 */}
      <div className="bg-gray-900 shadow-lg p-6 rounded-lg">
        <h3 className="text-xl font-bold text-blue-400 text-2xl">High School Diploma</h3>
        <p className="font-bold text-gray-300 text-xl">
          Imzouren High School
        </p>
        <p className="text-gray-300 text-xl">2019 - 2020</p>
      </div>
    </div>
  </div>
</section>

      {/* Experience Section */}
      {/* Experience Section */}
<section id="experience" className="py-16 bg-gray-800 px-6">
  <div className="container mx-auto">
    <div className="flex items-center mb-12">
      <Briefcase className="w-8 h-8 text-blue-400 mr-4" />
      <h2 className="text-3xl font-bold">Experience</h2>
    </div>
    <div className="grid gap-8">
      <div className="bg-gray-900 shadow-lg p-6 rounded-lg">
        <div>
          <h3 className="text-xl font-bold text-blue-400 text-2xl">Data Engineering & Science Intern</h3>
          <p className="font-bold text-gray-300 text-xl">Shiftbricks Start-up</p>
          <p className="text-gray-300 text-xl">June 2024 - September 2024</p>
        </div>
        <ul className="list-disc list-inside mt-4 text-gray-300">
          <li>Developed a data pipeline following the Medallion architecture (bronze, silver, gold layers) to process Arabic legal documents.</li>
          <li>Extracted and structured metadata and content from PDFs using OCR, LLM models, and advanced techniques.</li>
          <li>Converted extracted data into a JSON schema for storage in MongoDB.</li>
          <li>Embedded structured content for use in an AI assistant chatbot.</li>
          <li>Automated the entire pipeline using Apache Airflow, incorporating a human validation step.</li>
          <li>Designed a FARM stack UI for experts to validate document structure before embedding.</li>
          <li>Containerized the pipeline with Docker for smooth and scalable deployment.</li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Apache Airflow</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Python</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">OCR</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">LLM Models</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">MongoDB</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Docker</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Fast API</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">React</span>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Skills Section */}
<section id="skills" className="py-16 bg-gray-800 px-6">
  <div className="container mx-auto">
    <div className="flex items-center mb-12">
      <Database className="w-8 h-8 text-blue-400 mr-4" />
      <h2 className="text-3xl font-bold">Skills</h2>
    </div>
    
    <div className="grid md:grid-cols-2 gap-8">
    <div className="bg-gray-900 shadow-lg p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Big Data Tools</h3>
        <div className="flex flex-wrap gap-2">
          
        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">SQL</span>
        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">PL-SQL</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">NoSQL</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Hadoop</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Kafka</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Spark</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Airflow</span>


        </div>
      </div>
    <div className="bg-gray-900 shadow-lg p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Programming Languages & Frameworks</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Python</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Java</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Spring boot</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">HTML</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">CSS</span>

        </div>
      </div>
      <div className="bg-gray-900 shadow-lg p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Databases</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">MySQL</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">PostgreSQL</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">SQLServer</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Oracle</span>
        </div>
      </div>
      <div className="bg-gray-900 shadow-lg p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">NoSQL Databases</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">MongoDB</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Cassandra</span>
        </div>
      </div>
      
      <div className="bg-gray-900 shadow-lg p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Data Science Skills</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Machine Learning</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Deep Learning</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">NLP</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Classification</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Clustering</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">LLM Exploitation</span>

        </div>
      </div>
      
      <div className="bg-gray-900 shadow-lg p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">DevOps Tools</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Docker</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Terraform</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Linux</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Git</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">GitLab</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">GitHub</span>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Projects Section */}
      
<ProjectsSection />
{/* Certifications Section */}
{/* Certifications Section */}
<section id="certifications" className="py-16 bg-gray-800 px-6">
  <div className="container mx-auto">
    <div className="flex items-center mb-12">
      <Award className="w-8 h-8 text-blue-400 mr-4" />
      <h2 className="text-3xl font-bold">Certifications</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* IBM Data Engineering Certificate */}
      <div className="bg-gray-900 shadow-lg p-6 rounded-lg flex items-center">
        <img
          src={ibmLogo}
          alt="IBM"
          className="w-24 h-24 object-contain mr-6 bg-gray-800 p-2 rounded-lg flex-shrink-0"
        />
        <div>
          <h3 className="text-xl font-bold mb-2">IBM Data Engineering Professional Certificate</h3>
          <p className="text-gray-300">IBM</p>
          <a href="https://www.coursera.org/account/accomplishments/professional-cert/R3VCTZT4H887" 
             className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
             target="_blank"
             rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
      </div>
      
      {/* Google Agile Project Management */}
      <div className="bg-gray-900 shadow-lg p-6 rounded-lg flex items-center">
        <img
          src={googleLogo}
          alt="Google"
          className="w-24 h-24 object-contain mr-6 bg-gray-800 p-2 rounded-lg flex-shrink-0"
        />
        <div>
          <h3 className="text-xl font-bold mb-2">Agile Project Management</h3>
          <p className="text-gray-300">Google</p>
          <a href="https://www.coursera.org/account/accomplishments/verify/VU8WWTRDJQJN" 
             className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
             target="_blank"
             rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
      </div>

      {/* AWS Cloud Concepts */}
      <div className="bg-gray-900 shadow-lg p-6 rounded-lg flex items-center">
        <img
          src={dataCampLogo}
          alt="DataCamp"
          className="w-24 h-24 object-contain mr-6 bg-gray-800 p-2 rounded-lg flex-shrink-0"
        />
        <div>
          <h3 className="text-xl font-bold mb-2">AWS Cloud Concepts</h3>
          <p className="text-gray-300">DataCamp</p>
          <a href="https://www.datacamp.com/completed/statement-of-accomplishment/course/0bcbeb425800c1bc382a51fba1a2ff216772b2a3" 
             className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
             target="_blank"
             rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
      </div>

      {/* NoSQL, Big Data, and Spark Foundations */}
      <div className="bg-gray-900 shadow-lg p-6 rounded-lg flex items-center">
        <img
          src={ibmLogo}
          alt="IBM"
          className="w-24 h-24 object-contain mr-6 bg-gray-800 p-2 rounded-lg flex-shrink-0"
        />
        <div>
          <h3 className="text-xl font-bold mb-2">NoSQL, Big Data, and Spark Foundations Specialization</h3>
          <p className="text-gray-300">IBM</p>
          <a href="https://www.coursera.org/account/accomplishments/specialization/3BSMCBVP2D75" 
             className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
             target="_blank"
             rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
      </div>

      {/* Advanced SQL for Data Engineering */}
      <div className="bg-gray-900 shadow-lg p-6 rounded-lg flex items-center">
        <img
          src={dataScience365Logo}
          alt="365 Data Science"
          className="w-24 h-24 object-contain mr-6 bg-gray-800 p-2 rounded-lg flex-shrink-0"
        />
        <div>
          <h3 className="text-xl font-bold mb-2">Advanced SQL for Data Engineering</h3>
          <p className="text-gray-300">365 Data Science</p>
          <a href="https://learn.365datascience.com/certificates/CC-A4B7A0EC0F/" 
             className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
             target="_blank"
             rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
      </div>

      {/* Talend Data Integration */}
      <div className="bg-gray-900 shadow-lg p-6 rounded-lg flex items-center">
        <img
          src={talendLogo}
          alt="Talend"
          className="w-24 h-24 object-contain mr-6 bg-gray-800 p-2 rounded-lg flex-shrink-0"
        />
        <div>
          <h3 className="text-xl font-bold mb-2">Talend Data Integration Certification Preparation training</h3>
          <p className="text-gray-300">Talend</p>
          <a href="https://www.coursera.org/account/accomplishments/verify/D8AXDXHLPJ4L" 
             className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
             target="_blank"
             rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Contact Section */} 
<section id="contact" className="py-16 bg-gray-800 px-6"> 
  <div className="container mx-auto"> 
    <div className="flex items-center mb-12"> 
      <Mail className="w-8 h-8 text-blue-400 mr-4" /> 
      <h2 className="text-3xl font-bold">Contact</h2> 
    </div> 
    <div className="bg-gray-900 shadow-lg p-8 rounded-lg"> 
      <p className="text-gray-100 mb-6"> 
        I'm always open to discussing new opportunities and interesting projects. 
        Feel free to reach out! 
      </p> 
      <div className="flex flex-col space-y-4"> 
        <a href="mailto:mohamedafkir078@gmail.com"  
          className="flex items-center text-blue-400 hover:text-blue-300"> 
          <Mail className="w-5 h-5 mr-2" /> 
          mohamedafkir078@gmail.com 
        </a> 
        <a href="https://www.linkedin.com/in/mohamed-afkir-1bbb9729a" target="_blank" rel="noopener noreferrer" 
          className="flex items-center text-blue-400 hover:text-blue-300"> 
          <Linkedin className="w-5 h-5 mr-2" /> 
          LinkedIn Profile 
        </a> 
        <a href="https://github.com/afkirmohamed11" target="_blank" rel="noopener noreferrer" 
          className="flex items-center text-blue-400 hover:text-blue-300"> 
          <Github className="w-5 h-5 mr-2" /> 
          GitHub Profile 
        </a> 
        <a href="tel:+212645766901" className="flex items-center text-blue-400 hover:text-blue-300"> 
          <Phone className="w-5 h-5 mr-2" /> 
          +212 645-766901 
        </a> 
      </div> 
    </div> 
  </div> 
</section>

      {/* Footer */}
<footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      {/* Social Media Links */}
      <div className="flex space-x-6 mb-4 md:mb-0">
        <a 
          href="https://github.com/afkirmohamed11" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <Github className="w-6 h-6" />
        </a>
        <a 
          href="https://www.linkedin.com/in/mohamed-afkir-1bbb9729a" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a 
          href="https://x.com/mohamed1910118?s=09" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <Twitter className="w-6 h-6" />
        </a>
      </div>
      
      {/* Copyright Notice */}
      <p className="text-lg text-gray-100 text-center md:text-right">
  &copy; {new Date().getFullYear()} Mohamed Afkir. All Rights Reserved.
</p>

    </div>
  </div>
</footer>

    </div>
  );
}

export default App;
