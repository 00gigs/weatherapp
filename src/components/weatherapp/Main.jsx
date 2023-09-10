

import React from 'react'
import './Main.css'



import search_icon from '../assets/Assets-4/search.png'; 
import clear from '../assets/Assets-4/clear.png'; 
import cloud from '../assets/Assets-4/cloud.png'; 
import drizzle from '../assets/Assets-4/drizzle.png';
import humidity from '../assets/Assets-4/humidity.png'; 
import rain from '../assets/Assets-4/rain.png'; 
import snow from '../assets/Assets-4/snow.png'; 
import wind from '../assets/Assets-4/wind.png' ;


export const Main = () => {
  return (
            <div className='container'>
                <div className='top-bar'>
                    <input type='text' className='cityInput' placeholder='Search'/>
                    <div className='search-icon'>
                        <img src={search_icon}/>
                    </div>
                </div>
            </div>
  )
}

export default Main