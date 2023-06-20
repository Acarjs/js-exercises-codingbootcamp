import { useState } from 'react'
import './App.css'
import Box from './Box'
import Button from './Button';
import ArrowButton from './ArrowButton';

function App() {

  const [boxTop, setBoxTop] = useState(50);
  const [boxLeft, setBoxLeft] = useState(0);

  const buttons = [
    {
      label: "DOWN",
      change: 10,
      value: boxTop,
      changeFunction: setBoxTop,
      bgColor: 'red'
    },
    {
      label: "UP",
      change: -10,
      value: boxTop,
      changeFunction: setBoxTop,
      bgColor: 'green'
    },
    {
      label: "LEFT",
      change: -10,
      value: boxLeft,
      changeFunction: setBoxLeft,
      bgColor: 'blue'
    },
    {
      label: "RIGHT",
      change: 10,
      value: boxLeft,
      changeFunction: setBoxLeft,
      bgColor: 'orange'
    }
  ]

  return (
    <>
      <Box
        boxTop={ boxTop }
        boxLeft={ boxLeft }
      />

      {
        buttons.map(button => <ArrowButton { ...button } />)
      }

      <br />

      <ArrowButton
        label="DOWN"
        change={ 10 }
        value={ boxTop }
        changeFunction={ setBoxTop }
        bgColor="red"
      />

      <ArrowButton
        label="UP"
        change={ -10 }
        value={ boxTop }
        changeFunction={ setBoxTop }
        bgColor="green"
      />

      <ArrowButton
        label="LEFT"
        change={ -10 }
        value={ boxLeft }
        changeFunction={ setBoxLeft }
        bgColor="blue"
      />

      <ArrowButton
        label="RIGHT"
        change={ 10 }
        value={ boxLeft }
        changeFunction={ setBoxLeft }
        bgColor="orange"
      />

      <br />

      <Button
        onClick={ () => setBoxTop(boxTop + 10) }
        label="DOWN"
      />

      <Button
        onClick={ () => setBoxTop(boxTop - 10) }
        label="UP"
      />

      <Button
        onClick={ () => setBoxLeft(boxLeft - 10) }
        label="LEFT"
      />

      <Button
        onClick={ () => setBoxLeft(boxLeft + 10) }
        label="RIGHT"
      />

    </>
  )
}

export default App
