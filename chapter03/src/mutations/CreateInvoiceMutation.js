import Relay from "react-relay";

export default class CreateInvoiceMutation extends Relay.Mutation {

    getMutation() {
        return Relay.QL `mutation createInvoice{createInvoice}`;
    }

    getVariables() {
        return {
          invoice : {
            number : "35",
            creationDate : "25-06-2016",
            paid : false,
            customer : {
              id: "12341",
              businessName: "asfa"
            },
            user : {
              id: "L1VzZXI6dXNlci0x"
            },
            totalAmount: 234.34
          }
        };
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
