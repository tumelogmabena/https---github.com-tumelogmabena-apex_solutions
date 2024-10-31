import React from 'react'
import Support from '../Images/Support.jpg'
import History from '../Images/History.webp'
import Side_Bar from '../Compontents/Side_Bar';
import { useNavigate } from 'react-router-dom';

function Clients_Home() {
  const navigate = useNavigate();

  const goToReportsPage = () => {
    navigate('/'); 
  };
  return (
    
    <div class="clients_div">
       
        <Side_Bar></Side_Bar>
        <p id="request">Request service</p>
        <div class = "service_req">
       
            
            <img src={Support} alt="Description of my image" width="400" />
    
        </div>

        <button id="request_btn" onClick={goToReportsPage}>Request</button>

        <p id="view">View Service History</p>
        <div  class="View_serv">
        
        <img src={History} alt="Description of my image" width="400" />
       
        </div>

        <button id="view_btn" onClick={goToReportsPage} >View</button>
    </div>
  )
}

export default Clients_Home