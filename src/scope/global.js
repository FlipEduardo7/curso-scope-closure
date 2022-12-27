var a; //declarando
var b = "b"; //declarando y asignando
b = "bb";
var a = "aa"; //redeclaracion

//Global Scope
var fruit = "apple"; //global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = "Colombia";
    console.log(country);
}
countries();
console.log(country)