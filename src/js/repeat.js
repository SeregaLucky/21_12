// // Сергей, как я могу отобразить в консоль логе статус промиса? предположим, у меня есть функция
// const delay = ms => {
//   return new Promise(resolve => setTimeout(() => resolve(ms), ms));
// };
// const f = delay(2000);
// console.log(f);
// // Мы получаем:
// // Promise {<pending>}Как получить результат выполнения промиса, в плане Promise {<fulfilled>} ? Как я могу проследить процесс выполнения промиса?
// const delay = ms => {
//   return new Promise(resolve => setTimeout(() => resolve(ms), ms));
// };

// const f = delay(2000);
// console.log(f);

// // Мы получаем: Promise {<pending>}Как получить результат выполнения функции, в плане Promise{<fulfilled>} ? Как я могу проследить процесс выполнения промиса?

// 1
// const delay = ms => {
//   return new Promise((res, rej) => setTimeout(() => res(ms), ms));
// };

// const f = delay(100);
// console.log(f);
// setTimeout(() => console.log('next f', f), 200);

//
//
//
//
// 2
// const delay = ms => {
//   return new Promise((res, rej) => setTimeout(() => res(ms), ms));
// };

// const f = delay(100);
// f.then(() => {}).catch(() => {});

// fetch('')
//   .then(() => {})
//   .catch(() => {});

//
//
//
// 3
// const fn1 = () => {
//   const randomNum = Math.random();

//   if (randomNum > 0.5) {
//     return Promise.reject('Lose');
//   }
// };

// fn1()
//   .then(() => {})
//   .catch(err => console.log(err));

//
//
//
// 4
// class Car {
//   static fn333() {
//     console.log(333);
//   }

//   // constructor({ car }) {
//   //   this.car = car;
//   // }

//   constructor(obj) {
//     this.car = obj.car;
//   }

//   fn1() {}
// }

// const car = new Car({ car: 'Porche' });
// console.log(car);

// Car.fn333();

//
//
//
// 4.1
// const obj = { name: 'Alex', age: 22 };
// const { name, age, cars } = obj;
// console.log('name', name);
// console.log('age', age);
// console.log('cars', cars);

//
//
//
// 5
// fetch('https://cars/car/porshe')

//
//
//
// 6
// var a = 5;

// setTimeout(function timeout() {
//   console.log(a);
//   a = 10;
// }, 0);

// var p = new Promise(function (resolve, reject) {
//   console.log(a);
//   a = 25;
//   resolve();
// });

// p.then(function () {
//   // some code
// });

// console.log(a);

//
//
//
// 6
// var a = 5;

// setTimeout(function timeout() {
//   console.log('setTimeout', a);
//   a = 10;
// }, 0);

// var p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log('Promise', a);
//     a = 25;
//     resolve();
//   }, 0);
// });

// p.then(function () {
//   // some code
// });

// console.log('146 s ', a);

//
//
//
//

// 'use strict';
// const obj = {
//   classicFoo() {
//     setTimeout(function () {
//       console.log(this);
//     }, 100);
//   },
//   arrowFoo() {
//     setTimeout(() => {
//       console.log(this);
//     }, 100);
//   },
// };

// obj.classicFoo(); // window
// obj.arrowFoo(); // obj

// setTimeout(function () {
//   console.log('169', this);
// }, 100);

// setTimeout(() => {
//   console.log('173', this);
// }, 100);
