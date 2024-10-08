function factoriel(num) {
    i=num
    s=num
    while (i>1) {
        i=i-1
        s=s*i
    }
    return s
}