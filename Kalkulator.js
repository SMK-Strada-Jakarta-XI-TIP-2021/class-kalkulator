// Tulis kode solusi di bawah ini

class kalkulator {
    // constructor
    constructor(penjumlahan,pengurangan,perkalian,pembagian,pangkatKuadrat,pangkatKubik,pi) {
        this.penjumlahan = penjumlahan;
        this.pengurangan = pengurangan;
        this.perkalian = perkalian;
        this.pembagian = pembagian;
        this.pangkatKuadrat = pangkatKuadrat;
        this.pangkatKubik = pangkatKubik;
        this.pi = pi;
    }
    tambahan(){
        return this.penjumlahan + this.penjumlahan;
    }
    kurangan(){
        return this.pengurangan - this.penjumlahan;
    }
    kalian(){
        return this.perkalian * this.penjumlahan;
    }
    bagian(){
        return this.pembagian / this.penjumlahan;
    }
    kuadrat(){
        return this.pangkatKuadrat * this.pangkatKuadrat;
    }
    kubik(){
        return this.pangkatKubik * this.pangkatKubik * this.pangkatKubik;
    }
    luasLing(jari2){
        return Math.round(this.pi * jari2 * jari2) ;
    }
}
var has = new kalkulator(10,90,5,180,4,12,3.14);
console.log(`10 + 10 = ${has.tambahan()}`);
console.log(`90 - 10 = ${has.kurangan()}`);
console.log(`5 x 10 = ${has.kalian()}`);
console.log(`180 : 10 = ${has.bagian()}`);
console.log(`4^2 = ${has.kuadrat()}`);
console.log(`12^3 = ${has.kubik()}`);
console.log(`luas lingkarang dengan jari-jari 78 = ${has.luasLing(78)}`);