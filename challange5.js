const prompt = require('prompt-sync')();
const text = "YOUCODE" ;
const x = [] ;
for (let i = text.length-1 ; i >= 0 ; i--){
    x.push(text[i]);
}
console.log(`Before : ${text}`) ;
console.log("After : " ,x.join("")) ;