// contoh pemanggilan function

function busKita () {
    console.log('Ayo Naik!');
}

function ojekOnline () {
    console.log('Ayooo')
}

function kendaraanUmum() {
    busKita();
    ojekOnline();
}

kendaraanUmum();
      
// Function With Parameter

function busKita(from, text) {
    console.log(from + ': ' + text);
}
busKita('Dokja', 'Naik');
busKita('Joohyuk', 'Naik Juga?');

// Return Value

function cekUmur(age) {
    if (age >= 20) {
        return true;
    } else {
        return false;
    }
}

let age = 19;
if (cekUmur(age)) {
    console.log('Kamu Cukup Umur');
} else {
    console.log('Kamu blm ckp umur');
}