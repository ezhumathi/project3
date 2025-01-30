import React, { useState } from "react";
import "../App.css";

const scholarships = [
  { name: "STEM Excellence Scholarship", description: "For top STEM students.", eligibility: "GPA 3.5+" },
  { name: "Global Leaders Scholarship", description: "For future leaders worldwide.", eligibility: "Essay Required" },
  { name: "Arts Innovators Grant", description: "Supports creative arts students.", eligibility: "Portfolio Required" },
  { name: "Future Engineers Grant", description: "For aspiring engineers.", eligibility: "GPA 3.7+" },
  { name: "International Students Scholarship", description: "For international students.", eligibility: "Proof of Citizenship" },
  { name: "Medical Research Scholarship", description: "For students in medical research.", eligibility: "Research Proposal" },
  { name: "Environmental Impact Award", description: "For environmental science students.", eligibility: "Volunteer Experience" },
  { name: "Leadership Excellence Award", description: "For students showing leadership.", eligibility: "Leadership Experience" },
  { name: "Tech Innovators Scholarship", description: "Supports innovation in tech.", eligibility: "Tech Project Submission" },
  { name: "Creative Writing Fellowship", description: "For creative writers.", eligibility: "Writing Sample" },
  { name: "Entrepreneurship Fund", description: "For aspiring entrepreneurs.", eligibility: "Business Plan Submission" },
  { name: "Business Leadership Scholarship", description: "For future business leaders.", eligibility: "GPA 3.5+" },
  { name: "Women in STEM Scholarship", description: "For women pursuing STEM careers.", eligibility: "Essay on STEM Goals" },
  { name: "Music Scholarship", description: "For students in the music field.", eligibility: "Audition Required" },
  { name: "Science Achievement Award", description: "For students excelling in science.", eligibility: "Top 10% in Science Courses" },
  { name: "Philanthropy Scholarship", description: "For students involved in charity work.", eligibility: "Community Service Hours" },
  { name: "Social Justice Award", description: "For students advocating for justice.", eligibility: "Essay Submission" },
  { name: "Law School Scholarship", description: "For future law students.", eligibility: "LSAT Scores" },
  { name: "Agriculture Scholarship", description: "Supports agriculture students.", eligibility: "Farm Experience" },
  { name: "Veterinary Medicine Scholarship", description: "For future veterinarians.", eligibility: "Animal Care Experience" },
  { name: "Business Innovation Award", description: "For innovative business ideas.", eligibility: "Startup Experience" },
  { name: "Public Health Fellowship", description: "For students in public health.", eligibility: "Health-related Projects" },
  { name: "Global Citizen Scholarship", description: "For students making global impact.", eligibility: "Volunteer Work Abroad" },
  { name: "Scholarship for Excellence in Mathematics", description: "For exceptional math students.", eligibility: "Top Math GPA" },
  { name: "Education Leadership Scholarship", description: "For future educators.", eligibility: "Teaching Experience" },
  { name: "Computer Science Scholarship", description: "For students in computer science.", eligibility: "Coding Project Submission" },
  { name: "Nursing Student Scholarship", description: "For nursing students.", eligibility: "Clinical Hours Completed" },
  { name: "Chemistry Excellence Award", description: "For students excelling in chemistry.", eligibility: "Top Chemistry Grades" },
  { name: "Art and Design Scholarship", description: "For students in art and design.", eligibility: "Portfolio Required" },
  { name: "Education Access Fund", description: "For students needing financial aid.", eligibility: "Financial Need" },
  { name: "International Development Scholarship", description: "For students in international development.", eligibility: "International Work Experience" },
  { name: "Psychology Scholarship", description: "For students pursuing psychology.", eligibility: "Psychology Major" },
  { name: "Engineering Achievement Award", description: "For top engineering students.", eligibility: "Engineering Project" },
  { name: "Biology Scholarship", description: "For biology students.", eligibility: "Top Biology Grades" },
  { name: "Fashion Design Award", description: "For students in fashion design.", eligibility: "Portfolio Submission" },
  { name: "Culinary Arts Scholarship", description: "For students in culinary arts.", eligibility: "Culinary Experience" },
  { name: "Physics Excellence Award", description: "For top physics students.", eligibility: "Top Physics GPA" },
  { name: "Film Studies Scholarship", description: "For students studying film.", eligibility: "Film Project Submission" },
  { name: "Philosophy Scholarship", description: "For students pursuing philosophy.", eligibility: "Philosophy Major" },
  { name: "Linguistics Scholarship", description: "For students studying languages.", eligibility: "Language Proficiency" },
  { name: "Architecture Scholarship", description: "For students in architecture.", eligibility: "Design Portfolio" },
  { name: "Sports Achievement Scholarship", description: "For top athletes.", eligibility: "Athletic Performance" },
  { name: "Economics Scholarship", description: "For economics students.", eligibility: "Top Economics Grades" },
  { name: "History Fellowship", description: "For history students.", eligibility: "History Project Submission" },
  { name: "Political Science Scholarship", description: "For political science majors.", eligibility: "Political Internship" },
  { name: "Mathematics and Engineering Scholarship", description: "For math and engineering students.", eligibility: "Math or Engineering Project" },
  { name: "Anthropology Scholarship", description: "For students in anthropology.", eligibility: "Fieldwork Experience" },
  { name: "Public Policy Fellowship", description: "For future policymakers.", eligibility: "Policy Paper Submission" },
  { name: "Sociology Scholarship", description: "For sociology students.", eligibility: "Community Service" },
  { name: "Journalism Fellowship", description: "For aspiring journalists.", eligibility: "Writing Sample" },
  { name: "Religious Studies Scholarship", description: "For religious studies students.", eligibility: "Research Paper" },
  { name: "Creative Tech Scholarship", description: "For students in creative technologies.", eligibility: "Tech Project" },
  { name: "Veterans Scholarship", description: "For veterans returning to school.", eligibility: "Military Service" },
  { name: "Undergraduate Research Award", description: "For undergraduate researchers.", eligibility: "Research Proposal" },
  { name: "Human Rights Award", description: "For students advocating for human rights.", eligibility: "Activism Experience" },
  { name: "Climate Change Scholarship", description: "For students focusing on climate change.", eligibility: "Research or Action Plan" },
  { name: "Graphic Design Scholarship", description: "For graphic design students.", eligibility: "Design Portfolio" },
  { name: "STEM Outreach Scholarship", description: "For students mentoring STEM programs.", eligibility: "Outreach Program Involvement" },
  { name: "Robotics Scholarship", description: "For robotics enthusiasts.", eligibility: "Robotics Project" },
  { name: "Data Science Scholarship", description: "For students in data science.", eligibility: "Data Science Project" },
  { name: "Social Work Fellowship", description: "For students in social work.", eligibility: "Fieldwork Hours" },
  { name: "Cybersecurity Scholarship", description: "For cybersecurity students.", eligibility: "Cybersecurity Project" },
  { name: "Healthcare Scholarship", description: "For students in healthcare fields.", eligibility: "Healthcare Internship" },
  { name: "Innovation in Education Scholarship", description: "For students innovating education.", eligibility: "Innovative Proposal" },
  { name: "Library Science Scholarship", description: "For library science students.", eligibility: "Library Work Experience" },
  { name: "Graphic Arts Award", description: "For students in graphic arts.", eligibility: "Art Portfolio" },
  { name: "Physics Research Grant", description: "For students in physics research.", eligibility: "Research Experience" },
  { name: "Math Fellowship", description: "For advanced math students.", eligibility: "Math Research Project" },
  { name: "Chemistry Research Scholarship", description: "For chemistry research students.", eligibility: "Research Experience" },
  { name: "Geography Scholarship", description: "For geography students.", eligibility: "Fieldwork Experience" },
  { name: "Photography Scholarship", description: "For students in photography.", eligibility: "Photography Portfolio" },
  { name: "Fine Arts Scholarship", description: "For fine arts students.", eligibility: "Art Portfolio" },
  { name: "Language and Literature Award", description: "For language and literature students.", eligibility: "Research Paper" },
  { name: "Theater Arts Scholarship", description: "For theater students.", eligibility: "Audition Required" },
  { name: "Peace Studies Scholarship", description: "For peace studies students.", eligibility: "Community Service" },
  { name: "Advanced STEM Scholarship", description: "For advanced STEM students.", eligibility: "Advanced STEM Coursework" },
  { name: "Fashion Technology Award", description: "For students in fashion technology.", eligibility: "Tech Portfolio" },
  { name: "Environmental Science Scholarship", description: "For students in environmental science.", eligibility: "Research Project" },
  { name: "Renewable Energy Scholarship", description: "For students in renewable energy.", eligibility: "Renewable Energy Project" },
  { name: "Digital Marketing Scholarship", description: "For digital marketing students.", eligibility: "Marketing Portfolio" },
  { name: "Astronomy Scholarship", description: "For astronomy students.", eligibility: "Research Proposal" },
  { name: "Game Development Scholarship", description: "For game development students.", eligibility: "Game Design Portfolio" },
  { name: "Architectural Design Scholarship", description: "For students in architectural design.", eligibility: "Design Portfolio" }
];

function ScholarshipSearch({ onSelect }) {
  const [query, setQuery] = useState("");

  
  const filteredScholarships = scholarships.filter(scholarship =>
    scholarship.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
  
      <input
        type="text"
        placeholder="Search scholarships..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-box"
      />

  
      <div className="scholarship-list">
        {filteredScholarships.map((scholarship, index) => (
          <div key={index} className="scholarship-item">
            <h2 style={{ backgroundColor: 'white', padding: '5px', borderRadius: '5px' }}>{scholarship.name}</h2>
            <p>{scholarship.description}</p>
            <p><strong>Eligibility:</strong> {scholarship.eligibility}</p>
            <button onClick={() => onSelect(scholarship.name)} className="apply-button">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScholarshipSearch;
