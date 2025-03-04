import React, { useState, useEffect } from 'react';
import './style6.css';

function RegistrationForm() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: '',
    age: '',
    rollno: '',
    email: '',
    phone: '',
    percentage:'',
    club:''
  });

  const [sortBy, setSortBy] = useState("name");
  const [filterBy, setFilterBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage, setStudentsPerPage] = useState(5);
  const [formVisible, setFormVisible] = useState(false);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStudents([...students, newStudent]);
    setNewStudent({
      name: '',
      age: '',
      rollno: '',
      email: '',
      phone: '',
      percentage:'',
      club:''
    });
    setFormVisible(false);
  };

  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  };

  const handleFilterBy = (event) => {
    setFilterBy(event.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(filterBy.toLowerCase())
  );

  const sortedStudents = filteredStudents.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } 
    else if (sortBy === "age") {
      return a.age - b.age;
    }
    else if (sortBy === "rollno") {
      return a.name.localeCompare(b.rollno);
    }  
    else if (sortBy === "email") {
      return a.email.localeCompare(b.email);
    }
    else if (sortBy === "percentage") {
      return a.percentage - b.percentage;
    }
    else if (sortBy === "club") {
      return a.name.localeCompare(b.club);
    }
  });

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = sortedStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
    setStudentsPerPage(Number(event.target.value));
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sortedStudents.length / studentsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='rf'>
    <div className="container mt-4">
      <h1 className="text-center">Student Registration Form</h1>
      <h3 className='text-right'>{date.toLocaleString()}</h3>
      <h2 className='text-left' style={{textAlign:"left"}}>Please add your details:</h2>
      <div className={`row justify-content-${formVisible ? "end" : "center"}`}>
      <div className={`col-md-6 mb-3 ${formVisible ? "slide-in" : ""}`}></div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" id="name" name="name" value={newStudent.name} onChange={handleInput} className="form-control" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age:</label>
          <input type="number" id="age" name="age" value={newStudent.age} onChange={handleInput} className="form-control" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="rollno" className="form-label">Roll No:</label>
          <input type="text" id="rollno" name="rollno" value={newStudent.rollno} onChange={handleInput} className="form-control" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" name="email" value={newStudent.email} onChange={handleInput} className="form-control" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone:</label>
          <input type="tel" id="phone" name="phone" value={newStudent.phone} onChange={handleInput} className="form-control" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="percentage" className="form-label">Percentage:</label>
          <input type="number" id="percentage" name="percentage" value={newStudent.percentage} onChange={handleInput} className="form-control" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="club" className="form-label">Club:</label>
          <input type="text" id="club" name="club" value={newStudent.club} onChange={handleInput} className="form-control" required/>
        </div>

        <div className="text-end">
              <button type="submit" className="btn btn-primary me-2">
                Add Student
              </button>
              <button type="button" className="btn btn-danger me-2" onClick={() => setFormVisible(false)}>
                Cancel
              </button>
            </div>
      </form>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-4 mb-3">
          <input type="text" className="form-control" placeholder="Filter by name" value={filterBy} onChange={handleFilterBy}/>
        </div>
        <div className="col-md-4 mb-3">
          <select className="form-control" value={sortBy} onChange={handleSortBy}>
            <option value="name">Sort by Name</option>
            <option value="rollno">Sort by Roll No</option>
            <option value="email">Sort by Email</option>
            <option value="percentage">Sort by Percentage</option>
          </select>
        </div>
      </div>
      <table className={`table ${students.length > 0 ? "fade-in" : ""}`}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No.</th>
            <th>Email</th>
            <th>Phone</th>
            <th>%</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.rollno}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
      {pageNumbers.map((number) => (
        <span
          key={number}
          id={number}
          className={currentPage === number ? "active" : ""}
          onClick={handleClick}>{number}</span>
      ))}
    </div>
  </div>
  </div>
  );
}

export default RegistrationForm;