var semuaHalaman = document.querySelectorAll('.halaman');

function gantiHalaman(idTujuan) {
  semuaHalaman.forEach(function(hal) {
    if (hal.id === idTujuan) {
      hal.classList.add('aktif');
    } else {
      hal.classList.remove('aktif');
    }
  });

  var halamanTujuan = document.getElementById(idTujuan);
  var kotakIsi = halamanTujuan.querySelector('.isi');
  if (kotakIsi) {
    kotakIsi.scrollTop = 0;
  }
}

var namaBoleh = ['edi', 'edih', 'edih supriadi'];
var formnya = document.getElementById('formNama');
var inputNama = document.getElementById('inputNama');
var pesanSalah = document.getElementById('pesanSalah');

formnya.addEventListener('submit', function(e) {
  e.preventDefault();

  var namaKetik = inputNama.value.trim().toLowerCase();

  if (namaBoleh.includes(namaKetik)) {
    pesanSalah.classList.remove('tampil');
    gantiHalaman('hal2');
    mulaiMusik();
    return;
  }

  pesanSalah.classList.add('tampil');
});

// tombol navigasi
var semuaTombol = document.querySelectorAll('[data-tuju]');
semuaTombol.forEach(function(tombol) {
  tombol.addEventListener('click', function() {
    gantiHalaman(tombol.dataset.tuju);
  });
});

// foto kenangan
var daftarFoto = [
  { file: 'media/ayah1.jpeg', nama: 'Kenangan 1' },
  { file: 'media/ayah2.jpeg', nama: 'Kenangan 2' },
];

var kotakFoto = document.getElementById('kotakFoto');
var popupFoto = document.getElementById('popupFoto');
var fotoTampil = document.getElementById('fotoTampil');

daftarFoto.forEach(function(foto) {
  var kartu = document.createElement('button');
  kartu.className = 'kartu-kado';
  kartu.type = 'button';

  var gambarKado = document.createElement('img');
  gambarKado.src = 'media/gift.png';
  gambarKado.alt = 'kado';

  kartu.appendChild(gambarKado);
  kartu.addEventListener('click', function() {
    bukaFoto(foto.file);
  });

  kotakFoto.appendChild(kartu);
});

function bukaFoto(namaFile) {
  var coba = new Image();

  coba.onload = function() {
    fotoTampil.src = namaFile;
    popupFoto.classList.add('buka');
  };

  coba.src = namaFile;
}

// tutup popup
function tutupPopup() {
  popupFoto.classList.remove('buka');
}

document.getElementById('btnTutup').addEventListener('click', tutupPopup);

popupFoto.addEventListener('click', function(e) {
  if (e.target === popupFoto) tutupPopup();
});

// escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') tutupPopup();
});

// musik
var musik = document.getElementById('musik');
var sudahMutar = false;

function mulaiMusik() {
  if (sudahMutar) return;
  sudahMutar = true;
  musik.play().catch(function() {});
}
