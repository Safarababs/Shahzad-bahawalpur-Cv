import React from "react";
import logo from "./images/safar.jpg";
import safar from "../components/resume/Shahzad-Aslam.pdf";

function Home() {
  function calculateAge(birthdate) {
    const today = new Date();
    const dob = new Date(birthdate);
    const yearsDiff = today.getFullYear() - dob.getFullYear();
    const monthsDiff = today.getMonth() - dob.getMonth();
    const daysDiff = today.getDate() - dob.getDate();

    // if the birth month hasn't happened yet this year, subtract 1 from age
    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
      return yearsDiff - 1;
    } else {
      return yearsDiff;
    }
  }

  return (
    <section className="home" id="home">
      <div className="content">
        <h3>hi, i am Muhammad Shahzad Aslam</h3>
        <span>shift engineer diesel engines power plants</span>
        <br></br>
        <p>
          I Am a mechanical Engineer having Extensive Knowledge In power plants
          with having {calculateAge("Feb 2 2007")} years of experience in
          operation department of wartsila diesel engine's power generation
          including gulf experience
        </p>
        <br></br>
        <a href={safar} className="btn" download="Shahzad Aslam Cv">
          <i className="fa fa-solid fa-download"></i> download resume
        </a>
      </div>
      <div className="image" data-aos="fade-right">
        <img src={logo} alt="" />
      </div>
    </section>
  );
}

export default Home;
