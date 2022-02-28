const yaslar = [5, 10, 28, 42];
const isimler = [
  "Hakan",
  "fatih",
  "Furkan",
  "Ali",
  20,
  40,
  true,
  23.5,
  yaslar,
  ayse,
];
console.log(isimler);

console.log(isimler[3]);
console.log((isimler[3] = "Sadi"));

//const degistiremiyordu ama non-primitive lerde degistirilebiliyor
//dizi bir adres gosterir isimler gibi, o yuzden primitive lerden farkli

isimler[isimler.length - 2] = false;
console.log(isimler[8][1]);

//Diziyi degistiren methodlar

let meyveler = ["Elma", "Armut", "Muz", "Kivi"];
const baslik = document.querySelector(".baslik");

baslik.textContent = meyveler;

//pop() en son elemani siler. Log icinde yazdirirsak sildigini gosterir

meyveler.pop();

console.log(meyveler);
//shift() dizinin 0 indexli elemanini yani ilk elemani siler
//ve yazdirirsak sildigi elemani döndürür.

meyveler.shift();
console.log(meyveler.shift());

//push() dizinin sonuna eleman ekler

meyveler.push("Cilek", "Karpuz");

//unshift() dizinin 0index ine eleman ekler
meyveler.unshift("Ayva");

//reverse() dizinin tamamini ters cevirir.

meyveler.reverse();

//sort() diziyi natural order alfabetik siralar

meyveler.sort();

//splice()
meyveler.splice(1, 0, "erik");
//1 index i ifade ediyor 0 da 1 indek te bulunan elemani tutarak yeni elemani yazdiriyor
meyveler.splice(4, 1, "uzum");
//ama 2 siraya 1 yazilirsa index i 4 olani silip yeni elemani yaziyor

//DIZI ERISIM METHODLARI// (Bunlar diziyi degistirmez)

const sayilar = [3, 4, 5, 2, "2", "uc", "bes", 5, 2];
console.log(sayilar.includes("5"));

//indexOf() ilk eslesen index i dondurur

console.log(sayilar.indexOf(2));

console.log(sayilar.lastIndexOf(5));

console.log(sayilar.indexOf(2, 4));
//ilk yazilan dizilerdeki deger 4 ise index sirasi ve
// bu yazilan ilk 4 indexi atla demek

//join() dizinin elemanlarini birlestirip string hale getirir
console.log(sayilar.join("-"));
//join default virgullerle ayirarak diziden kurtarir
// ama istersek " " yazarak bosluklarla, "-"yaparak - lerle ayirabiliriz
//tum dizi elemanlari sadece bir string oluyor
//toString() join gibidir ama sadece virgulle ayirir
console.log(sayilar.toString());
//=====================================//
const arabalar = ["bmw", "mercedes", "volvo", "sahin", "anadol"];
//slice()
//diziyi bellibir indexten sonra alip ayiriyor
arabalar.slice(2); // 2. indexli elemandan sonuna kadar yazdirir
console.log(arabalar.slice(1, 3)); // 1 i al ama 3. index i alma

///CONCAT//////////
const birlesik = sayilar.concat(arabalar);
console.log(birlesik);
