const prompt = require('prompt-sync')();
let text = prompt("saisissez une phrase : ");
let lettre = prompt("saisissez une littre : ");
let count = 0;
for(let i = 0 ; i < text.length ; i++){
    if ( lettre === text[i]){
        count += 1;
    }
}
console.log(`le nombre de lettres ${lettre} dans la phrase est : ${count}`);