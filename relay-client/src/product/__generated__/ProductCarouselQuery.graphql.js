/**
 * @flow
 * @relayHash c228fc369eb99641a3bccaa4aa4ac6a9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OutfitRecommendation_outfit$ref = any;
type ProductCard_product$ref = any;
type ProductRecommendation_product$ref = any;
export type ProductCarouselQueryVariables = {||};
export type ProductCarouselQueryResponse = {|
  +products: $ReadOnlyArray<?{|
    +id: string,
    +recommendations: ?$ReadOnlyArray<?{|
      +__typename: string,
      +id?: string,
      +$fragmentRefs: ProductRecommendation_product$ref & OutfitRecommendation_outfit$ref,
    |}>,
    +$fragmentRefs: ProductCard_product$ref,
  |}>
|};
export type ProductCarouselQuery = {|
  variables: ProductCarouselQueryVariables,
  response: ProductCarouselQueryResponse,
|};
*/


/*
query ProductCarouselQuery {
  products {
    id
    ...ProductCard_product
    recommendations {
      __typename
      ... on Outfit {
        id
      }
      ... on Product {
        id
      }
      ...ProductRecommendation_product
      ...OutfitRecommendation_outfit
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

fragment ProductRecommendation_product on Product {
  id
  brand
  image
}

fragment OutfitRecommendation_outfit on Outfit {
  id
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
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v2 = [
  v0
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "brand",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ProductCarouselQuery",
  "id": null,
  "text": "query ProductCarouselQuery {\n  products {\n    id\n    ...ProductCard_product\n    recommendations {\n      __typename\n      ... on Outfit {\n        id\n      }\n      ... on Product {\n        id\n      }\n      ...ProductRecommendation_product\n      ...OutfitRecommendation_outfit\n    }\n  }\n}\n\nfragment ProductCard_product on Product {\n  id\n  name\n  brand\n  price\n  image\n}\n\nfragment ProductRecommendation_product on Product {\n  id\n  brand\n  image\n}\n\nfragment OutfitRecommendation_outfit on Outfit {\n  id\n  image\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ProductCarouselQuery",
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
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "recommendations",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
            "selections": [
              v1,
              {
                "kind": "FragmentSpread",
                "name": "ProductRecommendation_product",
                "args": null
              },
              {
                "kind": "FragmentSpread",
                "name": "OutfitRecommendation_outfit",
                "args": null
              },
              {
                "kind": "InlineFragment",
                "type": "Product",
                "selections": v2
              },
              {
                "kind": "InlineFragment",
                "type": "Outfit",
                "selections": v2
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProductCarouselQuery",
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
          v3,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "price",
            "args": null,
            "storageKey": null
          },
          v4,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "recommendations",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
            "selections": [
              v1,
              {
                "kind": "InlineFragment",
                "type": "Product",
                "selections": [
                  v0,
                  v3,
                  v4
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "Outfit",
                "selections": [
                  v0,
                  v4
                ]
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
(node/*: any*/).hash = '7d1f4d27957428895b788d80d602f23a';
module.exports = node;
