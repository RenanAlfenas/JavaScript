function fatorial(n) {
    var x = 1
    for (c = n ; c > 1 ; c--) {
        x = x*c
    }
    return x
}

console.log(fatorial(5))