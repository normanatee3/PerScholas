// Input: M = [
//     [-3, -2, -1, 1],
//     [-2, 2, 3, 4],
//     [4, 5, 7, 8]
// ]
// Output: 4

// We have 4 negative numbers in this matrix (M) of n rows and m columns

let M = [
    [-3, -2, -1, 1],
    [-2, 2, 3, 4],
    [4, 5, 7, 8]
];
const countNeg = (M,n,m) => {
    let count = 0

    for(let i = 0; i<n; i++){
        for (let j = 0; j < m; j++) {
            if(M[i][j] < 0){
                count+=1
            }
        }
    }
    return count
}
console.log(countNeg(M, 3, 4));