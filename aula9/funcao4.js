function calc(n1,n2,n3) {
    if (n1 != 0) {
        return n2*n2 - 4*n1*n3
    } else {
        return 'não é uma funcção de segundo grau'
    }
}

console.log(calc(0,4,3))
