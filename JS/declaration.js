function hitungTotalDonate(daftarBenda) {
    let total = 0;

    function tambahKeTotal(harga) {
    total += harga;
}

for (let i = 0; i < daftarBenda.length; i++) {
    tambahKeTotal(daftarBenda[i].harga)
}

return total;
}

const belanjaan = [
    { nama: "Monitor", harga: 100 },
    { nama: "Keyboard", harga: 50},
    { nama: "Mouse", harga: 50},
];

const totalBelanja = hitungTotalDonate(belanjaan);
console.log("Total Belanja: $" + totalBelanja);
