function premier(num) {
    if (num==1) {
        return false
    }
    else {
        s=2
        i=1
        while (i<num) {
            if (num%i==0) {
                s=s+1
            }
            i=i+1
        }
        if (s==2){
            return true
        }
        else {
            return false
        }
            
    }
}