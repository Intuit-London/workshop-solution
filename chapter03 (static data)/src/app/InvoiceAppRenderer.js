import React, {PropTypes} from "react";
import Relay from "react-relay";
import InvoiceRoute from "../routes/InvoiceRoute";
import InvoiceApp from "./InvoiceApp";

class InvoiceAppRenderer extends React.Component {

    constructor(props) {
        super(props);
        this.renderWidget = this.renderWidget.bind(this);
        Relay.injectNetworkLayer(
            new Relay.DefaultNetworkLayer('http://localhost:8080/graphql')
        );
    }

    renderWidget(data) {
        if (data.error) {
            return (<div>Error</div>);
        } else if (data.props) {
            return (<InvoiceApp user={data.props.user[0]}/>);
        }
        return (<div>Loading</div>)
    }

    render() {
        return (
            <Relay.Renderer
                Container={InvoiceApp}
                queryConfig={new InvoiceRoute()}
                environment={Relay.Store}
                render={this.renderWidget}
                forceFetch={true}
            />
        );
    }
}

export default InvoiceAppRenderer;
