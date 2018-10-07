/**
 * @flow
 * @relayHash 645f849de0e9fbc5d84d48093126797a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProductCard_product$ref = any;
export type ProductsQueryVariables = {||};
export type ProductsQueryResponse = {|
  +products: $ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: ProductCard_product$ref,
  |}>
|};
export type ProductsQuery = {|
  variables: ProductsQueryVariables,
  response: ProductsQueryResponse,
|};
*/


/*
query ProductsQuery {
  products {
    id
    ...ProductCard_product
  }
}

fragment ProductCard_product on Product {
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
  "name": "ProductsQuery",
  "id": null,
  "text": "query ProductsQuery {\n  products {\n    id\n    ...ProductCard_product\n  }\n}\n\nfragment ProductCard_product on Product {\n  id\n  name\n  brand\n  price\n  image\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ProductsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
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
            "name": "ProductCard_product",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProductsQuery",
    "argumentDefinitions": [],
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
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ca7940ce38a7b87e14d1db5d9bdc98e2';
module.exports = node;
