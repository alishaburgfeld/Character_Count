exports.charCount = function(str) {


//function charCount(str) {
    let obj={}
    let alphabet="abcdefghijklmnopqrstuvwxyz"
    for (let char of str) {
        if (alphabet.includes(char)) {
            obj[char] = (obj[char] || 0) + 1
        }
    }
    //console.log(Object.entries(obj))

    let unsorted=[...Object.entries(obj)]
    //console.log(unsorted)
    let sortDirection = 1
    let sorted = unsorted.sort(function ([key1, value1], [key2, value2]) {
        if (value1>value2) { return -sortDirection }
        if (value1<value2) { return sortDirection }
        if (value1===value2) {      //secondary
            if ( key1 > key2 ) { return sortDirection }
            if ( key1 < key2 ) { return -sortDirection }
            if ( key1 === key2 ) { return 0 }
        }
        
    })
    //console.log(sorted)
    return sorted
    
}

//console.log(charCount("an apple a day will keep the doctor away"))

///https://javascript.plainenglish.io/how-to-sort-an-object-by-key-or-property-name-in-javascript-a8c07b179901