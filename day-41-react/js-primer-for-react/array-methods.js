const books = [{ }, { }, { }]; // array of book objects

const components = books.map(book => <Book />)

// value of components:
[<Book />, <Book />, <Book />]



const numbers = [1, 2, 3, 4]

const sumOfNumbers = numbers.reduce((carry, number) => {
    return carry + number;
}, 0)

// sumOfNumbers === 10

const titles = [
    'Harry Potter',
    'Lord of the Rings',
    'Game of Thrones'
]

const customerInfo = titles.reduce((carry, title) => {

    return carry.purchases.push(title);

}, {
    customer: 'Jan',
    balance: 123.45,
    purchases: []
})


// value of customerInfo:
// {
//     customer: 'Jan',
//     balance: 123.45,
//     purchases: [
//         'Harry Potter',
//         'Lord of the Rings',
//         'Game of Thrones'
//     ]
// }

titles
.filter(title => {
    return title.match(/of/);
})
.map(title => <Title />)
.reduce(component => {
    // ...
})