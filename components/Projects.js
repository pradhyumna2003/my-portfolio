// components/Projects.js
import { useState } from 'react';

export default function Projects() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const projects = [
    {
      title: "Local History Chatbot",
      description: "I completed the development of a local history chatbot, enhancing user engagement, by using a pre-trained Google model from Hugging Face and the Langchain package in Python, trained on articles and books related to that place.",
      link: "https://github.com/pradhyumna2003",
    },
    {
      title: "Resource Quality Monitoring Dashboard",
      description: "Developed a dashboard for resource quality monitoring by developing a dashboard with frontend (HTML, CSS, JavaScript) and backend (Firebase RTDB, Python Flask) technologies, providing analytics via ChartJS.",
      link: "https://github.com/pradhyumna2003",
    },
    {
      title: "Microservice Architecture Deployment",
      description: "Achieved efficient microservice architecture deployment as measured by seamless service layer integration and containerization by developing a Spring Boot application divided into data, control, and service layers and deploying it in Dockers.",
      link: "https://github.com/pradhyumna2003",
    },
    {
      title: "Full-Stack Todo List App",
      description: "I completed the development of a full-stack Todo List app using Next JS and Firebase, and user retention was efficiently implemented by keeping the listener interface for authorization and Firestore database integration.",
      link: "https://github.com/pradhyumna2003",
    },
    {
      title: "Calculator App",
      description: "Calculator App - React JS. The application developed using advanced HOOK concepts.",
      link: "#",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      
      {projects.map((project, index) => (
        <div key={index}>
          <button
            onClick={() => toggleSection(index)}
            className="w-full text-left py-2 font-bold text-secondaryColor text-lg rounded-lg"
            
          >
            {openSection === index ? '▼' : '▶'} {project.title}
          </button>
          {openSection === index && (
            <div className="pl-4 pt-2">
              <p>{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline">Learn more</a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
