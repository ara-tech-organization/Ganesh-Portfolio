import React from "react";
import Herosection from "../Components/Home/Herosection";
import Header from "../Components/Header";
import About from "../Components/Home/About";
import { Helmet } from "react-helmet-async";

import FooterSection from "../Components/Footer";
function Home() {
  return (
    <div>
      <Helmet>
        <title>Ganesh Prabhu Arivanantham</title>
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
      <div id="home">
        <Herosection />
      </div>
      <div id="services">
        <About />
      </div>
      <div id="education">
        <FooterSection />
      </div>
    </div>
  );
}

export default Home;
