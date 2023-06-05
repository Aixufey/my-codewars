// Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).



function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    if (arrayOfSheep !== undefined || null) {
        let count = 0;
        while (arrayOfSheep.length > 0) {
            if (arrayOfSheep.pop() === true) {
                count++;
            }
        }
        return count;
    }
}

const sheeps = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

console.log(countSheeps(sheeps))