
// KLIK

document.querySelector('.btn-mulai-2').addEventListener('click', function() {
    var klik1DOM = document.querySelector('.section-add');
    klik1DOM.style.display = 'block';
    var klik12DOM = document.querySelector('.header');
    klik12DOM.style.display = 'none';
    var klik13DOM = document.querySelector('.section-ket');
    klik13DOM.style.display = 'none';
    var klik14DOM = document.querySelector('.footer');
    klik14DOM.style.display = 'none';
    var klik15DOM = document.querySelector('.section-laporan');
    klik15DOM.style.display = 'none';
});

document.querySelector('.btn-mulai-3').addEventListener('click', function() {
    var klik1DOM = document.querySelector('.section-add');
    klik1DOM.style.display = 'none';
    var klik12DOM = document.querySelector('.header');
    klik12DOM.style.display = 'none';
    var klik13DOM = document.querySelector('.section-ket');
    klik13DOM.style.display = 'none';
    var klik14DOM = document.querySelector('.footer');
    klik14DOM.style.display = 'none';
    var klik15DOM = document.querySelector('.section-laporan');
    klik15DOM.style.display = 'block';
});

document.querySelector('.btn-back-2').addEventListener('click', function() {
    var klik1DOM = document.querySelector('.section-add');
    klik1DOM.style.display = 'block';
    var klik12DOM = document.querySelector('.header');
    klik12DOM.style.display = 'none';
    var klik13DOM = document.querySelector('.section-ket');
    klik13DOM.style.display = 'none';
    var klik14DOM = document.querySelector('.footer');
    klik14DOM.style.display = 'none';
    var klik15DOM = document.querySelector('.section-laporan');
    klik15DOM.style.display = 'none';
});

document.querySelector('.btn-back-1').addEventListener('click', function() {
    var klik1DOM = document.querySelector('.section-add');
    klik1DOM.style.display = 'none';
    var klik12DOM = document.querySelector('.header');
    klik12DOM.style.display = 'block';
    var klik13DOM = document.querySelector('.section-ket');
    klik13DOM.style.display = 'block';
    var klik14DOM = document.querySelector('.footer');
    klik14DOM.style.display = 'block';
    var klik15DOM = document.querySelector('.section-laporan');
    klik15DOM.style.display = 'none';
});

// LAPORAN

document.querySelector('.foto-ibadah-1').addEventListener('click', function() {
    document.querySelector('.ibadah-pilihan-1').textContent = '* Dzikir Al-Matsurat';
    var ibadahDOM = document.querySelector('.ibadah-1');
    ibadahDOM.style.display = 'block';
    var ingatDOM = document.querySelector('.pengingat');
    ingatDOM.style.display = 'none';
    var hitungDOM = document.querySelector('.hitung');
    hitungDOM.style.display = 'block';
    var hoverDOM = document.querySelector('.foto-ibadah-1');
    hoverDOM.style.outline = '1rem solid #470574';
});

document.querySelector('.foto-ibadah-2').addEventListener('click', function() {
    document.querySelector('.ibadah-pilihan-2').textContent = '* Sholat Tahajud';
    var ibadahDOM = document.querySelector('.ibadah-2');
    ibadahDOM.style.display = 'block';
    var ingatDOM = document.querySelector('.pengingat');
    ingatDOM.style.display = 'none';
    var hitungDOM = document.querySelector('.hitung');
    hitungDOM.style.display = 'block';
    var hoverDOM = document.querySelector('.foto-ibadah-2');
    hoverDOM.style.outline = '1rem solid #470574';
});

document.querySelector('.foto-ibadah-3').addEventListener('click', function() {
    document.querySelector('.ibadah-pilihan-3').textContent = '* Tilawah';
    var ibadahDOM = document.querySelector('.ibadah-3');
    ibadahDOM.style.display = 'block';
    var ingatDOM = document.querySelector('.pengingat');
    ingatDOM.style.display = 'none';
    var hitungDOM = document.querySelector('.hitung');
    hitungDOM.style.display = 'block';
    var hoverDOM = document.querySelector('.foto-ibadah-3');
    hoverDOM.style.outline = '1rem solid #470574';
});

document.querySelector('.foto-ibadah-4').addEventListener('click', function() {
    document.querySelector('.ibadah-pilihan-4').textContent = '* Baca Buku';
    var ibadahDOM = document.querySelector('.ibadah-4');
    ibadahDOM.style.display = 'block';
    var ingatDOM = document.querySelector('.pengingat');
    ingatDOM.style.display = 'none';
    var hitungDOM = document.querySelector('.hitung');
    hitungDOM.style.display = 'block';
    var hoverDOM = document.querySelector('.foto-ibadah-4');
    hoverDOM.style.outline = '1rem solid #470574';
});

document.querySelector('.foto-ibadah-5').addEventListener('click', function() {
    document.querySelector('.ibadah-pilihan-5').textContent = '* Sunnah Rawatib';
    var ibadahDOM = document.querySelector('.ibadah-5');
    ibadahDOM.style.display = 'block';
    var ingatDOM = document.querySelector('.pengingat');
    ingatDOM.style.display = 'none';
    var hitungDOM = document.querySelector('.hitung');
    hitungDOM.style.display = 'block';
    var hoverDOM = document.querySelector('.foto-ibadah-5');
    hoverDOM.style.outline = '1rem solid #470574';
});

document.querySelector('.foto-ibadah-6').addEventListener('click', function() {
    document.querySelector('.ibadah-pilihan-6').textContent = '* Sedekah';
    var ibadahDOM = document.querySelector('.ibadah-6');
    ibadahDOM.style.display = 'block';
    var ingatDOM = document.querySelector('.pengingat');
    ingatDOM.style.display = 'none';
    var hitungDOM = document.querySelector('.hitung');
    hitungDOM.style.display = 'block';
    var hoverDOM = document.querySelector('.foto-ibadah-6');
    hoverDOM.style.outline = '1rem solid #470574';
});

// HITUNG

document.querySelector('.hitung').addEventListener('click', function() {

    var nilai1 = (document.querySelector('.laporan1').value) / 7;
    var nilai2 = (document.querySelector('.laporan2').value) / 7;
    var nilai3 = (document.querySelector('.laporan3').value) / 7;
    var nilai4 = (document.querySelector('.laporan4').value) / 7;
    var nilai5 = (document.querySelector('.laporan5').value) / 7;
    var nilai6 = (document.querySelector('.laporan6').value) / 7;
    var nilai7 = (document.querySelector('.laporan7').value) / 7;
    var nilai8 = (document.querySelector('.laporan8').value) / 7;

    var nilai = nilai1 + nilai2 + nilai3 + nilai4 + nilai5 + nilai6 + nilai7 + nilai8;
    
    var bagi;

    if (nilai1 > 0) {
        bagi1 = 1;
    } else {
        bagi1 = 0;
    }

    if (nilai2 > 0) {
        bagi2 = 1;
    } else {
        bagi2 = 0;
    }

    if (nilai3 > 0) {
        bagi3 = 1;
    } else {
        bagi3 = 0;
    }

    if (nilai4 > 0) {
        bagi4 = 1;
    } else {
        bagi4 = 0;
    }

    if (nilai5 > 0) {
        bagi5 = 1;
    } else {
        bagi5 = 0;
    }

    if (nilai6 > 0) {
        bagi6 = 1;
    } else {
        bagi6 = 0;
    }

    if (nilai7 > 0) {
        bagi7 = 1;
    } else {
        bagi7 = 0;
    }

    if (nilai8 > 0) {
        bagi8 = 1;
    } else {
        bagi8 = 0;
    }
    
    bagi = bagi1 + bagi2 + bagi3 + bagi4 + bagi5 + bagi6 + bagi7 + bagi8;

    document.querySelector('.nilai-ibadah').textContent = Math.floor(nilai / bagi * 100) + '%';
    
    var nilaiDOM = document.querySelector('.nilai-anda');
    nilaiDOM.style.display = 'none';
});

// TAMBAH IBADAH

document.querySelector('.tambah-ibadah-7').addEventListener('click', function() {
    var input = document.querySelector('.tambah-ibadah1').value;
    document.querySelector('.ibadah-pilihan-7').textContent = '*' + input;
    var ibadahDOM = document.querySelector('.ibadah-7');
    ibadahDOM.style.display = 'block';
    var ingatDOM = document.querySelector('.pengingat');
    ingatDOM.style.display = 'none';
    var hitungDOM = document.querySelector('.hitung');
    hitungDOM.style.display = 'block';
    var hoverDOM = document.querySelector('.tambah-ibadah-7');
    hoverDOM.style.outline = '.5rem solid #470574';
    var hoverDOM = document.querySelector('.tambah-ibadah1');
    hoverDOM.style.outline = '.5rem solid #470574';
});

document.querySelector('.tambah-ibadah-8').addEventListener('click', function() {
    var input = document.querySelector('.tambah-ibadah2').value;
    document.querySelector('.ibadah-pilihan-8').textContent = '*' + input;
    var ibadahDOM = document.querySelector('.ibadah-8');
    ibadahDOM.style.display = 'block';
    var ingatDOM = document.querySelector('.pengingat');
    ingatDOM.style.display = 'none';
    var hitungDOM = document.querySelector('.hitung');
    hitungDOM.style.display = 'block';
    var hoverDOM = document.querySelector('.tambah-ibadah-8');
    hoverDOM.style.outline = '.5rem solid #470574';
    var hoverDOM = document.querySelector('.tambah-ibadah2');
    hoverDOM.style.outline = '.5rem solid #470574';

});
              
// SCROLL

$(document).ready(function() {
    $('.btn-mulai-1').click(function () {
        $('html, body').animate({scrollTop: $('.section-ket').offset().top}, 1000);
    });
});




