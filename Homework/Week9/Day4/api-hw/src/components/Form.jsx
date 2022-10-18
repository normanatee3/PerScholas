import { useState, useEffect } from "react"

function Form(props) {
    const [formData, setFormData] = useState({ fixedPage: 0 })

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        props.gameSearch(formData.fixedPage)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input className="form" required  type="number" name="fixedPage" onChange={handleChange} value={formData.fixedPage} />
                <input className="form" type="submit" value="Jump to Page" />
            </form>
            <h1>GAME LIBRARY</h1>
            <h2>Page{props.page}</h2>
            <div className="buttons">
                <div>
                    <button onClick={props.lastGame}>{"<"}</button>
                </div>
                <div>
                    <button onClick={props.nextGame}>{">"}</button>
                </div>

            </div>
            <hr />


        </>
    )
}

export default Form