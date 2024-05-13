import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Project from './Components/Projects/Project'
import Drawings from './Components/Drawings/Drawings'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>
      


      <Router>
      <Navbar/>
      <Routes> 
        <Route path='/drawings' element={<Drawings/>}/>
        <Route path='/aiswariyak' element={<Hero/>}/>
      </Routes>
      </Router>
      <Hero/>
      <About/>
      <Services/>
      <Project/>
      <MyWork/>
      <Contact/>
     

      
      <Footer/>
     


    </div>
  )
}

export default App