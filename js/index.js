// let counter = 0;
// for (let i = 0; i <= 50; i++) {
//     counter = 0;
//     for (let j = 1; j <= i; j++) {
//         if (i % j == 0) {
//             counter++
//         }
//     }
//     if (counter > 2) {
//         console.log(i);
//     }
// }

// let num = + prompt('Sonni kiriting');
// let max = num;
// for (let i = 1; i <= 4; i++) {
//     let num = + prompt("Sonni kiriting")
//     if (num > max) {
//         max = num
//     }
// }
// console.log(max);

// let num = + prompt('Reverse');
// let res = 0;
// while(num >= 1) {
//     res = res * 10 + num % 10
//     num = Math.trunc(num / 10)
// }
// console.log(res);

// let fruits = ['Olma', "Banan", 22, true, `Murodjon`, false];
// fruits[3] = 'Anor';
// fruits.push(1234);
// fruits.pop();
// fruits.unshift("123");
// fruits.shift();
// console.log(fruits);

// let arr = [1,2,3,5,6];
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// console.log(sum);

// 1 - masala

// let arr = [1,2,3,4,5];
// let newArr = [];
// for(let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] * 2)
// }
// console.log(newArr);

// 2 - masala

// let array = [1, 2, 3, 4, 5];
// let reversedArray = [];
// for (let i = array.length - 1; i >= 0; i--) {
//   reversedArray.push(array[i]);
// }
// console.log(reversedArray);

// 3 - masala

// let arr = [1,-2,-3,-4];
// let newArr = [];
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] >= 0) {
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr);

// 4 - masala

// let arr = [1,2,3,4,5];
// let sum = 0;
// for(i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
// }
// console.log(sum);

// 5 - masala

// let arr = ["Salom", true, `Azamatjon`];
// arr.push(20);
// console.log(arr);

// 6 - masala

// let arr = ["Salom", true, `Azamatjon`];
// arr.pop();
// console.log(arr);

// 7 - masala

// let arr = ["Salom", true, `Azamatjon`];
// arr.shift();
// console.log(arr);

// 8 - masala

// let arr = ["Salom", true, `Azamatjon`];
// arr.unshift(20);
// console.log(arr);

// 9 - masala

// let arr = [1,2,3,4,5];
// for(i = 0; i < arr.length; i++) {
//     console.log(i);
// }

// 10 - masala

// let arr = [1,2,3,4,5];
// let newArr = [];
// for(i = 0; i < arr.length; i++) {
//     newArr.push(arr)
// }
// console.log(newArr);

// 11 - masala

// let array = [10, 3, 7, 21, 14, 5];
// let maxElement = array[0];
// for (let i = 1; i < array.length; i++) {
//     if (array[i] > maxElement) {
//         maxElement = array[i];
//     }
// }
// console.log(maxElement);

// 12 - masala

// let array = [10, 3, 7, 21, 14, 5];
// let minElement = array[0];
// for (let i = 1; i < array.length; i++) {
//     if (array[i] < minElement) {
//         minElement = array[i];
//     }
// }
// console.log(minElement);

// 13 - masala

// let arr = [1,2,3,4,5];
// let counter = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         counter++
//     }
// }
// console.log(counter);

// 14 - masala

// let arr = [1,2,3,4,5];
// let counter = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//         counter++
//     }
// }
// console.log(counter);

// 18 - masala

// let arr = [1,2,3,4,5];
// let p = 1;
// for (let i = 0; i < arr.length; i++) {
//     p *= arr[i]
// }
// console.log(p);

// 19 - masala

// let arr = [-1, -2, 3, 0];
// let newArr = [];
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr);

// 20 - masala

// let arr = [-1, 2, 3, 4];
// let newArr = [];
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr);

// 21 - masala

// let array = [1, 'apple', 3, 'banana', 'orange', 5];
// let stringElements = [];

// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'string') {
//         stringElements.push(array[i]);
//     }
// }
// console.log(stringElements);

// 23 - masala

// let arr = ['Apple', true, 20, `Banana`];
// console.log(arr.length);