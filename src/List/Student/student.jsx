import React, { useState, useEffect } from "react";
import "./student.css";
import { useNavigate } from "react-router-dom";

function Studentlist() {
  const navigate = useNavigate();
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : [];
  });
  const [form, setForm] = useState({ rollno: "", name: "", subject: "" });
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);
  const addStudent = () => {
    if (!form.rollno || !form.name || !form.subject) return alert("Fill all fields!");
    setStudents([...students, { ...form, complete: "", incomplete: "" }]);
    setForm({ rollno: "", name: "", subject: "" });
  };
  return (
    <div className="square">
      <h1 className="sec">NAME LIST</h1>
      <input name="rollno" placeholder="Roll No" value={form.rollno} onChange={(e) => setForm({ ...form, rollno: e.target.value })} />
      <input name="name" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input name="subject" placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
      <button onClick={addStudent}>Add Student</button>
      <ol>
        {students.length === 0 ? (
          <p>No students added yet.</p>
        ) : (
          students.map((s, i) => (
            <li key={i}>
              {s.rollno} - {s.name} ({s.subject})
            </li>
          ))
        )}
      </ol>
      <button onClick={() => navigate("/history")}>See History</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}
export default Studentlist;
