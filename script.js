let maden = 0;
let altin = 0;
let hiz = 1;
let seviye = 1;
let otomatSayisi = 0;
let elementKesfiAktif = false;
let otomatikSatisAktif = false;

const madenElement = document.getElementById("maden");
const altinElement = document.getElementById("altin");
const hizElement = document.getElementById("hiz");
const seviyeElement = document.getElementById("seviye");
const otomatElement = document.getElementById("otomat");

const yukseltBtn = document.getElementById("yukseltBtn");
const toplaBtn = document.getElementById("toplaBtn");
const otomatBtn = document.getElementById("otomatBtn");
const satisBtn = document.getElementById("satisBtn");

const madenciGucuBtn = document.getElementById("madenciGucuBtn");
const elementKesfiBtn = document.getElementById("elementKesfiBtn");
const galaksiTicaretiBtn = document.getElementById("galaksiTicaretiBtn");
const otomatikSatisBtn = document.getElementById("otomatikSatisBtn");

const progressBar = document.getElementById("progress-bar");

toplaBtn.addEventListener("click", () => {
    maden += hiz;
    guncelle();
});

yukseltBtn.addEventListener("click", () => {
    if (maden >= 100) {
        maden -= 100;
        hiz += 2;
        seviye++;
        guncelle();
    }
});

otomatBtn.addEventListener("click", () => {
    if (maden >= 500) {
        maden -= 500;
        otomatSayisi++;
        guncelle();
    }
});

satisBtn.addEventListener("click", () => {
    if (maden >= 50) {
        maden -= 50;
        altin += 10;
        guncelle();
    }
});

madenciGucuBtn.addEventListener("click", () => {
    if (altin >= 200) {
        altin -= 200;
        otomatSayisi *= 2;
        guncelle();
    }
});

elementKesfiBtn.addEventListener("click", () => {
    if (altin >= 300) {
        altin -= 300;
        elementKesfiAktif = true;
        guncelle();
    }
});

galaksiTicaretiBtn.addEventListener("click", () => {
    if (altin >= 500) {
        altin -= 500;
        hiz = Math.round(hiz * 1.5); // Tüm hız %50 artar
        guncelle();
    }
});

otomatikSatisBtn.addEventListener("click", () => {
    if (altin >= 1000) {
        altin -= 1000;
        otomatikSatisAktif = true;
        guncelle();
    }
});

function guncelle() {
    madenElement.textContent = maden;
    altinElement.textContent = altin;
    hizElement.textContent = hiz;
    seviyeElement.textContent = seviye;
    otomatElement.textContent = otomatSayisi;
    kontrolYukseltme();
    kontrolOtomat();
    kontrolSatis();
    kontrolAltinYukseltmeleri();
    guncelleProgress();
}

function guncelleProgress() {
    const progress = (maden % 100) / 100 * 100;
    progressBar.style.width = `${progress}%`;
}

function kontrolYukseltme() {
    yukseltBtn.disabled = maden < 100;
}

function kontrolOtomat() {
    otomatBtn.disabled = maden < 500;
}

function kontrolSatis() {
    satisBtn.disabled = maden < 50;
}

function kontrolAltinYukseltmeleri() {
    madenciGucuBtn.disabled = altin < 200;
    elementKesfiBtn.disabled = altin < 300;
    galaksiTicaretiBtn.disabled = altin < 500;
    otomatikSatisBtn.disabled = altin < 1000;
}

/* Otomatik maden toplama ve ekstra altın kazanma */
setInterval(() => {
    maden += hiz + otomatSayisi;
    
    if (elementKesfiAktif && Math.random() < 0.1) {
        altin += 5;  // %10 ihtimalle ekstra altın kazan
    }

    if (otomatikSatisAktif && maden >= 50) {
        maden -= 50;
        altin += 10;
    }

    guncelle();
}, 1000);
