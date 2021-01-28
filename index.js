

const btnPlus=document.getElementById('btnPlus');
btnPlus.addEventListener('click',function(){
    productCost('phonePrice',true);

})
const btnMines=document.getElementById('btnMines');
btnMines.addEventListener('click',function(){
    productCost('phonePrice',false);

})

const plusBtn=document.getElementById('plusBtn');
plusBtn.addEventListener('click',function(){
    productCost('coverPrice',true);
})

let minusBtn=document.getElementById('minusBtn');
minusBtn.addEventListener('click',function(){
    productCost('coverPrice',false);
})

function productCost(product,isShow) {
    const productInput=document.getElementById(product +'Count').value;
    let productCount=parseInt(productInput);
    if(isShow== true ){
        productCount++;
    }
    if(isShow==false && productCount>0){
        productCount--;
}
    document.getElementById(product + 'Count').value=productCount;
    console.log(productCount);
    document.getElementById(product);
    let totalProductCost=0;
    if (product=='phonePrice') {
        totalProductCost=productCount*1219;
    }
    if (product=='coverPrice') {
        totalProductCost=productCount*59;
    }
    
    document.getElementById(product).innerText=totalProductCost;
    productAmount();

}

function productAmount() {

    let phoneCount=subTotal('phonePrice')
    let coverCount=subTotal('coverPrice') ;

    let totalAmount=  phoneCount*1219 +coverCount*59;
    document.getElementById('subTotal').innerText=totalAmount;
    let tax=Math.round(totalAmount*.1);
    document.getElementById('tax').innerText=tax;
    
    totalPayment=totalAmount+tax;
    document.getElementById('payment').innerText=totalPayment;
    

}

function subTotal(product) {
    let productInput=document.getElementById(product +'Count').value;
    let productCount=parseInt(productInput);
    return productCount;
}
let check=document.getElementById('check');
check.addEventListener('click',function(){
    alert('are you sure buy now this product');
    document.getElementById('subTotal').innerText=1278;
    document.getElementById('payment').innerText=1278;
    document.getElementById('tax').innerText=0;
})
