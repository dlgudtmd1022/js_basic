function calcDivisor(n){    
    var count = 1;
    for(var i = 1;i <= n/2;i++){       
        if(n % i === 0){
            ++count;
        }      
    }
    console.log(count);
}
calcDivisor(20);
