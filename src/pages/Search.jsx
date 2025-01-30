import React from "react";
import ScholarshipSearch from "../components/ScholarshipSearch";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();

  
  const handleSelect = (scholarshipName) => {
    navigate("/apply", { state: { selectedScholarship: scholarshipName } });
  };

  return (
    <div className="content">
      <ScholarshipSearch onSelect={handleSelect} />
    </div>
  );
}

export default Search;
