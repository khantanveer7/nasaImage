import React, { useEffect, useState } from 'react';
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import Cards from './Cards';
import axios from '../axios'
import { Image } from '@material-ui/icons';



const Search = () => {

    const [input, setInput] = useState("Earth");
    const [datas, setDatas] = useState([])

    const search = (e) => {
        e.preventDefault();

    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`https://images-api.nasa.gov/search?q=${input}&media_type=image`);
            // setDatas(request.data.collection.items[0].links);
            setDatas(request.data.collection.items);
        }
        fetchData();
    }, [input])
    return (
        <div className="serach">
            <form onSubmit={search} action="submit">
                <div className="search__input">
                    <SearchIcon />
                    <input type="search" value={input} onChange={e => setInput(e.target.value)} placeholder="Search" />
                </div>
            </form>
        </div>
    )
}

export default Search
