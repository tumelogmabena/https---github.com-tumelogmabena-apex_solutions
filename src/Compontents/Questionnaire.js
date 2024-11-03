import React, { useState } from 'react';

function Questionnaire() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    condition:'',
    power:'',
    screen:'',
    mic:'',
    water:'',
    cam:'',
    sensor:'',
    model:'',
    description: ''
  });

  // Handle input changes for text, radio, and textarea
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter((interest) => interest !== value)
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <h2>Questionnaire Form</h2>
      <form onSubmit={handleSubmit}>
        
        {/* Text Input */}
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        
        
        
        {/* Radio Buttons */}
        <div>
          <label>Please select your phone model:</label>
          <label>
            <input type="radio" name="model" value="iPhone" checked={formData.model === 'iPhone'}onChange={handleChange}/>
            iPhone
          </label>
          <label>
            <input type="radio" name="model" value="Samsung" checked={formData.model === 'Samsung'}onChange={handleChange}/>
            Samsung
          </label>
          <label>
            <input type="radio" name="model" value="Other" checked={formData.model === 'Other'}onChange={handleChange}/>
           Other
          </label>
        </div>

        <hr/>

        <div>
          <label>Problem Type:</label>
          <label>
            <input type="radio" name="type" value="Hardware" checked={formData.type === 'Hardware'}onChange={handleChange}/>
            Hardware
          </label>
          <label>
            <input type="radio" name="type" value="Software" checked={formData.type === 'Software'}onChange={handleChange}/>
            Software
          </label>
          <label>
            <input type="radio" name="type" value="Both" checked={formData.type === 'Both'}onChange={handleChange}/>
           Both
          </label>
        </div>

        <hr/>

        <div>
          <label>Condition:</label>
          <label>
            <input type="radio" name="condition" value="Excellent" checked={formData.condition === 'Excellent'}onChange={handleChange}/>
            Excellent
          </label>
          <label>
            <input type="radio" name="condition" value="Fair" checked={formData.condition === 'Fair'}onChange={handleChange}/>
            Fair
          </label>
          <label>
            <input type="radio" name="condition" value="Poor" checked={formData.condition === 'Poor'}onChange={handleChange}/>
            Poor
          </label>
        </div>

        <hr/>

        <div>
          <label>Does your device Switch On</label>
          <label>
            <input type="radio" name="power" value="Yes" checked={formData.power === 'Yes'}onChange={handleChange}/>
            Yes
          </label>
          <label>
            <input type="radio" name="power" value="No" checked={formData.power === 'No'}onChange={handleChange}/>
            No
          </label>
        
        </div>

        <hr/>

        <div>
          <label>Is your screen damaged?</label>
          <label>
            <input type="radio" name="screen" value="Yes" checked={formData.screen === 'Yes'}onChange={handleChange}/>
            Yes
          </label>
          <label>
            <input type="radio" name="screen" value="No" checked={formData.screen === 'No'}onChange={handleChange}/>
            No
          </label>
          
        </div>

        <hr/>

        
        <div>
          <label>Does your device Mic work</label>
          <label>
            <input type="radio" name="mic" value="Yes" checked={formData.mic === 'Yes'}onChange={handleChange}/>
            Yes
          </label>
          <label>
            <input type="radio" name="mic" value="No" checked={formData.mic === 'No'}onChange={handleChange}/>
            No
          </label>
        
        </div>

        <hr/>

        <div>
          <label>Has your device fallen inside water</label>
          <label>
            <input type="radio" name="water" value="Yes" checked={formData.water === 'Yes'}onChange={handleChange}/>
            Yes
          </label>
          <label>
            <input type="radio" name="water" value="No" checked={formData.water === 'No'}onChange={handleChange}/>
            No
          </label>
        
        </div>

        <hr/>

        <div>
          <label>Does your camera work?</label>
          <label>
            <input type="radio" name="cam" value="Yes" checked={formData.cam === 'Yes'}onChange={handleChange}/>
            Yes
          </label>
          <label>
            <input type="radio" name="cam" value="No" checked={formData.cam === 'No'}onChange={handleChange}/>
            No
          </label>
        
        </div>

        <hr/>

        <div>
          <label>Do your sensors work</label>
          <label>
            <input type="radio" name="sensor" value="Yes" checked={formData.sensor === 'Yes'}onChange={handleChange}/>
            Yes
          </label>
          <label>
            <input type="radio" name="sensor" value="No" checked={formData.sensor === 'No'}onChange={handleChange}/>
            No
          </label>
        
        </div>

        <hr/>
        
        
        {/* Textarea */}
        <div>
          <label>
            Please give us more information with the problem of your diviice
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
        </div>
        
        {/* Submit Button */}
        <button id="submit_btn" type="submit">Submit</button>
        <button id="cancel_btn" type="submit">Cancel</button>
      </form>
    </div>
  );
}

export default Questionnaire;
