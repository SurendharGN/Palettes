import React from 'react';
import { useState,useEffect } from 'react';
import rgbHex from 'rgb-hex';
import { GetColorName } from 'hex-color-to-color-name';


const Palette = () => {
  const [palette,setPalette]=useState([]);
  let color=[];

  for(let i=0;i<=4;i++){
    console.log("palette",typeof(palette))
    color.push(palette[i]);

  }


  useEffect(()=>{
    handleFetch()
    window.addEventListener("keyup", handleFetch);
    return () => window.removeEventListener("keyup", handleFetch);
   
  },[]);
  
  const handleFetch=()=>{
    fetch('http://colormind.io/api/',{
          method: 'POST',
          body: JSON.stringify({
            model: 'default',
          }),
        }).
    then((res)=>res.json()).
    then((data)=>setPalette(data.result)).catch((err)=>{console.log(err)});

  }
  return (
    <div id='palette-container'>
    <div id='header'>
      <h1 id='logo'>Palettes</h1>
      <p id='palette-desc'>Click any key to generate a palette!</p>

    </div>
      
      <div id='palette-displayer' >
      {color.map((key,id)=>{
        
        return(
          <div id='shade' style={{backgroundColor:`rgb(${key}`}} key={id}>
            {key && <p style={{fontWeight:'500',fontSize:'32px',fontFamily:'inter',textTransform:'uppercase'}}>{rgbHex(`${key[0]},${key[1]},${key[2]}`)}</p>}
            {key && <p style={{fontWeight:'500',fontSize:'16px',fontFamily:'inter',}}>{GetColorName(`${rgbHex(`${key[0]},${key[1]},${key[2]}`)}`)}</p>}
            
          </div>

        )
        
      })}
      </div>
      </div>

        
    
      
  )
}

export default Palette