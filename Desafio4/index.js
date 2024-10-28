

function percentTip() {
    let tip = Number(document.getElementById("tip").value)
    document.getElementById("tippercent").innerText = tip +"%"
    return tip
}


function calculateBill(callFromSplitBill = false) {
    let tip = percentTip()
    let bill = Number(document.getElementById("bill").value)
    let total = (bill * (tip/100)) + bill
    total = total.toFixed(2)
   document.getElementById("totalfield").innerHTML =total
   console.log("calculateBill 1",callFromSplitBill)
   if (callFromSplitBill != true) {
     console.log("calculateBill 2")
      resetSplitBill(quantityPersons())
   }
   return total
 
}

function quantityPersons() {
    let quantityPersons = Number(document.getElementById("split").value)
    document.getElementById("persons").innerHTML = quantityPersons
    return quantityPersons

}

function splitBill() {
    console.log("splitBill")
    let callFromSplitBill = true
    let totalbill =  calculateBill(callFromSplitBill)
    let totalpersons = quantityPersons()
    if (totalbill != 0 && totalpersons != 0) {
        let splitBill = totalbill / totalpersons
        document.getElementById("totalbilleach").innerHTML = splitBill.toFixed(2)
    } else {
        document.getElementById("totalbilleach").innerHTML= 0
    } 
}

function resetSplitBill(qtdPersons){
    console.log(qtdPersons)
    if (qtdPersons > 0) {
        document.getElementById("persons").innerHTML = 0
        document.getElementById("split").value=0
        document.getElementById("totalbilleach").innerHTML = 0
    }
}

function zerarTip(){
    document.getElementById("tip").value=0
    document.getElementById("totalfield").innerHTML=0
    document.getElementById("tippercent").innerHTML = 0 +"%"

}
