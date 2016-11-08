import React, { Component } from 'react';

class AppHeader extends Component {

  render() {

      return (
        <nav className="navbar navbar-inverse navbar-static-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Invoicing App</a>
            <button type="button" className="btn btn-default navbar-btn btn-primary pull-right" onClick={this.props.createInvoice}>New Invoice</button>
            <button type="button" className="btn btn-default navbar-btn btn-link pull-right" onClick={this.props.listInvoice}>Invoice Lists</button>
          </div>
        </nav>
      );
  }
}

export default AppHeader;
