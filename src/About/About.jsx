import React from "react";
import Navbar from "../Nav/Navbar.jsx";
import img from "../homepage/hills.jpg";
import "./AboutUs.css";
import Footer from "../Footer/Footer";
import { useNavigate } from 'react-router-dom';



const AboutUs = () => {

  // Pseudocode

  // create a function such that when either the text h2 or image is clicked it navigates to the respective path

  // the function called when clicked should be anonymous or sth like this  ()=>{moveToPage(mothersunion)}
  const navigate = useNavigate();


  function handleNavigation(path){
    navigate(`${path}`);
  }
  return (
    <>
      <Navbar />
      <div className="about-us">
        {/* History of the church */}
        <div className="about-us-content-1">
          <div className="about-us-text">
            <h2 onClick={() => handleNavigation("/st-monica")}>st Monica Church Utawala</h2>
            <p className="about-us-text-content">
              As an Anglican church, we are deeply rooted in the teachings of
              God’s word and strive to uplift the lives of our community. We
              openly preach the truth of God’s word and serve as a shining
              beacon of hope and guidance, not only to Kenya but to the world at
              large. Our mission is to spread the love and light of God to all
              who seek it, and to provide a welcoming and supportive community
              for all who wish to join us on our journey of faith.
              As an Anglican church, we are deeply rooted in the teachings of
              God’s word and strive to uplift the lives of our community. We
              openly preach the truth of God’s word and serve as a shining
              beacon of hope and guidance, not only to Kenya but to the world at
              large. Our mission is to spread the love and light of God to all
              who seek it, and to provide a welcoming and supportive community
              for all who wish to join us on our journey of faith.
            </p>
          </div>
          <div className="about-us-image">
            <img onClick={() => handleNavigation("/st-monica")} src={img} alt="" />
          </div>
        </div>

        {/* Subgroups and more info on the subgroups */}
        <div className="about-us-content-2">
          <div className="about-us-text">
            <h2 onClick={() => handleNavigation("/subgroups")}>We have a place for everyone in the church subgroups</h2>
            <p>
              Phasellus eu sagittis purus. Aliquam a nisi velit. Integer eu
              dolor metus. Ut lacinia ipsum nec justo ultricies, eget facilisis
              sapien luctus.
            </p>
          </div>
          <div className="about-us-image">
            <img onClick={() => handleNavigation("/subgroups")} src={img} alt="" />
          </div>
        </div>

        {/* Fellowships and map of fellowships */}
        <div className="about-us-content-1">
          <div className="about-us-text">
            <h2 onClick={() => handleNavigation("/fellowships")}>Fellowships</h2>
            <p className="about-us-text-content">
              As an Anglican church, we are deeply rooted in the teachings of
              God’s word and strive to uplift the lives of our community. We
              openly preach the truth of God’s word and serve as a shining
              beacon of hope and guidance, not only to Kenya but to the world at
              large. Our mission is to spread the love and light of God to all
              who seek it, and to provide a welcoming and supportive community
              for all who wish to join us on our journey of faith.
            </p>
          </div>
          <div className="about-us-image">
            <img onClick={() => handleNavigation("/fellowships")} src={img} alt="" />
          </div>
        </div>
        {/* Blaze youth site */}
        <div className="about-us-content-2">
          <div className="about-us-text">
            <h2 onClick={() => handleNavigation("/blaze")}>Blaze Youth.</h2>
            <p>
              Phasellus eu sagittis purus. Aliquam a nisi velit. Integer eu
              dolor metus. Ut lacinia ipsum nec justo ultricies, eget facilisis
              sapien luctus.
            </p>
          </div>
          <div className="about-us-image">
            <img onClick={() => handleNavigation("/blaze")} src={img} alt="" />
          </div>
        </div>

        {/* Mens assocaition page  */}

        <div className="about-us-content-1">
          <div className="about-us-text">
            <h2 onClick={() => handleNavigation("/kama")}>KAMA.</h2>
            <p className="about-us-text-content">Mens associatio</p>
          </div>
          <div className="about-us-image">
            <img onClick={() => handleNavigation("/kama")} src={img} alt="" />
          </div>
        </div>
        {/* Mothers union section */}
        <div className="about-us-content-2">
          <div className="about-us-text">
            <h2 onClick={() => handleNavigation("/mothers")} >Mothers Union. </h2>
            <p>
              Here add description about the mothers union.
            </p>
          </div>
          <div className="about-us-image">
            <img  onClick={() => handleNavigation("/mothers")} src={img} alt="" />
          </div>
        </div>
      </div>
      <div className="centered-text">
      <p className="centered-text-content">All are welcome and loved here 😊</p>
    </div>
      <Footer />
    </>
  );
};

export default AboutUs;
