function addPrice(feature, price){
    const updatePrice = document.getElementById(feature);
    updatePrice.innerText = price;
    updateTotal();
}