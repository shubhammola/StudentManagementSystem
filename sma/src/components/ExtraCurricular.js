import React from 'react';
import { Link } from "react-router-dom"
import './style5.css';

const activities = [
  { name: 'Sports Club', description: 'One of the most exciting and enthusiastric where every student gets a chance prove their physical skills along with team sports We provide both indoor and oytdoor sports.',icon: <i className="fa fa-medal" style={{color: 'grey',fontSize:'80px'}}></i>,},
  { name: 'Speaker Club', description: 'Speaking is a right of everyone. And we beileve great speakers are the future leaders tomorrow. We encourage and at the same time give you opportunity to express your words.',icon: <i className="fa fa-radio" style={{color: 'lightblue',fontSize:'80px'}}></i>,},
  { name: 'Drama Society', description: 'Everyone has drama in their life. Lets why not express the actions and make it an interesting drama show. Common actors its time for action!',icon: <i className="fa fa-video" style={{color: 'red',fontSize:'80px'}}></i>,},
  { name: 'Eco Club', description: 'Saving Earth from the all the pollution is our responsibility. Lets be part of this inspirational movement.',icon: <i className="fa fa-leaf" style={{color: 'green',fontSize:'80px'}}></i>,},
  { name: 'Literature Club', description: 'Who loves reading Books? Who loves to write? Here is the opportunity to show your literature skills.',icon: <i className="fa fa-book" style={{color: 'pink',fontSize:'80px'}}></i>,},
  { name: 'Robotics Club', description: 'AI is the future. Here we introduce new technologies and help you in building good projects which is helpful for your Resume.',icon: <i className="fa fa-robot" style={{color: 'yellow',fontSize:'80px'}}></i>,},
];

const ActivityCard = ({ name, description, icon}) => (
  <div className="activity-card">
    {icon}
    <h2>{name}</h2>
    <p>{description}</p>
    <Link to="/RegistrationForm">
      <button className="join-button">Join Now</button>
    </Link>
  </div>
);

const App = () => (
  <div className='eca'>

    <h1>Extra Curricular Activities:</h1>
    <h2 className='h2'>Along with nurturing future in terms of academics we also believe in extra curricular activities.</h2>
    <h2 className='h2'>Since they also play an important role in one's life.</h2>
    <h3 className='h3' style={{textAlign:'left'}}>Here are the following extra curricular activities:</h3>
    
    <div className="activity-grid-container">
    <div className="activity-grid">
      {activities.map(activity => (
        <ActivityCard key={activity.name} {...activity} />
      ))}
    </div>
  </div>
  </div>
);

export default App;