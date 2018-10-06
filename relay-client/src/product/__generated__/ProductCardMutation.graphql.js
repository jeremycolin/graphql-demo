/**
 * @flow
 * @relayHash 737dcdcadc8ba39f3bdcfbe03d370087
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProductCard_product$ref = any;
export type ProductCardMutationVariables = {|
  productId: string
|};
export type ProductCardMutationResponse = {|
  +add_to_cart: ?{|
    +products: $ReadOnlyArray<?{|
      +$fragmentRefs: ProductCard_product$ref
    |}>
  |}
|};
export type ProductCardMutation = {|
  variables: ProductCardMutationVariables,
  response: ProductCardMutationResponse,
|};
*/


/*
mutation ProductCardMutation(
  $productId: ID!
) {
  add_to_cart(productId: $productId) {
    products {
      ...ProductCard_product
      id
    }
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
  "name": "ProductCardMutation",
  "id": null,
  "text": "mutation ProductCardMutation(\n  $productId: ID!\n) {\n  add_to_cart(productId: $productId) {\n    products {\n      ...ProductCard_product\n      id\n    }\n  }\n}\n\nfragment ProductCard_product on Product {\n  id\n  name\n  brand\n  price\n  image\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ProductCardMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "add_to_cart",
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
                "name": "ProductCard_product",
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
    "name": "ProductCardMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "add_to_cart",
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
(node/*: any*/).hash = '74c8d87a08b7d134d7aa23d10f2694e0';
module.exports = node;
