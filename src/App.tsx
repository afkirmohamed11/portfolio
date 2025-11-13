import { Award, Briefcase, Database, Github, GraduationCap, Linkedin, Mail, Twitter, User } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ProjectsSection from './ProjectsSection';
import dataScience365Logo from './images/365DataScience.png';
import dataCampLogo from './images/DataCamp.png';
import googleLogo from './images/Google.png';
import ibmLogo from './images/IBM.png';
import talendLogo from './images/Talend.png';
import profile from './images/profile.png';


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
    <div className="bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 mt-8">
            <div className="flex items-center">
              <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Mohamed Afkir
              </span>
            </div>
            
            {/* Mobile menu button */}
            <button 
              ref={buttonRef}
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
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
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-lg font-semibold hover:bg-blue-50 px-4 py-2 rounded-lg"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div ref={menuRef} className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg mt-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:bg-gray-50"
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
      <section id="about" className="py-16 bg-gray-100 px-6">
        <div className="container mx-auto">
          <div className="flex items-center mb-12">
            <User className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col md:flex-row md:gap-8 items-center">
            <img
              src={profile}
              alt="Profile"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover mb-6 md:mb-0"
            />
            <div className="flex flex-col justify-between">
<p className="text-gray-700 text-xl leading-relaxed">  
  I'm <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">  
    Afkir Mohamed  
  </span>, a versatile <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Data Engineer</span> and <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Data Scientist</span> passionate about turning complex data into actionable insights. Currently pursuing a <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Master 2 in Data Science</span> at Claude Bernard Lyon 1 University, I specialize in data pipelines, ETL, database management, and machine learning. My experience ranges from building predictive models to deploying scalable data solutions, always aiming to drive innovation through data.  
</p>  

<p className="text-gray-700 text-xl leading-relaxed mt-4">  
  Proficient in <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">English</span> and <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">French</span>, and fluent in <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Arabic</span>, I thrive in multicultural environments and excel in teamwork, communication, and leadership.  
</p>  



              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <div className="flex flex-wrap gap-4">
                  <a href="https://github.com/afkirmohamed11" target="_blank" rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-500 whitespace-nowrap">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/mohamed-afkir-1bbb9729a" target="_blank" rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-500 whitespace-nowrap">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                  
                 
                </div>

                {/* Get Resume Button */}
                <a
                  href="https://drive.google.com/file/d/1T-GuAA85_mJ37hUZVCYGZT1jrJA-GNVI/view?usp=sharing"
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
      <section id="education" className="py-16 bg-gray-100 px-6">
        <div className="container mx-auto">
          <div className="flex items-center mb-12">
            <GraduationCap className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          </div>
          <div className="grid gap-8">
            {/* Entry 1 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-600 text-2xl">Master 2 in Data Science</h3>
              <p className="font-bold text-gray-700 text-xl">
                Claude Bernard Lyon 1 University
              </p>
              <p className="text-gray-700 text-xl">2025 - 2026</p>
            </div>

            {/* Entry 2 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-600 text-2xl">Data Engineering Diploma</h3>
              <p className="font-bold text-gray-700 text-xl">
                National School of Applied Sciences of Al Hoceima
              </p>
              <p className="text-gray-700 text-xl">2022 - 2025</p>
            </div>

            {/* Entry 3 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-600 text-2xl">Preparatory Cycle</h3>
              <p className="font-bold text-gray-700 text-xl">
                National School of Applied Sciences of Al Hoceima
              </p>
              <p className="text-gray-700 text-xl">2020 - 2022</p>
            </div>
            {/* Entry 3 */}
            
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-100 px-6">
        <div className="container mx-auto">
          <div className="flex items-center mb-12">
            <Briefcase className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
          </div>
          <div className="grid gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <div>
                <h3 className="text-xl font-bold text-blue-600 text-2xl">Data & AI Engineer Intern</h3>
                <p className="font-bold text-gray-700 text-xl">Wasit</p>
                <p className="text-gray-700 text-xl">February 2025 - August 2025</p>
              </div>
              <ul className="list-disc list-inside mt-4 text-gray-700">
                <li>Contributed to the development of a serverless multi-agent system supporting Moroccan farmers through WhatsApp.</li>
                <li>Built and deployed Azure Functions to orchestrate components in a scalable, event-driven architecture.</li>
                <li>Integrated a Retrieval-Augmented Generation (RAG) pipeline to deliver context-aware responses tailored to farmers' needs.</li>
                <li>Designed and managed PostgreSQL with pgvector to enable semantic search and structured tracking of farming projects.</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Azure</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Azure Functions</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Azure OpenAI</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">LangChain</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">RAG</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">PostgreSQL</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Blob Storage</span>
              </div>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <div>
                <h3 className="text-xl font-bold text-blue-600 text-2xl">Data Engineering & Science Intern</h3>
                <p className="font-bold text-gray-700 text-xl">Shiftbricks Start-up</p>
                <p className="text-gray-700 text-xl">June 2024 - September 2024</p>
              </div>
              <ul className="list-disc list-inside mt-4 text-gray-700">
                <li>Developed a data pipeline following the Medallion architecture (bronze, silver, gold layers) to process Arabic legal documents.</li>
                <li>Extracted and structured metadata and content from PDFs using OCR, LLM models, and advanced techniques.</li>
                <li>Converted extracted data into a JSON schema for storage in MongoDB.</li>
                <li>Embedded structured content for use in an AI assistant chatbot.</li>
                <li>Automated the entire pipeline using Apache Airflow, incorporating a human validation step.</li>
                <li>Designed a FARM stack UI for experts to validate document structure before embedding.</li>
                <li>Containerized the pipeline with Docker for smooth and scalable deployment.</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Apache Airflow</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">OCR</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">LLM Models</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Docker</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Fast API</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">React</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-100 px-6">
        <div className="container mx-auto">
          <div className="flex items-center mb-12">
            <Database className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Data & Big Data Tools</h3>
              <div className="flex flex-wrap gap-2">
                
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">SQL</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">PL-SQL</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">NoSQL</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Hadoop</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Kafka</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Spark</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Airflow</span>


              </div>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Cloud Platforms (AWS, Azure)</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">AWS IAM</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">AWS EC2</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">AWS S3</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">AWS Glue</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">AWS Redshift</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">AWS Lambda</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">AWS Athena</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">AWS RDS</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Azure Functions</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Azure Blob Storage</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Azure OpenAI</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Azure PostgreSQL</span>
              </div>
            </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Programming Languages & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Spring boot</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">HTML</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">CSS</span>

              </div>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Databases</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">MySQL</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">PostgreSQL</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">SQLServer</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Oracle</span>
              </div>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">NoSQL Databases</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Cassandra</span>
              </div>
            </div>
            
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Data Science & AI Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Machine Learning</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Deep Learning</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">NLP</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Classification</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Clustering</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">LLM Exploitation</span>

              </div>
            </div>
            
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">DevOps Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Docker</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Terraform</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Linux</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Git</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">GitHub</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">GitLab</span>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      
      <ProjectsSection />
      {/* Certifications Section */}
      <section id="certifications" className="py-16 bg-gray-100 px-6">
        <div className="container mx-auto">
          <div className="flex items-center mb-12">
            <Award className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* IBM Data Engineering Certificate */}
            <div className="bg-white shadow-lg p-6 rounded-lg flex items-center">
              <img
                src={ibmLogo}
                alt="IBM"
                className="w-24 h-24 object-contain mr-6 bg-gray-800 p-2 rounded-lg flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">IBM Data Engineering Professional Certificate</h3>
                <p className="text-gray-700">IBM</p>
                <a href="https://www.coursera.org/account/accomplishments/professional-cert/R3VCTZT4H887" 
                   className="text-blue-600 hover:text-blue-500 transition-colors duration-300"
                   target="_blank"
                   rel="noopener noreferrer">
                  View Certificate
                </a>
              </div>
            </div>
            
            {/* Google Agile Project Management */}
            <div className="bg-white shadow-lg p-6 rounded-lg flex items-center">
              <img
                src={googleLogo}
                alt="Google"
                className="w-24 h-24 object-contain mr-6 bg-gray-800 p-2 rounded-lg flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Agile Project Management</h3>
                <p className="text-gray-700">Google</p>
                <a href="https://www.coursera.org/account/accomplishments/verify/VU8WWTRDJQJN" 
                   className="text-blue-600 hover:text-blue-500 transition-colors duration-300"
                   target="_blank"
                   rel="noopener noreferrer">
                  View Certificate
                </a>
              </div>
            </div>

            {/* AWS Cloud Concepts */}
            <div className="bg-white shadow-lg p-6 rounded-lg flex items-center">
              <img
                src={dataCampLogo}
                alt="DataCamp"
                className="w-24 h-24 object-contain mr-6 bg-gray-800 p-2 rounded-lg flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">AWS Cloud Concepts</h3>
                <p className="text-gray-700">DataCamp</p>
                <a href="https://www.datacamp.com/completed/statement-of-accomplishment/course/0bcbeb425800c1bc382a51fba1a2ff216772b2a3" 
                   className="text-blue-600 hover:text-blue-500 transition-colors duration-300"
                   target="_blank"
                   rel="noopener noreferrer">
                  View Certificate
                </a>
              </div>
            </div>

            {/* NoSQL, Big Data, and Spark Foundations */}
            <div className="bg-white shadow-lg p-6 rounded-lg flex items-center">
              <img
                src={ibmLogo}
                alt="IBM"
                className="w-24 h-24 object-contain mr-6 bg-gray-800 p-2 rounded-lg flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">NoSQL, Big Data, and Spark Foundations Specialization</h3>
                <p className="text-gray-700">IBM</p>
                <a href="https://www.coursera.org/account/accomplishments/specialization/3BSMCBVP2D75" 
                   className="text-blue-600 hover:text-blue-500 transition-colors duration-300"
                   target="_blank"
                   rel="noopener noreferrer">
                  View Certificate
                </a>
              </div>
            </div>

            {/* Advanced SQL for Data Engineering */}
            <div className="bg-white shadow-lg p-6 rounded-lg flex items-center">
              <img
                src={dataScience365Logo}
                alt="365 Data Science"
                className="w-24 h-24 object-contain mr-6 bg-gray-800 p-2 rounded-lg flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Advanced SQL for Data Engineering</h3>
                <p className="text-gray-700">365 Data Science</p>
                <a href="https://learn.365datascience.com/certificates/CC-A4B7A0EC0F/" 
                   className="text-blue-600 hover:text-blue-500 transition-colors duration-300"
                   target="_blank"
                   rel="noopener noreferrer">
                  View Certificate
                </a>
              </div>
            </div>

            {/* Talend Data Integration */}
            <div className="bg-white shadow-lg p-6 rounded-lg flex items-center">
              <img
                src={talendLogo}
                alt="Talend"
                className="w-24 h-24 object-contain mr-6 bg-gray-800 p-2 rounded-lg flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Talend Data Integration Certification Preparation training</h3>
                <p className="text-gray-700">Talend</p>
                <a href="https://www.coursera.org/account/accomplishments/verify/D8AXDXHLPJ4L" 
                   className="text-blue-600 hover:text-blue-500 transition-colors duration-300"
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
      <section id="contact" className="py-16 bg-gray-100 px-6">  
        <div className="container mx-auto">  
          <div className="flex items-center mb-12">  
            <Mail className="w-8 h-8 text-blue-600 mr-4" />  
            <h2 className="text-3xl font-bold text-gray-900">Contact</h2>  
          </div>  
          <div className="bg-white shadow-lg p-8 rounded-lg">  
            <p className="text-gray-700 mb-6">  
              I'm always open to discussing new opportunities and interesting projects.  
              Feel free to reach out!  
            </p>  
            <div className="flex flex-col space-y-4">  
              <a href="mailto:mohamedafkir078@gmail.com"   
                className="flex items-center text-blue-600 hover:text-blue-500">  
                <Mail className="w-5 h-5 mr-2" />  
                mohamedafkir078@gmail.com  
              </a> 
              <a href="https://www.linkedin.com/in/mohamed-afkir-1bbb9729a" target="_blank" rel="noopener noreferrer"  
                className="flex items-center text-blue-600 hover:text-blue-500">  
                <Linkedin className="w-5 h-5 mr-2" />  
                LinkedIn Profile  
              </a>  
              <a href="https://github.com/afkirmohamed11" target="_blank" rel="noopener noreferrer"  
                className="flex items-center text-blue-600 hover:text-blue-500">  
                <Github className="w-5 h-5 mr-2" />  
                GitHub Profile  
              </a>  
               
              
            </div>  
          </div>  
        </div>  
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-600 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Social Media Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a 
            href="https://github.com/afkirmohamed11" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/mohamed-afkir-1bbb9729a" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://x.com/mohamed82862711?t=95bjAx0gXzw7psi8INzAqA&s=09" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>
        
        {/* Copyright Notice */}
        <p className="text-lg text-gray-800 text-center md:text-right">
  &copy; {new Date().getFullYear()} Mohamed Afkir. All Rights Reserved.
</p>

      </div>
    </div>
  </footer>

    </div>
  );
}

export default App;
