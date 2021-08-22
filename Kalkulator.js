// Tulis kode solusi di bawah ini

class Operation {
    constructor (Penjumlahan, Pengurangan, Perkalian, Pembagian, angkaPangkat, akarPangkat, pi) {
       this.Penjumlahan = Penjumlahan;
       this.Pengurangan = Pengurangan;
       this.Perkalian = Perkalian;
       this.Pembagian = Pembagian;
       this.angkaPangkat = angkaPangkat;
       this.akarPangkat = akarPangkat;
       this.pi = pi;
    }

// Penjumlahan
penjumlahan() {
   return this.Penjumlahan + this.Penjumlahan;
}

// Pengurangan
pengurangan() {
   return this.Pengurangan - this.Pengurangan;
} 

// Perkalian 
perkalian() {
   return this.Perkalian * this.Perkalian;
}


// Pembagian
pembagian() {
   return this.Pembagian / this.Pembagian;
}

// Perpangkatan
pangkat() {
   return this.angkaPangkat ** this.akarPangkat;
}

// Luas Lingkaran
luasLingkaran(a) {
   if (a % 7 === 0) {
       const luasSatu = Math.round(a * a * 3.14);
       return luasSatu;
   } else {
       const luasDua = a * a * 3.14;
       return luasDua;
   }
}
}

// hasil
const hasil = new Operation(2, 3, 4, 5, 6, 6,6 ,3 ,7 ,16 , 9, 3.14);
console.log(`Penjumlahan : ${hasil.penjumlahan()}`);
console.log(`Pengurangan : ${hasil.pengurangan()}`);
console.log(`Perkalian : ${hasil.perkalian()}`);
console.log(`Pembagian : ${hasil.pembagian()}`);
console.log(`Pangkat : ${hasil.pangkat(2)}`);
console.log(`Luas lingkaran : ${hasil.luasLingkaran(7)}`);
