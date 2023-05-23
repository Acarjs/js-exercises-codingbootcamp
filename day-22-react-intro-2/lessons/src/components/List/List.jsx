import { useState } from "react";

export function List() {
    const [numbers, setNumbers] = useState([1,2,3,4,5])

    // console.log(numbers.filter((number) => {
    //   return number > 2
    // }))
    // console.log(numbers.map((number) => {
    //   return number * 2
    // }))
    console.log("rendering");
    const addNumber = () => {
      // console.log("Adding number: " + Number(numbers.length + 1))
      const newNumbers = [...numbers]
      // console.log(numbers)
      newNumbers.push(Number(numbers.length + 1))
      // console.log(newNumbers)
      // console.log(numbers == newNumbers);
      setNumbers(newNumbers)
    }

    const removeNumber = (index) => {
      const newNumbers = numbers.filter((number, j) => {
        let keepIt = true
        if (index == j) {
          keepIt = false
        }
        return keepIt

        // faster way to do it ;)
        // return (index != j)
      })
      setNumbers(newNumbers)
    }
    return (
      <div>
        <ul>
          {numbers.map((number, index) => {
            return <li key={index}>
                <strong>{number}</strong>
                <button onClick={() => {
                  // const newNumbers = numbers.filter((number, j) => {
                  //   let keepIt = true
                  //   if (index == j) {
                  //     keepIt = false
                  //   }
                  //   return keepIt

                  //   // faster way to do it ;)
                  //   // return (index != j)
                  // })
                  // setNumbers(newNumbers)
                  removeNumber(index)
                }}>Remove</button>
              </li>
          })}
          {/* <li>2</li> */}
        </ul>
        <button onClick={addNumber}>Add Number</button>
      </div>
    )
  }