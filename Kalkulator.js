// Tulis kode solusi di bawah ini

// class

class Calc {
    constructor(perjumlahan, pengurangan, perkalian, pembagian, pangkat, akarPangkat, konstanta) {
        this.perjumlahan = perjumlahan;
        this.pengurangan = pengurangan;
        this.perkalian = perkalian;
        this.pembagian = pembagian;
        this.pangkat = pangkat;
        this.akarPangkat = akarPangkat;
        this.konstanta = konstanta;
    }
}

// object instance

let calcFungsi = new Calc("Fungsi Perjumlahan", "Fungsi Pengurangan", "Fungsi Perkalian", "Fungsi Pembagian", "Fungsi Pangkat 2, 3 dan seterusnya", "Fungsi Akar Pangkat", "Konstanta Pi, digunakan untuk meghitung lingkaran.");

console.log('Fungsi-fungsi kalkulator yang dimaksud adalah:', calcFungsi); // hasil