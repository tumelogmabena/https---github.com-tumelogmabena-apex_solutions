import React from 'react';


function InfoForm({ onClose }) {
  return (
    <div className="info-form">
      <h2>Information Display</h2>
      
      {/* Display information here */}
      <div className="info-content">
        <p><strong>Name:</strong> Vincent Van</p>
       <p><strong>Phone:</strong> +123 456 7890</p>
         <p><strong>Employee No.:</strong> 60612</p>
        <p><strong>Address:</strong> 123 Main Street, Anytown</p>
        <p><strong>Expertise:</strong>Both Hardware & Software</p>
      </div>
      
      {/* Action buttons at the bottom */}
      <div className="button-container">
        <button className="close-button" onClick={onClose}>Close</button>
        <button className="edit-button">Edit</button>
      </div>
    </div>
  );
}

export default InfoForm;
