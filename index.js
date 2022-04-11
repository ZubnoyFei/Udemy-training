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

<!--У нас есть рабочее приложение, состоящее из отдельных функций. Мы переписываем его, чтобы функции стали методом объекта -->
/*const personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {

        personalMoviesDB.count= +prompt('How many films have you watched?', '');
        while (personalMoviesDB.count === ''|| personalMoviesDB.count== null || isNan(personalMoviesDB.count)){
            personalMoviesDB.count= +prompt('How many films have you watched?', '');
        }
    },
    rememberMyFilms: function() {
        for(let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('какую оценку вы бы ему поставили?','');

            if(a !=null && b!=null && a!= '' && b!= '' && a.length<50){
                personalMoviesDB.movies[a]=b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonaLevel: function() {
        if (personalMoviesDB.count < 10) {
            console.log("You have seen too little movies");
        } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
            console.log("You are classical watcher");
        } else if (personalMoviesDB.count > 30) {
            console.log("You are a movie maniac");
        }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMoviesDB);
        }
    },
    toggleVisibleMyDB: function() {
      if(personalMoviesDB.privat) {
          personalMoviesDB.privat = false;
      }else {
          personalMoviesDB.privat = true;
      }
    },

    writeYourGenres: function() {
        for(let i = 1; i < 4; i++){
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            //
            // if(genre === '' ||genre == null) {
            //     console.log("Вы ввели некорректные данные");
            //     i--; // При вводе некорректных данных пользователь откатывается на одну итерацию назад;
            // } else {
            //     personalMoviesDB.genres[i - 1] = genre;
            // }
            let genre = prompt(`Введите ваши любимые жанры через запятую`);
            if(genre === '' || genre == null) {
                console.log("Вы ввели некорректные данные");
                i--; // При вводе некорректных данных пользователь откатывается на одну итерацию назад;
            } else {
                personalMoviesDB.genres = genre.split(', '); //Мы вызываем метод split и в него передаём запятую в качестве разделителя
                personalMoviesDB.genres.sort();
            }
        }
        personalMoviesDB.genres.forEach((item,i)=> {// При помощи этого метода выводятся жанры
            console.log(`Любимый жанр ${i + 1} - это ${item}`)
        })
    }
};




console.log(personalMoviesDB);

*/
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

// const options = {
//
//     name: 'test',
//     width:'1024',
//     height: '1024',
//     colors: {
//         border:'red',
//         background:'blue',
//
//     },
//     makeTest: function() { // Метод, который мы сами создали, который работает внутри функции
//         console.log("Test");
//     }
// };
// options.makeTest();
//
//


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

// let counter = 0;
//
// for (let key in options) {
//     if (typeof (options[key]) === 'object') { // Мы проверяем, если это объект, и если тру, то запускаем, к примеру, новый перебор внутри
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key] [i]}`);/*Мы перебираем внутри объекта colors. Чтобы достучаться до его объектов внутри, мы используем двойные квадратные
//        скобки*/
//             counter++; //с помощью каунтер мы считаем количество свойств внутри цикла
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`); // Если ключ не является объектом, то мы просто выводим такое значение.
//         counter++;
//     }
//
//     }
// console.log(counter);


//console.log(Object.keys(options));


<!--Деструктуризация объекта -->
//
// const {border, bg} = options.colors; //Мы вытащили свойства в объекте в качестве отдельной переменной
//
// console.log(border);// В консоли выводится Test и red.
//
//


<!-- Массивы и псевдомассивы -->


// const arr = [2,3,6,8,10];
// arr.sort(compareNum);
// console.log(arr);
//
// function compareNum (a,b) { //Функция для сортировки массива по порядку.
//     return a-b;
// }

// arr[99] = 0;// Мы помещаем на 99 место
//
// console.log(arr.length); // В консоли будет 100
// console.log(arr); // [ 2, 3, 6, 8, 10, <94 empty items>, 0 ]


//   arr.forEach(function(item,i,arr)// метод принимает в себя коллбэк-функцию и 3 аргумента: item(просто название, может быть как угодно(item, button); i(номер по порядку); ссылка на сам массив
// {
//       console.log(`${i}: ${item} внутри массива ${arr}`);
//   });


//arr.pop()//Удаляет последний элемент из массива;

// arr.push(10); //Добавляет элемент в конец массива
//
// console.log(arr);// result [ 1, 2, 3, 4, 5 ]

// Мы также можем перебирать массив. К примеру, добавлять или убирать что-либо из массива

// for(let i = 0; i < arr.length; i++) { //Цикл отрабатывает до тех пор, пока не закончатся элементы внутри массива
//     console.log(arr[i]);//  В консоли выведется 2 3 6 8 10. Мы перебрали массив
// }


// for(let i of arr) { // Этот метод также выведет массив. Но этот метод работает только с массивоподобными элементами. К примеру, массив, строка, псевдомассив.
//     console.log(i);
// }

// for (let value of arr) {
//     console.log(value)
// }
//
// const str = prompt("","");
//
// const products = str.split(", ");
// products.sort();
//
// console.log(products.join(';'));







// let a = 5,
//     b = a;
// b = b + 5;
// console.log(b);
// console.log(a);
//
// const obj = {
//     a: 5,
//     b : 1
// };

// const copy = obj; // Объект не копируется, передаётся ссылка на объект obj
//
// copy.a = 10;
//
// console.log(copy);
// console.log(obj);

// function copy(mainObj) { // Функция передаёт новый объект, перебирая свойство, которое было в obj
//     let objCopy= {};
//
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key]; // Таким образом создаём копию нашего главного объекта
//     }
//
//     return objCopy;
// }
//
//
// const number = {
//     a:2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(number); // Таким образом совершается клонирование объекта
//
// newNumbers.a = 10; // присваиваем в объекте newNumbers переменной а свойство 10;
// newNumbers.c.x = 10;
// // console.log(newNumbers); // { a: 10, b: 5, c: { x: 7, y: 4 } }
// // console.log(number);
//
// const add = {
//     d: 17,
//     e: 20
// };
//
// const clone = Object.assign({}, add); //{ a: 10, b: 5, c: { x: 10, y: 4 } }
//
// clone.d = 20;
//
// // console.log(add);//{ d: 17, e: 20 }
// //
// // console.log(clone);//{ d: 20, e: 20 }
//
// //{ a: 2, b: 5, c: { x: 10, y: 4 } }
// //{ a: 2, b: 5, c: { x: 10, y: 4 }, d: 17, e: 20 } Создана независимая поверхностная копия объекта
//
//
//
// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();// метод, который позволяет копировать старый массив

// newArray[1] = 'Hello World'
// console.log(newArray); // [ 'a', 'Hello World', 'c' ]
// console.log(oldArray);//[ 'a', 'b', 'c' ]
//

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'fb'];
//
// console.log(internet); //['youtube','vimeo','rutube','wordpress','livejournal','blogger','vk','fb']
// //
// function log(a,b,c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2,5,7];
//
// log(...num);
//
// const array = ["a", "b"];
//
// const additionalArray = [...array];
//
// const testObject = {
//     one: 1,
//     two: 2,
// };
//
// const newObject = {...testObject};



