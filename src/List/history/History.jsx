import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function His() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const saved = localStorage.getItem("students");
    if (saved) setStudents(JSON.parse(saved));
  }, []);
  const deleteStudent = (index) => {
    const updated = [...students];
    updated.splice(index, 1);
    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
  };
  const editStudent = (index) => {
    const updated = [...students];
    const rollno = prompt("Enter Roll No:", updated[index].rollno);
    const name = prompt("Enter Name:", updated[index].name);
    const subject = prompt("Enter Subject:", updated[index].subject);
    if (rollno && name && subject) {
      updated[index] = { ...updated[index], rollno, name, subject };
      setStudents(updated);
      localStorage.setItem("students", JSON.stringify(updated));
    }
  };
  const changeStatus = (index, newStatus) => {
    const updated = [...students];
    updated[index].status = newStatus;
    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
  };

  return (
    <div >
      <h2>Student History</h2>
      {students.length === 0 ? (
        <p>No records found.</p>
      ) : (
        <table border="1" cellPadding="10">
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
            {students.map((s, i) => (
              <tr key={i}>
                <td>{s.rollno}</td>
                <td>{s.name}</td>
                <td>{s.subject}</td>
                <td>
                  <select
                    onChange={(e) => changeStatus(i, e.target.value)}
                  >
                    <option value="Complete">Complete</option>
                    <option value="Incomplete">Incomplete</option>
                  </select>
                </td>
                <td>
                  <button onClick={() => editStudent(i)}>Edit</button>{" "}
                  <button onClick={() => deleteStudent(i)}>Delete</button>
                </td>
              </tr>
            ))}
        </table>
      )}
      <br />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default His;
