const person = {
    name: 'John',
    email: 'john@email.com',
    position: 'accounant',
    company_name: 'Ponzi Accounting Group',
}

const sale = {
    date: '01-01-2020',
    total: 1567.23,
    currency: 'CZK',
    item_count: 6,
}

const newPerson = {
    ...person,
    position: 'boss'
}

// {
//     name: 'John',
//     email: 'john@email.com',
//     position: 'boss',
//     company_name: 'Ponzi Accounting Group',
// }

const goodBooks = [
    'Harry Potter',
    'Lord of the Rings',
    'Game of Thrones'
]

const badBooks = [
    'Twilight'
]

const books = [...badBooks, 'Head 22', ...goodBooks]