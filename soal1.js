// export = berfungsi untuk membuat function ini dapat di panggil diluar file ini
//require = untuk mengimport

// module local
const calc = require("./calc.js");

console.log("LUAS PERSEGI  = ");
console.log(calc.luasPersegi(4));
console.log("KELILING PERSEGI = ");
console.log(calc.kelilingPersegi(4));
console.log("LUAS PERSEGI PANJANG = ");
console.log(calc.luasPersegiPanjang(4, 5));
console.log("KELILING PERSEGI PANJANG = ");
console.log(calc.kelilingPersegiPanjang(4, 5));
