'use strict';

function countSameElements(collection) {
  const resultSet = new Array;
  Array.from(new Set(collection))
  .map(row => resultSet.push({ 
          key: row.includes("-")   ?  row.split("-")[0]             : row, 
          count: row.includes("-") ?  parseInt(row.split("-")[1])   : collection.filter(y => y === row).length })
  );
  return resultSet;
}
