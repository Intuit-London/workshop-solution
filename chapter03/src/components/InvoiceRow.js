import React, { Component } from 'react';
import Relay from 'react-relay';

class InvoiceRow extends Component {

  constructor(props) {
    super(props);
  };

  render() {

      return (
        <tr>
          <td>{this.props.invoice.number}</td>
          <td>{this.props.invoice.customer ? this.props.invoice.customer.businessName : ""}</td>
          <td>{this.props.invoice.creationDate}</td>
          <td>{this.props.invoice.totalAmount}</td>
          <td>{this.props.invoice.paid ? "Yes" : "No"}</td>
        </tr>
      );
  }
}

export default Relay.createContainer(InvoiceRow, {
  fragments: {
    invoice: () => Relay.QL`
      fragment on Invoice {
          id,
          number,
          creationDate,
          paid,
          totalAmount,
          customer {
            businessName
          }
      }`
  }
});
;
