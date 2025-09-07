import { useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Movies from './pages/Movies.jsx'
import SeatLayout from './pages/SeatLayout.jsx'
import Favorite from './pages/Favourite.jsx'
import MyBookings from './pages/MyBookings.jsx'
import Theaters from './pages/Theaters.jsx'
import HomeFooter from './pages/footer/HomeFooter.jsx';
import AboutUsFooter from './pages/footer/AboutUsFooter.jsx';
import ContactUsFooter from './pages/footer/ContactUsFooter.jsx';
import PrivacyPolicyFooter from './pages/footer/PrivacyPolicyFooter.jsx';
import Home from './pages/Home.jsx'
import ReactPlayer from "react-player";
import { Toaster } from 'react-hot-toast'
import MovieDetails from './pages/MovieDetails.jsx'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './pages/admin/Layout.jsx'
import AddShows from './pages/admin/AddShows.jsx'
import ListShows from './pages/admin/ListShows.jsx'
import ListBookings from './pages/admin/ListBookings.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'  
import { useAppContext } from './context/AppContext.jsx'
import { SignIn } from '@clerk/clerk-react'
import Loading from './components/Loading.jsx'

const App = () => {
  
  const isAdminRoute= useLocation().pathname.startsWith('/admin') 

  const {user} = useAppContext()
  return (
    <>
    <Toaster/>
    {!isAdminRoute && <Navbar/>}

    <Routes>
      <Route path='/'element={ <Home/>}/>
      <Route path='/movies'element={ <Movies/>}/>
      <Route path='/movies/:id'element={ <MovieDetails/>}/>
      <Route path='/movies/:id/:date'element={ <SeatLayout/>}/>
      <Route path='/my-bookings'element={ <MyBookings/>}/>
      <Route path='/loading/:nextUrl'element={ <Loading/>}/>
  <Route path='/favorite'element={ <Favorite/>}/>
  <Route path='/theaters' element={<Theaters/>}/>
  <Route path='/footer/home' element={<HomeFooter/>}/>
  <Route path='/footer/aboutus' element={<AboutUsFooter/>}/>
  <Route path='/footer/contactus' element={<ContactUsFooter/>}/>
  <Route path='/footer/privacypolicy' element={<PrivacyPolicyFooter/>}/>
  <Route path='/admin/*' element={user ? <Layout/>:(
        <div className='min-h-screen flex justify-center items-center'>
          <SignIn fallbackRedirectUrl={'/admin'}/>
        </div>
      )}> 
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
