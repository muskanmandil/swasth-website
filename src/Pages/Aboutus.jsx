import React from "react";
import CompanyPrinciples from "../Components/CompanyPrinciples/CompanyPrinciples";
import CompanyStory from "../Components/CompanyStory/CompanyStory";

const Aboutus = () => {
  return (
    <div className="aboutus">
      <CompanyStory />
      <CompanyPrinciples />
    </div>
  );
};

export default Aboutus;
