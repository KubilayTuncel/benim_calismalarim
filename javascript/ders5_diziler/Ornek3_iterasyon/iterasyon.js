//********DIZILERDE ITERASYON******* */
//*****FOR DONGUSU*** */

const koordinatlar = [120, 100, -100, 220, 330, -50];

let pozitif = 0;
let negatif = 0;
for (let i = 0; i < koordinatlar.length; i++) {
  koordinatlar[i] < 0
    ? (negatif += koordinatlar[i])
    : (pozitif += koordinatlar[i]);
}

console.log(negatif);
console.log(pozitif);

const hayvanlar = [
  "aslan",
  "fil",
  "kartal",
  "kanarya",
  "aslan",
  "aslan",
  "timsah",
];

const ara = prompt("sayisini merak ettiginiz hayvanin adini yaziniz");
const bulDondur = function (ara) {
  let arasay = 0;
  for (let i in hayvanlar) {
    if (hayvanlar[i] == ara) {
      arasay++;
    }
  }
  arasay == 0
    ? alert(`aradiginiz hayvana ulasilamiyor, kagcmis olabilir`)
    : alert(`àradiginiz ${ara} hayvanindan ${arasay} tane bulunmaktadir`);
};

bulDondur(ara);

//FOR OF DONGUSU////////////////
/* for of dongusu, for in dongusunun 
bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. 
Bu dongude dizi icersindeki veriye erisirken 
indisleme kullanmaya gerek yoktur.*/

let arabalar = ["BMW", "Volvo", "Mini"];
for (let i of arabalar) {
  console.log(i);
}
/********For Each ****** */
//! foreach methodu orjinal diziyi bozmaz

let ogrenciler = ["Onur", "Hakan", "Furkan"];

ogrenciler.forEach((x) => console.log(x));

ogrenciler.forEach((deger, index) =>
  console.log(index + ".kisi " + deger + " dir")
);
console.log(ogrenciler);

/* MAP************/

/*Örnek:butun elemanlarin 3 katini aliniz*/

const rakamlar = [3, 5, 3, 2, 6, 7, 9];

rakamlar.map((x) => x * 3).forEach((x) => console.log(x));
console.log(
  rakamlar.map((x, index) => `${index + 1} elemanin 3 kati ${x * 3}`)
);

/*ornek: isimler dizisinin icerisindeki her ismi buyuk harf olarak yeni
bir diziye sakla*/
const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];
const buyukIsimler = isimler.map((isim) => isim.toUpperCase());

console.log(buyukIsimler);

document.querySelector(".baslik").textContent = buyukIsimler.join("->");

/*******FILTER */

const fiyatlar = [120, 260, 300, 322.5, 400, 768];

console.log(fiyatlar.filter((t) => t > 250));

//-------------- ÖRNEK -------------------
// maası 4000 $’dan düsük olanlara %50 zam yapmak istiyoruz
// ve bunu ayri dizi olarak saklamak istiyoruz.
const maaslar = [3000, 5000, 4000, 6000, 6500];

console.log(maaslar.filter((a) => a < 4000).map((a) => a * 1.5));
//-------------- ÖRNEK -------------------
const adlar = [
  "Samet",
  "Hakkı",
  "Duygu",
  "Emrullah",
  "Bilal",
  "Ali",
  "Ahmet",
  "Hasan",
  "Defne",
  "Serdar",
];

adlar.filter((x) => x.startsWith("A")).forEach((x) => console.log(x));

const maaslar1 = [3000, 5000, 4000, 2000, 1000];
console.log(maaslar1.reduce((a, b) => a + b, 0));
