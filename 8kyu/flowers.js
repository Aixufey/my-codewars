

// Two person are in love if the sum of the flower petals are odd
// Example a flower has petals of 3, 5 or 6
// if the sum of two flowers petals added together is a odd number, they are in love.


function inLove(flower1, flower2) {
    return flower1 % 2 + flower2 % 2 == 1
}

const result = inLove(5, 3);
console.log(result);