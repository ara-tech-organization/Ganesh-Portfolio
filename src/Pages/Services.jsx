import { Box } from "@mui/material";
import React from "react";
import ExperienceSection from "../Components/Services/Experience";
import Section from "../Components/Services/Services";
import Header from "../Components/Header";
import { Helmet } from "react-helmet-async";

import FooterSection from "../Components/Footer";

function Services() {
  return (
    <>
      <Helmet>
        <title>Services</title>
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
      <Box>
        <Header />
        <Section />
        <ExperienceSection />
        <FooterSection />
      </Box>
    </>
  );
}

export default Services;
