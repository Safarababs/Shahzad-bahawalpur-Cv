import React from "react";

function About() {
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
    <section className="about" id="about">

      <div className="content">
        <h1 className="heading"><span>about me</span></h1>
        <p>
          I am an experienced shift engineer with over{" "}
          {calculateAge("Feb 2 2007")} years of experience in working with
          Wartsila diesel engines. My expertise in engine operation,
          maintenance, and troubleshooting has been honed over years of hands-on
          experience, allowing me to quickly diagnose and address any issues
          that arise.
        </p>
        <p>
          I take great pride in my work and am known for my strong work ethic
          and attention to detail. I am dedicated to ensuring that every aspect
          of the engine's performance is optimized for maximum efficiency, and I
          work tirelessly to ensure that my engines are running at peak
          performance.
        </p>
        <p>
          In addition to my technical skills, I am also an excellent
          communicator and team player, always willing to lend a hand and share
          my knowledge with others. I am passionate about what I do and am
          always looking for ways to improve my skills and knowledge.
        </p>
        <p>
          With my extensive experience and expertise in working with Wartsila
          diesel engines, you can trust that your power generation system is in
          good hands.
        </p>
      </div>
    </section>
  );
}

export default About;
