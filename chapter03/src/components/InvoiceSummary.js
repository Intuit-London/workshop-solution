import React, { Component } from 'react';

class InvoiceSummary extends Component {

  render() {

      return (
        <div className="progress" id="summary" style={{height: 40 +'px'}}>
          <div className="progress-bar progress-bar-success summaryLabel" style={{width: 15 + '%', paddingTop: 10 + 'px'}}>
            15 Invoices Paid
          </div>
          <div className="progress-bar progress-bar-warning progress-bar summaryLabel" style={{width: 65 + '%', paddingTop: 10 + 'px'}}>
            65 Open Invoices
          </div>
          <div className="progress-bar progress-bar-danger summaryLabel" style={{width: 20 + '%', paddingTop: 10 + 'px'}}>
            20 OverDue invoices
          </div>
        </div>
      );
  }
}

export default InvoiceSummary;
