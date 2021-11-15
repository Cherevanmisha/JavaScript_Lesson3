// --створити масив з:
//  - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let num = [10, 45, 2, 77, 82];
// console.log(num);
// let cars = ['Mazda', 'Volvo', 'Honda', 'Toyota', 'Subaru'];
// console.log(cars);
// const carnum = [11,'Honda',true,false,55]
// console.log(carnum);


//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль
//
// let arr = [];
// arr [0]=54
// arr [1]=false
// arr [2]=84
// arr [3]='Toyota'
// arr [4]=true
// arr [5]=25
// console.log(arr);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
// document.write(`<div>hello okten</div>`)
//
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
// document.write(`<div>Hello: ${i} </div>`)
// }




// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i=0;
// while (i<20) {
//     document.write (`<h1>Hello</h1>`);
//     i++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i=0;
// while (i<20) {
//     document.write (`<h1>Hello: ${i}</h1>`);
//     i++;
// }

//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [65, 84, 721, 55, 656, 8, 4, 78, 21];
// for (let i = 0; i < arr.length; i++) {
//     let arrElement = arr[i];
//     console.log(arrElement)
// }





// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// const str= ['65','Tesla','7421','55','Mazda','8','4','9','22'];
// for (let i = 0;  i < str.length; i++){
// console.log (str[i]);
//   }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// const q= [65,'Tesla',false,55,true,8,'4','9',22,'Mazda'];
// for (let i = 0;  i < q.length; i++){
// console.log (q[i]);
//   }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи

// const q= [65,'Tesla',false,55,true,8,'4','9',22,'Mazda'];
// for (let i = 0;  i < q.length; i++){
// typeof q[i] === 'boolean' ?
// console.log(q[i]): ""
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи

// const q= [65,'Tesla',false,55,true,8,'4','9',22,'Mazda'];
// for (let i = 0;  i < q.length; i++){
// typeof q[i] === 'number' ?
// console.log(q[i]): ""
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи

// const q= [65,'Tesla',false,55,true,8,'4','9',22,'Mazda'];
// for (let i = 0;  i < q.length; i++){
// typeof q[i] === 'string' ?
// console.log(q[i]): ""
// }


// - Створити порожній масив.
// Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// let q = [];
// q [0]=54
// q [1]=false
// q [2]=84
// q [3]='Toyota'
// q [4]=true
// q [5]=25
// q [6]=75
// q [7]=false
// q [8]=70
// q [9]='Mazda'
// for (let i = 0; i < q.length; i++) {
//     const qElement = q[i];
//     console.log(qElement)
// }





// - Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log("Крок:", i);
//     document.write(`"Крок:", ${i}<br>`)
// }


// - Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log("Крок:", i);
//     document.write(`"Крок:", ${i}<br>`)
// }


// - Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i += 2) {
//     console.log("Крок:", i);
//     document.write(`"Крок:", ${i}<br>`);
// }

// - Створити цикл for на 100 ітерацій.
// Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 200; i++) {
//     if (i % 2 === 0) {
//         console.log("Крок:", i);
//         document.write(`"Крок:", ${i}<br>`)
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 200; i++) {
//     if (i % 2 === 1) {
//         console.log("Крок:", i);
//         document.write(`"Крок:", ${i}<br>`)
//     }
// }