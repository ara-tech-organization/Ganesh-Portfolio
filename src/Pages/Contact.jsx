import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../Components/Header";
import ContactSection from "../Components/Contact/Contact";
function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
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
      <ContactSection />
    </div>
  );
}

export default Contact;
