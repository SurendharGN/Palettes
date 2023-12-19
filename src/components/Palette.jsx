import React from 'react';
import { useState,useEffect } from 'react';
import rgbHex from 'rgb-hex';


const Palette = () => {
  const [palette,setPalette]=useState([]);
  let color=[];

  for(let i=0;i<=Object.keys(palette).length;i++){
    console.log("palette",typeof(palette))
    color.push(palette[i]);

  }


  useEffect(()=>{
    handleFetch()
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
    <div style={{display:'flex',
    flexDirection:'column',alignContent:'center',gap:'10px',justifyContent:'center'}}>
      <button style={{width:'10em'}} id="fetchColor" onClick={handleFetch}>Generate</button>
      <div style={{display:'flex',width:'100vw'}}>
      {color.map((key,id)=>{
        // console.log("key:",key)
        return(
          <div style={{backgroundColor:`rgb(${key}`,height:'80vh',width:'20vw'}} key={id}>
            {/* <p>{`${key[0]},${key[1]},${key[2]}`}</p> */}
            <p>{key}</p>
          </div>

        )
        
      })}
      </div>
      </div>

        
    
      
  )
}

export default Palette