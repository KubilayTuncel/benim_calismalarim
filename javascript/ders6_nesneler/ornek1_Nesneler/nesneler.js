//***********NESNELER************* */

//diziler sıralı bellek bölgeleridir. dolayısıyla dizilere erişim index le olur. Eğer diziler karışıksa (nesne) indexle erişim güçlüğü ortaya çıkar bu yüzden =>-......................................................

//! OBJECT (nesne)

// nesnelerde key-value (property-value) yapısı kullanılır
//nesnelerde aradığımız veriye erişmek için key adını kullanmamız gerekir..........

const insan = {
  ad: "Kenan",
  soyad: "Kul",
  yas: 30,
  meslek: "developer",
  diller: ["Java", "JS", "SQL", "HTML"],
};

console.log(insan);

//1) .dot notasyonu
console.log(insan.ad);
console.log(insan.diller);
//2) köşeli parantez içine`
console.log(insan["ad"]);
console.log(insan["diller"]);

console.log(`Adim: ${insan.ad} ve yasim: ${insan.yas}`);

const bilgi = prompt(
  "insan nesnesinden hangisini ogrenmek istersin -ad,soyad,yas"
);
console.log(insan[bilgi]);
//objeye key.value lar ekleme
insan.konum = "Türkiye";
insan.email = "insan@gmail.com";
insan["dogumTarihi"] = 1991;
console.log(insan);

//********Nesne methodlari */

const kisi = {
  ad: "Kerim",
  soyad: "Yeter",
  dogumTarihi: 1990,
  meslek: "tester",
  tool: "selenyum",
  ehliyet: true,
  yasHesapla: function () {
    //bugunun yilini al=>Date().getFullYear()
    return new Date().getFullYear() - this.dogumTarihi;
  },
  ozet: function () {
    return `${this.ad} ${this.soyad} ${this.yasHesapla()} yasindadir`;
  },
};

console.log(kisi);
console.log(kisi.yasHesapla());
console.log(kisi.ozet());

//Nesne (object) iterasyon ornekleri
const people = [
  { ad: "Hakan", soyad: "Inal", meslek: "developer", yas: 41 },
  { ad: "Said", soyad: "Cin", meslek: "tester", yas: 37 },
  { ad: "Kubilay", soyad: "Tuncel", meslek: "team leader ", yas: 31 },
  { ad: "Osman", soyad: "Turker", meslek: "grafiker", yas: 29 },
  { ad: "Hüseyin", soyad: "Harran", meslek: "doktor", yas: 32 },
];
console.log(people);

//ornek1: people dizisindeki kisilerin mesleklerini konsol da yazdiralim
people.forEach((x) => console.log(x.meslek));

//ornek2: people dizisindeki tum kisilerin yaslarini 1 arttirarak
//yazdiriniz

people.map((x) => x.yas + 1).forEach((x) => console.log(x));

//ornek3: yasi 35 e esit veya kucuk olanlarin adlarini yaziniz
people.filter((x) => x.yas <= 35).forEach((x) => console.log(x.ad));

//ornek4: people dizisindeki kisilerin isimlerini buyuk harf olarak
//alan ve yaslarini 5 arttiran ve soyadinin ilk 2 harfini
//yazdiran bor kod yazdiriniz

people
  .map((x) => {
    return {
      ad: x.ad.toUpperCase(),
      yas: x.yas + 5,
      soyad: x.soyad.slice(0, 2),
    };
  })
  .forEach((x) => console.log(x));

//Ornek5: meslegi developer olanlarin isimleri buyuk harf yapip
// yaslarini yazdiriniz

people
  .filter((x) => x.meslek == "developer")
  .map((x) => {
    return {
      ad: x.ad.toUpperCase(),
      yas: x.yas,
    };
  })
  .forEach((x) => console.log(x));
