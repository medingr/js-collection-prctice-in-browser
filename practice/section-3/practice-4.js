'use strict';

function createUpdatedCollection(collectionA, objectB) {

  const resultSet = new Array;
  Array.from(new Set(collectionA))
  .map(row => resultSet.push({ 
          key: row.includes("-")   ?  row.split("-")[0]             : row, 
          count: row.includes("-") ?  parseInt(row.split("-")[1])   : collectionA.filter(y => y === row).length })
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
