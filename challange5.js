const prompt = require('prompt-sync')();
const text = "abcd"
const x = []
for (let i = text.length-1 ; i >= 0 ; i--){
    x.push(text[i]);
}
console.log(x.join(""))