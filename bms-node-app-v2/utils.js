function contains(mainString, subString) {


    let index = mainString.toLowerCase().indexOf(subString.toLowerCase());
    return index >= 0
}

function searchAll(list, isMatch) {
    let result = [];
    let promise = new Promise(function (resolve, reject) {

        for (let value of list)
            if (isMatch(value)) {
                result.push(value);
            }
            else {

                return reject(`not mached`);
            }
        return result;
    });

    return promise;

}

function searchSingle(list, isMatch) {
    for (let value of list)
        if (isMatch(value))
            return value;

    return null;
}

module.exports = {
    //contains:contains  //ES5 syntax
    searchAll,
    searchSingle,
    contains  //ES 2015
};