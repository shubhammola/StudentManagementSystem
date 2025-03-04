import React from 'react';
import './style2.css';

const students = [
    { id: '20BD1A0561', name: 'Varun',presentDays: 71,totalDays: 120,},
    { id: '20BD1A0562', name: 'Aanchal',presentDays: 100,totalDays: 120, },
    { id: '20BD1A0563', name: 'Greeshma',presentDays: 103,totalDays: 120,},
    { id: '20BD1A0564', name: 'Poojitha',presentDays: 99,totalDays: 120,},
    { id: '20BD1A0565', name: 'Anikaith',presentDays: 104,totalDays: 120,},
    { id: '20BD1A0566', name: 'Pranitha' ,presentDays: 109,totalDays: 120,},
    { id: '20BD1A0567', name: 'Nandini',presentDays: 95,totalDays: 120,},
    { id: '20BD1A0568', name: 'Vandana',presentDays: 83,totalDays: 120, },
    { id: '20BD1A0569', name: 'Surya',presentDays: 76,totalDays: 120,},
    { id: '20BD1A056A', name: 'Laxmi' ,presentDays: 97,totalDays: 120,},
    { id: '20BD1A056B', name: 'Eashwar Sai',presentDays: 104,totalDays: 120, },
    { id: '20BD1A056C', name: 'Swathi',presentDays: 74,totalDays: 120,},
    { id: '20BD1A056D', name: 'Srivikhyat',presentDays: 89,totalDays: 120, },
    { id: '20BD1A056E', name: 'C Sekhar',presentDays: 100,totalDays: 120, },
    { id: '20BD1A056F', name: 'Keerthana',presentDays: 95,totalDays: 120, },
    { id: '20BD1A056G', name: 'Likhita',presentDays: 85,totalDays: 120, },
    { id: '20BD1A056H', name: 'Bharath',presentDays: 82,totalDays: 120, },
    { id: '20BD1A056J', name: 'Sindhuja',presentDays: 83,totalDays: 120, },
    { id: '20BD1A056K', name: 'Sravani' ,presentDays: 87,totalDays: 120,},
    { id: '20BD1A056L', name: 'Sourabh' ,presentDays: 88,totalDays: 120,},
    { id: '20BD1A056M', name: 'Sriram',presentDays: 64,totalDays: 120, },
    { id: '20BD1A056N', name: 'Sumedha' ,presentDays: 94,totalDays: 120,},
    { id: '20BD1A056P', name: 'Sasi Kiran' ,presentDays: 87,totalDays: 120,},
    { id: '20BD1A056Q', name: 'Bhavyashri',presentDays: 91,totalDays: 120, },
    { id: '20BD1A056R', name: 'Adithya',presentDays: 99,totalDays: 120, },
    { id: '20BD1A056T', name: 'Krishna Priya',presentDays: 90,totalDays: 120, },
    { id: '20BD1A056U', name: 'Sathvika',presentDays: 84,totalDays: 120, },
    { id: '20BD1A056V', name: 'Bharathi' ,presentDays: 79,totalDays: 120,},
    { id: '20BD1A056W', name: 'Shushma',presentDays: 80,totalDays: 120, },
    { id: '20BD1A056X', name: 'Vaishnavi',presentDays: 90,totalDays: 120, },
    { id: '20BD1A056Y', name: 'Deepthi',presentDays: 105,totalDays: 120, },
    { id: '20BD1A056Z', name: 'Kruthik',presentDays: 78,totalDays: 120, },
    { id: '20BD1A0571', name: 'Vishwanth',presentDays: 81,totalDays: 120, },
    { id: '20BD1A0572', name: 'Basheer',presentDays: 70,totalDays: 120, },
    { id: '20BD1A0573', name: 'Raviteja',presentDays: 68,totalDays: 120, },
    { id: '20BD1A0574', name: 'Chiranjeevi',presentDays: 100,totalDays: 120, },
    { id: '20BD1A0575', name: 'Sameer',presentDays: 81,totalDays: 120, },
    { id: '20BD1A0576', name: 'Akhil' ,presentDays: 103,totalDays: 120,},
    { id: '20BD1A0577', name: 'RRP' ,presentDays: 91,totalDays: 120,},
    { id: '20BD1A0578', name: 'Sai Shiva',presentDays: 77,totalDays: 120, },
    { id: '20BD1A0579', name: 'Eswar',presentDays: 11,totalDays: 120,},
    { id: '20BD1A057A', name: 'Pranava',presentDays: 96,totalDays: 120, },
    { id: '20BD1A057B', name: 'Vivek',presentDays: 99,totalDays: 120, },
    { id: '20BD1A057C', name: 'Vinuthna',presentDays: 79,totalDays: 120,},
    { id: '20BD1A057D', name: 'Sahitya' ,presentDays: 97,totalDays: 120,},
    { id: '20BD1A057E', name: 'Pramod',presentDays: 48,totalDays: 120, },
    { id: '20BD1A057F', name: 'Harshitha',presentDays: 76,totalDays: 120, },
    { id: '20BD1A057G', name: 'Karthik' ,presentDays: 79,totalDays: 120,},
    { id: '20BD1A057H', name: 'Shubham',presentDays: 100,totalDays: 120, },
    { id: '20BD1A057J', name: 'Nitya',presentDays: 78,totalDays: 120, },
    { id: '20BD1A057K', name: 'Lekha',presentDays: 71,totalDays: 120, },
    { id: '20BD1A057L', name: 'Narasimha' ,presentDays: 61,totalDays: 120,},
    { id: '20BD1A057M', name: 'Sriram',presentDays: 80,totalDays: 120, },
    { id: '20BD1A057N', name: 'Mahesh' ,presentDays: 90,totalDays: 120,},
    { id: '20BD1A057P', name: 'Aravind' ,presentDays: 79,totalDays: 120,},
    { id: '20BD1A057Q', name: 'Lalith',presentDays: 77,totalDays: 120, },
    { id: '20BD1A057R', name: 'Varshith' ,presentDays: 46,totalDays: 120,},
    { id: '20BD1A057T', name: 'Meghana',presentDays: 93,totalDays: 120, },
    { id: '20BD1A057U', name: 'Sreeja' ,presentDays: 90,totalDays: 120,},
    { id: '20BD1A057V', name: 'Abhinav',presentDays: 96,totalDays: 120, },
    { id: '20XU1A0587', name: 'Jayanth',presentDays: 89,totalDays: 120, },
    { id: '21BD5A0519', name: 'Surender' ,presentDays: 88,totalDays: 120,},
    { id: '21BD5A0520', name: 'Chetan',presentDays: 16,totalDays: 120, },
    { id: '21BD5A0521', name: 'Sowmya',presentDays: 91,totalDays: 120, },
    { id: '21BD5A0522', name: 'Saikumar' ,presentDays: 91,totalDays: 120,},
    { id: '21BD5A0523', name: 'Ruthika' ,presentDays: 83,totalDays: 120,},
    { id: '21BD5A0524', name: 'Saif',presentDays: 93,totalDays: 120, },
    { id: '22BD8A0501', name: 'Pulin' ,presentDays: 70,totalDays: 120,},
];

const StudentCard = ({ student }) => {
  const { name, id, presentDays, totalDays } = student;
  const attendancePercentage = ((presentDays / totalDays) * 100).toFixed(2);

  return (
    <div className="card">
      <i class="fa fa-graduation-cap" style={{ color: 'lightblue', fontSize: '100px', fontWeight: 'bold' }}></i>
      <div className="info">
        <h3>{name}</h3>
        <p>Roll No: {id}</p>
        <p>Total Present: {presentDays}/{totalDays}</p>
        <p>Attendance %: {attendancePercentage}%</p>
        <a href="http://kmitonline.com/login/index.php"><button className="btn btn-primary">View Progress</button></a>
        <a href="https://ssolive.myclassboard.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DDIL4KLQ05IV1JZOXCLM0%26redirect_uri%3Dhttps%253A%252F%252Ficici.myclassboard.com%252Fsso%252FCallback%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520offline_access"><button className="btn btn-primary">Pay Fees</button></a>
      </div>
    </div>
  );
};

const StudentList = ({ students }) => {
  return (
    <div className="card-list">
      {students.map((student) => (
        <StudentCard key={student.rollNo} student={student} />
      ))}
    </div>
  );
};


const StudentDetails = () => {
  return (
    <div className='sd'>
    <div>
      <h1>Student Details and Attendance:</h1>
      <h3 style={{textAlign:'left'}}>- To access your progress and track your assignments, please click on "View Progress" below.<br/>
      Additionally, you can conveniently complete your assignments at any time.<br/>
      - To ensure smooth progress, we have integrated a secure fee payment system as well,<br/>
      please click on "Pay Fees" below.<br/></h3>
      <h2>*Remember to enter the password provided by the administrator.</h2>
      <h4 style={{ backgroundColor: 'lightyellow'}}>75% Attendance is mandatory.</h4>
      <StudentList students={students} />
    </div>
    </div>
  );
};

export default StudentDetails;