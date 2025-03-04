import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul className='navbar'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/StudentDetails">Student Details</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/Achievements">Achievements</Link></li>
        <li><Link to="/ExtraCurricular">Extra Curricular Activities</Link></li>
        <li><Link to="/RegistrationForm">Registration Form</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;