import React from 'react'
import { useState } from 'react'
import './studentlist.css'
function Studentlist() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState("");

  const addStudent = () => {
    if(!newStudent || !isNaN(newStudent)){
        alert("Please enter a valid name");
    }
    setStudents([...students, newStudent]);
    setNewStudent("");
  };

  return (
    <div className='square'>
        <h1>NAME LIST </h1>
        <input
          type="text"
          value={newStudent}
          placeholder="Enter student name"
          onChange={(e) => setNewStudent(e.target.value)}
          />
        <button onClick={addStudent}>Add Student</button>       
        <ol>
            {(students.length === 0)?(
                <p>No students added yet.</p>
            ):(
                students.map((student, index) => (
                    <li key={index}>{student}</li>
                ))
            )}
        </ol>
    </div>
  )
}

export default Studentlist