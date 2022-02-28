const maaslar = [4000, 5000, 3500, 4200, 2850, 5000, 7500];

const ul = document.querySelector(".liste-ul");

for (let i of maaslar) {
  ul.innerHTML = ul.innerHTML + `<li>${i}</li>`;
}

/*
for (let i in maaslar) {
  ul.innerHTML = ul.innerHTML + `<li>${maaslar[i]}</li>`;
}*/

const giris = document.querySelector(".liste");

document.querySelector(".ekle").onclick = function () {
  ul.innerHTML = ul.innerHTML + `<li>${giris.value} </li>`;

  maaslar.push(giris.value);
  aciklamaGuncelle(maaslar);
  giris.value = "";
};
document.querySelector(".sil").onclick = function () {
  if (maaslar.length == 0) {
    alert("Silinecek oge kalmadi.");
  } else {
    maaslar.pop();
    ul.removeChild(ul.lastElementChild);
    aciklamaGuncelle(maaslar);
  }
};

const aciklamaGuncelle = function (maaslar) {
  document.querySelector(".aciklama").innerHTML = `Maaslar:${maaslar.join(
    " "
  )}`;
};
