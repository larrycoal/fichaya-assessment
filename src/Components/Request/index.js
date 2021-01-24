import React,{useState} from "react";
import {Link} from "react-router-dom"
const Request = () => {
    const [popup,setPopup]=useState(false)
    const handlePopup= ()=>{
        setPopup(!popup)
    }
  return (
    <div className="requestnfo_wrapper">
      <span className="page_header">Request Information</span>
      <div className="customer_wrapper">
      <div className="customer_request">
        <section>
          <span>REQUEST TYPE</span>
          <span>POST-CON</span>
        </section>
        <section>
          <span>CUSTOMER NAME</span>
          <span>PETER ABU-EKPESHIE</span>
        </section>
        <section>
          <span>CLEANING DATE</span>
          <span>09.10.2019</span>
        </section>
        <section>
          <span>INVOICE STATUS</span>
          <span>UNGENERATED</span>
        </section>
        <section>
          <span>REQUEST DATE</span>
          <span>06.10.2016</span>
        </section>
        <section>
          <span>REQUEST TIME</span>
          <span>8:00 AM</span>
        </section>
        <section>
          <span>LOCATION</span>
          <span>8,YOVI STREET,IWAYA,ONIKE,YABA</span>
        </section>
        <section>
          <span>HOUSE-TYPE</span>
          <span>5-BEDROOM DUPLEX</span>
        </section>
        <section>
          <span>HOUSE-TYPE</span>
          <span>5-BEDROOM DUPLEX</span>
        </section>
        </div>
        <div className="atn_btn">
            <span onClick={handlePopup}>
            Actions  <i class="fa fa-angle-down" aria-hidden="true"></i>
            </span>
        </div>
        <div className="atn_popup" style={{display:`${popup?"inline":"none"}`}}>
            <ul>
                <li><Link to = "/">Contact Customer</Link></li>
                <li><Link to="/request/generateinv">Generate Invoice</Link></li>
                <li><Link to = "/">Regect request</Link></li>
            </ul>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default Request;
