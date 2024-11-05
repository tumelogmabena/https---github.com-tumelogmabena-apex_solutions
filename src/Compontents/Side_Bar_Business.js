import react from 'react'
import '../App.css'

function Side_Bar_Business() {
  return (
    <div class = "Side_Bar">
    
      <div class="Info">
      Mr. John Apex
      </div>

      <ul class="menu">
        <li><a href='/clients'>Home</a></li> 
        <li><a href='current'>Clients</a></li> 
        <li><a href='info'>Technicians</a></li>
        <li><a href='info'>Contracts</a></li>
        <li><a href='info'>Analytics</a></li>
       
      </ul>

      
    </div>

  );
}

export default Side_Bar_Business;