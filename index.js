//1//
// var date = prompt("Please enter your year of birth ?");
// var age = 2023 - date;
// if (age > 20) {
//   console.log("You are an adult");
// } else {
//   console.log("You are still a boy");
// }

// 2//

// var oil = prompt("Type of oil ?");
// var l = prompt("L?");
// if (oil == 90) {
//   console.log("Oil is 90 and the price of one litter is 2 so total = ", 2 * l);
// } else if (oil == 92) {
//   console.log("Oil is 92 and the price of one litter is 4 so total = ", 4 * l);
// } else if (oil == 95) {
//   console.log("Oil is 95 and the price of one litter is 5 so total = ", 5 * l);
// } else {
//   console.log("oil not found");
// }

// con();
// function con() {
//   console.log(colors);
//   colors.push("red");
//   // var x = 50;
//   var colors = ["red", "green", "yellow"];
//   console.log(colors);
// }

// let i = 1;
// while (i <= 10) {
//   if (i == 3) console.log("Ahmed Shabaan");
//   else console.log(i);
//   i++;
// }

// console.log(0 % 3);

// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// var fizzBuzz = function (n) {
//   let i = 1;
//   let answer = [];
//   while (n >= i) {
//       if (i % 3 == 0 && i % 5 != 0) {
//           answer[i - 1] = "Fizz";
//       } else if (i % 5 == 0 && i % 3 != 0) {
//           answer[i - 1] = "Buzz";
//       } else if (i % 3 == 0 && i % 5 == 0) {
//           answer[i - 1] = "FizzBuzz";
//       } else {
//           answer[i - 1] = String(i);
//       }
//       i++;
//   }
//   return answer;
// }

// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// var fizzBuzz = function (n) {
//   let i = 1;
//   let answer = [];
//   while (n >= i) {
//       if (i % 3 == 0 && i % 5 != 0) {
//           answer.push("Fizz");
//       } else if (i % 5 == 0 && i % 3 != 0) {
//           answer.push("Buzz");
//       }
//       else if (i % 3 == 0 && i % 5 == 0) {
//           answer.push("FizzBuzz");
//       }
//       else {
//           answer.push(String(i));
//       }
//       i++;
//   }
//   return answer;
// }

// var defangIPaddr = function(address) {
//   let arr = address.split("")
//   for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] == ".")
//     arr[i] = "[.]"
//   }
//   return `${arr.join()}`

// };
// console.log(defangIPaddr("1.1.1.1"));

// let str = "1.1.1.1";
// let newStr = str.replace(/\./g, "[.]");

// console.log(newStr)

// var singleNumber = function (nums) {
//   for(let i =0 ; i < nums.length ; i++){
//       let req = nums[i];
//       nums[i] = '';
//       if(nums.indexOf(req) == -1){
//           return req
//       }else{
//         nums[i] = req
//       }
//   }
// };

// // console.log(singleNumber([1, 1, 1, 2, 2, 5]));

//xor  => 1^1 => 0 | 0^0 => 0 | 0 ^ 1 => 1

// console.log(5 ^ 5);

// var singleNumber = function (nums) {
//   let req = 0;
//   for (let i = 0; i < nums.length; i++) {
//     req ^= nums[i];
//   }
//   return req;
// };

// var singleNumber = function(nums) {     // for appear twice
//   let num = 0

//   for(let i of nums) {
//       num ^= i
//   }
//   return num
// };
// console.log(singleNumber([1, 1, 1, 2, 2, 5]));

// let obj = {
//   name : 'ahmed',
//   age : 23,
//   speak : function(){
//     console.log("Arabic")
//   },
//   my_obj : {
//     salary : 2000,
//     dep : 'it'
//   }
// }

// obj.speak();
// console.log(obj['name'])
// console.log(obj.my_obj.salary)

// obj.long = 198;

// obj.age = 28;
// console.log(obj)

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
// var runningSum = function (nums) {
//   let sumArr = [];
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     sumArr.push(sum);
//   }
//   return sumArr;
// };

// var runningSum = function(nums) {
//   for  (let i=1; i < nums.length ; i++) {
//       nums[i] += nums[i -1]
//   }
//   return nums
// };

// console.log(runningSum([3, 1, 2, 10, 1]));
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
// var reverseWords = function (s) {
//   return s.split(" ").map((el) => {
//     return el.split("").reverse().join('');
//   }).join(' ');
// };
// console.log(reverseWords("Let's take LeetCode contest"));

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j];
//       }
//     }
//   }
// };

// var twoSum = function (nums, target) {
//   let arr = [];
//   let com, sec, temp;
//   for (let i = 0; i < nums.length; i++) {
//     com = target - nums[i];
//     temp = nums[i];
//     nums[i] = "";
//     sec = nums.indexOf(com);
//     if (sec != -1) {
//       arr.push(i, sec);
//       return arr;
//     }
//     nums[i] = temp;
//   }
// };
// console.log(twoSum([2, 11, 7, 15, 1, 9, 8], 8));

// var twoSum = function (nums, target) {
//     let helper = {};
//     for (let i = 0; i < nums.length; i++) {
//       let com = target - nums[i];

//       if (helper[com] != undefined) {
//         return [helper[com] , i];
//       }
//       helper[nums[i]] = i;
//       console.log(helper)
//     }
//   };
//   console.log(twoSum([2, 11, 7, 15, 1, 9, 8], 8));

// let arr = [1, 5, 8, 1];
// let sum = arr.reduce((acc, val) => {
//   setTimeout(() => {
//     acc += val;
//   }, 0);
//   return acc;
// }, 0);
// console.log(sum);

// var twoSum = function (nums, target) {
//   let obj = {};

//   for (let i = 0; i < nums.length; i++) {
//       let com = target - nums[i];
//       if (obj[com] != undefined) {
//           return [obj[com] , i]
//       }
//       obj[nums[i]] = i
//   }

// };
// console.log(twoSum([1,5,6],7))

// // I =>1
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// low performance  //
// var romanToInt = function (s) {
//   let store = [];
//   for (let i = 0; i < s.length; i++) {
//     switch (s[i]) {
//       case "I":
//         store.push(1);
//         break;
//       case "V":
//         store.push(5);
//         break;
//       case "X":
//         store.push(10);
//         break;
//       case "L":
//         store.push(50);
//         break;
//       case "C":
//         store.push(100);
//         break;
//       case "D":
//         store.push(500);
//         break;
//       case "M":
//         store.push(1000);
//         break;
//     }
//     if (store[i - 1] < store[i]) {
//       store[i] -= store[i - 1];
//       store[i - 1] = "0"
//     }
//   }
//   return eval(store.join('+'))
// };

// console.log(romanToInt("MCMXCIV"));

///////////////////////////////////////////////// another sol
// var romanToInt = function (s) {
//   let store = [];
//   let sum = 0;

//   for (let i = 0; i < s.length; i++) {
//     switch (s[i]) {
//       case "I": //here
//         store.push(1);
//         break;
//       case "V":
//         store.push(5);
//         break;
//       case "X": //here
//         store.push(10);
//         break;
//       case "L":
//         store.push(50);
//         break;
//       case "C": //here
//         store.push(100);
//         break;
//       case "D":
//         store.push(500);
//         break;
//       case "M":
//         store.push(1000);
//         break;
//     }
//     if (store[i - 1] < store[i]) {
//       sum += store[i] - 2 * store[i - 1];
//     } else {
//       sum += store[i];
//     }
//   }

//   return sum;
// };

// console.log(romanToInt("MCMXCIV"));

// var romanToInt = function (s) {
//   let store = [];
//   let sum = 0;
//   for (let i = 0; i < s.length; i++) {
//     let temp;
//     switch (s[i]) {
//       case "I": //here
//         temp = 1;
//         break;
//       case "V":
//         temp = 5;
//         break;
//       case "X": //here
//         temp = 10;
//         break;
//       case "L":
//         temp = 50;
//         break;
//       case "C": //here
//         temp = 100;
//         break;
//       case "D":
//         temp = 500;
//         break;
//       case "M":
//         temp = 1000;
//         break;
//       default:
//         break;
//     }
//     store[i] = temp;
//     if (store[i - 1] < store[i]) {
//       sum += store[i] - 2 * store[i - 1];
//     } else {
//       sum += store[i];
//     }
//   }

//   return sum;
// };

// console.log(romanToInt("MCMXCIV"));

////////////////// better than
// var romanToInt = function (s) {
//   let store = [];
//   let sum = 0;
//   s.split("").forEach((element, i) => {
//     let temp;
//     switch (element) {
//       case "I":
//         temp = 1;
//         break;
//       case "V":
//         temp = 5;
//         break;
//       case "X":
//         temp = 10;
//         break;
//       case "L":
//         temp = 50;
//         break;
//       case "C":
//         temp = 100;
//         break;
//       case "D":
//         temp = 500;
//         break;
//       case "M":
//         temp = 1000;
//         break;
//       default:
//         break;
//     }
//     store[i] = temp;
//   });

//   for (let i = 0; i < store.length; i++) {
//     if (store[i] < store[i + 1]) {
//       sum -= store[i];
//     } else {
//       sum += store[i];
//     }
//   }
//   return sum;
// };

// var romanToInt = function (s) {
//   let myObj = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let store = [];
//   let sum = 0;
//   let prev = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (myObj[s[i - 1]] < myObj[s[i]]) {
//       sum += myObj[s[i]] - 2 * myObj[s[i - 1]];
//     } else {
//       sum += myObj[s[i]];
//     }
//     prev = store[i];
//   }
//   return sum;
// };
// let start = performance.now();

// console.log(romanToInt("LVIII"));

// let end = performance.now();
// console.log(end - start);

// let arr = [1, 2, 3, 4, 5];
// // let anotherArr = arr.toReversed();
// let anotherArr = arr.reverse();

// console.log(anotherArr);

// console.log(arr);

// const sum = arr.reduce((acc, val) => {
//   setTimeout(() => {
//     acc += val;
//   }, 0);
//   return acc;
// }, 0);

// console.log(sum);

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
// var kWeakestRows = function (mat, k) {
//   let arr = [];
//   let newArr = [];
//   for (let i = 0; i < mat.length; i++) {
//     arr[i] = {
//       val: mat[i].reduce((acc, val) => {
//         acc += val;
//         return acc;
//       }, 0),
//       index: i,
//     };
//   }
//   arr.sort((a, b) => {
//     return a.val - b.val;
//   });
//   for (let i = 0; i < k; i++) {
//     newArr[i] = arr[i].index;
//   }
//   return newArr;
// };

// (mat = [
//   [1, 1, 0, 0, 0],
//   [1, 1, 1, 1, 0],
//   [1, 0, 0, 0, 0],
//   [1, 1, 0, 0, 0],
//   [1, 1, 1, 1, 1],
// ]),
//   (k = 3);

// console.log(kWeakestRows(mat, k));

// var kWeakestRows = function (mat, k) {
//   const m = mat.length;
//   const n = mat[0].length;

//   let res = [];
//   let nextInsertIndex = 0;

//   for (let c = 0; c < n && nextInsertIndex < k; c++) {
//     for (let r = 0; r < m && nextInsertIndex < k; r++) {

//       // col by col
//       // If this is the first 0 in the current row.
//       if (mat[r][c] == 0 && (c == 0 || mat[r][c - 1] == 1)) {
//         console.log(mat[r][c]);
//         res[nextInsertIndex] = r;
//         nextInsertIndex++;
//       }
//     }
//   }

//  for (let r = 0; nextInsertIndex < k ; r++) {
//   /// If index i in the last column is 1, this was a full row and
//   // therefore couldn't have been included in the output yet.
//   if (mat[r][n - 1] == 1) {
//     res[nextInsertIndex] = r;
//     nextInsertIndex++;
//   }
// }
//   return res;
// };

// better performance
// var kWeakestRows = function (mat, k) {
//   let m = mat.length;
//   let n = mat[0].length;

//   let res = [];
//   let index = 0;

//   for (let c = 0; c < n && k > index; c++) {
//     for (let r = 0; r < m && k > index; r++) {
//       if (mat[r][c] == 0 && (c == 0 || mat[r][c - 1])) {
//         res[index] = r;
//         index++;
//       }
//     }
//   }

//   for (let r = 0; r < m && k > index; r++) {
//     if (mat[r][n - 1] == 1) {
//       res[index] = r;
//       index++;
//     }
//   }

//   return res;
// };

// let mat = [
//   [1, 1, 0, 0, 0],
//   [1, 1, 1, 1, 1],
//   [1, 0, 0, 0, 0],
//   [1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1], // out of condition in loop
// ];

// let k = 3;

// console.log(kWeakestRows(mat, k));
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// var removeDuplicateLetters = function (s) {
//   let obj = {};
//   let arr = [];
//   for (let i = 0; i < s.length; i++) {
//     if (obj[s[i]] == undefined) {
//       obj[s[i]] = i;
//       arr.push(s[i]);
//     }
//   }
//   arr.sort((a, b) => {
//     return a.charCodeAt() - b.charCodeAt();
//   });
//   return arr.join("");
// };
// console.log("c".charCodeAt())

// var findMedianSortedArrays = function (nums1, nums2) {
//   let merge = [...nums1, ...nums2];
//   merge.sort((a, b) => {
//     return a - b;
//   });
// console.log(merge)
//   if (merge.length % 2 == 0) {
//     let mid = merge.length / 2;

//     return parseFloat((merge[mid] + merge[mid - 1]) / 2);
//   } else {

//     let mid = Math.ceil(merge.length / 2);

//     return parseFloat(merge[mid - 1] );
//   }
// };

// console.log(findMedianSortedArrays([1, 3], [2 , 4 , 5 , 8 ]));

// var fMedianSortedArrays = function (nums1, nums2) {
//   let merge = [];
//   let n = nums1.length;
//   let m = nums2.length;
//   let index1 = 0;
//   let index2 = 0;
//   let index = 0;

//   while (index1 < n && index2 < m) {
//     if (nums1[index1] < nums2[index2]) {
//       merge[index] = nums1[index1++];
//       index++;
//     } else {
//       merge[index] = nums2[index2++];
//       index++;
//     }
//   }

//   while (index1 < n) {
//     merge[index] = nums1[index1++];
//     index++;
//   }
//   while (index2 < m) {
//     merge[index] = nums2[index2++];
//     index++;
//   }

//   console.log(merge);

//   if (merge.length % 2 == 0) {
//     let mid = merge.length / 2;

//     return parseFloat((merge[mid] + merge[mid - 1]) / 2);
//   } else {
//     let mid = Math.ceil(merge.length / 2);

//     return parseFloat(merge[mid - 1]);
//   }
// };

// console.log(fMedianSortedArrays([1, 3, 5, 8], [2, 4]));
const timestamp = 1693447764983;
const date = new Date(timestamp);

// Extract the month and day components
const month = date.getMonth() + 1; // Adding 1 because getMonth() returns values from 0 to 11
const day = date.getDate();

console.log(`Month: ${month}, Day: ${day}`);