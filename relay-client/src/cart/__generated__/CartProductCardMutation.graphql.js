/**
 * @flow
 * @relayHash dcd236aaef27f1d4cd54ea9d493e3743
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CartProductCard_product$ref = any;
export type CartProductCardMutationVariables = {|
  productId: string
|};
export type CartProductCardMutationResponse = {|
  +remove_from_cart: ?{|
    +products: $ReadOnlyArray<?{|
      +$fragmentRefs: CartProductCard_product$ref
    |}>
  |}
|};
export type CartProductCardMutation = {|
  variables: CartProductCardMutationVariables,
  response: CartProductCardMutationResponse,
|};
*/


/*
mutation CartProductCardMutation(
  $productId: ID!
) {
  remove_from_cart(productId: $productId) {
    products {
      ...CartProductCard_product
      id
    }
  }
}

fragment CartProductCard_product on Product {
  id
  name
  brand
  price
  image
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "productId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "productId",
    "variableName": "productId",
    "type": "ID!"
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CartProductCardMutation",
  "id": null,
  "text": "mutation CartProductCardMutation(\n  $productId: ID!\n) {\n  remove_from_cart(productId: $productId) {\n    products {\n      ...CartProductCard_product\n      id\n    }\n  }\n}\n\nfragment CartProductCard_product on Product {\n  id\n  name\n  brand\n  price\n  image\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CartProductCardMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "remove_from_cart",
        "storageKey": null,
        "args": v1,
        "concreteType": "Cart",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "products",
            "storageKey": null,
            "args": null,
            "concreteType": "Product",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "CartProductCard_product",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CartProductCardMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "remove_from_cart",
        "storageKey": null,
        "args": v1,
        "concreteType": "Cart",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "products",
            "storageKey": null,
            "args": null,
            "concreteType": "Product",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "brand",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "price",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "image",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b3e35dcb1e07902ae0610343f16cac59';
module.exports = node;
