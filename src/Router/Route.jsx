import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Logins from '../Login/Logins'
import Studentlist from '../List/Student/student'
import His from '../List/history/History'
import Abouts from '../List/About/Abouts'
import Creation from '../List/Create/Creation'


function Routings() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Logins/>} />
           <Route path='/list' element={<Studentlist/>} />
           <Route path='/history' element={<His/>} />
           <Route path='/about' element={<Abouts/>} />
           <Route path='/Creation' element={<Creation/>} />
           
            </Routes>
    </div>
  )
}

export default Routings