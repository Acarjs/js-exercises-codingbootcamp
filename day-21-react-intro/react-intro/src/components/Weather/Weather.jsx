import "./Weather.css"

const Weather = (props) => {

    const iAgree = () => {
        console.log("I agree")
    }

    return (
        <>
            <p>The weather is {props.status} {props.time}</p>
            <p>Test</p>
            <button onClick={() => {
                console.log("I agree")
            }}>I agree</button>
        </>
    )
}

export default Weather