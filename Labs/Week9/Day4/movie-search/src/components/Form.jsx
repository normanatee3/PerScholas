import { useState, useEffect } from "react"

function Form(props) {
    const [formData, setFormData] = useState({searchTerm: '',})

    const handleChange = (event) =>{
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()

        props.movieSearch(formData.searchTerm)
    }


    return (
        <>
            <form  onSubmit={handleSubmit}>
                <input className="form" type="text" name="searchTerm" onChange={handleChange} value={formData.searchTerm} />
                <input className="form" type="submit" value="Search Movie" />
            </form>



        </>
    )
}

export default Form