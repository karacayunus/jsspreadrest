//Rest
let sum = (...args) => {
    console.log(args);
};

console.log(sum(10,20,30,40));

let sum2 = (...args) => {
    return args.reduce((a, b) => a + b); //Toplayarak döndürecek
};

console.log(sum2(10,20,30,40,50));