function getTextById(inputId) {
  const elementId = document.getElementById(inputId);
  const element = elementId.innerText;
  return element;
}
document.getElementById("item-1").addEventListener("click", function () {
  const item1 = getTextById("itemName1");
  const price = parseFloat(getTextById("price-1"));
  addItem(item1);
  totalPrice(price);
});
document.getElementById("item-2").addEventListener("click", function () {
  const item1 = getTextById("itemName2");
  const price = parseFloat(getTextById("price-2"));
  addItem(item1);
  totalPrice(price);
});
document.getElementById("item-3").addEventListener("click", function () {
  const item1 = getTextById("itemName3");
  const price = parseFloat(getTextById("price-3"));
  addItem(item1);
  totalPrice(price);
});
document.getElementById("item-4").addEventListener("click", function () {
  const item1 = getTextById("itemName4");
  const price = parseFloat(getTextById("price-4"));
  addItem(item1);
  totalPrice(price);
});
document.getElementById("item-5").addEventListener("click", function () {
  const item1 = getTextById("itemName5");
  const price = parseFloat(getTextById("price-5"));
  addItem(item1);
  totalPrice(price);
});
document.getElementById("item-6").addEventListener("click", function () {
  const item1 = getTextById("itemName6");
  const price = parseFloat(getTextById("price-6"));
  addItem(item1);
  totalPrice(price);
});


const arrName = [];
function addItem(item) {
  const addItemName = document.getElementById("addItemName");
  const p = document.createElement("p");
  p.classList.add('py-3');

  if (arrName.length < 5) {
     arrName.push(item);
  } else {
    return;
  }

  arrName.forEach((element, index) => {
    return (p.innerHTML = ` ${index+1} ${element} `);
  });
  
  addItemName.appendChild(p);
}
const arrPrice=[];
function totalPrice(price){
   const priceTotal = document.getElementById("total-price");
   const p =document.createElement("p");
   arrPrice.push(price);
  //  console.log(arrPrice)
   let sum =0;
   for(let i = 0; i < arrPrice.length;i++){
    const element = arrPrice[i];
    if (arrName.length < 5) {
      sum = sum + element;
      if(sum >= 200){
        const purchase = document.getElementById("purchase")
        purchase.disabled = false;
      }
    }else{
    return
   }

   }
   priceTotal.innerText=sum;
}

const cuponInput = document.getElementById("cupon-input");
const btnApply = document.getElementById("btn-apply");
const totalPrices = document.getElementById("total-price");



cuponInput.addEventListener('input', function() {
    const cupon = cuponInput.value;
    const total = totalPrices.innerText;
    if (cupon === 'SELL200' & total > 200) {
        btnApply.disabled = false;
    } else {
        btnApply.disabled = true;
    }
});
document.getElementById("btn-apply").addEventListener('click',function(){
  const totalPrices = document.getElementById("total-price");
  const total = totalPrices.innerText;
  const discountElementId =document.getElementById("discount");
  const discount = (20/100) * total;
  discountElementId.innerText = discount.toFixed(2);
  const totalElement = document.getElementById("total");
  const CurrentTotal = total - discount;
  totalElement.innerText =CurrentTotal;
})

document.getElementById('go-home').addEventListener("click",function(){
  return window.location.reload();
})
