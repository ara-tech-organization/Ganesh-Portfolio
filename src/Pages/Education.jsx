import React from "react";
import EducationSection from "../Components/Education/Education";
import Organisation from "../Components/Education/Organisation";
import SkillSection from "../Components/Education/Skills";
import Header from "../Components/Header";
import { Helmet } from "react-helmet-async";
import FooterSection from "../Components/Footer";

function Education() {
  return (
    <div>
      <Helmet>
        <title>Education</title>
        <meta
          name="description"
          content="Ganesh Prabhu Arivanantham - Product Manager, Digital Transformation Strategist & Business Analyst. Empowering education, clinics & franchises through automation, strategy & growth."
        />
        <meta
          name="keywords"
          content="Ganesh Prabhu, Product Manager, Business Analyst, Digital Transformation Strategist, Leadership Development, CRM Automation, Multi-branch Growth, Business Mentor, Thanjavur, Tamil Nadu, IT Services, Digital Marketing, Education Automation"
        />
        <meta name="author" content="Ganesh Prabhu Arivanantham" />
      </Helmet>
      <Header />
      <EducationSection />
      <SkillSection />
      <Organisation />

      <FooterSection />
    </div>
  );
}

export default Education;
