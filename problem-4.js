function gonoVote(array) {
      if(Array.isArray(array)===false){
        return 'Invalid';
      }   
      let hacount=0;
      let nacount=0;
      for(const item of array){
        if(item=='ha'){
            hacount++;
        }
        else{
            nacount++;
        }
      }
       if(hacount>nacount){
        return true;
       }
       else if(hacount===nacount){
        return "equal";
       }
       else{
         return false;
       }
}
const vote=gonoVote(12345);
console.log(vote);
