let my_var = 1;
2 + 3;
123;
'Jan' + ' Polak';
'John Doe';

const sayName = (name) => {
    return 'Hello ' + name;
}

sayName('John Doe');

[ 1 , 2 , 213 , 'John Doe' ]

[1,2,213,'John Doe']

const my_array = [
    1,      // index 0
    2,      //       1
    213,    //       2
    'John Doe',

    11111,

    {

    },

    // 6
    (name) => {
        return 'Hello ' + name;
    },

    [               // index 7
        63, // 0
        'Hello', // 1
        'Whatever', // 2
        [
            'world'
        ]
    ],

    sayName('John Doe') // 'Hello John Doe' is the actual element
                        // == the RETURN VALUE of the function call
]



const result = my_array[2] + 100;

console.log(my_array[2]);


console.log(my_array[2]);
console.log(my_array[2]);


console.log(my_array[3]);

console.log(my_array[8]); // Hello John Doe

my_array[6]('John');

my_array[7]
my_array[7][1]

console.log( my_array[7][3][0] );


let number = 213;

console.log( number );

number = 214;

console.log( my_array[2] );

my_array[2] = 214;

my_array[6]('John');

// my_array[6] = 'Nonono';

// my_array[6]('John'); // error, calling string as a function

my_array[9] = 'New value';

my_array[10] = 'Yet another value';



my_array[ my_array.length ] = 'New one';
my_array[ my_array.length ] = 'New one';
my_array[ my_array.length ] = 'New one';
my_array[ my_array.length ] = 'New one';

my_array.push('Element pushed to the end');
my_array.unshift('Element placed at the beginning');
my_array.splice(2, 0, 'Added to position 2');

const removed_element = my_array.pop();
console.log(removed_element);


const removed_from_beginning = my_array.shift();


my_array.shift()
my_array.shift()
my_array.shift()
my_array.shift()
my_array.shift()
my_array.shift()
my_array.shift()

my_array.splice(4, 1);

console.log( my_array );

console.log( my_array.length )