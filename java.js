

         


// menambahkan variable stock


let stockApel   = 8 
let inputApel   = prompt ('Masukan berapa quantiti apel yang ingin dibeli');


while (inputApel > stockApel) {
    
    // day-3 Tampilkan infromasi stock saat user menginput quantity di setiap buahnya
    alert(`stok yang tersedia : ${stockApel}`)
    // day-3 user akan diminta input ulang saat quantity yang di input melebihi stock
    // sampai jumlah quantity tidak melebihi stock
    // if (inputApel > stockApel) {
    inputApel = prompt(' Permintaan melebihi stock, \n Masukan ulang input!')  
   
}


let stockAnggur = 9
let inputAnggur = prompt('Masukan berapa quantiti anggur yang ingin dibeli');
while (inputAnggur > stockAnggur) {
    alert(`stok yang tersedia : ${stockAnggur}`)
    inputAnggur = prompt(' Permintaan melebihi stock, \n Masukan ulang input!')
}



let stockJeruk  = 10
let inputJeruk  = prompt('Masukan berapa quantiti jeruk yang ingin dibeli');
while (inputJeruk > stockJeruk) {
alert (`stok yang tersedia : ${stockJeruk}`)  
inputJeruk = prompt(' Permintaan melebihi stock, \n Masukan ulang input!')
}





// while (true) {
    
    
let hargaAnggur  = 15000
let hargaJeruk   = 20000
let hargaApel    = 10000

const totalHargaApel      = hargaApel*inputApel
const totalHargaAnggur    = hargaAnggur*inputAnggur
const totalHargaJeruk     = hargaJeruk*inputJeruk 

let hargaTotal          = totalHargaAnggur+totalHargaApel+totalHargaJeruk

 alert(`Anda sudah membeli Apel sebanyak ${inputApel} buah, lalu Anggur sebanyak ${inputAnggur} buah, \n
dan membeli Jeruk sebanyak ${inputJeruk} buah, Jadi total harga untuk \n
apel adalah Rp.${totalHargaApel},00 Anggur Rp.${totalHargaAnggur},00 dan Jeruk Rp.${totalHargaJeruk},00 \n
Jadi Total Harga yang harus anda Bayar adalah Rp.${hargaTotal},00`)

while (true) {
let inputHarga = prompt("masukan jumlah uang anda")





let hutang = hargaTotal - inputHarga
let uangKemballian = inputHarga - hargaTotal

if (inputHarga < hargaTotal) {
    alert(`Dana anda masih kurang ${hutang}\n silahkan masukan kembali nominal yang tepat`)
    }
     else if( inputHarga > hargaTotal)
    {alert(`Terimakasih, Uang kembalian anda adalah ${uangKemballian}`)
    break
    }

    else {alert(`TerimaKasih :)`)

    break
    }
   
}



// tambah inputan sejumlah uang yang dibayar dari user
// jika input < uang seharusnya munculkan alert transaksi dibatalkan , yang anda masukan kurang ...
//  jika > uang seharusnya munculkan alert Terimakasih, uang kembali anda ...
//  jika = uang seharusnya munculkan alert Terimakasih

// ============================================================
// 1. Tampilkan infromasi stock saat user menginput quantity
//  di setiap buahnya
// 2. user akan diminta input ulang saat quantity yang di input melebihi stock
// sampai jumlah quantity tidak melebihi stock
// 3. saat user diminta input ulang saat uang yg diinput kurang
// dari seharusnya, tampilkan alert bahwa jumlah uang masih kurang


