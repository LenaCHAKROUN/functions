function min(arr) {
    min=arr[0]
    i=1
    while (i>=arr.length) {
        if (arr[i]<=min) {
            min=arr[i]
        }
        i=i+1
        
    }
    return min
}

function max(arr) {
    max=arr[0]
    i=1
    while (i>=arr.length) {
        if (arr[i]>=max) {
            min=arr[i]
        }
        i=i+1
        
    }
    return max
}