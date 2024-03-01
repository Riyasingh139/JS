//DOM is a document object model
//make conection in html & javascript we use dom

console.log(document);
//dom methods
// getElementByID
//getElementByClassName
//getElementByTag

//queryselector
//queryselectorall

// let h1Elements = document.querySelectorAll("h1");
// console.log(h1Elements);

let h1Element = document.querySelector("#changetext");
console.log(h1Element.innerHTML);
h1Element.style.color = "red";
