'use strict';

function collectSameElements(collectionA, collectionB) {
  const subCollectionB = collectionB[0];
  const SameElements = collectionA.filter( n => subCollectionB.includes(n) );
  return SameElements;
}
