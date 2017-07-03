

var result = [];
function getPrime(n){
  if (n<0){
    return "Input must be a number"
  }
  else{
for(var i=2; i<=n; i++){
            let isPrime = true;
          
          for(var j = 2; j <= (Math.sqrt(i)); j++){
            
             if(i%j===0){
                 isPrime = false;
                     } //end of if statement
        
            }//end of inner for loop
    
            if(isPrime===true){
                result.push(i);
                    }//end of if statement
  
}//end of for loop
  
}// end of else
return result;
}

module.exports = getPrime