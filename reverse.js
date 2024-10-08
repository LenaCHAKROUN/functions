function Reverse(ph) {
    i=ph.length-1
    res=""
    while (i>=0){
        res=res+ph[i]
        i=i-1
    }
    return res
}

