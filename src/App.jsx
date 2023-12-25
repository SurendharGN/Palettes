import { useState } from 'react'
import './App.css';
import { Link } from 'react-router-dom';
import palette from './assets/palette.png'

function App() {

  return (
    <>
      
      <h1>
        Palettes: Your Ultimate Color Palette Generator.
      </h1>
      
      <p id='homepage-desc'>Unleash the power of vibrant hues and design stunning color palettes effortlessly. Utilize the ColorMind API to dynamically generate aesthetically pleasing color palettes. <span id="hero-section-keyword">Discover. Create. Inspire. &#128171;</span></p>
      
      <Link to="generatePalette" id="call-to-action">Generate</Link>

      <img src={palette} style={{width:'36em',display:'block',margin:'auto',paddingTop:'60px'}}></img>
      <footer id="footer">Made with &#129505; by surendhar</footer>
    </>
  )
}

export default App
