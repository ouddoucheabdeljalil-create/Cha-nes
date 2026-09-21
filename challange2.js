const prompt = require('prompt-sync')();
const text = prompt("entez le mot : ");
let count = 0 ;
for(let i = 0 ; i < text.length ; i++){
    count =  i + 1;
}
console.log(`La longueur de "${text}" est de ${count} caractères.`)