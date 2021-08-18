// Tulis kode solusi di bawah ini
// membuat class kalkulator
class Kalkilator {
    //
    constructor(perjumlahan, pengurangan, perkalian, pembagian, pangkat, akarPangkatKuadrat, konstanta) {
        this.perjumlahan = perjumlahan;
        this.pengurangan = pengurangan;
        this.perkalian = perkalian;
        this.pembagian = pembagian;
        this.pangkat = pangkat;
        this.akarPangkat = akarPangkatKuadrat;
        this.konstanta = konstanta;
        this.pi = pi;
   }
   
      // operasi penjumlahan
   penjumlahan(){
    return this.penjumlahan + this.penjumlahan;
    }
    // operasi pengurangan
    pengurangan(){
     return this.pengurangan + this.pengurangan;
    }
    // operasi perkalian
   penjumlahan(){
    return this.perkalian + this.perkalian;
    }
     // operasi pembagian
    pengurangan(){
     return this.pembagian + this.pembagian;
    }
    // operasi pangkat
   penjumlahan(){
    return this.pangkat + this.pangkat;
    }
     // operasi akarPangkat
    pengurangan(){
        return this.konstanta + this.konstanta;
    }
    // operasi akar pangkat 
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
}
const hasil = new Kalkulator(perjumlahan, pengurangan, perkalian, pembagian, pangkat, akarPangkatKuadrat, konstanta);
console.log(`Hasil Penjumlahan : ${hasil.penjumlahan()}`);
console.log(`Hasil Penjumlahan : ${hasil.pengurangan()}`);
console.log(`Hasil Penjumlahan : ${hasil.perkalian()}`);
console.log(`Hasil Penjumlahan : ${hasil.pembagian()}`);
console.log(`Hasil Penjumlahan : ${hasil.pangkat()}`);
console.log(`Hasil Penjumlahan : ${hasil.akarPangkatKuadrat()}`);
console.log(`Hasil Penjumlahan : ${hasil.konstanta()}`);
