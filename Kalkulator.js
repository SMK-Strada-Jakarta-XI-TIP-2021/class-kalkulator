// Tulis kode solusi di bawah ini
console.log('========= Tugas Object Instance =========');

class Operation {
    constructor (angka, tambah, kurang, kali, bagi, kuadrat, pi) {
       this.angka = angka;
       this.tambah = tambah;
       this.kurang = kurang;
       this.bagi = bagi;
       this.kali = kali;
       this.pangkat = angka;
       this.pi = pi;
    }

    tambahan() {
        let tambahan = this.angka + this.tambah;
        return tambahan;
    }
    kurangan() {
       let Kurang = this.angka - this.kurang;
       return Kurang
    }

    pembagian() {
        let Bagi = this.angka / this.bagi;
        return Bagi;
    }

    perkalian() {
        let Kali = this.angka * this.kali;
        return Kali;
    }

    perpangkat () {
        let Pangkat = this.angka ** this.pangkat;
        return Pangkat;
    }

    luasLingkaran(d){
        if (d % 7 === 0) {
            let luasPertama =  d * d * 3.14;
            return luasPertama;
        } else {
            let luasKedua = d * d * 3.14;
            return luasKedua;
        }
    }
}
let equal = new Operation(2, 3, 4, 5, 5,5, 3, 7, 9, 10, 16, 6, 3.14);
console.log (`Contoh operasi tambah ==> ${equal.tambahan()}`);
console.log (`Contoh operasi pengurangan ==> ${equal.kurangan()}`);
console.log (`Contoh operasi pembagian ==> ${equal.pembagian()}`);
console.log (`Contoh operasi perkalian ==> ${equal.perkalian()}`);
console.log (`Contoh operasi perpangkat'an ==> ${equal.perpangkat()}`);
console.log (`Contoh operasi Luaslingkaran ==> ${equal.luasLingkaran(10)}`);

console.log('=========================================');

