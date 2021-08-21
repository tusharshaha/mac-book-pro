// price adding by product feature
function addPrice(feature, price){
    const updatePrice = document.getElementById(feature + '-cost');
    updatePrice.innerText = price;
    updateTotal();
}
// update total price
function updateTotal(){
    const defultPrice = document.getElementById('defult-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const totalPrice = document.getElementById('total-price');
    const totalCost = document.getElementById('total-cost');
    totalPrice.innerText = parseInt(defultPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
    totalCost.innerText = totalPrice.innerText;
}
// apply Voucher code
function applyVoucher(){
    const voucherField = document.getElementById('voucher-field');
    const totalCost = document.getElementById('total-cost');
    const totalPrice = document.getElementById('total-price')
    if(voucherField.value.toLowerCase() == 'stevekaku'){
        const discount = parseInt(totalPrice.innerText) * 20 / 100;
        totalCost.innerText = parseFloat(totalPrice.innerText) - discount;
        voucherField.value = '';
    }
}