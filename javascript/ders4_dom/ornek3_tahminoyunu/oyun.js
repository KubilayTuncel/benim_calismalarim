//bilgisayar 1-20 arasinda bir sayi tut
let rastgeleSAyi = Math.floor(Math.random() * 20 + 1);
console.log("rastgele sayi " + rastgeleSAyi);
let puanPc = 10;
let rekorPc = 0;

let mesaj = document.querySelector(".mesaj");
//her kontrol et butonuna tiklandiginda calisicak fonction
document.querySelector(".kontrol").onclick = function () {
  //tahminim dogruysa
  let tahmin = document.querySelector(".tahmin").value;
  if (tahmin == rastgeleSAyi) {
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".question").textContent = rastgeleSAyi;

    mesaj.textContent = "Tebrikler Bildiniz 🏆";
    if (puanPc > rekorPc) {
      rekorPc = puanPc;
      document.querySelector(".rekorSkor").textContent = puanPc;
    }
  } else {
    if (puanPc > 1) {
      puanPc--;

      tahmin < rastgeleSAyi
        ? (mesaj.textContent = "sayiyi artir")
        : (mesaj.textContent = "sayiyi azalt");
      document.querySelector(".skor").textContent = puanPc;
    } else {
      mesaj.textContent = "Oyunu kaybettiniz😔";
      document.querySelector(".skor").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
  //tekrar butonuna basildiginda baslangic degerleri yuklensin
};
document.querySelector(".tekrar").onclick = () => {
  rastgeleSAyi = Math.floor(Math.random() * 20 + 1);
  document.querySelector("body").style.backgroundColor = "#2d3436";
  document.querySelector(".question").textContent = "?";
  document.querySelector(".mesaj").textContent = "Tahmine basliyor!!";
  puanPc = 10;
  document.querySelector(".skor").textContent = puanPc;
  document.querySelector(".tahmin").value = " ";
};
document.querySelector(".tahmin").onkeydown = function (olay) {
  if (olay.keyCode == 13) {
    document.querySelector(".kontrol").onclick();
  }
  if (olay.keyCode == 82) {
    document.querySelector(".tekrar").onclick();
  }
};
