import React, { useState } from 'react';

function Questionnaire() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    interests: [],
    feedback: ''
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
        
        {/* Number Input */}
        <div>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        
        {/* Radio Buttons */}
        <div>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === 'Other'}
              onChange={handleChange}
            />
            Other
          </label>
        </div>
        
        {/* Checkboxes */}
        <div>
          <label>Interests:</label>
          <label>
            <input
              type="checkbox"
              value="Sports"
              checked={formData.interests.includes('Sports')}
              onChange={handleCheckboxChange}
            />
            Sports
          </label>
          <label>
            <input
              type="checkbox"
              value="Music"
              checked={formData.interests.includes('Music')}
              onChange={handleCheckboxChange}
            />
            Music
          </label>
          <label>
            <input
              type="checkbox"
              value="Reading"
              checked={formData.interests.includes('Reading')}
              onChange={handleCheckboxChange}
            />
            Reading
          </label>
        </div>
        
        {/* Textarea */}
        <div>
          <label>
            Feedback:
            <textarea
              name="feedback"
              value={formData.feedback}
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
