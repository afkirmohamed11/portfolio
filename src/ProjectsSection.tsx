import React, { useState } from "react";
import { FolderGit2, ExternalLink } from "lucide-react";

// Import images
import img1 from "./images/1.jpeg";
import img2 from "./images/2.jpeg";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/6.png";
import img7 from "./images/7.png";
import img8 from "./images/8.png";

const ProjectsSection = () => {
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      id: 1,
      name: "Property Rental Price Prediction App",
      description:
        "I built a comprehensive model for predicting apartment prices in Morocco. I performed web scraping from a Moroccan website and preprocessed the data using Python. I developed a regression model using Gradient Boosting, Random Forest, and Lasso algorithms to predict apartment prices across ten Moroccan cities.",
      tools: ["Python", "Web Scraping", "BeautifulSoup", "Gradient Boosting", "Random Forest", "Lasso"],
      github_link: "https://github.com/afkirmohamed11/RentalHousingPricePrediction.git",
      image: img1, // Imported image
    },
    {
      id: 2,
      name: "Intelligent Word Spell Checker using NLP and N-gram Language Models",
      description:
        "I built an intelligent spell checker that leverages Natural Language Processing and n-gram language models to detect and correct spelling errors. The system combines advanced NLP techniques for text processing with statistical language patterns to understand word context. By analyzing both word similarity and contextual probability, it provides accurate spelling suggestions that maintain semantic coherence in sentences.",
      tools: ["Python", "NLP", "Numpy", "NLTK", "N-gram Language Models"],
      github_link: "https://github.com/afkirmohamed11/N-gram-Based-Smart-Spell-Corrector.git",
      image: img2, // Imported image
    },
    {
      id: 3,
      name: "Heart Disease Prediction App",
      description:
        "I developed a heart disease prediction model using machine learning techniques in Python. I deployed the model with Streamlit and Docker to ensure user-friendly access.",
      tools: ["Python", "Machine Learning", "Streamlit", "Docker"],
      github_link: "https://github.com/afkirmohamed11/HeartDiseacePredictionApp.git",
      image: img3, // Imported image
    },
    {
      id: 4,
      name: "Kafka Rental Streaming Data Pipeline using Kafka and Terraform",
      description:
        "I built a real-time data pipeline for processing and analyzing Moroccan rental data. This pipeline extracts data from a PostgreSQL database, streams it through Apache Kafka, stores it in Amazon S3, and then makes it available for SQL-based analysis using Amazon Athena. The infrastructure was provisioned using Terraform.",
      tools: ["Python", "Kafka", "Terraform", "PostgreSQL", "Amazon EC2", "Amazon S3", "AWS Glue Data Catalog", "Amazon Athena"],
      github_link: "https://github.com/afkirmohamed11/Kafka_Rental_Streaming_Data_Pipeline.git",
      image: img4, // Imported image
    },
    {
      id: 5,
      name: "Agricultural Patent Analysis Data Pipeline",
      description:
        "My team and I built a comprehensive patent data processing pipeline. We extracted patent data from multiple sources, including Google Patents and CIPO, and stored it in MongoDB, serving as a data lake solution. We transformed the data using Spark and loaded it into a PostgreSQL data warehouse. The data was then visualized and analyzed using Power BI. We also built a user interface using Flask, JavaScript, CSS, and HTML.",
      tools: ["Python", "MongoDB", "Power BI", "Spark", "PostgreSQL", "Flask", "JavaScript", "CSS", "HTML"],
      github_link: "https://github.com/afkirmohamed11/PatentDataAnalysisPipeline.git",
      image: img5, // Imported image
    },
    {
      id: 6,
      name: "ETL pipeline automated with Airflow",
      description:
        "I developed an Airflow pipeline for data warehousing. I created a pipeline that periodically extracts data from a MySQL staging area, transforms it with timestamps, and loads it into a PostgreSQL data warehouse.",
      tools: ["Python", "Airflow", "MySQL", "PostgreSQL"],
      github_link: "https://github.com/afkirmohamed11/Airflow_ETL.git",
      image: img6, // Imported image
    },
    {
      id: 7,
      name: "Exam Management Application",
      description:
        "My classmate and I developed an exam management web application using Spring Boot, Spring Security, and Spring Data JPA with a JSP frontend and MySQL database. The application facilitated exam management, optimized administration and teacher management, and organized pedagogical elements. We implemented a three-layered architecture with distinct Presentation, Business Services, and Data Access layers, adhering to the MVC model.",
      tools: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "MySQL", "JSP"],
      github_link: "https://github.com/afkirmohamed11/SpringBootExamManagamentApp.git",
      image: img7, // Imported image
    },
    {
      id: 8,
      name: "Student Desktop Management Application",
      description:
        "I developed a Python application, implementing the user interface with the Tkinter library and utilizing MySQL for data storage.",
      tools: ["Python", "Tkinter", "MySQL"],
      github_link: "https://github.com/afkirmohamed11/SchoolStudentManagementApp.git",
      image: img8, // Imported image
    },
  ];

  const displayedProjects = showMore ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-16 bg-gray-800 px-6">
      <div className="container mx-auto">
        <div className="flex items-center mb-12">
          <FolderGit2 className="w-8 h-8 text-blue-400 mr-4" />
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {displayedProjects.map((project) => (
            <div key={project.id} className="bg-gray-900 shadow-lg p-4 md:p-6 rounded-lg">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 md:h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg md:text-xl font-bold">{project.name}</h3>
              <p className="text-gray-300 mt-2 text-sm md:text-base">{project.description}</p>
              <div className="mt-3 md:mt-4 flex flex-wrap gap-1.5 md:gap-2">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-2 md:px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs md:text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 md:mt-4 inline-flex items-center text-blue-400 hover:text-blue-300 text-sm md:text-base"
              >
                View Project <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
        {projects.length > 4 && (
          <div className="mt-6 md:mt-8 text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-4 md:px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg hover:from-blue-400 hover:to-blue-600 text-sm md:text-base"
            >
              {showMore ? "Show Less" : "More Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
