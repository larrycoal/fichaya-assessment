import React from 'react';

const GenerateInv = () => {
    return (
        <div className="generateInv_wrapper">
           <span className="page_header">Generate invoice</span>
           <span>ENTER INVOICE INFO</span>
               <form className="form_wrapper">
                   <div className="right">
                       <section>
                           <label>Customer/Company name</label>
                           <input
                           type="text"
                           />
                       </section>
                       <section>
                           <span>
                               <label>Email address</label>
                               <input type="email"/>
                           </span>
                           <span>
                           <label>Phone number</label>
                               <input type="number"/>
                           </span>
                       </section>
                       <section>
                           <label>Home/Building address</label>
                           <input
                           type="text"
                           />
                       </section>
                   </div>
                   <div className="left">
                   <section>
                           <span>
                               <label>Issue date</label>
                               <input type="date"/>
                           </span>
                           <span>
                           <label>Due date</label>
                               <input type="date"/>
                           </span>
                       </section>
                       <section>
                           <span>
                               <label>Invoice number</label>
                               <input type="number"/>
                           </span>
                           <span>
                           <label>V.A.T</label>
                               <input type="number"/>
                           </span>
                       </section>
                       <section>
                           <label>Service Description</label>
                           <input type="text"/>
                       </section>
                       <section>
                           <span>
                               <label>Service Amount</label>
                               <input type="number"/>
                           </span>
                           <span>
                           <label>Total Amount</label>
                               <input type="number"/>
                           </span>
                       </section>
                   </div>
               </form>
           <div className="submit_wrapper">
               <section>
                   <button> Cancle</button>
                   <button> Create invoice</button>
               </section>
           </div>
        </div>
    );
};

export default GenerateInv;