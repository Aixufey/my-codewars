// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.


function invert(array) {
    if (array !== null || undefined) {
        return array.map(x => x * -1)
    }
}


const result = invert([1,2,3,4,5])
console.log(new Set(result))