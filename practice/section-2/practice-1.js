'use strict';

function countSameElements(collection) {
    const resultSet = new Array;
    [...new Set(collection)]
    .map(
        letter => resultSet.push({ key: letter, count: collection.filter(y => y === letter).length })
    );
    return resultSet;
}

