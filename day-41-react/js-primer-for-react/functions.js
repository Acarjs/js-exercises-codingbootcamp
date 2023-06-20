// ES5 function declaration
function foo() {

}

// ES6+ function declaration
const foo = () => {

}


() => {

}

// with arguments
(a, b, c) => {

}

// with one argument
(a) => {

}

// with one argument
a => {

}

// returns something
(a, b) => {
    return a + b;
}

// returns something, does not do anything else
(a, b) => a + b;

// with one argument, returns something
(a) => {
    return a + 1;
}

// with one argument, returns something
a => a + 1;


// one argument - book object
// returns <Book /> component
book => <Book />


const bookToComponent = book => <Book />

bookToComponent(someBook)

const funcThatUsesAFunc = (someFunc) => {
    someFunc()
}

funcThatUsesAFunc( () => {

} )

const data = [];

// arrays have a .map method which takes a function
// as its first argument
data.map( () => { } )

// the function
foo

// calling the function - its return value
foo()


const drill = () => {
    return 'hole';
}


drill   // drill function

drill() // hole