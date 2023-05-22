import { useState } from "react"

export const Counter = () => {

    const [noClicks,setNoClicks] = useState(0)

    const increaseClickCount = () => {
        console.log("increasing click count");
        // noClicks = noClicks + 1 - !!NO!!
        setNoClicks(noClicks + 1)
    }

    console.log("rendering")

    return (
        <button onClick={increaseClickCount}>
            This button was clicked {noClicks} time(s)
        </button>
    )
}