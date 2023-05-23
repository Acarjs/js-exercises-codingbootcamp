import { useEffect, useState } from "react"

export const Useless = () => {

    const [data, setData] = useState(null)
    const [dataLoaded, setDataLoaded] = useState(false)

    const url = "https://uselessfacts.jsph.pl/api/v2/facts/random"
    console.log(["rendering", dataLoaded, data])

    const fetchData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        // const number = 5
        // const isItEven = (number % 2 == 0) ? "Yes" : "No"
        console.log(data);
        setData(data)
        setDataLoaded(true)
    }

    useEffect(() => {
        fetchData()
    },[])

    return (
        <>
            {!dataLoaded ?
                <button onClick={fetchData}>Fetch Data</button>
                :
                <p>{data.text}</p>
            }
        </>
    )
}