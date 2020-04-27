// "use strict"

//  const logItems = (array) => {
//    for(let i=0; i<array.length; i++) {
//        console.log(`${array[i]} - ${i+1}`);
       
//    }
   
    
// }


  
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  

  
// _________________________________________________2______________________________________________


// const calculateEngravingPrice = function(message, pricePerWord) {
//        return message.split(' ').length * pricePerWord
// };
  
  
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       10,
//     ),
//   ); 
  
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       20,
//     ),
//   ); // 160
  
//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
//   ); // 240
  
//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
//   ); // 120

// // ____________________________________________3________________________________________________________-
// const findLongestWord = function (string){
// let array = string.split(' ');







// let longestWord = 0;
// let word;
// for(let i = 0; i < array.length; i++) {
//     if(array[i].length > longestWord) {
//         longestWord = array[i].length;
//         word = array[i];
//     }
// }
// console.log(word);


// }


// findLongestWord("The quick brown fox jumped over the lazy dog");





// //   _____________________________________________________4______________________________________________________

// const formatString = function(string) {
//     if (string.length > 40 ){
//       string.splice(0, 40) + '...';
//        return;
//     }
//     else {
        
//     }
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//   // вернется оригинальная строка
  
//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//   // вернется форматированная строка
  
//   console.log(formatString('Curabitur ligula sapien.'));
//   // вернется оригинальная строка
  
//   console.log(
//     formatString(
//       'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//     ),
//   );
//   // вернется форматированная строка

// //   _____________________________________________________5__________________________________________________

const checkForSpam = function(message) {
 let newMess = message.toLowerCase().split(" ");
 return newMess.includes("spam");
}
  console.log(word);

  }
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
// //   ______________________________________6____________________________________________________________________

