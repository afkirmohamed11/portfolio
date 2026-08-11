import React, { useState } from "react";
import { FolderGit2, ExternalLink, Filter, Sparkles, Bot, ShieldCheck, Cpu } from "lucide-react";

// Import images
import img1 from "./images/1.jpeg";
import img4 from "./images/4.png";
import img6 from "./images/6.png";
import img9 from "./images/9.png";
import img10 from "./images/10.png";

interface Project {
  id: number;
  name: string;
  description: string;
  tools: string[];
  github_link: string;
  image?: string;
  domain: string;
  featured?: boolean;
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [showMore, setShowMore] = useState<boolean>(false);

  const projects: Project[] = [
    {
      id: 12,
      name: "Xtelecom Hybrid AI Chatbot (RAG + SQL)",
      description:
        "Smart customer support assistant that intelligently routes queries between structured SQL databases (plans, usage, billing) and unstructured vector search document stores (FAQs, policies) powered by Google Vertex AI. Built with FastAPI and monitored with Langfuse.",
      tools: ["Python", "FastAPI", "Google Vertex AI", "RAG", "Vector DB", "SQL", "LangChain", "Langfuse"],
      github_link: "https://github.com/afkirmohamed11/XtelecomBot",
      domain: "Data Science & AI",
      featured: true
    },
    {
      id: 4,
      name: "Kafka Rental Real-Time Streaming Pipeline",
      description:
        "End-to-end real-time data pipeline for Moroccan rental properties. Extracts data from PostgreSQL, streams via Apache Kafka, stores in Amazon S3, and provisions AWS Glue Data Catalog & Athena for SQL analysis with Terraform Infrastructure as Code.",
      tools: ["Python", "Apache Kafka", "Terraform", "PostgreSQL", "AWS S3", "AWS Glue", "Amazon Athena"],
      github_link: "https://github.com/afkirmohamed11/Kafka_Rental_Streaming_Data_Pipeline.git",
      image: img4,
      domain: "Data Engineering",
      featured: true
    },
    {
      id: 1,
      name: "Property Rental Price Prediction Engine",
      description:
        "Comprehensive ML system for predicting apartment prices across 10 Moroccan cities. Features web scraping pipeline using BeautifulSoup, robust data preprocessing, and model evaluation across Gradient Boosting, Random Forest, and Lasso Regressors.",
      tools: ["Python", "Web Scraping", "BeautifulSoup", "Gradient Boosting", "Random Forest", "Scikit-Learn"],
      github_link: "https://github.com/afkirmohamed11/RentalHousingPricePrediction.git",
      image: img1,
      domain: "Data Science & AI",
      featured: true
    },
    {
      id: 6,
      name: "Automated Airflow Data Warehouse ETL Pipeline",
      description:
        "Production-grade Apache Airflow DAG orchestrating ETL workflows for data warehousing. Features scheduled extraction from MySQL staging, timestamp transformations, and idempotent loading into PostgreSQL data warehouse.",
      tools: ["Python", "Apache Airflow", "MySQL", "PostgreSQL", "ETL", "Docker"],
      github_link: "https://github.com/afkirmohamed11/Airflow_ETL.git",
      image: img6,
      domain: "Data Engineering",
      featured: true
    },
    {
      id: 7,
      name: "Sales Performance Tracker & BI Dashboard",
      description:
        "Interactive Power BI enterprise dashboard visualizing key revenue KPIs, ordered vs invoiced quantities, and quarterly profitability trends. Built using advanced Power Query ETL and custom DAX calendar dimensional models.",
      tools: ["Power BI", "DAX", "Power Query", "Excel", "Data Modeling"],
      github_link: "https://github.com/afkirmohamed11/SalesPerformanceTracker.git",
      image: img9,
      domain: "Data Analysis & BI",
      featured: true
    },
    {
      id: 8,
      name: "Customer Feedback Insights & Sentiment Dashboard",
      description:
        "Analytical customer intelligence dashboard processing feedback collected from Google Forms. Uses DAX calculations for satisfaction benchmarks, trend analysis, and dynamic parameter filtering for actionable decision-making.",
      tools: ["Power BI", "DAX", "Power Query", "Analytics", "Google Forms"],
      github_link: "https://github.com/afkirmohamed11/CustomerFeedback-Insights.git",
      image: img10,
      domain: "Data Analysis & BI",
      featured: false
    }
  ];

  const filterCategories = ["All", "Data Engineering", "Data Science & AI", "Data Analysis & BI"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.domain === activeFilter);

  const displayedProjects = showMore ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">Featured Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
              Technical <span className="text-gradient">Projects</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900/80 border border-slate-800 rounded-xl backdrop-blur-md">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveFilter(category);
                  setShowMore(false);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col justify-between border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/5"
            >
              <div>
                {/* Project Image & Badge Overlay */}
                <div className="relative h-52 sm:h-60 overflow-hidden bg-slate-950 flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/40 p-6 flex flex-col justify-center items-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] opacity-15"></div>
                      <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-3 shadow-lg shadow-cyan-500/10">
                        {project.domain === "Data Engineering" ? (
                          <ShieldCheck className="w-10 h-10" />
                        ) : (
                          <Bot className="w-10 h-10" />
                        )}
                      </div>
                      <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest">
                        {project.domain} Project
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  
                  {/* Category Pill Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 text-cyan-400 text-xs font-semibold rounded-full shadow-lg">
                      {project.domain}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-1 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold rounded-full flex items-center gap-1 shadow-lg">
                        <Sparkles className="w-3 h-3" /> Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300 mb-3">
                    {project.name}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 bg-slate-800/80 border border-slate-700/50 text-slate-300 rounded-md text-xs font-mono"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-0">
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700/80 text-cyan-400 font-medium text-sm hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 transition-all duration-300 group/btn shadow-md"
                >
                  <FolderGit2 className="w-4 h-4 mr-2" />
                  View Repository
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {filteredProjects.length > 4 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-8 py-3 bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-cyan-400 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/10"
            >
              {showMore ? "Show Fewer Projects" : `View All Projects (${filteredProjects.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
