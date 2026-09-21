const prompt = require('prompt-sync')();
let text = prompt("saisissez une phrase : ");
console.log(`Before : ${text}`);
console.log("after : ",text.toLowerCase());