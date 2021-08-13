// Tulis kode solusi di bawah ini

class kalkulator {
    constructor(tambah, kurang, kali, pangkat, akarPangkat, luasLingkaran) {
        this.tambah = tambah;
        this.kurang = kurang;
        this.kali = kali; 
        this.pangkat = pangkat;
        this.akarPangkat = akarPangkat;
        this.luasLingkaran = luasLingkaran;
    }
}

var kalkulator1 = new kalkulator("Fungsi Penjumlahan(+)", "Fungsi Pengurangan(-)", "Fungsi Perkalian(x)",
"Fungsi Pembagian(:)", " Fungsi Pangkat 2, 3 dan seterusnya(2²)", "Fungsi Akar Pangkat(√2²)", "Konstanta Pi, digunakan untuk meghitung lingkaran(π)")
console.log(kalkulator1);