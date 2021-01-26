import React, { useState, useContext } from "react";
import { InvContext } from "../../Utils/InvContext";

const GenerateInv = (props) => {
  const {  dispatch } = useContext(InvContext);
  const [valid, setMessage] = useState({
    error: false,
    message: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    issue_date: "",
    due_date: "",
    inv_num: "",
    vat: "",
    serv_desc: "",
    serv_amount: "",
    total: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      validate(value);
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitForm = () => {
    const total = calcTotal();
    const newFormData = { ...formData, total };
    for (let key in newFormData) {
      if (newFormData[key] === "") {
        setMessage({
          error: true,
          message: "Please fill out all the fields",
        });
        return;
      } else {
        setMessage({
          error: false,
          message: "",
        });
      }
    }
    if (!valid.error) {
        dispatch({type:"CREATEINVOICE",payload:{...newFormData}})
         props.history.push("/request/previnv")
    }
  };
  const validate = (value) => {
    const valid = /.{1,}@[^.]{1,}/.test(value);
    if (!valid) {
      setMessage({
        error: true,
        message: "Enter a valid Email",
      });
    } else {
      setMessage({
        error: false,
        message: "",
      });
    }
  };
  const calcTotal = () => {
    if (formData.vat && formData.serv_amount) {
      const vat = formData.vat / 100;
      const bill = formData.serv_amount;
      const vatCost = vat * bill;
      const total = Math.floor(parseInt(bill) + vatCost);
      const format = new Intl.NumberFormat();

      return format.format(total);
    } else return 0;
  };
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
                value={formData.email}
              />
            </span>
            <span>
              <label>Phone number</label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={(e) => handleFormData(e)}
              />
            </span>
          </section>
          <section>
            <label for="address">Home/Building address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
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
                value={formData.issue_date}
                onChange={(e) => handleFormData(e)}
              />
            </span>
            <span>
              <label>Due date</label>
              <input
                type="date"
                name="due_date"
                value={formData.due_date}
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
                value={formData.inv_num}
                onChange={(e) => handleFormData(e)}
              />
            </span>
            <span>
              <label for="vat">V.A.T</label>
              <input
                type="number"
                name="vat"
                value={formData.vat}
                onChange={(e) => handleFormData(e)}
              />
            </span>
          </section>
          <section>
            <label for="serv_desc">Service Description</label>
            <input
              type="text"
              name="serv_desc"
              value={formData.serv_desc}
              onChange={(e) => handleFormData(e)}
            />
          </section>
          <section>
            <span>
              <label for="serv_amount">Service Amount</label>
              <input
                type="number"
                name="serv_amount"
                value={formData.serv_amount}
                onChange={(e) => handleFormData(e)}
              />
            </span>
            <span>
              <label>Total Amount</label>
              <span id="total">{"NGN " + calcTotal()}</span>
            </span>
          </section>
        </div>
      </form>
      <div className="submit_wrapper">
        <section>
          <button> Cancel</button>
          <button onClick={submitForm}> Create invoice</button>
          {valid.error ? valid.message : null}
        </section>
      </div>
    </div>
  );
};

export default GenerateInv;
