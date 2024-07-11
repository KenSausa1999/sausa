import "./About.css";
import Navbar from "./Navbar";
import myImage from "./img/kenneth.jpg"

const About = () => {
  return (
    <>
      <Navbar />
      <div id="about-info" className="ontoy">

  <div className="container mt-5">
    <div className="row">
      <div className="col">

      <div id="about">
        <div className="container">
      
            <div className="card shadow p-5">
              <div className="row">
              <div className="col-lg-4">
              <center><img src={myImage} /></center>
              </div>
              <div className="col-lg-8">
                <div className="card box shadow mb-3 p-3">
                <h4 className="text-dark"><span>About Me </span></h4>
              <p className="text-black"> I'm John Kenneth Travilla Sausa, I'm 24 years old and I love playing Basketball. </p>
          
                </div>
                <div className="card box shadow p-3">
                <h4 className="text-dark"><span>Philippians 4:13</span> </h4>
              <p className="text-black"> </p> "I CAN DO ALL THIS THROUGH HIM WHO GIVES ME STRENGTH"
              <p> </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>

    </>
  );
};

export default About;
