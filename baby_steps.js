
var numbers = process.argv.slice(2);
var sum = numbers.reduce(function(a, b) {
    return Number(a) + Number(b);    
}, 0);

console.log(sum);

