import react from 'react';
import './Pages.css';
import { useNavigate } from 'react-router-dom';
  

function Welcome_Page() {

  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate('login'); 
  };

  return (
    <div >
      <p class= "welcome">Welcome to Apex Solutions</p>
      <button id="welcome_btn" onClick={goToLoginPage}>Go To Home</button>

    </div>
  );
}

export default Welcome_Page;