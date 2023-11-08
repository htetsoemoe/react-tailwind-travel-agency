import React from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Activities from './components/Activities'
import Bookings from './components/Bookings'
import Gallery from './components/Gallery'
import Contacts from './components/Contacts'

const App = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <Activities />
      <Bookings />
      <Gallery />
      <Contacts />
    </div>
  )
}

export default App
