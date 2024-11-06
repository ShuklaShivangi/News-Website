import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';

const Newsapp = () => {

    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null);
    const API_KEY = "c062f71442fa4b20bcfb8dd867d99671";

    const getData = async() => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles);
    }

    useEffect(()=>{
        getData()
    })

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    const userInput = (event) =>{
        setSearch(event.target.value)
    }

    return (
        <div>
            <nav>
                <div>
                    <h1>LATEST NEWS</h1>
                </div>
            
                <div className="searchbar">
                    <input type="text" placeholder="Search" value={search} onChange={handleInput} />
                    <button onClick={getData} className="search-btn">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </nav>
            <br></br>
            <hr></hr>
            <div className="categoryBtn">
                <button onClick={userInput} value="headlines">Top Headlines</button>
                <button onClick={userInput} value="world">World</button>
                <button onClick={userInput} value="technology">Technology</button>
                <button onClick={userInput} value="sports">Sports</button>
                <button onClick={userInput} value="business">Business</button>
                <button onClick={userInput} value="entertainment">Entertainment</button>
                <button onClick={userInput} value="health">Health</button>
            </div>
            <hr></hr>
            <div>
            {newsData? <Card data={newsData}/> : null}
            </div>
        </div>
    );
};

export default Newsapp;
