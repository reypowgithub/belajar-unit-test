// function add(a,b){
//     return a + b;
// }

function calculateSquare(x,y,z){
    if (z) {
        return x * y * z;
    }
    return x * y;
}

module.exports = calculateSquare;
