import "./Home.css";
import Navbar from "./Navbar";

import myImage from "./img/kenneth.jpg"

const Home = () => {
  return (
    <>
      <Navbar />



    <div className="wrapper">
      <div className="overlay">
        <div className="container1">

    <div id="home-info" >
         


        <div className="container mt-5">
          <div className="row ok">
            <div className="col-lg-6">
                <img src={myImage} />
            </div>
            <div className="col-lg-6 jao">
              <div className="card">
              <h2 className=" fw-bold display-3 text-center text-black mb-5">
                Greetings.. <br/> I'm John Kenneth Sausa
              </h2>
              <h4 className=" text-white text-center mt-5"> I am basketball Player in 2024 MPV and a very good student. </h4>
              <center>
              <a href="/about" className="btn shadow mt-5 fw-bold">
                See My Work
              </a>
              </center>
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

export default Home;
