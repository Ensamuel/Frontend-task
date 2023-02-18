import React from "react";
import "./FirstColumn.css";
const FirstColumn = () => {
  return (
    <div>
      <div className="">
        <div className='first-col-images'>
          <img src="Ellipse39.png" alt="Ellipse39" className="Ellipse39" />
          <img src="Highlight1.png" alt="Highlight" className="Highlight1" />
          <img src="star3.png" alt="star3" className="star3" />
        </div>
        <h3 className="priority-access-2 text-center">
          Priority Access <br />
          <img src="line6.png" alt="line6" className="line6" />
        </h3>
      </div>
      <div className="">
        <p className="second-page-text text-center">
          Get ready to revolutionize the way you interact<br/> with your customers
          and drive sales with<br/> Loyalbaze. Skip the waitlist and get exclusive<br/>
          priority access to LoyalBaze. Limited slots <br/>available. Please tell us
          a bit about your business<br/> and needs and of our consultants will be in<br/>
          touch Immediately!
        </p>
        <img src="star5.png" alt="star5" className="star5" />
      </div>
    </div>
  );
};

export default FirstColumn;
