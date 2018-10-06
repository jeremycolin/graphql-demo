/**
 * @flow
 * @relayHash 30cc13e0e547a928225a46e23f034573
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserInfoQueryVariables = {||};
export type UserInfoQueryResponse = {|
  +user: ?{|
    +id: string,
    +name: string,
  |}
|};
export type UserInfoQuery = {|
  variables: UserInfoQueryVariables,
  response: UserInfoQueryResponse,
|};
*/


/*
query UserInfoQuery {
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
  "name": "UserInfoQuery",
  "id": null,
  "text": "query UserInfoQuery {\n  user {\n    id\n    name\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UserInfoQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "UserInfoQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8b3db1eda2d1fcef8816a90001b77126';
module.exports = node;
