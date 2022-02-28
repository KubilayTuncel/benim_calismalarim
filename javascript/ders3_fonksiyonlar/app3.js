/*=================
Fonsiyonlar
===================*/
// 1.Yontem : function declaration
//Declaration yontemi ile fonsiyonun tanimlanmasi cagrilmasindan once ve ya sonra olabilir

//Fonsiyonun tanimlanmasi
function yazdirAd() {
  console.log("Hakan");
}
//fonsiyonu cagrilmasi
yazdirAd();
//Örnek: klavyeden girilen sayinin tek mi cift mi oldugunu gosteren bir fonk. yaziniz
const sayiniz = prompt("sayi giriniz");
console.log(tekCift(sayiniz));
function tekCift(sayiniz) {
  return sayiniz % 2 == 0 ? `${sayiniz} cifttir` : `${sayimiz}tektir`;
}

//2.Yöntem : function expression (bu yontem daha yaygin)

const tekCift1 = function (sayi) {
  return sayi % 2 == 0 ? "cift" : "tek";
};
console.log(tekCift1(5));

//Örnek2: en byuk sayiyi bulma

let buyukBul = function (x, y, z) {
  let enBuyuk;
  if (x > y && x > z) {
    enBuyuk = x;
  } else if (y > z && y > x) {
    enBuyuk = y;
  } else {
    enBuyuk = z;
  }
  return enBuyuk;
};
console.log(buyukBul(5, 8, 9));

//3. Yöntem : function Arrow

const ciftMi = (sayi) => (sayi % 2 == 0 ? "cift" : "tek");
console.log(ciftMi(7));

//Örnek us alma

const taban = prompt("taban giriniz");
const us = prompt("us giriniz");
const ustAl = (taban, us) => taban ** us;
console.log(ustAl(taban, us));
