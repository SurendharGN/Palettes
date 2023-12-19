import { useState } from 'react'
import './App.css';
import { Link } from 'react-router-dom';

function App() {

  return (
    <>
      
      <h1>
        Palettes: Your Ultimate Color Palette Generator.
      </h1>
      
      <p>Welcome to Palettes, where creativity meets color ! Unleash the power of vibrant hues and design stunning color palettes effortlessly. <span id="hero-section-keyword">Discover. Create. Inspire. &#128171;</span></p>
      <Link to="generatePalette" id="call-to-action">Generate</Link>
      <footer id="footer">Made with &#129505; by surendhar</footer>
    </>
  )
}

export default App
