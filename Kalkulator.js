// Tulis kode solusi di bawah ini
// membuat class kalkulator
class Kalkulator {
    // membuat constructor
    constructor(angkaPenjumlahan1,angkaPenjumlahan2,angkaPengurangan1,angkaPengurangan2,angkaPerkalian1,angkaPerkalian2,angkaPembagian1,angkaPembagian2,angkaPangkat,akarPangkat,pi) {
        this.angkaPenjumlahan1 = angkaPenjumlahan1;
        this.angkaPenjumlahan2 = angkaPenjumlahan2;
        this.angkaPengurangan1 = angkaPengurangan1;
        this.angkaPengurangan2 = angkaPengurangan2;
        this.angkaPerkalian1 = angkaPerkalian1;
        this.angkaPerkalian2 = angkaPerkalian2;
        this.angkaPembagian1 = angkaPembagian1;
        this.angkaPembagian2 = angkaPembagian2;
        this.angkaPangkat = angkaPangkat;
        this.akarPangkat = akarPangkat;
        this.pi = pi;
    }
    // operasi penjumlahan
    penjumlahan() {
        return this.angkaPenjumlahan1 + this.angkaPenjumlahan2;
    }
    // operasi pengurangan
    pengurangan() {
        return this.angkaPengurangan1 - this.angkaPengurangan2;
    }
    // operasi perkalian
    perkalian() {
        return this.angkaPerkalian1 * this.angkaPerkalian2;
    }
    // operasi pembagian
    pembagian() {
        return this.angkaPembagian1 / this.angkaPembagian2;
    }
    // operasi pangkat 2
    pangkatKuadrat() {
        return this.angkaPangkat * this.angkaPangkat;
    }
    // operasi luas 
    lLingkaran(x) {
        if (x % 7 === 0) {
            const luasSatu = Math.round(x * x * 3.14);
            return luasSatu;
        } else {
            const luasDua = x * x * 3.14;
            return luasDua;
        }
    }
}

const hasil = new Kalkulator(2, 3, 4, 5, 6, 6,6 ,3 ,7 ,8 , 3.14);
console.log(hasil.penjumlahan());
console.log(hasil.pengurangan());
console.log(hasil.perkalian());
console.log(hasil.pembagian());
console.log(hasil.pangkatKuadrat());
console.log(hasil.lLingkaran(7));

