// const fruit = [
//     'apple',        // 0
//     'pear',         // 1
//     'mango',         // 2
//     'melon',
//     'banana',
//     'orange'
// ]

// console.log( fruit );

// // find the ul.fruit-list on the page
// // and put it in a constant ul
// const ul = document.querySelector('.fruit-list');

// // set the ul's innerHTML to
// // <li>Hello, world</li>
// ul.innerHTML = '<li>Hello, world</li>';

// // ADD to the ul's innerHTML this:
// // <li>Another list item</li>
// ul.innerHTML += '<li>Another list item</li>'

// // something = something + smth_else

// // something += smth_else

// //                   '<li>mango</li>'
// // ul.innerHTML += '<li>' + fruit[0] + '</li>'
// // ul.innerHTML += '<li>' + fruit[1] + '</li>'
// // ul.innerHTML += '<li>' + fruit[2] + '</li>'

// for (let i = 0; i < fruit.length; i++) {
//     ul.innerHTML += '<li>' + fruit[i] + '</li>'
//     break;
//     continue;
// }

// fruit.forEach(

//     (value, index) => {
//         ul.innerHTML += '<li>' + value + '</li>'
//     }

// )

// fruit.forEach((value) => {
//     // do something with the value
// })

// // running every returns true if every call of the passed function
// // returns a truthy value
// // so whenever a function does NOT return a truthy value, it stops
// const result_of_every = fruit.every(

//     (value, index) => {
//         ul.innerHTML += '<li>' + value + '</li>'

//         return false;
//     }

// )

// // running some returns true if at least one call of the passed function
// // returns a truthy value
// // so whenever a function returns a truthy value, it stops
// const result_of_some = fruit.some(

//     (value, index) => {
//         ul.innerHTML += '<li>' + value + '</li>'

//         return true;
//     }

// )

// // running map returns another array made from return values
// // of the passed function
// const result_of_map = fruit.map(

//     (value, index) => {
//         return '<li>' + index + '. ' + value + '</li>';
//     }
// )

// console.log( result_of_map );

// console.log( fruit.join(' ||| ') );

// console.log( result_of_map.join('') )

// ul.innerHTML = result_of_map.join('');

console.log( document.querySelector('.fruit-list li') );
console.log( document.querySelectorAll('.fruit-list li') );

const lis = document.querySelectorAll('.fruit-list li');

lis.forEach(

    (li) => {
        console.log( li.innerHTML )
    }

)