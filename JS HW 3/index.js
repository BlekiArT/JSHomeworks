"use strict"


// // ___________________________________________________1___________________________________________________



// // const user = {
// //   name: 'Mango',
// //   hobby: 'HTML', 
// //   age: 20,
// //   premium: true,

// // }
// // user.mood = 'happy';
// // user.hobby = 'skydiving';


// // for (key in object); {
// //   console.log("keys: ", key)
  
// // }



// // ______________________________________________________-2____________________________________________________


// const countProps = function(obj) {
//   return Object.keys(obj).length;
// return 
// };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(countProps({})); // 0
  
//   console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
//   console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3



// // ___________________________________________________________3____________________________________________________


//   const findBestEmployee = function(employees){
//     let keysArr = Object.keys(employees);
//     let valueArr = Object.values(employees);
//     let maxValue = 0;

//     for (let i = 0; i < valueArr.length; i++){
//       if (valueArr[i] > maxValue){
//         maxValue = valueArr[i]

//       }

//     }
//      for (key in employees){
//        console.log(key);
//        if (employees [key] == maxValue){

//         console.log(`the hardest worker is: ${key}`);
        
//        }
       
//      }
//   }
  
//   console.log(
//     findBestEmployee({
//       ann: 29,
//       david: 35,
//       helen: 1,
//       lorence: 99,
//     }),
//   ); // lorence
  
//   console.log(
//     findBestEmployee({
//       poly: 12,
//       mango: 17,
//       ajax: 4,
//     }),
//   ); // mango
  
//   console.log(
//     findBestEmployee({
//       lux: 147,
//       david: 21,
//       kiwi: 19,
//       chelsy: 38,
//     }),
//   ); // lux
//   _________________________________________________________________-4____________________________________________
// const countTotalSalary = function(employees) {
//   let total = 0;
//   const salaryArr = Object.values(employees);
//   console.log(salaryArr);
//    for(let element in salaryArr){
//      total += salaryArr[element]
//   }
//   return total
  
// };


// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400
// __________________________________________________5___________________________________________
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function(arr, prop) {
//   let newArr = [];
// for (let i = 0; i < arr.length; i++){
//   newArr.push(arr[i][prop]);

//    }
//    return newArr;
// };


// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []
// _______________________________________________________6_____________________________________




const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(allProducts, productName) {
  let total = 0;
  for( let i = 0 ;  i < allProducts.length; i++) {
    if (allProducts.name == productName){
      total = allProducts[i].price * allProducts[i].quantity
    }
  }
  return total;
};


console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800