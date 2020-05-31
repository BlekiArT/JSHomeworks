"use strict"








// const numbers = [1, 2, 3];

// const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers); // [2, 4, 6]


// const users = [
//     { name: 'Mango', isActive: true },
//     { name: 'Poly', isActive: false },
//     { name: 'Ajax', isActive: true },
//   ];
  
//   // Для каждого элемента коллекции (user) вернем значение поля name
//   const names = users.map(user => user.name);
  
//   console.log(names); // ["Mango", "Poly", "Ajax"]

//   const users = [
//     { name: 'Mango', isActive: true },
//     { name: 'Poly', isActive: false },
//     { name: 'Ajax', isActive: true },
//     { name: 'Chelsey', isActive: false },
//   ];
  
//   // Для каждого элемента коллекции (user) проверим поле isActive.
//   // Если оно true, то текущий элемент (user) будет записан в результирующий массив.
//   const activeUsers = users.filter(user => user.isActive);
//   console.log(activeUsers);
  
//   // Для каждого элемента коллекции (user) проверим поле isActive.
//   // Если оно false, то текущий элемент (user) будет записан в результирующий массив.
//   const inactiveUsers = users.filter(user => !user.isActive);
//   console.log(inactiveUsers);



// ex__________________2

const getUsersWithEyeColor = (users, color) => {
     const colorEye = users.filter(user => user.eyeColor === color);
  return colorEye;
}
console.log(getUsersWithEyeColor(users, 'blue')); 













// _________________________________ex3
const getUsersWithGender = (users, gender) => {
    // твой код
  };
  
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]









