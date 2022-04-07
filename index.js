/* if (4==9) { условия в скобках должно быть приведено к булевому типу(true/false) То есть, если 4 равно 9, то выполнить это, else выполнить другое
    console.log("ok");
}else {
    console.log("Error");
} */


const num = prompt('Enter the message');
/*
if (num ==49) {
    console.log('This is not the answer')
} else if (num == 48) {
    console.log('Still not true')
} else if (num==50){
    console.log("That's right")
} else {
    console.log("You entered not a number")
}

*/


<!--Тернарный оператор-->

/*В круглых скобках прописываем выражение, затем идёт сам оператор (?). Если условие выполнилось, после тернарного оператора идёт действие, которое происходит
в случае правдивого условия; затем ставится двоеточие и прописывается действие, которое происходит, если условие не выполнилось*/

(num == 50) ? console.log("That's true") : console.log("This is not the answer");