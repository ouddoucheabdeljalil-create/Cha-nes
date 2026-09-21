const prompt = require('prompt-sync')();
let mot1 = prompt("entez le premier mot : ");
let mot2 = prompt("entez le deuxiem mot : ");

if ( mot1.trim() === mot2.trim()){
    console.log("les mots sont identiques");
}
else{
    console.log("les mot ne correspondet pas!")

}