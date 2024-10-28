let ramdomNumber = Math.ceil(Math.random()*100)
let yourGuessNumber = document.querySelector("#Ygn")
let newGame = document.querySelector('#Ng')
let yourGuessText = null
let yourGuessesNumberList = []
let numberAttempts =  0


yourGuessNumber.addEventListener('keypress', function (e) {
    if (e.key == "Enter"){
        
        yourGuessesNumberList.push(yourGuessNumber.value);
        if ((yourGuessNumber.value > 100) || (yourGuessNumber.value < 0 )) {
            yourGuessText =" Invalid Number"
            yourGuessNumber.value =null
            yourGuessesNumberList.pop();
        } else if (yourGuessNumber.value > ramdomNumber) {
            yourGuessText =" to High"
            yourGuessNumber.value = null
            numberAttempts++
        } else if (yourGuessNumber.value < ramdomNumber) {
            yourGuessText = " to low"
            yourGuessNumber.value = null
            numberAttempts++
        } else if (yourGuessNumber.value == ramdomNumber) {
            yourGuessText= "Congratulations!! Your got it right :)"
            yourGuessNumber.readOnly = true
        } else {
            yourGuessNumber.value = null
            numberAttempts++

        }

        if (numberAttempts > 9) {
            yourGuessText= "You lose! The correct number it was "+ramdomNumber
            yourGuessNumber.readOnly = true
        }
        
        document.getElementById("Ygt").innerHTML =   yourGuessText
        document.getElementById("An").innerHTML = numberAttempts
        document.getElementById("Ygl").innerHTML = yourGuessesNumberList.join(",")
        yourGuessText = null

   }



newGame.addEventListener('click',function() {
    ramdomNumber = Math.ceil(Math.random()*100)
    document.getElementById("Ygt").innerHTML = null
    document.getElementById("An").innerHTML = null
    document.getElementById("Ygl").innerHTML = null
    yourGuessesNumberList = []
    numberAttempts =0
    yourGuessNumber.value = null
    yourGuessNumber.readOnly = false

}  
)

      
 
})

