import Relay from "react-relay";

export default class InvoiceRoute extends Relay.Route {

    static routeName = "invoiceRoute";
    static queries = {
        user: () => Relay.QL `
          query {
            users (id: ["L1VzZXI6dXNlci0x"])
          }
        `
    };
}
