// Tulis kode solusi di bawah ini


class mesinPenghitung {
    constructor (angka, tambah, kurang, kali, bagi, pangkat, pi) {
       this.angka = angka;
       this.pertambahan = tambah;
       this.pengurangan = kurang;
       this.perkalian = kali;
       this.pembagian = bagi;
       this.perpangkatan = pangkat;
       this.pi = pi;
    }

    tambah() {
        let pertambahan = this.angka + this.pertambahan;
        return pertambahan;
    }
    kurang() {
        let pengurangan = this.angka - this.pengurangan;
        return pengurangan;
    }

    kali() {
        let perkalian = this.angka * this.perkalian;
        return perkalian;
    }
    bagi() {
        let pembagian = this.angka / this.pembagian;
        return pembagian;
    }
    pangkat() {
        let perpangkatan = this.angka ** this.perpangkatan;
        return perpangkatan;
    }
    lingkaran(d){
        if (d % 7 === 0) {
            let luasPertama =  d * d * 4.25;
            return luasPertama;
        } else {
            let luasKedua = d * d * 4.25;
            return luasKedua;
        }
    }
}

let equal = new mesinPenghitung (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
console.log (`ini pertambahan = ${equal.tambah()}`);
console.log (`ini pengurangan = ${equal.kurang()}`);
console.log (`ini perkalian = ${equal.kali()}`);
console.log (`ini pembagian = ${equal.bagi()}`);
console.log (`ini perpangkatan = ${equal.pangkat()}`);
console.log (`ini Luaslingkaran = ${equal.lingkaran(10)}`);