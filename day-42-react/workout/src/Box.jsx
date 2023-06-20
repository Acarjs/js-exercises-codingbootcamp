import './Box.scss';

export default function Box({ boxTop, boxLeft }) {

    const boxStyle = {
        position: 'absolute',
        top: boxTop,
        left: boxLeft
    }
console.log(boxTop);
console.log(boxLeft);
    return (
        <div
            className="box"
            style={ boxStyle }
        >
            BOX
        </div>
    )

}