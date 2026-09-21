const prompt = require('prompt-sync')();
let text = prompt("saisissez une phrase : ");
let x = [] ;

for (let i = 0 ;i < text.length ; i++){
    if(text[i] === " "){
        continue;
    }
    else{
        x.push(text[i]);
    }
}
console.log(x.join(""));



