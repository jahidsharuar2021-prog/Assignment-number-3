
function  analyzeText(str) {
    if  (typeof str!=='string')   {
        return "Invalid"
    } 
    if(str.trim(" ").length==0){
        return "Invalid";
    }
    const words=str.split(" ");
    let longwords="";
    for(const word of words){
        if(word.length>longwords.length){
            longwords=word;
        }
    }
    const token=words.join("").length
    return{
        longwords:longwords,
        token:token,
    }
}
const output=analyzeText("A quick brown fox");
console.log(output);


