import React from 'react'
import "../style/faculities.css"
import { FaCreditCard, FaBlog, FaPaypal } from 'react-icons/fa'
function Faculities() {
  return (
    <>
     
     <div className="facuilty-area" >
        <div className="content-h" data-aos="fade-up">
          <div className="img-area">
            <h1 className='icon3'>{<FaPaypal/>} </h1>
            <h4 id="h3">Many Payment Gateways</h4>
          </div>
        </div>
        <div className="content-h" data-aos="fade-up">
          <div className="img-area">
            <h1 className="icon2">{<FaCreditCard/>}</h1>
            <h4 id="h3">100% Money Guarantee</h4>
          </div>
        </div>
        <div className="content-h" data-aos="fade-up">
          <div className="img-area">
            <h1 className='icon'>{<FaBlog/>}</h1>
            <h4 id="h3">24/7 Online Support</h4>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Faculities
