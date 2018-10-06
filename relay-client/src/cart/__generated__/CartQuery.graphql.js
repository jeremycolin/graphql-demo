/**
 * @flow
 * @relayHash 4e7d9cacf02d311c6206b8018fd3ba92
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CartProductCard_product$ref = any;
export type CartQueryVariables = {||};
export type CartQueryResponse = {|
  +cart: ?{|
    +products: $ReadOnlyArray<?{|
      +id: string,
      +$fragmentRefs: CartProductCard_product$ref,
    |}>
  |}
|};
export type CartQuery = {|
  variables: CartQueryVariables,
  response: CartQueryResponse,
|};
*/


/*
query CartQuery {
  cart {
    products {
      id
      ...CartProductCard_product
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "CartQuery",
  "id": null,
  "text": "query CartQuery {\n  cart {\n    products {\n      id\n      ...CartProductCard_product\n    }\n  }\n}\n\nfragment CartProductCard_product on Product {\n  id\n  name\n  brand\n  price\n  image\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CartQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "cart",
        "storageKey": null,
        "args": null,
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
              v0,
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
    "name": "CartQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "cart",
        "storageKey": null,
        "args": null,
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
              v0,
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
(node/*: any*/).hash = 'd6cf12deaa196aa25a1cbceae36e0aea';
module.exports = node;
