import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'


import 'bootstrap-icons/font/bootstrap-icons.css';

const HomePage = () => {
    const [homeMovies, setHomeMovies] = useState(null)

    const options = {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/titles',
        params: {
            info: 'base_info',
            limit: '5',
            page: '1',
            titleType: 'movie',
            year: '2021',
            list: 'most_pop_movies'
        },
        headers: {
            'X-RapidAPI-Key': '2c086d263emsh94679314f8a1dd9p123a19jsnd5092b9aa43c',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    const getHomeMovies = () => {
        axios.request(options).then(function (response) {
            // console.log(response.data);
            const movieList = response.data
            setHomeMovies(movieList)
        }).catch(function (error) {
            console.error(error);
        });
    }
    useEffect(() => {
        getHomeMovies()
    }, [])

    return (
        <div className="home">
            <h1>Blockbuster strikes back: Now with MERN attitude</h1>
            <div className="contents">
                <div className="content">
                    <h3>Placeholder incase something is wanted here.</h3>
                </div>
                <div className="content">
                    <h3>Placeholder incase something is wanted here.</h3>
                </div>
                <div className="content">
                    <h3>Placeholder incase something is wanted here.</h3>
                </div>
            </div>
            <footer>
                <div className="copyright"><p>© 2028 MERNmusters. All Rights Reserved.</p></div>
                <div className="githubs">
                    <a href="https://github.com/normanatee3" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                    <a href="https://www.linkedin.com/in/norman-taylor-865a531bb/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                    <a href="https://github.com/AyseBKahraman" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                    <a href="" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                    <a href="https://github.com/MNGiit" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                    <a href="https://www.linkedin.com/in/mohammed-n-70690924a/
" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                </div>
            </footer>

        </div>
    );
};

// Export component
export default HomePage;