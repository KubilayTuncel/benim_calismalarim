// ara butonuna tiklandiginda calan telefon ciksin ve zil calsin
let resim = document.querySelector(".resim");
let ring = document.querySelector(".ses");
document.querySelector(".on").onclick = function () {
  resim.src = "./img/img.gif"; //resim degistirdim
  ring.play(); //sesi calistirdim
};
//baglat butonuna basinca gif gelsin ve ses kesilsin

document.querySelector(".off").onclick = function () {
  resim.src = "./img/telbagla.gif";
  ring.pause();
};
document.querySelector(".speak").onclick = function () {
  resim.src = "./img/telfirlat.gif";
};
const liste = document.querySelector(".liste");
document.querySelector(".ekle").onclick = function () {
  const satir = document.querySelector(".dil");

  liste.innerHTML = liste.innerHTML + `<li>${satir.value}<li>`;
  satir.value = "";
};
//sil butonuna tiklandiginda li elemani silinsin

document.querySelector(".sil").onclick = function () {
  liste.removeChild(liste.lastElementChild);
};

const parg = document.querySelector(".forH1");
parg.innerHTML = `<h1>${"Programlama Dilleri"}</h1>`;

document.querySelector(".textbox").onkeyup = function () {
  const checkbox = document.querySelector(".checkbox");
  const textbox = document.querySelector(".textbox");
  if (checkbox.checked) {
    textbox.value = textbox.value.toUpperCase();
  } else {
    textbox.value = textbox.value.toLowerCase();
  }
};
resim.onmouseover = function () {
  resim.src = "./img/aslan2.jpeg";
};
//2.yontem
//resim.addEventListener("mouseout",function(){
//   resim.src="./img/aslan2.jpeg"
//  })
resim.onmouseout = function () {
  resim.src = "./img/aslan1.jpeg";
};

document.querySelector(".dil").onkeydown = function (olay) {
  if (olay.keyCode == 13) {
    document.querySelector(".ekle").onclick();
  }
  if (olay.keyCode == 46) {
    document.querySelector(".sil").onclick();
  }
};
