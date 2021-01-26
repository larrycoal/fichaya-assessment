import React, { useContext, useEffect,useState } from "react";
import { InvContext } from "../../Utils/InvContext";

const PrevInv = (props) => {
  const { state } = useContext(InvContext);
  const [invoice,setInvoice]=useState({})
  useEffect(() => {
    setInvoice({
        ...state
    })
  }, [state]);
  const renderInvoice = ()=>{
      const format = new Intl.NumberFormat()
      const dateFormat =new Intl.DateTimeFormat("en-US",{dateStyle:"long"})
      const dueDate = new Date(invoice.due_date)
      const issueDate = new Date(invoice.issue_date)
      console.log(dateFormat.format(dueDate))
       return invoice? 
       (
        <div className="previewInvoice_wrapper">
        <span className="page_header">Generate invoice</span>
        <span className="headersub">PREVIEW YOUR INVOICE</span>
        <div className="invoiceNfo">
          <section className="title">
            <span>
              <svg
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.7174 0.0940346C16.2304 0.371949 14.479 0.784249 12.6276 1.52781C2.03664 5.78138 -2.92924 18.2677 1.95053 28.375C2.70654 29.9406 2.59959 29.8855 3.04847 28.942C4.62527 25.6289 7.72551 23.276 11.0323 22.8828C11.6029 22.815 23.2308 22.6542 23.2908 22.7133C23.3268 22.7489 22.9321 23.3957 22.2185 24.4697C19.8105 28.0951 17.6585 29.7422 14.5613 30.3308C14.212 30.3974 13.1662 30.4518 11.4944 30.4901C7.8632 30.5737 7.04343 30.8082 5.2634 32.2719C4.64508 32.78 4.61307 32.6946 5.9023 33.9717C17.5585 45.5173 37.4624 39.3826 40.2748 23.3776C42.2098 12.365 34.6002 1.99244 23.3144 0.259666C22.3925 0.118168 19.45 0.0119811 18.7174 0.0940346ZM36.1932 12.2984C36.1932 12.3286 36.0695 12.5954 35.9181 12.8911C34.0436 16.5565 31.0175 19.0476 27.4905 19.8285C26.9697 19.9438 26.4258 19.952 20.3732 19.9352C13.436 19.9162 12.1325 19.9543 11.4121 20.1979C10.4732 20.5157 9.6168 21.1889 9.03583 22.0658C8.72006 22.5426 8.72107 22.5431 8.49193 21.7155C7.96989 19.829 8.65629 17.3273 10.2394 15.3486C11.359 13.9491 13.3222 12.8489 15.5302 12.3832C16.1818 12.2458 36.1932 12.1638 36.1932 12.2984Z"
                  fill="#01037C"
                />
              </svg>
            </span>
            <span>Invoice</span>
          </section>
          <section className="topNfo">
            <div>
              <span>From</span>
              <span>FICHAYA</span>
              <span>finance@fichaya.com</span>
              <span>+234817741611</span>
            </div>
            <div>
              <span>
                <span>STATUS</span>
                <span>UNPAID</span>
              </span>
              <span>
                <span>CREATED</span>
                <span>{dateFormat.format(issueDate)}</span>
              </span>
            </div>
          </section>
          <section className="bottomNfo">
            <div>
              <span>BILL TO</span>
              <span>{invoice.name}</span>
              <span>{invoice.email}</span>
              <span>{invoice.address}</span>
              <span>{invoice.phone}</span>
            </div>
            <div>
              <span>
                <span>DUE</span>
                <span>{dateFormat.format(dueDate)}</span>
              </span>
              <span>
                <span>AMOUNT</span>
                <span>NGN {invoice.total}</span>
              </span>
            </div>
          </section>
          <section>
            <table>
              <thead>
                <tr>
                  <th>DESCRIPTION</th>
                  <th>QTY</th>
                  <th>UNIT PRICE</th>
                  <th>AMOUNT</th>
                </tr>
              </thead>
              
              <tbody>
                <tr>
                  <td>{invoice.serv_desc}</td>
                  <td>1</td>
                  <td>NGN {format.format(invoice.serv_amount)}</td>
                  <td>NGN {invoice.total}</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section>
            <div>
              <span>SUB-TOTAL</span>
              <span>NGN {format.format(invoice.serv_amount)}</span>
            </div>
            <div>
              <span>VAT({invoice.vat}%)</span>
              <span>NGN {format.format(Math.floor(invoice.vat/100 * invoice.serv_amount))}</span>
            </div>
            <div>
              <span>TOTAL</span>
              <span>NGN {invoice.total}</span>
            </div>
          </section>
        </div>
        <div className="submit_wrapper bottom">
        <section>
          <button onClick={()=>{props.history.push("/request/generateinv")}}> GO BACK</button>
          <button > SEND TO CUSTOMER</button>
        </section>
        </div>
      </div>
       )
       : "loading"
  }
  return (
    renderInvoice()
  );
};

export default PrevInv;
