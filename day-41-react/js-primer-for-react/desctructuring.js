const person = {
    name: 'John',
    email: 'john@email.com',
    position: 'accounant',
    company_name: 'Ponzi Accounting Group',
}

const { name } = person;

// I now have a const name with value 'John'

const { name: personName } = person;

// I now have a const personName with value 'John'

const { email, ...lessImportantStuff } = person;

// I now have a const email with value 'john@email.com'
// I also have a const lessImportantStuff with value
// {
//     name: 'John',
//     position: 'accounant',
//     company_name: 'Ponzi Accounting Group',
// }

const personArray = [ 'John', 'john@email.com', 'accountant', 'Ponzi Accounting Group' ]

const [firstName, emailAddress, position, company] = personArray;

const [aName] = personArray

const [nameOfPerson, ...otherStuff] = personArray

// I now have a const nameOfPerson with value 'John'
// I also have a const otherStuff with value ['john@email.com', 'accountant', 'Ponzi Accounting Group']
