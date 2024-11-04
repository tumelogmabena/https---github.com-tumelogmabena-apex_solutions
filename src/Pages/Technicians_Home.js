import React from 'react'
import Side_Bar from '../Compontents/Side_Bar';
import Top_Bar from '../Compontents/Top_Bar';
import Available from '../Images/Available.jpg';
import Hourglass from '../Images/Hourglass.jpg';
import Workhistory from '../Images/Workhistory.png'

function Technicians_Home() {
  return (

    
    <div>
        
        <Side_Bar></Side_Bar>
        <Top_Bar></Top_Bar>

        <div className='tech_home_images'>
            <img src={Hourglass} width="280"/>
            
            <div className="vertical-line"></div>
            <img src={Available} width="340"/>
            
            <div className="vertical-line"></div>
            <img src={Workhistory} width="300"/>
            
        </div>

        <div id='tech_buttons'>
            <button id="tech" >View</button>
            <button id="tech" >View</button>
            <button id="tech" >View</button>

        </div>
    </div>
  )
}

export default Technicians_Home