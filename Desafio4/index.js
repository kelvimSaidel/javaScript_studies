function calculateBill() {
    let quantityPersons = Number(document.getElementById("split").value)
    let bill = Number(document.getElementById("bill").value)
    let tip = ((Number(document.getElementById("tip").value)/100) * bill)
   
    let total = tip + bill
    total = total.toFixed(2)
    let splitBill = total/quantityPersons
   
   document.getElementById("tippercent").innerHTML = document.getElementById("tip").value +" %"
   document.getElementById("totalfield").innerHTML =total
   document.getElementById("persons").innerHTML = quantityPersons + (quantityPersons>1 ? " People" : " Person")
   document.getElementById("totalbilleach").innerHTML = quantityPersons>0? splitBill.toFixed(2) : 0..toFixed(2)
   document.getElementById("tipValue").innerHTML = '$ '+ tip.toFixed(2)

}