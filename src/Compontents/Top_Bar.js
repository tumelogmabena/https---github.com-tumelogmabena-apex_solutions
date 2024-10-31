import React from 'react'
import Side_Bar from './Side_Bar'
import { useNavigate } from 'react-router-dom';


function Top_Bar() {
  
  const navigate = useNavigate();
                                   
  const goToHomePage = () => {
    navigate('/');
  };

  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };
  return (
    
    <div>
      
      <div class="spread">
      
      <button onClick ={goToHomePage}>Home</button>
      <button onClick= {goBack}>Back</button>
      <button id="clock" onClick>Clock In</button>
      

      </div>

    </div>
  )
}

export default Top_Bar