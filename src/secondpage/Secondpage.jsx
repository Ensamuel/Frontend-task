import React from "react";
import FirstColumn from "./FirstColumn/FirstColumn";
import SecondColumn from "./SecondColumn/SecondColumn";
import "./Secondpage.css";
const Secondpage = () => {
  return (
    <div className="row second-page align-items-center">
      <div className="col-6 align-middle ">
        <FirstColumn />
      </div>

      <div className="col-6 align-middle">
        <SecondColumn />
      </div>
      <div className="container">
        <hr 
       
        className='hr'/>
        <div className="d-flex justify-content-between container">
          <div>
            <p>
              2nd Floor, The Garnet Building, KM14
              <br />
              Lekki Epe Expressway, Lagos, Nigeria
            </p>
          </div>
          <div>
            <p>Loyalbaze is almost here</p>
          </div>
          <div>+234 903 618 9486</div>
        </div>
      </div>
    </div>
  );
};

export default Secondpage;
