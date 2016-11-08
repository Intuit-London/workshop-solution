import React, { Component } from 'react';
import InvoiceRow from './InvoiceRow';

class InvoiceList extends Component {

  constructor(props) {
    super(props);
  };

  render() {

      var rows = [];

      for (var i = 0; i < this.props.invoices.length; i++) {
        rows.push(<InvoiceRow key={i} invoice={this.props.invoices[i]}/>);
      }

      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Paid</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
  }
}

export default InvoiceList;
