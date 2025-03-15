const name = "hitesh"
const repoCount = 50
//console.log('Hello my name is  ${name}and my repo count is $ {repoCount}')\

const game=new String('hitesh-hc')
console.log(game[0]);
console.log(game.__proto__);
console.log(game.length);
console.log(game.toLocaleUpperCase());
console.log(game.toUpperCase());
console.log(game.charAt(2));
console.log(game.indexOf('t'));
const newString=game.substring(0,4);
console.log(newString);

const news="  hitesh  "
console.log(news);
console.log(news.trimStart());

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))


console.log(game.split('-'))
