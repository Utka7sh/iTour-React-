import React from "react";

function Home() {
  return (
    <section className="home" id="home">
      <div className="wrapper">
        <div
          className="box"
          style={{
            backgroundImage: "url(/images/home1.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="content">
            <span>Enter the roads of</span>
            <h3>Indore</h3>
            <p>iTour has got your back through every turn</p>
            <a href="#category" className="btn">
              get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
