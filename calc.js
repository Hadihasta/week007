// luas persegi s x s  keliling persegi 4 x s
// luast persegi panjang p x l keliling 2 x (p+l)
exports.luasPersegi = function (sisi) {
  return sisi * sisi;
};

exports.kelilingPersegi = function (sisi) {
  return sisi * sisi * sisi * sisi;
};
exports.luasPersegiPanjang = function (panjang, lebar) {
  return panjang * lebar;
};
exports.kelilingPersegiPanjang = function (panjang, lebar) {
  return 2 * (panjang + lebar);
};
