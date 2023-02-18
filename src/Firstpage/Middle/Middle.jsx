import React from "react";
import "./Middle.css";
import { TbUserCircle } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
const Middle = () => {
  return (
    <div className="container middleText">
      <img src="Ellipse392.png" alt="Ellipse392" className="Ellipse392" />
      <img src="Star1.png" alt="Star1" className="Star1"/>
      <div className="customers-text">
        <div>
          <img src="Ellipse40.png" alt="Ellipse40" className="Ellipse40" />
          <img src="Star2.png" alt="Star2" className="Star2" />
        </div><br/>

        <img src="Ellipse37.png" alt="Ellipse37" className="Ellipse37" />
        <p>
          Turn your best customers
          <br />
          into <span style={{ color: "#A75FD2" }}>Loyal fans</span>
        </p>
      </div>
      <div>
        <p className="loyalbaze-businesses">
          Loyalbaze, empowers businesses to offer digital, mobile-first loyalty
          programs to their <br/>customers. With our AI Powered platform, you can
          easily create and manage custom<br/> loyalty and rewards programs, track
          customer engagement, and gain valuable insights to<br/> improve your
          business. Sign up now to get early access.
        </p>
      </div><br/>
      <div className="form">
        <form action="" method="get">
          <img src="vector1.png" alt="vector" className="vector1" />
          <p className="profile-name">
            <span className="user-circle">
              <TbUserCircle />
            </span>
            <input type="text" name="" id="" placeholder="Tell us your name" />
          </p>
          <p className="email-profile">
            <span className="email-circle">
              <MdOutlineEmail />
            </span>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your email address"
            />
          </p>
          <button className="early-access">Get early access</button>
        </form>
      </div><br/>
      <div className="users">
        <p className="g">
          <span className="gg">G</span>
        </p>
        <p className="o">
          <span className="oo">O</span>
        </p>
        <p className="u">
          <span className="uu">U</span>
        </p>
        <p className="m">
          <span className="mm">M</span>
        </p>
        <p className="fifty7">
          <span className="fifty77">+57 joined</span>
        </p>
      </div>
    </div>
  );
};

export default Middle;
