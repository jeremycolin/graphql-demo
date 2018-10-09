/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type OutfitRecommendation_outfit$ref: FragmentReference;
export type OutfitRecommendation_outfit = {|
  +id: string,
  +image: string,
  +$refType: OutfitRecommendation_outfit$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "OutfitRecommendation_outfit",
  "type": "Outfit",
  "metadata": null,
  "argumentDefinitions": [],
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
      "name": "image",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'bb3b9065687ebe0047b4a14294103512';
module.exports = node;
