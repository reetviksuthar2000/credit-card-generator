import React, { useState } from 'react'
import './Cardform.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import frontCard from "./frontCard.png";
import backCard from "./backCard.png";
import Card from "./Card";


function Cardform() {
  const [show, setShow] =useState(false);
  const [inputs, setInputs] = useState({
    cardholdername: "",
    cardholdernumber: "",
    month: "",
    year: "",
    cvc: "",
  });
  
  const [error, setError] = useState(false);
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values=> ({ ...values, [name]: value }));
    
  };

  const ToastMessages = (message) => {
    if (message === "succeed") {
        toast('Card Successfully Created !', {
            position: toast.POSITION.TOP_CENTER,
            
        });
    }
   
};



  function handleSubmit(e) {
    e.preventDefault();
    validateForm()
    setShow(true)
    
    
    if (error) {
      console.log(inputs)
  }
  
  };

  function validateForm() {
    if (inputs.cardholdername.length === 0 || inputs.cardholdernumber.length === 0 || inputs.month.length === 0 || inputs.year.length === 0 || inputs.cvc.length === 0 || inputs.cardholdername.length >= 30 || inputs.cardholdernumber.length < 19 || inputs.cvc.length < 3 || inputs.month.length < 2 || inputs.year.length < 2 || !inputs.cvc.match(/^[0-9]+$/) || !inputs.cardholdernumber.match(/^[0-9\s]*$/) || !inputs.month.match(/^[0-9]+$/) || !inputs.year.match(/^[0-9]+$/)) {
        setError(true);
        
    }
    else {
        setError(false)
        ToastMessages("succeed")
        setShow(true)
    }
};

function cc_format(holdernumber) {
  const v = holdernumber
    .replace(/\s+/g, "")
    .replace(/[^0-9]/gi, "")
    .substr(0, 16);
  const parts = [];

  for (let i = 0; i < v.length; i += 4) {
    parts.push(v.substr(i, 4));
  }

  return parts.length > 1 ? parts.join(" ") : holdernumber;
}



  return (
    <>
      
      <div className='class55'>{show&&<Card
        name={inputs.cardholdername}
        number={inputs.cardholdernumber}
        month={inputs.month}
        year={inputs.year}
        cvc={inputs.cvc}
      />}
      </div>
      <ToastContainer />

      <div className="app" >
        <section className="left">
          <section className='frontside'>
          <img src={frontCard} alt="front" className="frontcard" />
          </section>
          <section className='backside'>
          <img src={backCard} alt="back" className="backcard" />
          </section>

        </section>
        <section className="right">
          <div className="form">
            <label htmlFor="name">CARDHOLDER NAME</label>
            <input
              type="text"
              name="cardholdername"
              id="name"
              value={inputs.cardholdername}
              onChange={handleChange}
              placeholder="e.g. Jane Appleseed"
              
            />
            
            <label className="errorlabel">{error && inputs.cardholdername.length <= 0 ? "Cardholder name required" : error && inputs.cardholdername.length >= 30 ? "card number max character 30" : ""}</label>

            <label htmlFor="number" className="cardnum">
              CARD NUMBER
            </label>
            <input
              type="text"
              name="cardholdernumber"
              id="number"
              value={cc_format(inputs.cardholdernumber)}
              onChange={handleChange}
              placeholder="e.g. 1234 5678 9123 0000"
            />
            
            <label className="errorlabel">{error && inputs.cardholdernumber.length <= 0 ? "Card number required" : error && inputs.cardholdernumber.length < 19 ? "Card number must be 16 digit" : ""}</label>

            <div className="middle">
              <div className="date">
                <label className="datelabel" htmlFor="month">
                  EXP.DATE (MM/YY)
                </label>

                <input
                  type="text"
                  id="month"
                  name="month"
                  placeholder="MM"
                  value={inputs.month}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  id="year"
                  name="year"
                  value={inputs.year}
                  onChange={handleChange}
                  placeholder="YY"
                />
              </div>
              <div className="cvc">
                <label className="cvclabel" htmlFor="cvc">
                  CVC
                </label>

                <input
                  type="text"
                  id="cvc"
                  name="cvc"
                  value={inputs.cvc}
                  onChange={handleChange}
                  placeholder="e.g. 123"
                />
                
                <label className="errorlabel">{error && inputs.cvc.length <= 0 ? "CVC required" : error && !inputs.cvc.match(/^[0-9]+$/) ? "CVC must be numeric" : ""}</label>
              </div>
            </div>

            <button onClick={handleSubmit}>Confirm</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Cardform