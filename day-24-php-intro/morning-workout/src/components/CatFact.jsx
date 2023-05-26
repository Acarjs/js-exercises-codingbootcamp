import {useState, useEffect} from 'react'

const CatFact = () => {

    const [data, setData] = useState(null)
    const [dataLoaded, setDataLoaded] = useState(false)

    const fetchData = async () => {
        const response = await fetch('http://www.home.test/day-25-requests/morning-workout/catfact.php')
        const responseData = await response.json()
        setData(responseData)
        setDataLoaded(true)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {!dataLoaded ?
                <p>Loading</p> :
                <p>{data.fact}</p>
            }
            <br />
            <button onClick={() => {
                // might be useful if we WANT the user to know
                // the code is working on it => they don't think
                // nothing is happening and don't try to press the button
                // more times than needed
                setDataLoaded(false)
                fetchData()
            }}>New Fact</button>
        </div>
    )
}

export default CatFact