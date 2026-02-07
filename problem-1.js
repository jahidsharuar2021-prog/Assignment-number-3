function newPrice(currentPrice , discount ) {
         if(typeof currentPrice!=="number" || typeof discount!=='number'){
            return "Invalid";
         }
         if(discount<0 || discount>100){
            return "Invalid";
         }
          const productDiscount=(currentPrice*discount)/100;
          const paymentPrice=currentPrice-productDiscount;
          return paymentPrice.toFixed(3);
}
const output=newPrice(1500 ,"200");
console.log (output);
