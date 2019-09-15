'use strict';

function collectSameElements(collectionA, collectionB) {
  // return 'Implement the practice require, and begin changing code in this row';
  const SameElements = collectionA.filter( n => collectionB.includes(n) );
  return SameElements;
}
