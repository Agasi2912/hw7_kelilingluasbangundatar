const rumus = require('./luaskelilingpersegipersegipjng.js');
const readline = require('readline');

const buatinputan = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.info('RUMUS PERSEGI DAN PERSEGI PANJANG');
buatinputan.question('Masukkan sisi persegi: ', (inputsisi) => {
    buatinputan.question('Masukkan panjang pada persegi panjang: ', (inputpanjang) => {
        buatinputan.question('Masukkan lebar pada persegi panjang: ', (inputlebar) => {
            const sisipersegi = parseInt(inputsisi);
            const panjangpersegipanjang = parseFloat(inputpanjang);
            const lebarpersegipanjang = parseFloat(inputlebar);

            if (!isNaN(sisipersegi) && !isNaN(panjangpersegipanjang) && !isNaN(lebarpersegipanjang)) {
                const kelilingpersegi = rumus.kelilingpersegi(sisipersegi);
                const luaspersegi = rumus.luaspersegi(sisipersegi);
                const kelilingpersegipanjang = rumus.kelilingpersegipanjang(panjangpersegipanjang, lebarpersegipanjang);
                const luaspersegipanjang = rumus.luaspersegipanjang(panjangpersegipanjang, lebarpersegipanjang);

                console.info('Hasil dari perhitungan keliling luas persegi dan persegi panjang');
                // Hasil Rumus Persegi
                console.info(`Keliling Persegi: ${kelilingpersegi}`);
                console.info(`Luas Persegi: ${luaspersegi}`);
                // Hasil Rumus Persegi Panjang
                console.info(`Keliling Persegi Panjang: ${kelilingpersegipanjang}`);
                console.info(`Luas Persegi Panjang: ${luaspersegipanjang}`);
            } else {
                console.error('Input yang dimasukkan tidak valid.');
            }

            buatinputan.close(); // Close the input stream when you're done.
        });
    });
});
