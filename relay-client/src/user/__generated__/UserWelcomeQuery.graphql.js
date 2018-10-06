/**
 * @flow
 * @relayHash b06b0557a456cabb6dc6c358f8c4da72
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserWelcomeQueryVariables = {||};
export type UserWelcomeQueryResponse = {|
  +user: ?{|
    +id: string,
    +name: string,
  |}
|};
export type UserWelcomeQuery = {|
  variables: UserWelcomeQueryVariables,
  response: UserWelcomeQueryResponse,
|};
*/


/*
query UserWelcomeQuery {
  user {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "user",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": false,
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "UserWelcomeQuery",
  "id": null,
  "text": "query UserWelcomeQuery {\n  user {\n    id\n    name\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UserWelcomeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "UserWelcomeQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fb326f11cd9e24b91b0125c5742c32f9';
module.exports = node;
