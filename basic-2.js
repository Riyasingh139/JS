a1 /= 10; //a1 = a1/10;
console.log(a1);
           
let a2 = 10;
// a2 =a2+1;
// a2 += 1;

// compare operators
// > < >= <= === !==

// if is conditional statements

let a4 = 30;//number
let b4 = 30; //string

// == (data) 
// === data and datatype

 if(a4 >= b4){
  console.log("yes");
 }else{
   console.log("no");
 }

//  logical oprators 
// and &&
// or ||
// not !

let a5 = 10;
let b5 = 10;
let c5 = 40;

if(a5=== b5 && b5 === c5){
  console.log(true);
}else{
    console.log(false);
}


// if ....else switch

// if 
// if... else
// if ....else if ...else if...else

if(4 === 5){
    console.log("4 is equals to 5");
}

if(4 === 5){
    console.log("4 is equal to 5")
}
else{
    console.log("4 is not equals to 5")
}

if(4 === 5){
    console.log("4 is equal to 5");
}
else if(3 === 4){
    console.log("3 is equals to 4");
}
else if(2 === 3){
    console.log("2 is equals to 3");
}else{
    console.log("equals not found");
}

//switch
let department = "ABC"; // HR Tecnical Non-tenchincal
switch(department){
    case "Finance":
        console.log("Finance operation is here");
        break;
    case "HR":
        console.log("HR operation here");
        break;
    case "Technical":
        console.log("Technical opration here");
        break;  
    case "Non-Technical":
        console.log("Non-Technical opration here");
        break; 
default:
    console.log("invalid department");
    break;            
}
// loops

//for 
for(let start = 1; start <= 5; start++){
    console.log("for",start,"welcome to Edureka,its awesome");
}
//while
let start = 1;
while(start <= 5){
    console.log("while",start,"welcome to edureka,its awesome");
    start++;
}
//do while
let start_1 = 1;
do {
  console.log("do while",start_1,"welcome to edureka,its awesome");
  start_1++;
}while(start_1 <= 5);
// function
// its a block of code ...use a same logic again and again

//write a function
// () => argument body/ parameters

function functionName(){
    console.log("this is a function");
}
//function call
functionName();

//when variable outside function,they are called as global variable
let A= 10;//global
let B= 20;//global

//when variable are inside the function,they are called as local variables 
function add(varOne,varTwo) {
   console.log(varOne);
   console.log(varTwo);
   let result = varOne + varTwo;
   console.log("result is",result);
}
add(A,B);
add(30,50);
add(100,50.6);

let a = 20;
let b = 10;

// arithmetic oprater's
let result = a+b;
//console.log(result);

result = a-b;
//console.log(result);

result = a*b;
//console.log(result);

result = a-b;
//console.log(result);

result = a/b;
//console.log(result);

result = a % b; //modulus reminder
//console.log(result);

let a1 = 10;
a1 += 10; //a1 = a1+10;
a1 -= 10; //a1 = a1-10;
a1 *= 10; //a1 = a1*10;
