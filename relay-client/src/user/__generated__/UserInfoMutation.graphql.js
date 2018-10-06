/**
 * @flow
 * @relayHash 5a64324b49737b36ae5eb86b7478d00c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserInfoMutationVariables = {|
  name: string
|};
export type UserInfoMutationResponse = {|
  +change_name: ?{|
    +id: string,
    +name: string,
  |}
|};
export type UserInfoMutation = {|
  variables: UserInfoMutationVariables,
  response: UserInfoMutationResponse,
|};
*/


/*
mutation UserInfoMutation(
  $name: String!
) {
  change_name(name: $name) {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "name",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "change_name",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name",
        "type": "String!"
      }
    ],
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
  "operationKind": "mutation",
  "name": "UserInfoMutation",
  "id": null,
  "text": "mutation UserInfoMutation(\n  $name: String!\n) {\n  change_name(name: $name) {\n    id\n    name\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UserInfoMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UserInfoMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b9789c8f516e4ecc2db283ebc7009f85';
module.exports = node;
