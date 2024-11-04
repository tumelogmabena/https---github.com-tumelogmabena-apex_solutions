
import Side_Bar from './Side_Bar'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';


function Top_Bar() {
  
  const navigate = useNavigate();
                                   
  const goToHomePage = () => {
    navigate('/');
  };

  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  const [isActive, setIsActive] = useState(false);

  // Toggle status and color
  const handleStatusToggle = () => {
    setIsActive(!isActive);
  };

  return (
    
    <div>
      
      <div class="spread">
      
      <button onClick ={goToHomePage}>Home</button>
      <button onClick= {goBack}>Back</button>


      <div className="status-circle" style={{ backgroundColor: isActive ? 'green' : 'grey' }}></div>
      <button id="clock" onClick={handleStatusToggle} className="status-button">Clock In</button>
      

      
      </div>

    </div>
  )
}

export default Top_Bar