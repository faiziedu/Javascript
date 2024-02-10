const name="faizan "
const count=10
// console.log(name+ count+" value");
// console.log(`my name is ${name} and count is ${count}`); // modern

const game=new String("game-city")
// console.log(game[0]);
// console.log(game.__proto__);
// console.log(game.length);
// console.log(game.toUpperCase());
console.log(game.charAt(2));
console.log(game.indexOf('m'));
const string1=game.substring(0,3) // doesn't obey negative value
console.log(string1);
const string2=game.slice(-3,3) // start from reverse
console.log(string2);
const string3="    faizan   "
console.log(string3);
console.log(string3.trim());
const url="https://nutrifusion.com/nutrifusion%20analyzer"
console.log(url.replace('%20','-'))
console.log(url.includes('sundar'));

console.log(game.split('-'));