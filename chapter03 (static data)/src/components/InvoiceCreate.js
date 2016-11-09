import React, { Component } from 'react';
import Relay from "react-relay";

class InvoiceCreate extends Component {

  render() {

      return (
        <div>
          <form className="form-horizontal" ref={(ref) => this.createInvoiceForm = ref}>
            <div className="form-group">
                <label htmlFor="refNum" className="col-sm-offset-1 col-sm-2">Reference Number</label>
                <div className="col-sm-8">
                  <input type="number" className="form-control" id="refNum" placeholder="Number" ref={(ref) => this.invoiceNumber = ref}/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="name" className="col-sm-offset-1 col-sm-2">Customer Name</label>
                <div className="col-sm-4">
                  <input type="text" className="form-control" id="name" placeholder="Customer Name" ref={(ref) => this.customername = ref}/>
                </div>
                <div className="col-sm-4">
                  <input type="email" className="form-control" id="email" placeholder="Customer Email"/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="email" className="col-sm-offset-1 col-sm-2">Billing Address</label>
                <div className="col-sm-8 paddingBottom10">
                  <input type="text" className="form-control" id="email" placeholder="Line 1"/>
                </div>
                <div className="col-sm-offset-3 col-sm-8 paddingBottom10">
                  <input type="text" className="form-control" id="email" placeholder="Line 2"/>
                </div>
                <div className="col-sm-offset-3 col-sm-4 paddingBottom10">
                  <input type="text" className="form-control" id="email" placeholder="City"/>
                </div>
                <div className="col-sm-4 paddingBottom10">
                  <input type="text" className="form-control" id="email" placeholder="ZipCode"/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="date" className="col-sm-offset-1 col-sm-2">Date</label>
                <div className="col-sm-8">
                  <input type="date" className="form-control" id="date" placeholder="Date" ref={(ref) => this.invoiceDate = ref}/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="amount" className="col-sm-offset-1 col-sm-2">Total Amount</label>
                <div className="col-sm-8">
                  <input type="number" className="form-control" id="date" placeholder="Amount" ref={(ref) => this.invoiceAmount = ref}/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="amountPaid" className="col-sm-offset-1 col-sm-2">Amount Paid</label>
                <div className="col-sm-8">
                  <input type="checkbox" className="form-control" placeholder="Amount Paid" ref={(ref) => this.invoicePaid = ref}/>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-offset-3 col-sm-8">
                  <button type="button" className="btn btn-primary">Save</button>
                </div>
            </div>
          </form>
        </div>
      );
  }
}

export default InvoiceCreate;
