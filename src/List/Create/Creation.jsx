import React from 'react'
import { useNavigate } from 'react-router-dom';

function Creation() {
    const navigate=useNavigate()
  return (
  
   <> 
   <h1>Benefits of Using a Task Management System</h1>
   <div><p>Organization: It provides a central, structured system for managing all personal and professional tasks, preventing information from being scattered across different places.</p>
 <p>Prioritization: It allows users to flag important items, set deadlines, and categorize tasks, ensuring that high-impact and urgent activities are addressed first.</p>
 <p>Memory Aid: By offloading tasks from the brain to a reliable system, it reduces mental clutter and the stress of potentially forgetting something important (known as the Zeigarnik Effect).</p>
 <p>Motivation & Goal Achievement: Crossing off completed tasks provides a sense of accomplishment and visual progress, which is highly motivating. It helps break down large, long-term goals into smaller, more manageable steps.</p>
 <p>Collaboration: Many web-based platforms offer features for sharing lists, assigning tasks to team members, and real-time progress updates, which is crucial for team projects and accountability.</p></div>
  
  <button onClick={()=>navigate(-1)}>Go Back</button></>
  )}

export default Creation