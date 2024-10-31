import React from 'react'
import Side_Bar from '../Compontents/Side_Bar';
import { useState } from 'react';
import Questionnaire from '../Compontents/Questionnaire';

function Reports() {


  return (
    <div>
        <Side_Bar></Side_Bar>
        <div class="questionnaire">
        <Questionnaire />
        </div>
        
    </div>
    
            
    
  )
}

export default Reports