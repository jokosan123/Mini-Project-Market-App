let hargaApel    = 10000
let hargaAnggur  = 15000
let hargaJeruk   = 20000

let inputApel   = prompt('Masukan berapa quantiti apel yang ingin dibeli');
let inputAnggur = prompt('Masukan berapa quantiti anggur yang ingin dibeli');
let inputJeruk  = prompt('Masukan berapa quantiti jeruk yang ingin dibeli');

let totalHargaApel      = hargaApel*inputApel
let totalHargaAnggur    = hargaAnggur*inputAnggur
let totalHargaJeruk     = hargaJeruk*inputJeruk 

let hargaTotal          = totalHargaAnggur+totalHargaApel+totalHargaJeruk

console.log(`Anda sudah membeli Apel sebanyak ${inputApel} buah, lalu Anggur sebanyak ${inputAnggur} buah, \n
dan membeli Jeruk sebanyak ${inputJeruk} buah, Jadi total harga untuk \n
apel adalah Rp.${totalHargaApel},00 Anggur Rp.${totalHargaAnggur},00 dan Jeruk Rp.${totalHargaJeruk},00 \n
Jadi Total Harga yang harus anda Bayar adalah Rp.${hargaTotal},00`);
alert(`Anda sudah membeli Apel sebanyak ${inputApel} buah, lalu Anggur sebanyak ${inputAnggur} buah, \n
dan membeli Jeruk sebanyak ${inputJeruk} buah, Jadi total harga untuk \n
apel adalah Rp.${totalHargaApel},00 Anggur Rp.${totalHargaAnggur},00 dan Jeruk Rp.${totalHargaJeruk},00 \n
Jadi Total Harga yang harus anda Bayar adalah Rp.${hargaTotal},00`)
