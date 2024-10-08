function pos(arr) {
    i=1
    res=" "
    while (i<arr.length) {
        if (arr[i]>=0) {
            res+=arr[i]+" "
        }
        i=i+1
    }
    return res

}