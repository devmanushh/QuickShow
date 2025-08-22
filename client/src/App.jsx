import { useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Movies from './pages/Movies.jsx'
import SeatLayout from './pages/SeatLayout.jsx'
import Favourite from './pages/Favourite.jsx'
import MyBookings from './pages/MyBookings.jsx'
import Home from './pages/Home.jsx'
import ReactPlayer from "react-player";
import Toaster from 'react-hot-toast'
import MovieDetails from './pages/MovieDetails.jsx'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './pages/admin/Layout.jsx'
import AddShows from './pages/admin/AddShows.jsx'
import ListShows from './pages/admin/ListShows.jsx'
import ListBookings from './pages/admin/ListBookings.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'  

const App = () => {
  
  const isAdminRoute= useLocation().pathname.startsWith('/admin') 
  return (
    <>
    {/* <Toaster/> */}
    {!isAdminRoute && <Navbar/>}

    <Routes>
      <Route path='/'element={ <Home/>}/>
      <Route path='/movies'element={ <Movies/>}/>
      <Route path='/movies/:id'element={ <MovieDetails/>}/>
      <Route path='/movies/:id/:date'element={ <SeatLayout/>}/>
      <Route path='/my-bookings'element={ <MyBookings/>}/>
      <Route path='/favourite'element={ <Favourite/>}/>
      <Route path='/admin/*' element={<Layout/>}> 
          <Route index element= {<Dashboard/>} />
          <Route path="add-shows" element= {<AddShows/>} />
          <Route path="list-shows" element= {<ListShows/>} />
          <Route path="list-bookings" element= {<ListBookings/>} />
      </Route>
    </Routes>

    {!isAdminRoute && <Footer/>}
     
    </>
  )
}

export default App
