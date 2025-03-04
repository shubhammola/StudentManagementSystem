import React, { useState } from 'react';
import './style4.css';

const Badge = ({ badgeName, onClick }) => {
  return (
    <div className="badge" onClick={onClick}>
      <i class="fa fa-trophy" style={{color: 'gold',fontSize:'65px'}}></i>
      <span className="badge-name">{badgeName}</span>
    </div>
  );
};

function App() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const studentAchievements = [
    {
      badgeName: 'Academics',
      rollno: '20BD1A056B, 20BD1A056F, 20BD1A056J, 20BD1A057D, 20BD1A057T',
    },
    {
      badgeName: 'All Rounder',
      rollno: '1234567890', 
    },
    {
      badgeName: 'Best Student',
      rollno: '1234567890',
    },
    {
      badgeName: 'Sports',
      rollno: '20BD1A0565, 20BD1A0572, 20BD1A0576, 20BD1A0577, 20BD1A0578, 20XU1A0587', 
    },
    
    {
      badgeName: 'Best Speaker',
      rollno: '1234567890', 
    },
    {
      badgeName: 'Best Writer',
      rollno: '20BD1A0562', 
    },
    {
      badgeName: 'Tech Geek',
      rollno: '20BD1A057B, 20BD1A057D, 20BD1A057M, 20BD1S057N, 20BD1A057T, 21BD5A0521, 21BD5A0523, 21BD5A0524', 
    },
    {
      badgeName: 'Social Work',
      rollno: '20BD1A056D, 20BD1A056N, 20BD1A056K, 20BD1A0579',
    },
  ];

  return (
    <div className='achieve'>
    <div className="achievements-page">
      <h1>Student Achievements</h1>
      <div className='achievers'>
    {selectedAchievement && (
   <div>
      <h3>{selectedAchievement.rollno}</h3>
    </div>
)}
</div>
      <div className="badges-container">
  {studentAchievements.map((achievement, index) => (
    <Badge
      key={index}
      badgeName={achievement.badgeName}
      rollno={achievement.rollno}
      onClick={() => setSelectedAchievement(achievement)}
    />
  ))}
</div>
      <ol style={{listStyleType: 'disc'}}>
        <li><h2>Encouragement gives students more confidence to do something.</h2></li>
        <li><h2>Here are some of our bright and enthusiastic students who have achieved great success in various fields.</h2></li>
        <li><h2>We wish them Congratulations and will always support them in their passionate areas.</h2></li>
      </ol>
    </div>
    </div>
  );
}

export default App;