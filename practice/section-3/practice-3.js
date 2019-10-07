'use strict';

function createUpdatedCollection(collectionA, objectB) {

    const resultSet = new Array;
    [...new Set(collectionA)]
    .map(
        letter => resultSet.push({ key: letter, count: collectionA.filter(y => y === letter).length })
    );

    resultSet.forEach(collectA => {
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
return resultSet;
}
