'use strict';

function createUpdatedCollection(collectionA, objectB) {
    collectionA.forEach(collectA => {
    objectB.value.forEach(objB => {
        if(collectA.key == objB){
          
          collectA.count--;
        }
    });
});
return collectionA;
}
