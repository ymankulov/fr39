// for (let i = 0; i < 101; i++) {
//     console.log(i)
// }


// 1. Выведите столбец чисел от 1 до 50.
// let counter = 0
// for (let i = 0; i < 51; i++) {
//     console.log(i)
//     counter = counter + i
// }
// console.log(counter)
// 2. Создайте переменную с пустым массивом, заполните массив 10-ю элементами X
// с помощью цикла.
// let arr = []
// for (let i = 0; i < 10; i++) {
//     // console.log(i)
//     arr[i] = "X"
// }
// console.log(arr)
// 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. С помощью цикла for выведите
// все эти элементы в консоль.
// let arr = [5, 3, 1, 2, 7]
// for (let j = 0; j < arr.length; j++) {
//     console.log(arr[j])
// }
// 4. Вам дан массив с элементами [5, 2, 1, 2]. С помощью цикла for найдите
// произведение элементов этого массива.
// let arr = [5, 2, 1, 2]
// let counter = 1
// for (let i = 0; i < arr.length; i++) {
//     // console.log(i)
//     // counter = counter * arr[i]
//     counter *= arr[i]
// }
// console.log(counter)
// 5. Выведите в консоль столбец четных
// чисел в промежутке от 0 до 100.

// for (let i = 2; i < 100; i++) {
//     if (i % 2 === 0){
//         console.log(i)
//     }
// }

// 6. С помощью цикла найдите сумму чисел от
// 1 до 100 и выведите в консоль.
// let counter = 1
// for (let i = 1; i < 100; i++){
//     counter += i
//
// }
// console.log(counter)
// 7. Вам дан массив с элементами
// [2, 4, 5, 6, 8]. С помощью цикла for
// найдите сумму элементов этого массива.
// Запишите ее в переменную result.
// let number = [2, 4, 5, 6, 8]
// let result = 0
// for (let i = 0; i < number.length; i++){
//     result += number[i]
//
// }
// console.log(result)
// 8. Вам дан массив [3, 4, 6, 12, 3, 5].
// С помощью цикла for и оператора if
// выведите на экран
// столбец тех элементов массива,
// которые больше 3-х, но меньше 10.
// let number = [3, 4, 6, 12, 3, 5]
// for (let i = 1; i < number.length; i++){
//     if (number[i] > 3 && number[i] < 10){
//         console.log(number[i])
//     }else {
//         console.log(undefined)
//     }
// }
// 9. Вам дан массив с числами.
// Числа могут быть положительными и отрицательными.
// Найдите сумму положительных элементов массива.
// let arr = [-40, 20, 50, 3, -50, -100, 60]
// let sun = 0
// for (let j = 0; j < arr.length; j++) {
//     if (arr[j] > 0) {
//         sun += arr[j]
//     }
// }
// console.log(sun)

// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла
// for и оператора if проверьте есть ли в массиве элемент со значением,
// равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла.
// Если нет - ничего делать не надо.
// let arr = [5, 1, 3,  7, 6, 4, 15, 3, 20]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 4) {
//         console.log("Есть!")
//     } else {
//         console.log(arr[i])
//     }

// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000]. Выведите на
// экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 40, 135, 2000]
// for (let i = 0; i < arr.length; i++) {
//     let s = String(arr[i])
//     if (s[0] === "1" || s[0] === "2" || s[0] === "5") {
//         console.log(arr[i])
//     }
// }

// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью
// цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let str = ""
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 9) {
//         str += "-" + arr[i] + "-"
//     }else {
//         str += "-" + arr[i]
//     }
// }
// console.log(str)
// 13. Вам дано число n=1000. Делите его на 2 столько раз, пока результат
// деления не станет меньше 50. Какое число получится? Посчитайте количество
// итераций, необходимых для этого (итерация - это проход цикла), и
// запишите его в переменную num.
// let count = 0
// for (let n = 1000; n > 50; n = n / 2) {
//     console.log(n)
//     count++
// }
// console.log(count)
// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее
// арифметическое его элементов (сумма элементов, делить на количество).
// let arr = [1, 2, 3, 7, 1, 9]
// let count = 0
// for (let i = 0; i < arr.length; i++) {
//     count += Math.round(arr[i] / 6)
// }
// console.log(count)

// 15. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла найдите
// сумму квадратов элементов этого массива.
// let arr = [1, 2, 3, 4, 5]
// let sun = 0
// for (let i = 0; i < arr.length; i++) {
//     sun += arr[i] ** 2
// }
// console.log(sun)

// 16. Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]. С помощью цикла выведите
// только те элементы массива, которые больше нуля и меньше 10-ти.
// let arr = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
// let count = 0
// for (let i = 0; i < arr.length; i++) {
//      if (arr[i] > 0 && arr[i] < 10) {
//           count += arr[i]
//      }
// }
// console.log(count)

// 17. Создайте переменную с пустым массивом, заполните массив 10-ю случайными числами от 1 до 10
// с помощью цикла.
// let arr = []
// for (let i = 0; i < 10; i++) {
//      arr[i] = Math.round(Math.random   () * 100)
// }
// console.log(arr)

// 18. Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000.
// let counter = 0
// for (let i = 1; i < 1000; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i)
//         counter = counter + i
//     }
// }
// console.log(counter)

// 19. Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].
// Создайте цикл, который выводит нечетные числа, которые больше 10.
// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0 && arr[i] > 10) {
//         console.log(arr[i])
//     }
// }



// for (let i = 1; i < 20; i++) {
//      if (i === 11) {
//          break
//      }
//     console.log(i)
// }


// for (let i = 0; i < 50; i++) {
//     if (i === 10 || i === 20 || i === 30 || i === 40) {
//         continue
//     }
//     console.log(i)
// }




// currying - каррирование - функция принимает как можно меньше аргументов

// function sun(a, b, c, d, w, e, x, v) {
//     return a + b + c + d + w + e + x + v
// }
//
// console.log(sun(1,2,3,4,5,6,7,8))

// function num(a) {
//     return function (b) {
//         return function (c) {
//             return function (d) {
//                 return function (w) {
//                     return function (e) {
//                         return function (x) {
//                             return function (v) {
//                                 return a + b + c + d + w + e + x + v
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
//
// console.log(num(1)(2)(3)(4)(5)(6)(7)(8))

// const sun = a => b => c =>  a + b + c
// console.log(sun("https://")("github.com/")("arsenDev04"))

// function link(a) {
//     return function (b) {
//         return function (c) {
//             return  a + b + c
//         }
//     }
// }
// function aaa(a) {
//     return a
// }
//
// console.log(aaa("https://github.com/ymankulov"))
// // https://ru.wikipedia.org/wiki/
// // https://github.com/ymankulov
// console.log(link("https://")("github.com/")("arsenDev04"))
// console.log(link("https://")("github.com/")("ymankulov"))
// console.log(link("https://")("github.com/")("asadulladev"))
// console.log(link("https://")("github.com/")("asadulladv"))



// mutation - 2 objects have same link
// мутациянын жаман жери проект туура эмес иштей баштайт!
// let arr = [2,10,4,30,99,100,435]
//
//
// let copy = [...arr]
// console.log(copy)
//
// arr.sort((a,b) => {
//     return a - b
// })
// console.log(arr)

// мутациядан качуу учун бизде спрет оператор деген нерсе бар
// ...



















// this
// bind - контекст, аргумент
// call - контекст, аргумент
// apply - контекст, [аргумент]


// recursion - функция вызывает себя
// 5! = 1 * 2 * 3 * 4 * 5 = 120
// const factorial = (n) => {
//     console.log(n)
//     if (n === 1) {
//         return 1
//     }
//     return n * factorial(n - 1)
// }
// console.log(factorial(10))
