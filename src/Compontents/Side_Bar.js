import react from 'react'
import '../App.css'

function Side_Bar() {
  return (
    <div class = "Side_Bar">
    
      <div class="Info">
      Tumelo Mabena
      </div>

      <ul class="menu">
        <li><a href='/clients'>Home</a></li> 
        <li><a href='current'>Current Jobs</a></li> 
        <li><a href='info'>Edit Profile</a></li>
       
      </ul>

      
    </div>

  );
}

export default Side_Bar;