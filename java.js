let fruitList = [ 
    {name :'Apel', price:10000, stock : 8 },
    {name :'Anggur', price:15000, stock : 9 },
    {name :'Jeruk', price:20000, stock : 10 }]

    let cart =[]
    console.log(cart);

  
var mapForList = (arr,header) => {
     
    let menu = `${header} : \n \n`
    arr.forEach((val, idx) => {
    const { name, price, stock} = val 
    menu += `${idx+1}. ${name} || Rp.${price} || Stock :${stock} \n`    

    })
  
    return menu
}
var mapForList2 = (arr,header) => {
    let menu = `${header} : \n \n`
    arr.forEach((val, idx) => {
    const { name, price, stock} = val 
    menu += `${idx}. ${name} || Rp.${price} || Stock :${stock} \n`    

    })
  
    return menu
}

var mapForCart = (arr, header) =>{
    let cartList = `${header} `;
    arr.forEach((val, idx) => {
    const { name, price, inputQty} = val     
    cartList += `${idx+1}. ${name} || Rp.${price} || Stock : ${inputQty} \n \n ` 

} )
return cartList}
// menampilkan seperti ini :
// 0. Apple || Rp.10000|| 8
while(true){
const frontDis = parseInt(prompt(`
pilih nomor yang ingin dilakukan :
1. Menampilkan daftar buah
2. Menambah buah
3. Menghapus buah
4. Membeli buah
5. Exit  
`))

parseInt(frontDis);
if ( frontDis == 1) {
    // pertama buah tampungan variable untuk loop
    // let menu = 'Daftar buah : \n \n'
    // for(let i = 0; i < fruitList.length; i++){
    //     menu += `${i+1}. ${fruitList[i][0]} || Rp.${fruitList[i][2]} || Stock : ${fruitList[i][1]} \n \n`
    // }
    // alert(menu)
    // for loop diganti dengan loop forEach
    // fruitList.forEach((val, idx) => {
    // menu += `${idx+1}. ${val[0]} || Rp.${val[2]} || Stock :${val[1]} \n`

        
    // })
    
    alert(mapForList(fruitList, 'Daftarbuah'))
  
    
}
else if( frontDis == 2){
    let newFruit = prompt('Masukan nama buah') 
    let newStock = parseInt(prompt('Masukan jumlah yang ingi ditambah'))
    let newPrice = parseInt(prompt('Masukan harganya'))
    
    let addCart = [newFruit,newStock,newPrice];
    fruitList.push(addCart)

    // let menu = 'Daftar buah : \n \n'
    // for(let i = 0; i < fruitList.length; i++){
    //     menu += `${i+1}. ${fruitList[i][0]} || Rp.${fruitList[i][2]} || Stock : ${fruitList[i][1]} \n \n`
    // }
    // alert(menu)
    alert(mapForList(fruitList, 'Daftarbuah)'))

}
else if ( frontDis == 3){

    
    // let newStock = parseInt(prompt('Masukan jumlah yang ingi dikurangi'))
    // let newPrice = parseInt(prompt('Masukan harganya'))
    
    // let addCart = [newFruit,newStock,newPrice];
   

    // let menu = 'Pilih nomor buah yang ingin dihapus : \n \n'
    // for(let i = 0; i < fruitList.length; i++){
    //     menu += `${i}. ${fruitList[i][0]} || Rp.${fruitList[i][2]} || Stock : ${fruitList[i][1]} \n \n`
    // }
   let hapusData = parseInt(prompt(mapForList2(fruitList, 'Pilih No Buah yang ingin dihapus')))
 
      
    fruitList.splice(hapusData,1)

    // let daftarBuah = 'Daftar buah yang tersisa : \n \n'
    // for(let i = 0; i < fruitList.length; i++){
    //     daftarBuah += `${i+1}. ${fruitList[i][0]} || Rp.${fruitList[i][2]} || Stock : ${fruitList[i][1]} \n \n`
    // }
    // alert(daftarBuah)
    alert(mapForList2(fruitList, 'Daftar buah yang tersisa'))
    


}

else if (frontDis == 4){
    while (true) {
        // let menu = 'Pilih angka buah yang ingin dibeli : \n \n';
        // for (let i = 0; i < fruitList.length; i++) {
        //     menu += `${i + 1}. ${fruitList[i][0]} || Rp.${fruitList[i][2]} || Stock : ${fruitList[i][1]} \n \n`;
        // }
        


        let inputFruit = parseInt(prompt(mapForList(fruitList, 'Pilih Angka yang ingin dibeli')));
        let {name, stock , price} = fruitList[inputFruit-1]
        while (true) {
            // let fruitName = fruitList[inputFruit - 1][0];
            // let fruitStock = fruitList[inputFruit - 1][1];
            // let fruitPrice = fruitList[inputFruit - 1][2];

            let inputQty = parseInt(prompt(`Masukan quantity untuk ${name}, Stock : ${stock}`));
            let newStocks = stock - inputQty;
            fruitList[inputFruit-1].stock = newStocks
            if (inputQty > stock) {
                alert(`Quantity yang diminta ${inputQty}, melebihi stock yaitu ${stock}`);
            } else if (inputQty <= stock) {
                ; // Push array of items into cart
                

               cart.push({name, inputQty, price});
               
            break;
            }
        }

        // let cartList = 'Keranjang  : \n \n';
        // for (let i = 0; i < cart.length; i++) {
        //     cartList += `${i+1}. ${cart[i][0]} || Rp.${cart[i][2]} || Stock : ${cart[i][1]} \n \n`;
        // }
        // cart.forEach((val, idx) => {
        //     cartList += `${idx+1}. ${val[0]} || Rp.${val[2]} || Stock : ${val[1]} \n \n`

        // } )

        console.log(cart);

        // let again = prompt(`Jumlah pembelian anda adalah : \n ${cartList}\n apakah kamu ingin belanja lagi ? (ya / tidak)`);
        alert(mapForCart(cart,`Keranjang  : \n \n`))
        let again = prompt('Apakah kamu mau belanja lagi? (ya/tidak)')
        if (again === 'tidak') {
           
            break;
        }
    }

    let finalPrice = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     finalPrice += cart[i][1] * cart[i][2]; // Multiply quantity with price for each item
    // }
    // let {name, stock, price} = cart
    cart.forEach((val, idx)=>{
        const {inputQty, price} = val

        finalPrice += inputQty * price

    })
    
    let finalReport = '';
    // for (let i = 0; i < cart.length; i++) {
    //     finalReport += `${cart[i][0]} : ${cart[i][1]} * ${cart[i][2]} = ${cart[i][1] * cart[i][2]} \n`;
    // }
    cart.forEach((val, idx) => {
        const{name, inputQty , price} = val
        let multiResult = inputQty* price
        finalReport +=`|| ${name} ||  ${inputQty} * ${price} = ${multiResult}  \n \n`

    })

    console.log(`Total Price: ${finalPrice}`);
    alert(`Total Pembelian anda : \n ${finalReport} \n Total Harga : ${finalPrice}`);
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
    }   cart = []
}

else if (frontDis == 5){ break}}
