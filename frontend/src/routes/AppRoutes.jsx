import { Route, Routes } from 'react-router-dom'
import React from 'react'
import NotFound from '../pages/notFound/NotFound'
import Home from '../pages/home/Home'
import Restaurant from '../pages/restaurant/Restaurant'
import Menus from '../pages/Menus/Menus'
import Contact from '../pages/Contact/Contact'
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />

      {/* <Route path='/home' element={<Home />} /> */}
      <Route path='/restaurant' element={<Restaurant />} />
      <Route path='/menus' element={<Menus />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />

      {/* defecto page error */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
