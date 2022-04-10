/* if (4==9) { условие в скобках должно быть приведено к булевому типу(true/false) То есть, если 4 равно 9, то выполнить это, else выполнить другое
    console.log("ok");
}else {
    console.log("Error");
} */


// let num = 50;
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
//меньше, то switch проверяет только строгое соответствие

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



// while (num < 55 ) {// пока переменная num меньше 55, в консоль будет выводиться num. Чтобы выводить вместе с 55, нужно в условии использовать меньше или равно <=
//     console.log(num) //если запустить такой код, он будет выполнять бесконечно
//     num++;
// }
//
// do{ console.log(num)
//         num++;
// } while (num<55);
//

// const numberOfFilms = +prompt('How many films have you watched?');
//
// const personaMoviesDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };
//
// if(personaMoviesDB.count < 10) {
//     console.log("You have seen too little movies");
// } else if (personaMoviesDB.count >= 10 && personaMoviesDB.count < 30) {
//     console.log("You are classical watcher");
// } else if (personaMoviesDB.count >30) {
//     console.log("You are a movie maniac");
// }
//
// console.log(personaMoviesDB);


<!-- Functions -->
/*
let num = 20;
function showMessage(text) {
    console.log(text);

    let num = 20;
}

showMessage("Hello World"); //При вызове функции со словами Hello World это расценивается программой как аргумент text. Этот аргумент передаётся в консоль и вызывается.
console.log(num); // The result is "Num is not defined", because the variable num is not available outside the function showMessage


function calc (firstNum, secondNum) {
    return (firstNum+secondNum);
}

console.log(calc(3,4));

console.log(calc(10,7));

*/

<!--Function expression -->


// const logger = function() { //We can create the const and assign the function to this const
//     console.log('Hello world')
// }
//
// logger();

<!--Arrow function -->
//
// const calc = (a,b) => {console.log (a+b)};
//
// calc (4,6);



//
// const string = "test";
//
// console.log(string.length)// вызов свойства length, который покажет длину строки
// console.log(string.toUpperCase()) // вызов МЕТОДА, который переводит строку в верхний регистр

<!-- Поиск подстроки с помощью метода indexOf -->

//     const fruit = "Some fruit";
//
// console.log(fruit.indexOf("fruit")); // Мы ищем, с какого места начинается fruit

// const logg = "Hello world";
//
// console.log(logg.slice(6,11))// console gets the "world" word.




// const number = 12.2;
//
// console.log(Math.round(number))//Math метод используется для округления числа. В консоли выведет 12.
//
// const pixel = "12.2px";
//
// console.log(parseInt(pixel));// Метод ParseInt переводит число в другую систему исчисления. Мы получим 12, и 12- это уже число.
//
// console.log(parseFloat(pixel)); // returns to console 12.2



<!-- Callback functions -->

/*Коллбэк- это функция, которая должна быть выполнена после того, как другая функция завершила своё выполнение*/
// function first() {
//     setTimeout(function(){
//         console.log("Callback function");
//     }, 5000) //Функция будет выполнена с задержкой в 5 секунд
// }
//
//
//
//
// function secondFunction() {
//     console.log(" Calling the function without the timeout")
// }
//
// first();
// secondFunction();


// function learnJS(lang, callback) { // callback означает, что в качестве аргумента в функцию мы передадим другую функцию
//     console.log(`I'm learning: ${lang}`);
//     callback(); // Таким образом мы вызываем эту функцию
// }
//
// function done() {
//     console.log("I finished this lesson")
// }
//
// learnJS('JavaScript'/*Мы передаем как раз аргумент*/, done);// Мы передаём функцию done без каких-либо круглых скобок. Нам не нужно вызывать функцию, мы передаём функцию, чтобы
// //в дальнейшем её вызвать


<!-- объекты, деструктуризация объектов -->

const options = {

    name: 'test',
    width:'1024',
    height: '1024',
    colors: {
        border:'red',
        background:'blue',

    }
}

//console.log(options.name);

// /*Для удаления значения из объекта мы используем оператор delete*/
// delete(options.name);
// console.log(options);
//
// <!-- For in используется для перебора свойств объекта -->
//
// for(let key/*В объекте задаётся структура ключ-значение. name-это ключ, test- значение*/ in options) {
//     //Данный цикл будет работать столько раз, сколько свойств находится внутри этого объекта
//     console.log(`Property ${key} have the value ${options[key]}`) // таким образом мы будем получать значение этого ключа, который перебирается в этой итерации цикла
// }


/* мы можем запустить перебор внутри перебора*/

let counter = 0;

for (let key in options) {
    if (typeof (options[key]) === 'object') { // Мы проверяем, если это объект, и если тру, то запускаем, к примеру, новый перебор внутри
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key] [i]}`);/*Мы перебираем внутри объекта colors. Чтобы достучаться до его объектов внутри, мы используем двойные квадратные
       скобки*/
            counter++; //с помощью каунтер мы считаем количество свойств внутри цикла
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`); // Если ключ не является объектом, то мы просто выводим такое значение.
        counter++;
    }

    }
console.log(counter);
