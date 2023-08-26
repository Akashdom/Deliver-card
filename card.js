var product_total_amt =document.getElementById('product_total_amt');
var Shipping_charge =document.getElementById('Shipping_charge');
var total_card_amt =document.getElementById('total_card_amt');


        let decreaseNumber =(incdec,itemprice)=>{
           var itemval = document.getElementById(incdec);
        var itemprice = document.getElementById(itemprice);
        // console.log(itemprice);
            // console.log(itemval);
            if(itemval.value <= 0){
                itemval.value =0;
            }else{
                itemval.value = parseInt(itemval.value) - 1;
                itemprice.innerHTML = parseInt(itemprice.innerHTML ) -20;
                product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML ) -20;
                total_card_amt.innerHTML = parseInt(product_total_amt.innerHTML ) + parseInt(Shipping_charge.innerHTML );
                itemval.style.background = "white";
                itemval.style.color = "blue";
            }
        }

        let increseNumber =(incdec,itemprice)=>{
           var  itemval = document.getElementById(incdec);
            var itemprice = document.getElementById(itemprice);
            // console.log(itemval);
            if(itemval.value >= 5){
                itemval.value = 5;
                alert("More then 5 not allowed");
                itemval.style.background = "red";
                itemval.style.color = "white";
            }else{
                itemval.value = parseInt(itemval.value) + 1;
                itemprice.innerHTML = parseInt(itemprice.innerHTML ) +20;
                product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML ) +20;
                total_card_amt.innerHTML = parseInt(product_total_amt.innerHTML ) + parseInt(Shipping_charge.innerHTML );
            }
        }

var discountCode = document.getElementById('discount_code1');

const discount_code = () =>{
    let current = parseInt(total_card_amt.innerHTML);
    let error_trw = document.getElementById('error_trw');
if(discountCode.value === 'Akash'){
    let newtotal = current -10 ;
    total_card_amt.innerHTML = newtotal;
    error_trw.innerHTML = "Code is valid!"
}else{
    error_trw.innerHTML= 'Code is invelid';
    error_trw.style.background = "red";
    // error_trw.style.color = "white";
}
};