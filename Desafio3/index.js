function executeJs(){
try {    
 let numero1 = Number(document.getElementById("input1").value)
 let numero2 = Number(document.getElementById("input2").value)
   if (document.getElementById("somar").checked) {
      document.getElementById("result").innerHTML =numero1+numero2;
   } else if(document.getElementById("diminuir").checked) {
      document.getElementById("result").innerHTML =numero1-numero2;
   }else if(document.getElementById("multiplicar").checked) {
      document.getElementById("result").innerHTML =numero1*numero2;
    }else if(document.getElementById("dividir").checked) {
        document.getElementById("result").innerHTML =numero1/numero2;
    }else {
    document.getElementById("result").innerHTML = 0
   }
}catch  (e) {
   alert('Operação inválida ',e); 
}
}