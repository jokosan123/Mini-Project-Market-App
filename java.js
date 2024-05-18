let fruitList = [
    ['apel',8,10000,],
    ['anggur',9,15000, ],
    ['jeruk',10,20000,]
];

let cart =[]


// menampilkan seperti ini :
// 0. Apple || Rp.10000|| 8
while(true){
let frontDis = prompt(`
pilih nomor yang ingin dilakukan :
1. Menampilkan daftar buah
2. Menambah buah
3. Menghapus buah
4. Membeli buah
5. Exit  
`)
parseInt(frontDis);
if ( frontDis == 1) {
    // pertama buah tampungan variable untuk loop
    let menu = 'Daftar buah : \n \n'
    for(let i = 0; i < fruitList.length; i++){
        menu += `${i+1}. ${fruitList[i][0]} || Rp.${fruitList[i][2]} || Stock : ${fruitList[i][1]} \n \n`
    }
    alert(menu)
}
else if( frontDis == 2){
    let newFruit = prompt('Masukan nama buah') 
    let newStock = parseInt(prompt('Masukan jumlah yang ingi ditambah'))
    let newPrice = parseInt(prompt('Masukan harganya'))
    
    let addCart = [newFruit,newStock,newPrice];
    fruitList.push(addCart)

    let menu = 'Daftar buah : \n \n'
    for(let i = 0; i < fruitList.length; i++){
        menu += `${i+1}. ${fruitList[i][0]} || Rp.${fruitList[i][2]} || Stock : ${fruitList[i][1]} \n \n`
    }
    alert(menu)

}
else if ( frontDis == 3){
    // let newStock = parseInt(prompt('Masukan jumlah yang ingi dikurangi'))
    // let newPrice = parseInt(prompt('Masukan harganya'))
    
    // let addCart = [newFruit,newStock,newPrice];
   

    let menu = 'Pilih nomor buah yang ingin dihapus : \n \n'
    for(let i = 0; i < fruitList.length; i++){
        menu += `${i}. ${fruitList[i][0]} || Rp.${fruitList[i][2]} || Stock : ${fruitList[i][1]} \n \n`
    }
    let hapusData = prompt(menu) 
    
    parseInt(hapusData)
    fruitList.splice(hapusData,1)

    let daftarBuah = 'Daftar buah yang tersisa : \n \n'
    for(let i = 0; i < fruitList.length; i++){
        daftarBuah += `${i+1}. ${fruitList[i][0]} || Rp.${fruitList[i][2]} || Stock : ${fruitList[i][1]} \n \n`
    }
    alert(daftarBuah)

}

else if (frontDis == 4){
    while (true) {
        let menu = 'Pilih angka buah yang ingin dibeli : \n \n';
        for (let i = 0; i < fruitList.length; i++) {
            menu += `${i + 1}. ${fruitList[i][0]} || Rp.${fruitList[i][2]} || Stock : ${fruitList[i][1]} \n \n`;
        }

        let inputFruit = parseInt(prompt(menu));

        while (true) {
            let fruitName = fruitList[inputFruit - 1][0];
            let fruitStock = fruitList[inputFruit - 1][1];
            let fruitPrice = fruitList[inputFruit - 1][2];

            let inputQty = parseInt(prompt(`Masukan quantity untuk ${fruitName}, Stock : ${fruitStock}`));

            if (inputQty > fruitStock) {
                alert(`Quantity yang diminta ${inputQty}, melebihi stock yaitu ${fruitStock}`);
            } else {
                cart.push([fruitName, inputQty, fruitPrice]); // Push array of items into cart
                fruitList[inputFruit - 1][1] -= inputQty;
                break;
            }
        }

        let cartList = 'Keranjang  : \n \n';
        for (let i = 0; i < cart.length; i++) {
            cartList += `${i+1}. ${cart[i][0]} || Rp.${cart[i][2]} || Stock : ${cart[i][1]} \n \n`;
        }
        console.log(cart);

        let again = prompt(`Jumlah pembelian anda adalah : \n ${cartList}\n apakah kamu ingin belanja lagi ? (ya / tidak)`);

        if (again === 'tidak') {
            break;
        }
    }

    let finalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        finalPrice += cart[i][1] * cart[i][2]; // Multiply quantity with price for each item
    }
    
    let finalReport = '';
    for (let i = 0; i < cart.length; i++) {
        finalReport += `${cart[i][0]} : ${cart[i][1]} * ${cart[i][2]} = ${cart[i][1] * cart[i][2]} \n`;
    }

    console.log(`Total Price: ${finalPrice}`);
    alert(`Total Pembelian anda: \n ${finalReport} \n Total Harga : ${finalPrice}`);
    while (true) {
        let inputHarga = prompt("masukan jumlah uang anda")
        let hutang = finalPrice  - inputHarga
        let uangKemballian = inputHarga - finalPrice
        
        if (inputHarga < finalPrice) {
            alert(`Dana anda masih kurang ${hutang}\n silahkan masukan kembali nominal yang tepat`)
            }
             else if( inputHarga > finalPrice)
            {alert(`Terimakasih, Uang kembalian anda adalah ${uangKemballian}`)
            break
            }
        
            else {alert(`TerimaKasih :)`)
        
            break
            }
    }
}
else { break}}

