import React from 'react';
import ReactDOM from 'react-dom';
import InvoiceAppRenderer from './app/InvoiceAppRenderer';
import './index.css';
import invoiceList from './data/invoiceList';

var InvoiceAppFactory = React.createFactory(InvoiceAppRenderer);
var invoices = invoiceList;

ReactDOM.render(
  InvoiceAppFactory(invoices),document.getElementById('root')
);
