import { useEffect, useState } from "react";

export default function FizzBuzz({numbers}) {
    const [array, setArray] = useState([]);

    useEffect(() => {
        let convertedNumbers = [];

        numbers.forEach(number => {
            if (number % 3 === 0 && number % 5 === 0) {
                convertedNumbers.push('FizzBuzz');
            } else if (number % 3 === 0) {
                convertedNumbers.push('Fizz');
            } else if (number % 5 === 0) {
                convertedNumbers.push('Buzz');
            } else {
                convertedNumbers.push(number);
            }
        });

        setArray(convertedNumbers);
    }, [])

    return (
        array.length > 0 ? 
            <ul>
                {
                    array.map((item, key) => {
                        return <li key={key}>{item}</li>
                    })
                }
            </ul>
        :
        'No numbers loaded...'
    )
}