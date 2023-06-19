export default function Book({ title, price }) {

    return (
        <li>
            { title }
            <br />
            { price } &euro;
        </li>
    )

}