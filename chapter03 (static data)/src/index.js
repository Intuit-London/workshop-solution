import React from 'react';
import ReactDOM from 'react-dom';
import InvoiceApp from './app/InvoiceApp';
import './index.css';
import invoiceList from './data/invoiceList';

var InvoiceAppFactory = React.createFactory(InvoiceApp);
var invoices = invoiceList;

ReactDOM.render(
  InvoiceAppFactory(invoices),document.getElementById('root')
);
