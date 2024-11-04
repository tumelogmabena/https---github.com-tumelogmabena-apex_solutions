import React, { useState } from "react";
import Side_Bar from "../Compontents/Side_Bar";

function Info_Form() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        contractPlan: "basic-plan",
        profilePhoto: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Information Updated:");
        console.log("Full Name:", formData.fullName);
        console.log("Email:", formData.email);
        console.log("Phone Number:", formData.phone);
        console.log("Address:", formData.address);
        console.log("Contract Plan:", formData.contractPlan);
    };

    return (
        <div>
             <Side_Bar></Side_Bar>
            <div className="form-container">
           
            <h1>Edit Your Information</h1>
            <form onSubmit={handleSubmit}>
                {/* Text Fields */}
                {[
                    { label: "Full Name", type: "text", id: "fullName" },
                    { label: "Email", type: "email", id: "email" },
                    { label: "Phone Number", type: "tel", id: "phone" },
                    { label: "Address", type: "text", id: "address" }
                ].map((field) => (
                    <div key={field.id} className="form-group">
                        <label htmlFor={field.id}>{field.label}:</label>
                        <input
                            type={field.type}
                            id={field.id}
                            name={field.id}
                            value={formData[field.id]}
                            onChange={handleChange}
                            required
                        />
                    </div>
                ))}

                {/* File Upload */}
                <div className="form-group">
                    <label htmlFor="profilePhoto">Change Profile Photo:</label>
                    <input
                        type="file"
                        id="profilePhoto"
                        name="profilePhoto"
                        accept="image/*"
                        onChange={handleChange}
                    />
                </div>

                {/* Select Dropdown */}
                <div className="form-group">
                    <label htmlFor="contractPlan">Contract Plan:</label>
                    <select
                        id="contractPlan"
                        name="contractPlan"
                        value={formData.contractPlan}
                        onChange={handleChange}
                        required
                    >
                        <option value="basic-plan">Basic Plan</option>
                        <option value="premium-plan">Premium Plan</option>
                        <option value="business-plan">Business Plan</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-button">Update Information</button>
                
            </form>
        </div>
        </div>
        
    );
}

export default Info_Form;
