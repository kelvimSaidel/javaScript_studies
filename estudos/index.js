console.log('Java script funcionando');


let firstName = 'kelvim';
let lastName = 'Silva';
const variavel = 'testando variavel constante';

console.log(firstName);
console.log(lastName);
console.log(variavel);

// const itemName ='Pen';
// let itemQuantity = 3;
// let itemAvailable = true;
// let itemSize = undefined;
// let ItemColor = null;

// console.log(itemName);
// console.log(itemQuantity);
// console.log(itemAvailable);
// console.log(itemSize);
// console.log(itemColor);


let pen ={itemName :'Pen',
     itemQuantity : 3,
     itemAvailable : true,
     itemSize : undefined,
     ItemColor : 'blue'};

console.log(pen);
console.log(pen.ItemColor);
pen.ItemColor = 'Red';
console.log(pen);

let lista = ['cafe','feijao','carne'];
console.log(lista);
console.log(lista[1]);
lista[0] = 'leite';
console.log(lista);

function statusPen(status) {
    console.log('Status: ' + status);
}

let sts = 'Avalable';
statusPen(sts);

function descontoAplicado(price){
    return Math.abs((price * 0.10) - price);
}

console.log(descontoAplicado(20));  

let num1 = 2
let num2 = 3

// console.log(num1*num2);
// console.log(++num1);
// console.log(num1);
// console.log(--num1);
// console.log(num1);
// console.log(num1++);
// console.log(num1);
// console.log(num1--);
// console.log(num1);

// console.log(num1 > 2);
// console.log(num1 < 3);
// console.log(num1 !== 3);
// console.log(num1 === 2);


// console.log('1' === 1);
// console.log(1===1);


// let velocidade = 50

// console.log(15<velocidade ? 'abaixo da velocidade' : 'acima da velocidade');

// let sim = true;
// let positivo = true;

// console.log(positivo && sim);
// sim = true;
// console.log(positivo || sim);
// console.log(positivo!=sim);

// black = undefined;
// white = 'branco';

// cor = black || white;
// console.log(cor);

// let velocidade = 101;

// if (velocidade <= 50) {
//    console.log("Devagar");
// } else if (velocidade > 50 && velocidade<=100){
//   console.log("Rapido");
// } else {
//   console.log("rapido de mais");
// }

// let estado = 'SP';

// switch(estado) {
//    case 'PR':
//       console.log('Parana');
//       break;
//    case 'SP':
//       console.log('Sao Paulo');
//       break;
//    case 'Rs':
//       console.log('Rio grande do Sul');
//       break;
//    case 'SC':
//       console.log('Santa Catarina');
//       break;
//    default:
//       console.log('Desconhecido aeroporto')
//    }

// for (i=1; i<=10; i++) {
//   console.log("Numero: "+i);
// }

// i = 1;

// while (i<=10) {
//    console.log("Numero: ",i);
//    i++;
// }

// let i = 1;

// do {
//     console.log("Numero: ",i);
//     i++;

// } while (i<=10);

// mycar = {marca: 'fiat',
//         cor : 'azul',
//         ano : '2019'
// };

// for (k in mycar) {
//     console.log(mycar[k]);
// };

// const friends = ['joao','guts','shasta'];

// for (h of friends) {
//     console.log(h);
// }


// let d = 1

// while (d <=10){
//     if (d==9)
//      break;
//     console.log(d);
//     d++;
// }

// const carro = {marca: "fiat",
//               modelo: "argo",
//               ano:"2016",
//               cor: "azul",
//               acessorio: {as1: "banco de couro",as2: "airbach",as3: "abs"},
//               localizao: function concessionariaProx(localizacao){
//                    switch (localizacao){
//                       case 'SC':
//                         console.log("Joinville")
//                         break;
//                       default:
//                           console.log("Concessionario não encontrada")};
//               }
// }

// console.log(carro.localizao('PR'));

// function createObject(complemento,rua,bairro){
//      const endereco = {eComplemento : complemento,
//                      eRua : rua,
//                     eBairro : bairro}
//     return endereco
// }

// let endereco = createObject("casa","rodovia duque de caxias","iperoba")


// console.log(endereco);

// endereco.numero= 6139;

// console.log(endereco);

// function CreateObject(complemento,rua,bairro){
//      this.eComplemento= complemento,
//      this.eRua= rua,
//      this.eBairro= bairro};

// let endereco = new CreateObject("casa","rodovia duque de caxias","iperoba");

// console.log(endereco);

// endereco.numero= 6139;

// console.log(endereco);

// let message = "testando"

// console.log(message.endsWith("ndo"));

// let email = "Hi \n my name is kelvim,\n i am developer";
// let firstName1 = "Jao";
// let email2 = `Hi \n my name is ${firstName1},\n i am developer`;


// console.log(email2);

// let listaNumeros = [1,2,3]
// console.log("sem funcao");
// console.log(listaNumeros);
// listaNumeros.push(4,5,6)
// console.log("push");
// console.log(listaNumeros);
// listaNumeros.unshift(-2,-1,0)
// console.log("unshift");
// console.log(listaNumeros);
// listaNumeros.splice(0,0,-3,-4,-5);
// console.log("splice");
// console.log(listaNumeros);

// let listaNumeros = [1,2,3]
// console.log("sem funcao");
// console.log("posicao numero 3: ",listaNumeros.indexOf(3));
// console.log("existe o numero 4: ", listaNumeros.indexOf(4)>0 ? "Sim" : "Nao");
// console.log("existe o numero 1: ",listaNumeros.includes(1)==true? "Sim" :"Nao");

// const listaDeCompras = [{id: 1, produto : "arroz"}, {id: 2, produto: "feijao"},
//     {id: 3, produto: "sabao"}
// ]

// console.log(listaDeCompras.find(function(listaDeCompras){
//     return listaDeCompras.produto == "feijao";
// }
// ))


// const listaDeCompras = [{id: 1, produto : "arroz"}, {id: 2, produto: "feijao"},
//     {id: 3, produto: "sabao"}
// ]

// console.log(listaDeCompras.find(listaDeCompras => listaDeCompras.produto == "feijao"))


// let listaNumeros = [1,2,3,4,5,6]
// listaNumeros2 = listaNumeros.pop()
// listaNumeros3 = listaNumeros.shift()
// listaNumeros4 = listaNumeros.splice(0,1)


// console.log(listaNumeros)
// console.log(listaNumeros2)
// console.log(listaNumeros3)
// console.log(listaNumeros4)


let listaNumeros = [1,2,3,4,5,6]

// listaNumeros = [];
// listaNumeros.length = 0;
// listaNumeros.splice(0,listaNumeros.length);

// console.log(listaNumeros)

// let listanumero = [1,2]
// let listaNumero2 = [3,4]

// let all = listanumero.concat(listaNumero2);
// console.log(all)
// let haf =all.slice(1,3)
// console.log(haf)

// let listanumero = [1,2]

// let teste = listanumero.join('-');

// console.log(teste)


// let listanumero = [1,3,7,9,2]

// listanumero.sort();

// console.log(listanumero);

// listanumero.reverse();

// console.log(listanumero);


// let listanumero = [1,3,7,9,2]


// let verificaValorPositivo = listanumero.every(function(value){
//     return value > 0;
// });

// console.log(verificaValorPositivo);


// let listanumero = [1,3,7,9,2]


// let verificaValorPositivo = listanumero.filter(function(value){
//     return value > 0;
// });

// console.log(verificaValorPositivo);

// verificaValorPositivo = listanumero.filter(value => value > 0);

// console.log(verificaValorPositivo);


// function teste(){
//     console.log("teste");
// }

// teste()

// let teste3 = function teste2()  {
//     console.log("teste2")
// }

// console.log(teste3())

// let test4 = teste3()

// console.log(test4)
// function somar(a,b){
//     console.log(a+b);
// }
// somar(5,45)

// function somar2(){
//     let total = 0
//     for (let value of arguments){
//         total += value
//     }
//     return total
// }
// console.log(somar2(5,45,50,60))


function calculoPorcentagem(a,b) {
         return a*b;
}

console.log(calculoPorcentagem(5,2));

function calculoPorcentagem(a,b=10.00) {
    return a*b;
}

console.log(calculoPorcentagem(5))

// const teste = document.querySelector("body")
// teste.setAttribute("style","background-color:Red")
