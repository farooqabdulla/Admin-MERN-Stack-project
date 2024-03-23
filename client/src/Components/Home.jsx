import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Admin from './Admin'
import View from './View'
import Create from './Create'
import Update from './Update'
const Home = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/home' element={<Admin />} />
                    <Route path='/EmployeeList' element={<View />} />
                    <Route path='/CreateEmployee' element={<Create />} />
                    <Route path='/UpdateEmployee/:id' element={<Update />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Home