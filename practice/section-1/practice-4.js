'use strict';

function collectSameElements(collectionA, objectB) {
  const valueOfObjectB = objectB.value;
  const sameElements = collectionA
                        .filter(value => valueOfObjectB.includes(value.key))
                        .map( x => x.key);
  return sameElements;                      
}
