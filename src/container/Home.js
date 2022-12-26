import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import axios from "axios";
import Navbar from "./Navbar";
import "./home.css";

const Home = () => {

    const [data, setData] = useState([]);

    const fetchdata = async () => {
        try {

            const res = await axios.get("http://localhost:5000/list");
            setData(res.data);

        } catch (error) {
              alert("error");
        }
    }

    useEffect(() => {
        fetchdata()
    }, [])



    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='parents'>
                    {data.map((resdata) => {
                        return (
                            <div className="card"key={resdata._id}>
                            <Link to={`/add/${resdata._id}`} className="tag"> 
                                <img src={resdata.poster} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">{resdata.movie_name}</p>
                                </div>
                                
                            </Link>
                                
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Home