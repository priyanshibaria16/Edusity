import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'; 
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className="container">
          <Title />
          <Programs />
          <About />
      </div>
      
    </div>
  )
}
export default App;
