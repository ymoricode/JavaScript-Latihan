const angka = [1, 2, 3 ,4 ,5]
angka.forEach(function(item, index, array) {
    array[index] = item * 2;
})
console.log(angka);