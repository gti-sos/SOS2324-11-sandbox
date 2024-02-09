/*
let x = 1;
x = "pepe";

console.log(x)

let myInetger = 1;
let myDouble = 2.1;
let myStirng = "Pab'l'o"
let myBoolena = true;

//

myDouble = myDouble + 1; //Da un flotante 3.1
console.log(myDouble) 

myDouble = myDouble + "1"; //Lo condadena al final 2.11
console.log(myDouble) 

myDouble = myDouble + parseInt("1"); //Te lo transforma a un número
console.log(myDouble) 

//

let a = 1;
let b = 1;
if (a == b)
    console.log(a+ "es igual a" + b);
else
console.log(a+ "NO es igual a" + b);  //1 es igual a 1


let a1 = 1;
let b1 = "1";
if (a1 == b1)
    console.log(a1+ "es igual a" + b1);
else
console.log(a1+ "NO es igual a" + b1); // 1 es igual a 1


let a2 = 1;
let b2 = "1";
if (a2 === b2)
    console.log(a2+ "es igual a" + b2);
else
console.log(a2+ "NO es igual a" + b2); // 1 No es igual a 1


//

function log(msg){
    console.log(msg);
}

log("test log");

//

let o = new Object();
let m = new Map();
let arr = new Array();

//
numbers[0] = 1;
numbers[1] = 2;  //Los arrays no tiene que ser del mismo tipo . NO REOCMENDABLE

numbers.push(3);

log(numbers)

//


for(let i=0;i<numbers.length;i++){
    log(i + ": "+ numbers[i])
}

numbers.forEach()           

// IMPORTANTE

let numbers = [5,6,7]

function log(msg){
    console.log(msg);
}

numbers.forEach(function(n){           // numbers.forEach(log);
    log(n);
})

//se usa mejor
numbers.forEach( (n) => {          //numbers.forEach((n)=>log(n));
    log(n);
})


let numbers = [3,4,5,6,7,8,9]

function log(msg){
    console.log(msg);
}

numbers
    .filter( (n)=>{
        return n>6; 
    }).map( (n)=>{
        return n+2;
    }).forEach( (n)=>log(n));

var s = numbers
            .reduce( (a,n) =>{        //a va aumentado que es el acumulador
                log(a + " -->" + n);
                return a+n;
            });
log(s);


//

let contact = new Object();

contact.name = "pepe";
contact.phone = 12345;    // otra manera let contact  = { name: 'pepe', phone: 12345 }; 

console.log(contact)   */

//EJERCICIO. de una lista de arrays ecnontrar aquellos que sean Juan

let list = [
    { name: 'juan', phone: 1 }, 
    { name: 'pepe', phone: 2 }, 
    { name: 'pepe', phone: 3 }, 
    { name: 'juan', phone: 4 }]

function search(list, cadenaBusqueda){
    return list.filter( (n) => n.name.match(cadenaBusqueda) ) //Pillar solo los que cumplen la condicion
}

console.log("Solucion: ", search(list,'juan'))

/* Otra manera de hacerlo y que se vea directamenta ya 
function searchPrint(list, cadenaBusqueda){
    list
    .filter( (n) => n.name.match(cadenaBusqueda) ) 
    .forEach( (n) => console.log(n) )
}
*/



