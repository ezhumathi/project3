import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios'; 
import "./Apply.css";


const scholarships = [
  "STEM Excellence Scholarship",
  "Global Leaders Scholarship",
  "Arts Innovators Grant",
  "Future Engineers Grant",
  "Medical Research Scholarship",
  "Environmental Impact Award",
  "Leadership Excellence Award",
  "Tech Innovators Scholarship",
  "Creative Writing Fellowship",
  "Entrepreneurship Fund",
  "Business Leadership Scholarship",
  "Women in STEM Scholarship",
  "Music Scholarship",
  "Science Achievement Award",
  "Philanthropy Scholarship",
  "Social Justice Award",
  "Law School Scholarship",
  "Agriculture Scholarship",
  "Veterinary Medicine Scholarship",
  "Business Innovation Award",
  "Public Health Fellowship",
  "Global Citizen Scholarship",
  "Scholarship for Excellence in Mathematics",
  "Education Leadership Scholarship",
  "Computer Science Scholarship",
  "Nursing Student Scholarship",
  "Chemistry Excellence Award",
  "Art and Design Scholarship",
  "Education Access Fund",
  "International Development Scholarship",
  "Psychology Scholarship",
  "Engineering Achievement Award",
  "Biology Scholarship",
  "Fashion Design Award",
  "Culinary Arts Scholarship",
  "Physics Excellence Award",
  "Film Studies Scholarship",
  "Philosophy Scholarship",
  "Linguistics Scholarship",
  "Architecture Scholarship",
  "Sports Achievement Scholarship",
  "Economics Scholarship",
  "History Fellowship",
  "Political Science Scholarship",
  "Mathematics and Engineering Scholarship",
  "Anthropology Scholarship",
  "Public Policy Fellowship",
  "Sociology Scholarship",
  "Journalism Fellowship",
  "Religious Studies Scholarship",
  "Creative Tech Scholarship",
  "Veterans Scholarship",
  "Undergraduate Research Award",
  "Human Rights Award",
  "Climate Change Scholarship",
  "Graphic Design Scholarship",
  "STEM Outreach Scholarship",
  "Robotics Scholarship",
  "Data Science Scholarship",
  "Social Work Fellowship",
  "Cybersecurity Scholarship",
  "Healthcare Scholarship",
  "Innovation in Education Scholarship",
  "Library Science Scholarship",
  "Graphic Arts Award",
  "Physics Research Grant",
  "Math Fellowship",
  "Chemistry Research Scholarship",
  "Geography Scholarship",
  "Photography Scholarship",
  "Fine Arts Scholarship",
  "Language and Literature Award",
  "Theater Arts Scholarship",
  "Peace Studies Scholarship",
  "Advanced STEM Scholarship",
  "Fashion Technology Award",
  "Environmental Science Scholarship",
  "Renewable Energy Scholarship",
  "Digital Marketing Scholarship",
  "Astronomy Scholarship",
  "Game Development Scholarship",
  "Architectural Design Scholarship",
];

function Apply() {
 
  const location = useLocation();
  const selectedScholarship = location.state?.selectedScholarship || "";

 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    phone: "",
    address: "",
    gender: "",
    scholarship: selectedScholarship,
  });

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post("http://localhost:5000/apply", formData);
      console.log("Application submitted successfully:", response.data);
      
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  return (
    <div className="container">
      <h1>Apply for Scholarships</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          pattern="^\d{10}$"
          required
        />
        <textarea
          name="address"
          placeholder="Your Address"
          value={formData.address}
          onChange={handleChange}
          rows="4"
          required
        />
        
        <label>Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        
        <select
          name="scholarship"
          value={formData.scholarship}
          onChange={handleChange}
          required
        >
          <option value="">Select a Scholarship</option>
          {scholarships.map((scholarship, index) => (
            <option key={index} value={scholarship}>
              {scholarship}
            </option>
          ))}
        </select>

        <div className="button-container">
          <button type="submit">Submit Application</button>
        </div>
      </form>
    </div>
  );
}

export default Apply;
