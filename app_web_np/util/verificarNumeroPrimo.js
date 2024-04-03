function verificarNumeroPrimo(n) {
    if (n <= 1) {
        console.log(`falso! ${n}`);
        return false;
    }

    for (let i = 2; i * i <=n; i++) {
        if (n % i == 0) {
            console.log(`falso! ${n}`);
            return false;
        }
    }
    console.log(`verdade! ${n}`);
    return true;
}
module.exports = {
    verificarNumeroPrimo,
}