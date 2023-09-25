const baris1 = [
    [2, 4, 6],
    [3, 9, 5]
];

const kolom2 = [
    [7, 1],
    [-2, 9],
    [4, 3]
];
    // Variable Total
const resultMatrix = [];

// perkalian
for ( let i = 0; i < baris1.length; i++) {
    resultMatrix[i] = [];
    for (let j = 0; j < kolom2[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < kolom2.length; k++) {
            sum += baris1[i][k] * kolom2[k][i];
        }
        resultMatrix[i][j] = sum;
    }
}

console.log(resultMatrix);