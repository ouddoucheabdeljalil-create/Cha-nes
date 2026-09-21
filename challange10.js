const prompt = require('prompt-sync')();
let text1 = prompt("saisissez une phrase : ");
let text2 = prompt("saisissez le mot que vous souhitez rechercher : ");

let text3 = text1.toLocaleLowerCase();
let text4 = text2.toLocaleLowerCase();

let check = text3.includes(text4);
if (check === true){
    console.log("le mot est là :)");
}
else{
    console.log("le mot n'est pas là :(");
}

