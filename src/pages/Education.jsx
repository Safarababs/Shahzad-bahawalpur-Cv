import React from "react";

function Education() {
  return (
    <section className="education" id="education">
      <h1 className="heading">
        {" "}
        <span>education</span>{" "}
      </h1>

      <div className="box-container">
        <div className="box">
          <i className="fa-solid fa-certificate"></i>
          <h3>B.Tech(Hons) in 2013</h3>
          <p>uet bahawalpur campus</p>
        </div>

        <div className="box">
          <i className="fa-solid fa-certificate"></i>
          <h3>DAE mechanical in 2007</h3>
          <p>Government collage of technology bahawalpur</p>
        </div>

        <div className="box">
          <i className="fa-solid fa-certificate"></i>

          <h3>metriculation in 2004</h3>
          <p>board of intermideate and secondary education bahawalpur</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
