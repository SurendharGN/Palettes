// React imports
import React from 'react';
import { useState,useEffect } from 'react';

// External library imports
import rgbHex from 'rgb-hex';
import { GetColorName } from 'hex-color-to-color-name';

import ColorPicker from './ColorPicker';

// Image imports
import copy from "/src/assets/copy.svg";
import drag from "/src/assets/drag.png";
import lock from "/src/assets/lock.svg";
import unlock from "/src/assets/unlock.svg";


const Palette = () => {

  // Stores the palette returned from the ColorMind API
  const [palette,setPalette]=useState([]);

  // React color picker
  // const [picker,setPicker]=useState(false);
  // const handleColorPicker=()=>{
  //   setPicker(true)
  // }

  
  // Stores the RGB values
  let color=[];

// Logic for pushing the color palette
  for(let i=0;i<=4;i++){
    console.log("palette",typeof(palette))
    color.push(palette[i]);

  }



  // Logic for calling the API when any key is pressed
  useEffect(()=>{
    handleFetch();
    window.addEventListener("keyup", handleFetch);
    return () => window.removeEventListener("keyup", handleFetch);
  },[]);

  // Handles color picker
  // const handleColorPick=()=>{
  //   return (<HexColorPicker color={colorPicker} onChange={setColorPicker}/>)
  // }
  
  // Fuction to fetch the palette
  const handleFetch=()=>{
    fetch('http://colormind.io/api/',{
          method: 'POST',
          body: JSON.stringify({
            model:"ui",
          }),
        }).
    then((res)=>res.json()).
    then((data)=>setPalette(data.result)).catch((err)=>{console.log(err)});

  }

  // HTML returned body
  return (
    <div id='palette-container'>
      <div id='header'>
        
        <h1 id='logo' >Palettes</h1>
        <p id='palette-desc'>Click any key to generate a palette!</p>
        <div id='copy-palette' onClick={() =>{navigator.clipboard.writeText(JSON.stringify(color))}}>
          {console.log("copied:",JSON.stringify(color))}
          
          <img  
              id='copy' 
              src={copy} 
              alt="copy" 
              style={{
                height:'20px',
                }} />
          <p id="copy-desc">Copy palette</p>

        </div>
        
        
      </div>
      
      <div id='palette-displayer' >

      {/* Mapping logic */}
      {color.map((key,id)=>{
        console.log("id:",id)
        return(
          <div 
          // onClick={handleColorPicker}
          className='shade'
          style={{backgroundColor:`rgb(${key}`
        }}   
          key={id}>
            
            {/* Converts RGB to hex */}
            {key && <p 
            style={{
            fontWeight:'500',
            fontSize:'32px',
            fontFamily:'inter',
            textTransform:'uppercase'}}>
              {rgbHex(`${key[0]},${key[1]},${key[2]}`)}
            </p>}
              
            {/* Gets the name of the hex color */}
            
            {key && 
            <p 
           
            style={{
              fontWeight:'500',
              fontSize:'16px',
              fontFamily:'inter'}}>
                {GetColorName(`${rgbHex(`${key[0]},${key[1]},${key[2]}`)}`)}
            </p>}


            {/* Displays the features(Copy,drag,lock) */}
            <div className="features"  >
              <img  
              onClick={() =>{navigator.clipboard.writeText(rgbHex(`${key[0]},${key[1]},${key[2]}`))}}
              
              id='copy' 
              src={copy} 
              alt="copy" 
              style={{
                height:'20px',
                backgroundColor:`rgb(${key}`}} />

              <img  src={drag} alt="drag" id="drag" 
              style={{
                height:'20px',
                width:'20px',
                backgroundColor:`rgb(${key}`}} />

              <img src={unlock} id='unlock' alt="copy" 
              style={{
                height:'20px',
                backgroundColor:`rgb(${key}`}} />
            </div>

          </div>
        )
      })}
        </div>
    </div>
  )
}

export default Palette