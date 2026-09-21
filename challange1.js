const prompt = require('prompt-sync')();
let letter = prompt("saisisez le nomber de caractéres : ")
let arry = [] ;
for ( let i = 0 ; i < letter ; i++){
    let text = prompt("entez les lettres : ");
    arry.push(text);
}
console.log(arry.join(""))