import React, { Component } from 'react';
import Relay from 'react-relay';
import AppHeader from "../components/AppHeader"
import InvoiceList from '../components/InvoiceList';
import InvoiceSummary from '../components/InvoiceSummary';
import InvoiceCreate from '../components/InvoiceCreate';
import 'bootstrap/dist/css/bootstrap.css';

class InvoiceApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isCreateInvoice: false
    }
  };

  setCreateInvoice() {
    this.setState({
      isCreateInvoice: true
    });
  };

  setListInvoice() {
    this.setState({
      isCreateInvoice: false
    })
  };

  render() {

      return (
        <div>
            <AppHeader createInvoice = {this.setCreateInvoice.bind(this)} listInvoice = {this.setListInvoice.bind(this)}/>
            <InvoiceSummary/>
            {this.state.isCreateInvoice ? <InvoiceCreate/> : <InvoiceList invoices={this.props.invoices}/> }
        </div>
      );
  };
}

export default InvoiceApp;
