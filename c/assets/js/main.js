function num (x){
    var count=0
    if(x>0 && x<50){
        for (let i = 1; i <= x; i++) {
            if(i%3===0){
                count ++;  
            }
         
        }
    }else if(x>50 && x<100){
        for (let i = 1; i <= x; i++) {
            if(i%5===0){
                count ++;
            }
            
        }
    }else{
        for (let i = 1; i <= x; i++) {
            if(i%8===0){
                count ++;
            }
            
        }
    }
    return count
}
alert(num(prompt("eded daxil edin")))