/* if (4==9) { условие в скобках должно быть приведено к булевому типу(true/false) То есть, если 4 равно 9, то выполнить это, else выполнить другое
    console.log("ok");
}else {
    console.log("Error");
} */


let num = 50;
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

//(num == 50) ? console.log("That's true") : console.log("This is not the answer");

<!--Switch -->

// Это конструкция, которая поддерживает несколько модификаций в коде. Конструкция switch используется только для строго сравнения. Если if..else мог проверять на больше
//меньше, то switch проверяет только строгое соответсвие

/*
 switch (num) {
     case 49:console.log("That's not correct"); //Для проверки указываем директиву case и ставим двоеточие
         break;// Эта конструкция обязательна, если num будет равен 49, выполнится console log и код пойдёт прогоняться дальше.
     case 100: console.log("Still not true");
     break;
     case 50: console.log("That's true");
     break;

     default: console.log("Not this time, pal")// default нужен, если ни одно из условий нам не подходит.
         break;
 }

 */


<!--Cycles-->



while (num < 55 ) {// пока переменная num меньше 55, в консоль будет выводиться num. Чтобы выводить вместе с 55, нужно в условии использовать меньше или равно <=
    console.log(num) //если запустить такой код, он будет выполнять бесконечно
    num++;
}

do{ console.log(num)
        num++;
} while (num<55);

