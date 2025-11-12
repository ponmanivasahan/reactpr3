import React from 'react';
import './About.css'
import { useNavigate } from 'react-router-dom';
function About() {
    const navigate=useNavigate();
  return (
    <div >
      <h1 className='About'>Welcome to Our Student Management System!</h1>
      <p>
        We are dedicated to providing an efficient and user-friendly platform for managing
        student information, attendance, and academic records. Our goal is to simplify complex
        administrative tasks and help educational institutions save time and resources through
        smart digital solutions.
      </p>
      <p>
        Our system is designed with modern educational needs in mind. Whether you are a teacher
        managing class records, a student checking grades, or a parent monitoring progress,
        our platform offers a seamless experience that keeps everyone connected and informed.
        Every feature is crafted to improve accessibility, transparency, and communication
        across the academic community.
      </p>
      <p>
        At the heart of our system lies a commitment to data accuracy and security. We ensure
        that all student information is safely stored and easily retrievable when needed,
        empowering institutions to make informed decisions based on real-time data. From
        attendance tracking to performance analysis, every module works together to provide
        a comprehensive view of student growth and institutional performance.
      </p>
      <p>
        We believe that education thrives when technology supports it effectively. Thats why
        we continue to innovate and refine our system to meet the evolving needs of schools,
        colleges, and universities. Our mission is to build tools that not only manage data
        but also inspire better teaching, learning, and collaboration.
      </p>
      <p>
        Thank you for choosing our Student Management System. Together, we can create a smarter,
        more connected, and efficient learning environment for everyone involved in the
        educational journey.
      </p>
      <button onClick={()=>navigate('/Creation')}>Creation</button>
      <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  );
}

export default About
