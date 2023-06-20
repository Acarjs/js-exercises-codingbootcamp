export default function ArrowButton({
    label,
    change,
    value,
    changeFunction,
    bgColor
}) {

    return (
        <button
            onClick={ () => changeFunction(value + Number(change)) }
            style={ { backgroundColor: bgColor } }
        >
            { label }
        </button>
    )
}