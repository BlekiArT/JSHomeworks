"use strict"




// // let body = document.querySelector('body');
// // let header = document.createElement('h2');
// // console.log(header);
// // header.textContent = 'HELLO HOME!';
// // body.prepend(header);
// // console.log(header.textContent);
// // header.style.color = '#534cb6';
// // header.style.fontSize = '20px';

// // let list = document.querySelector('.ingridients')
// // console.log(list);








// // _____________________________ex1_______________________________

//  <ul id="categories">
//   <li class="item">
//     <h2>Животные</h2>

//     <ul>
//       <li>Кот</li>
//       <li>Хомяк</li>
//       <li>Лошадь</li>
//       <li>Попугай</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Продукты</h2>

//     <ul>
//       <li>Хлеб</li>
//       <li>Петрушка</li>
//       <li>Творог</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Технологии</h2>

//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//       <li>Node</li>
//     </ul>
//   </li>
// </ul> 

// // _____________________________ex2_______________________________

// <ul id="ingredients"></ul>

// const ingredients = [
//     'Картошка',
//     'Грибы',
//     'Чеснок',
//     'Помидоры',
//     'Зелень',
//     'Приправы',
//   ];





// //   ______________________ex3_____________________



// const images = [
//     {
//       url:
//         'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'White and Black Long Fur Cat',
//     },
//     {
//       url:
//         'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//     },
//     {
//       url:
//         'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'Group of Horses Running',
//     },
//   ];

//   let ul = document.querySelector('#gallery');
//   console.log(ul);

//       const addToGallery = function (images){
//       for (let index = 0; index < images.length; index++) { 
//       ul.insertAdjacentHTML('afterbegin' , `<li><img src = '${images[index].url}' alt = '${images[index].alt}' width='150'></img></li>` )
//       }
//       ul.style.listStyle = 'none';
//     ul.style.display = 'flex';
//     ul.style.justifyContent = 'space-around'
    
//    }
//    addToGallery(images)
  
  

//   __________________________________ex4_____________________________
//  <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

//  _____________________________ex5_______________________________

 
// let input = document.querySelector('#name-input')








// _____________________________ex6_______________________________

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// /> 

// // _______________________________ex7________________

let input = document.querySelector('#font-size-control');
let span = document.querySelector('#text')

input.addEventListener('input' , () => {
  span.style.fontSize = input.value + 'px'
})

// // ___________________________--8_____________________
//  <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div> 
