// Given a non-empty array of integers, return the result of multiplying the values together in order.


function grow(x){
    if (x != null || undefined) {
        return x.reduce((prev, curr) => prev * curr)
    }
}

const result = grow([1,2,3,4])
console.log(result)