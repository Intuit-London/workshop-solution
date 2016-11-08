import Relay from "react-relay";

export default class CreateInvoiceMutation extends Relay.Mutation {

    getMutation() {
        return Relay.QL `mutation createInvoice{createInvoice}`;
    }

    getVariables() {
        let data = {
          invoice: this.props
        };
        data.invoice.user = {"id" : "L1VzZXI6dXNlci0x"};
        return data;
    }

    getFatQuery() {
        return Relay.QL `
          fragment on User {
            invoices {
              number
            }
          }
          `;
    }

    getConfigs() {
        return [
              {
                type: "REQUIRED_CHILDREN",
                children: [Relay.QL `
                fragment on CreateInvoicePayload {
                  invoice {
                    user {
                      id
                    },
                    number,
                    totalAmount
                  }
                }
              `]
            }
            //Need to fix the below query for updating client side cache
            /*,{
              type: "RANGE_ADD",
              parentName: "invoice",
              parentID: "L1VzZXI6dXNlci0x",
              connectionName: "invoice",
              edgeName: "invoice",
              rangeBehaviors: {
                  "": "append"
              }
            }*/

        ];
    }

}
