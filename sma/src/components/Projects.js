import React, { useState } from 'react';
import './style3.css';

function Projects() {
  const [modalContent, setModalContent] = useState(null);
  const projects = [
    {
      id: 101,
      name: 'Defence System',
      status: 'Completed',
      teamMembers: ['20BD1A0561','20BD1A0562','20BD1A0563','20BD1A0564','20BD1A0565','20BD1A0566','20BD1A0567','20BD1A0568','20BD1A0569','20BD1A056A'],
      link: 'https://www.drdo.gov.in',
    },
    {
      id: 102,
      name: 'Library Management System',
      status: 'Under Process',
      teamMembers: ['20BD1A056B','20BD1A056C','20BD1A056C','20BD1A056D','20BD1A056E','20BD1A056F','20BD1A056G','20BD1A056H','20BD1A056J','20BD1A056K'],
      link: 'https://www.kitabkhana.in/en',
    },
    {
      id: 103,
      name: 'Bank Management System',
      status: 'Completed',
      teamMembers: ['20BD1A056L','20BD1A056M','20BD1A056N','20BD1A056P','20BD1A056Q','20BD1A056R','20BD1A056T','20BD1A056U','20BD1A056V','20BD1A056W'],
      link: 'https://www.hdfcbank.com',
    },
    {
      id: 104,
      name: 'NIDS',
      status: 'Completed',
      teamMembers: ['20BD1A056X','20BD1A056Y','20BD1A056Z','20BD1A0571','20BD1A0572','20BD1A0573','20BD1A0574','20BD1A0575','20BD1A0576','20BD1A0577'],
      link: 'https://github.com/shubhammola/NIDS',
    },
    {
      id: 105,
      name: 'Sports Project',
      status: 'Under Process',
      teamMembers: ['20BD1A0578','20BD1A0579','20BD1A057A','20BD1A057B','20BD1A057C','20BD1A057D','20BD1A057E','20BD1A057F','20BD1A057G','20BD1A057H',],
      link: 'https://www.icc-cricket.com/homepage',
    },
    {
      id: 106,
      name: 'Digital News Website',
      status: 'Completed',
      teamMembers: ['20BD1A067J','20BD1A057K','20BD1A057L','20BD1A057M','20BD1A057N','20BD1A057P','20BD1A057Q','20BD1A057R','20BD1A057T','20BD1A057U','20BD1A057V'],
      link: 'https://news.google.com',
    },
    {
      id: 107,
      name: 'Shopping Website',
      status: 'Completed',
      teamMembers: ['20XU1A0587','21BD5A0519','21BD5A0520','21BD5A0521','21BD5A0522','21BD5A0523','21BD5A0524','22BD8A0501',],
      link: 'https://www.amazon.in',
    },
  ];

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return ( 
    <div className='project'>
    <div className="project-dashboard">
      <h1>Projects:</h1>
      <h2>The below listed are the projects done by the students under the guidance of Mentors.</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.status}</p>
            <button onClick={() => openModal(project.teamMembers)}>Team Members</button>
            <button onClick={() => window.open(project.link)}>View Project</button>
          </li>
        ))}
      </ul>
      {modalContent && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={closeModal}>Close</button>
            {Array.isArray(modalContent) ? (
              <ul className='scroll'>
                {modalContent.map((member, index) => (
                  <li key={index}>{member}</li>
                ))}
              </ul>
            ) : (
              <iframe src={modalContent} width="100%" height="500px"></iframe>
            )}
          </div>
          </div>
      )}
    </div>
    </div>
  );
}

export default Projects;