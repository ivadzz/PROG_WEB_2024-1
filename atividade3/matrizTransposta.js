function transporMatriz(A) {
    function imprimirMatriz(matriz) {
        for (let i = 0; i < matriz.length; i++) {
            console.log(matriz[i].join(' '));
        }
    }
    console.log("Matriz Original:");
    imprimirMatriz(A);
    const transposta = [];
    for (let j = 0; j < A[0].length; j++) {
        const linha = [];
        for (let i = 0; i < A.length; i++) {
            linha.push(A[i][j]);
        }
        transposta.push(linha);
    }
    console.log("\nMatriz Transposta:");
    imprimirMatriz(transposta);
}
const matrizExemplo = [
    [1, 2],
    [3, 4],
    [5, 6]
];
transporMatriz(matrizExemplo);
