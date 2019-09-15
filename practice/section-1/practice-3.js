'use strict';

function collectSameElements(collectionA, objectB) {
   const valueOfObjectB = objectB.value;
   const SameElements = collectionA.filter( n => valueOfObjectB.includes(n) );
  return SameElements;
}
