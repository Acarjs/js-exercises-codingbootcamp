import { useState } from "react"

export const Form = () => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleQueryChange = (e) => {
        // something
        e.preventDefault()
        // console.log(e.target.value);
        setSearchQuery(e.target.value)
    }

    const submitFunction = (e) => {
        e.preventDefault()
        alert("You'd like to search for word: " + searchQuery)
        // anything you want can happen here
    }

    return (
        <form action="https://www.google.com/search" method="GET" onSubmit={submitFunction}>
            <input type="text" name="q" value={searchQuery} onChange={handleQueryChange}/>
            {/* <textarea>wwfwef</textarea> */}
            {/* <select name="q" value={searchQuery} onChange={handleQueryChange}>
                <option value="dog">Doggo</option>
                <option value="cat">Katto</option>
            </select> */}
            <button>Search</button>
        </form>
    )
}