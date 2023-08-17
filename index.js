// create the onclick function
let newPrice = 0;
function addToCard(target) {
  const selectedFlower = target.parentNode.childNodes[1].innerText,
        selectedFlowerContainer = document.getElementById("price-section"),
        li = document.createElement("li"),
        selectedFlowerPrice = parseInt(target.parentNode.childNodes[5].textContent.split(" ")[1]),
        currentPrice = document.getElementById('total-price');
        newPrice = newPrice + selectedFlowerPrice;
        

  currentPrice.innerText = newPrice;      
  li.innerText = selectedFlower;
  selectedFlowerContainer.appendChild(li);
  
}

function addDiscount() {
    const discount = document.getElementById('discount').innerText;
    console.log(discount);
}