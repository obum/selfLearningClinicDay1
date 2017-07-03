function getPrime(n){
  var result = [];
  if (n<=1){
    return "Input must be a number"
  }//end of if statement

  else{

      for(var i=2; i<=n; i++){
            var isPrime = true;
          
        for(var j = 2; j <= (Math.sqrt(i)); j++){
            
             if(i%j==0){
                 isPrime = false;
                     } //end of if statement

          }//end of inner for loop

            if(isPrime==true){
                result.push(i);
                    }//end of if statement

          }//end of for loop

      return result;

    }// end of else

}//end of function getprime

module.exports = getPrime