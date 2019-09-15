'use strict';

function createUpdatedCollection(collectionA, objectB) {
    collectionA.forEach(collectA => {
        objectB.value.forEach(objB => {

            let indexOfObjectB = objectB.value.findIndex(element => element === objB);
            let originalCount = collectA.count;
            if( collectA.key == objB && originalCount == 3  )
            { 
                collectA.count -- ; 
            }
            else if 
            ( collectA.key == objB ) 
            { 
                collectA.count = originalCount - indexOfObjectB;
            }
            else
                collectA.count; 
        });
    });
    return collectionA;
}
