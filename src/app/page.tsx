import React from 'react'
import Hero from './components/Hero'
import Section from './components/Section2'
import Training from './components/Training'
import Membership from './components/Membership'
import BodyIsTemple from './components/Body'
import Body from './components/Body'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Copyright from './components/Copyright'

function Home() {
  return (
    <div>

      <Hero/>
      <Section/>
      <Training/>
      <Membership/>
      <Body/>
      <Contact/>
      <Footer/>
      <Copyright/>
      
    </div>
  )
}

export default Home