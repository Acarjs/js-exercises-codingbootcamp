import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './components/Weather/Weather'
import { Counter } from './components/Counter/Counter'

function App() {
    const name = "Matthew"

    const element = <strong>, have a nice <em>day</em></strong>

    return (
        <div>
            Hello, {name}{element}
            {/* { Weather({status: "horrible"}) } */}
            <Weather status="horrible" time="today"/>
            <Counter/>
        </div>
    )
// //   const myName = "Bob"
// //   const myText = `My name is ${myName}`
// //   const myElement = <p>{myText}</p>
}

export default App
