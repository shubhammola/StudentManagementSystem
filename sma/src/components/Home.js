import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './style1.css';

function Home() {
  const [showStudents, setShowStudents] = useState(false);

  const students = [
    { id: '20BD1A0561', name: 'Varun' },
    { id: '20BD1A0562', name: 'Aanchal' },
    { id: '20BD1A0563', name: 'Greeshma' },
    { id: '20BD1A0564', name: 'Poojitha' },
    { id: '20BD1A0565', name: 'Anikaith' },
    { id: '20BD1A0566', name: 'Pranitha' },
    { id: '20BD1A0567', name: 'Nandini' },
    { id: '20BD1A0568', name: 'Vandana' },
    { id: '20BD1A0569', name: 'Surya Prasad'},
    { id: '20BD1A056A', name: 'Laxmi Bhavitha' },
    { id: '20BD1A056B', name: 'Eashwar Sai' },
    { id: '20BD1A056C', name: 'Swathi'},
    { id: '20BD1A056D', name: 'Srivikhyat' },
    { id: '20BD1A056E', name: 'Chandra Sekhar' },
    { id: '20BD1A056F', name: 'Keerthana' },
    { id: '20BD1A056G', name: 'Likhita' },
    { id: '20BD1A056H', name: 'Bharath' },
    { id: '20BD1A056J', name: 'Sindhuja' },
    { id: '20BD1A056K', name: 'Sravani' },
    { id: '20BD1A056L', name: 'Sourabh' },
    { id: '20BD1A056M', name: 'Sriram' },
    { id: '20BD1A056N', name: 'Sumedha' },
    { id: '20BD1A056P', name: 'Sasi Kiran' },
    { id: '20BD1A056Q', name: 'Bhavyashri' },
    { id: '20BD1A056R', name: 'Adithya' },
    { id: '20BD1A056T', name: 'Krishna Priya' },
    { id: '20BD1A056U', name: 'Sathvika' },
    { id: '20BD1A056V', name: 'Bharathi' },
    { id: '20BD1A056W', name: 'Shushma' },
    { id: '20BD1A056X', name: 'Vaishnavi' },
    { id: '20BD1A056Y', name: 'Maddu Deepthi' },
    { id: '20BD1A056Z', name: 'Kruthik Shankar' },
    { id: '20BD1A0571', name: 'Vishwanth' },
    { id: '20BD1A0572', name: 'Basheer' },
    { id: '20BD1A0573', name: 'Raviteja' },
    { id: '20BD1A0574', name: 'Chiranjeevi' },
    { id: '20BD1A0575', name: 'Sameer' },
    { id: '20BD1A0576', name: 'Akhil' },
    { id: '20BD1A0577', name: 'RRP' },
    { id: '20BD1A0578', name: 'Sai Shiva' },
    { id: '20BD1A0579', name: 'Eswar'},
    { id: '20BD1A057A', name: 'Pranava' },
    { id: '20BD1A057B', name: 'Vivek' },
    { id: '20BD1A057C', name: 'Vinuthna'},
    { id: '20BD1A057D', name: 'Sahitya' },
    { id: '20BD1A057E', name: 'Pramod' },
    { id: '20BD1A057F', name: 'Harshitha' },
    { id: '20BD1A057G', name: 'Karthik' },
    { id: '20BD1A057H', name: 'Shubham' },
    { id: '20BD1A057J', name: 'Nitya' },
    { id: '20BD1A057K', name: 'Lekha' },
    { id: '20BD1A057L', name: 'Narasimha' },
    { id: '20BD1A057M', name: 'Sriram' },
    { id: '20BD1A057N', name: 'Mahesh' },
    { id: '20BD1A057P', name: 'Aravind' },
    { id: '20BD1A057Q', name: 'Lalith' },
    { id: '20BD1A057R', name: 'Varshith' },
    { id: '20BD1A057T', name: 'Meghana' },
    { id: '20BD1A057U', name: 'Sreeja' },
    { id: '20BD1A057V', name: 'Abhinav' },
    { id: '20XU1A0587', name: 'Jayanth' },
    { id: '21BD5A0519', name: 'Surender' },
    { id: '21BD5A0520', name: 'Chetan' },
    { id: '21BD5A0521', name: 'Sowmya' },
    { id: '21BD5A0522', name: 'Saikumar' },
    { id: '21BD5A0523', name: 'Ruthika' },
    { id: '21BD5A0524', name: 'Saif' },
    { id: '22BD8A0501', name: 'Pulin' },
  ];

  const toggleStudents = () => {
    setShowStudents(!showStudents);
  };

  return (
    <div className='home'>
    <div className="home-page">
    <i class="fa fa-school" style={{ fontSize: '150px' }}/>
      <h1 className="title">Welcome to the Student Management App[SMA]!<br/>
      CSE-D [2020-2024]</h1>
      <p className="description">
        This is one the most helpful and convenient app for teachers, students and parents.<br/>
        Developers have made it in such a way where every thing can be smoothly accessed and<br/>
        if not they can reach them at any point of time.<br/>
        Here both teachers and students can manage all students related information.
      </p>
      <i class="fa fa-users" style={{ fontSize: '90px' }}/>
      <h2 className='check'>Please students check if you are registered or not by clicking below button:</h2>
      <button className="view-students-btn" onClick={toggleStudents}>
        View Students
      </button>
      <h3 className='check1'>If not registered please register here by clicking:</h3>
      <Link to="/RegistrationForm">
      <button className="view-students-btn">Register</button>
      </Link>
      {showStudents && (
        <div className="students-popup">
          <h2 className="popup-title">All Students</h2>
          <button className="close-btn" onClick={toggleStudents}>X</button>
          <table className="students-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    <div className='key'>
      <ul className='few'><h3>Few Key Points:</h3></ul>
      <li>This app strictly maintains privacy of each student.</li>
      <li>Any malpractice found with application software would result in severe punishment.</li>
      <li>Any complaints or problems with the app, please reach out to respective CR, Class Teacher or Coordinator.</li>
      <li style={{ fontWeight:"bold" }}>This App is built by Shubham Mola [20BD1A057H].</li>
    </div>
    </div>
  );
}

export default Home;