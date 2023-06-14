import React from "react";
import "./Card.css";
// import frontCard from "./frontCard.png";
// import backCard from "./backCard.png";
import logo1 from "./logo1.png";
import logo2 from "./logo2.png";

export default function Card(props) {
 



  return (
    <div className="main">

      {/* <section className="frontside"> */}
        {/* <img src={frontCard} alt="front" className="frontcard" /> */}
        <img src={logo1} alt="logo1" className="logo1" />
        <img src={logo2} alt="logo2" className="logo2" />
        <p className="name">{props.name}</p>
        <p className="digitnum" >{props.number}</p>
        <p className="monthcon">{props.month}/</p>
        <p className="yearcon">{props.year}</p>
        
      {/* </section> */}

      {/* <section className="backside"> */}
        {/* <img src={backCard} alt="back" className="backcard" /> */}
        <p className="secretcvv">{props.cvc}</p>
      {/* </section> */}
    </div>
  );
}
