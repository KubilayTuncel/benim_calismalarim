//=================
//KONSOL
console.log("Hello javascript");
alert("dikkat");
console.warn("bu bir uyaridir");
console.error("bu bir hatadir");
prompt("adinizi giriniz");

//============degisken tanimla=======
var isim = "Kerim";
console.log(typeof isim);
(isim = 3), 14;
console.log(typeof isim);
//=======const======
const piSsayisi = 3.14;
//const tipinde bir data turu ile tanimlama yaparsak yazdigimiz degeri degistiremiyoruz

//======let======
let fiyat;
fiyat = 10;
console.log(typeof fiyat);
fiyat = "Erdem";
// degeri atayip sonra da degistirmemizi saglayan data turu let

//string tanimlamak icin 3 farkli karekter kullanilabilir
let name1 = "Allattin";
let name2 = "Faruk";
let name3 = `Oguzhan`;

//Aritmetik operotorler====
const kola = 5;
const cips = 6;
const ekmek = 2;
console.log(kola + cips + ekmek);
console.log("toplam fiyat", kola + cips + ekmek);

const ad = "can";
const soyad = "canan";
console.log(ad + soyad);
const s1 = 7;
let s2 = "7";
console.log(s1 + s2); //77

console.log("benim adim : " + ad + " " + "benim yasim : " + s1);
//!Template literal=====
console.log(`benim adim ${ad} yasim ${s1}`);
//us alma **
const taban = 2;
const us = 3;
console.log(taban ** us); //2*2*2=8

//mod alma %
const sayi = 123;
const birler = sayi % 10;
console.log(birler);
// karsilastirma operatorleri
const s3 = 5;
const s4 = "5";
console.log(s3 == s4);
console.log(s3 === s4);

//todo (renk vermek icin todo yazdik) Tip degisimleri======

const para = "100";
console.log(para + 15); //10015
console.log(Number(para) + 15); //15

const sayi5 = 56;
console.log(String(sayi5) + sayi5); //5656
