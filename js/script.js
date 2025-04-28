// Ambil elemen
const cInput      = document.getElementById('celsius');
const fInput      = document.getElementById('fahrenheit');
const calcField   = document.getElementById('calculation');
const convertBtn  = document.getElementById('convertBtn');
const resetBtn    = document.getElementById('resetBtn');
const reverseBtn  = document.getElementById('reverseBtn');

// Mode: false = C → F, true = F → C
let isReversed = false;

// Fungsi untuk update UI sesuai mode
function updateModeUI() {
  if (isReversed) {
    cInput.readOnly      = true;
    fInput.readOnly      = false;
    convertBtn.textContent = 'Konversi ke °C';
    cInput.value = '';
    fInput.value = '';
    calcField.value = '';
  } else {
    cInput.readOnly      = false;
    fInput.readOnly      = true;
    convertBtn.textContent = 'Konversi ke °F';
    cInput.value = '';
    fInput.value = '';
    calcField.value = '';
  }
}

// Listener tunggal untuk tombol Konversi
convertBtn.addEventListener('click', () => {
  calcField.value = '';
  if (!isReversed) {
    // C → F
    const c = parseFloat(cInput.value);
    if (isNaN(c)) {
      alert('Mohon masukkan angka yang valid di kolom Celsius.');
      return;
    }
    const f = (c * 9/5) + 32;
    fInput.value = f.toFixed(2);
    calcField.value = `${c}°C × (9/5) + 32 = ${f.toFixed(2)}°F`;
  } else {
    // F → C
    const f = parseFloat(fInput.value);
    if (isNaN(f)) {
      alert('Mohon masukkan angka yang valid di kolom Fahrenheit.');
      return;
    }
    const c = (f - 32) * 5/9;
    cInput.value = c.toFixed(2);
    calcField.value = `(${f}°F - 32) × 5/9 = ${c.toFixed(2)}°C`;
  }
});

// Reset semua field
resetBtn.addEventListener('click', () => {
  cInput.value = '';
  fInput.value = '';
  calcField.value = '';
});

// Toggle mode saat klik Reverse
reverseBtn.addEventListener('click', () => {
  isReversed = !isReversed;
  updateModeUI();
});

// Inisialisasi UI awal
updateModeUI();
