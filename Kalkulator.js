// Tulis kode solusi di bawah ini
// membuat class kalkulator
class Kalkulator {
    // membuat constructor
    constructor(angkaPenjumlahan1,angkaPenjumlahan2,angkaPengurangan1,angkaPengurangan2,angkaPerkalian1,angkaPerkalian2,angkaPembagian1,angkaPembagian2,angkaPangkat,akarPangkatKuadrat,akarPangkatKibik,pi) {
        this.angkaPenjumlahan1 = angkaPenjumlahan1;
        this.angkaPenjumlahan2 = angkaPenjumlahan2;
        this.angkaPengurangan1 = angkaPengurangan1;
        this.angkaPengurangan2 = angkaPengurangan2;
        this.angkaPerkalian1 = angkaPerkalian1;
        this.angkaPerkalian2 = angkaPerkalian2;
        this.angkaPembagian1 = angkaPembagian1;
        this.angkaPembagian2 = angkaPembagian2;
        this.angkaPangkat = angkaPangkat;
        this.akarPangkatKuadrat = akarPangkatKuadrat;
        this.akarPangkatKibik = akarPangkatKibik;
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
    // operasi perpangkat 
    pangkat(a) {
        return this.angkaPangkat ** a;
    }
    // operasi akar pangkat 2
    apangkatkuadrat() {
        let number = this.akarPangkatKuadrat
        for (let i = number; i >= 1; i--) {
            if (i * i === number) {
                number = i;
                break;
            }
        }
        return number;
    }
    // operasi akar pangkat 3
    aPangkatkibik() {
        let angka = this.akarPangkatKibik
        let x = angka;
        while (x >= 1) {
            if (x * x * x === angka) {
                angka = x;
                break;
            }
            x--;
        }
        return angka;
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

// output class
const hasil = new Kalkulator(2, 3, 4, 5, 6, 6,6 ,3 ,7 ,16 , 9, 3.14);
console.log(`Hasil Penjumlahan : ${hasil.penjumlahan()}`);
console.log(`Hasil pengurangan : ${hasil.pengurangan()}`);
console.log(`Hasil perkalian : ${hasil.perkalian()}`);
console.log(`Hasil Pembagian : ${hasil.pembagian()}`);
console.log(`Hasil pangkat : ${hasil.pangkat(2)}`);
console.log(`Hasil akar kuadrat : ${hasil.apangkatkuadrat()}`);
console.log(`Hasil akar kibik : ${hasil.aPangkatkibik()}`);
console.log(`Hasil luas lingkaran : ${hasil.lLingkaran(7)}`);
