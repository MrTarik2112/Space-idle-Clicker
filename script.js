let maden = 0;
let hiz = 1; // Başlangıç toplama hızı (1 maden/saniye)
let seviye = 1;
const madenElement = document.getElementById("maden");
const hizElement = document.getElementById("hiz");
const seviyeElement = document.getElementById("seviye");
const yukseltBtn = document.getElementById("yukseltBtn");
const toplaBtn = document.getElementById("toplaBtn");

// Maden toplama butonu
toplaBtn.addEventListener("click", () => {
    maden += hiz;
    madenElement.textContent = maden;
    kontrolYukseltme();
});

// Yükseltme butonu
yukseltBtn.addEventListener("click", () => {
    if (maden >= 100) {
        maden -= 100;
        hiz++;
        seviye++;
        madenElement.textContent = maden;
        hizElement.textContent = hiz;
        seviyeElement.textContent = seviye;
        kontrolYukseltme();
    }
});

// Yükseltme butonunun aktifliğini kontrol eder
function kontrolYukseltme() {
    yukseltBtn.disabled = maden < 100;
}

// Her saniye otomatik maden toplama
setInterval(() => {
    maden += hiz;
    madenElement.textContent = maden;
    kontrolYukseltme();
}, 1000);
