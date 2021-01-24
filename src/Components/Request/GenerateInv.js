import React, { useState } from "react";

const GenerateInv = () => {
  const [formData, setFormData] = useState({});

  const handleFormData = (e) => {
 const {name,value} =e.target
 setFormData({
     ...formData,
     [name]:value
 })
  };


  const submitForm = ()=>{
    console.log(formData)

  }
  return (
    <div className="generateInv_wrapper">
      <span className="page_header">Generate invoice</span>
      <span>ENTER INVOICE INFO</span>
      <form className="form_wrapper">
        <div className="right">
          <section>
            <label for="name">Customer/Company name</label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={(e) => handleFormData(e)}
              value={formData.name}
            />
          </section>
          <section>
            <span>
              <label for="email">Email address</label>
              <input
                type="email"
                name="email"
                onChange={(e) => handleFormData(e)}
              />
            </span>
            <span>
              <label>Phone number</label>
              <input
                type="number"
                name="phone"
                onChange={(e) => handleFormData(e)}
              />
            </span>
          </section>
          <section>
            <label for="address">Home/Building address</label>
            <input
              type="text"
              name="address"
              onChange={(e) => handleFormData(e)}
            />
          </section>
        </div>
        <div className="left">
          <section>
            <span>
              <label for="issue_date">Issue date</label>
              <input
                type="date"
                name="issue_date"
                onChange={(e) => handleFormData(e)}
              />
            </span>
            <span>
              <label>Due date</label>
              <input
                type="date"
                name="due_date"
                onChange={(e) => handleFormData(e)}
              />
            </span>
          </section>
          <section>
            <span>
              <label>Invoice number</label>
              <input
                type="number"
                name="inv_num"
                onChange={(e) => handleFormData(e)}
              />
            </span>
            <span>
              <label for="vat">V.A.T</label>
              <input
                type="number"
                name="vat"
                onChange={(e) => handleFormData(e)}
              />
            </span>
          </section>
          <section>
            <label for="serv_desc">Service Description</label>
            <input
              type="text"
              name="serv_desc"
              onChange={(e) => handleFormData(e)}
            />
          </section>
          <section>
            <span>
              <label for="serv_amount">Service Amount</label>
              <input
                type="number"
                name="serv_amount"
                onChange={(e) => handleFormData(e)}
              />
            </span>
            <span>
              <label>Total Amount</label>
              <input type="number" />
            </span>
          </section>
        </div>
      </form>
      <div className="submit_wrapper">
        <section>
          <button> Cancel</button>
          <button onClick={submitForm}> Create invoice</button>
        </section>
      </div>
    </div>
  );
};

export default GenerateInv;
