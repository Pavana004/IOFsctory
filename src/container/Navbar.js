import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import logo from "../assets/logo.png";
import { AiOutlineClose } from "react-icons/ai";
Modal.setAppElement('#root');


const Navbar = () => {


    const [open2, setOpen2] = useState(false);
    const [insert, setInsert] = useState({
        movie_name: "",
        year: "",
        plot: "",
        poster: "",
        actor: "",
        actor_dob: "",
        actor_gender: "",
        actor_bio: "",
        producer: "",
        producer_dob: "",
        producer_gender: "",
        producer_bio: "",
    })


    const handlechange = ({target:{name,value}}) => {

        setInsert({...insert,[name]:value})

    }

    const handlesubmit = async (e) =>{
       e.preventDefault()
        try {
            const res = await axios.post("http://localhost:5000/insert",insert);
             console.log(res);
           

        } catch (error) {
             alert("error")
        }
    }


    return (
        <nav classname="navbar">
            <div classname="container">
                <Link classname="navbar-brand" to="#">
                    <img src={logo} alt="imdb" width="80" height="80" />
                </Link>
                <div className="button-class">
                    <button className='btn me-2' onClick={() => setOpen2(true)}>ADD</button>
                </div>
                <Modal isOpen={open2} onRequestClose={() => setOpen2(false)} >
                    <div className='closebutton'>
                        <AiOutlineClose onClick={() => setOpen2(false)} size={20} />
                    </div>
                    <form onSubmit={handlesubmit}>
                        <div className='row'>
                            <div className="col-md-3 ">
                                <label className="form-label">Movie_name</label>
                                <input
                                    type="text"
                                    name='movie_name'
                                    className='form-control'
                                    value={insert.movie_name}
                                    placeholder='movie-name'
                                    onChange={handlechange} />
                            </div>
                            <div className="col-md-3 ">
                                <label className="form-label">Year</label>
                                <input
                                    type="text"
                                    name='year'
                                    className='form-control'
                                    value={insert.year}
                                    placeholder='year'
                                    onChange={handlechange} />
                            </div>
                            <div className="col-md-3 ">
                                <label className="form-label">Plot</label>
                                <input
                                    type="text"
                                    name='plot'
                                    className='form-control'
                                    value={insert.plot}
                                    placeholder='plot'
                                    onChange={handlechange} />
                            </div>
                            <div className="col-md-3 ">
                                <label className="form-label">Poster-Url</label>
                                <input
                                    type="text"
                                    name='poster'
                                    className='form-control'
                                    value={insert.poster}
                                    placeholder='poster'
                                    onChange={handlechange} />
                            </div>
                            <div className="col-md-3 ">
                                <label className="form-label">Actor_name</label>
                                <input
                                    type="text"
                                    name='actor'
                                    className='form-control'
                                    value={insert.actor}
                                    placeholder='actor'
                                    onChange={handlechange} />
                            </div>
                            <div className="col-md-3 ">
                                <label className="form-label">Actor_DOB</label>
                                <input
                                    type="text"
                                    name='actor_dob'
                                    className='form-control'
                                    value={insert.actor_dob}
                                    placeholder='actor_dob'
                                    onChange={handlechange} />
                            </div>
                            <div className="col-md-3 ">
                                <label className="form-label">Actor_gender</label>
                                <input
                                    type="text"
                                    name='actor_gender'
                                    className='form-control'
                                    value={insert.actor_gender}
                                    placeholder='actor_gender'
                                    onChange={handlechange} />
                            </div>
                            <div className="col-md-3 ">
                                <label className="form-label">Actor_bio</label>
                                <input
                                    type="text"
                                    name='actor_bio'
                                    className='form-control'
                                    value={insert.actor_bio}
                                    placeholder='actor_bio'
                                    onChange={handlechange} />
                            </div>
                            <div className="col-md-3 ">
                                <label className="form-label">producer</label>
                                <input
                                    type="text"
                                    name='producer'
                                    className='form-control'
                                    value={insert.producer}
                                    placeholder='producer'
                                    onChange={handlechange} />
                            </div>
                            <div className="col-md-3 ">
                                <label className="form-label">Producer_dob</label>
                                <input
                                    type="text"
                                    name='producer_dob'
                                    className='form-control'
                                    value={insert.producer_dob}
                                    placeholder='movie-name'
                                    onChange={handlechange} />
                            </div>
                            <div className="col-md-3 ">
                                <label className="form-label">Producer_gender</label>
                                <input
                                    type="text"
                                    name='producer_gender'
                                    className='form-control'
                                    value={insert.producer_gender}
                                    placeholder='producer_gender'
                                    onChange={handlechange} />
                            </div>
                            <div className="col-md-3 ">
                                <label className="form-label">Producer_bio</label>
                                <input
                                    type="text"
                                    name='producer_bio'
                                    value={insert.producer_bio}
                                    className='form-control'
                                    placeholder='producer_bio'
                                    onChange={handlechange} />
                            </div>
                            <div className="button-class">
                                <button type='submit' className='btn '>Submit</button>
                            </div>
                        </div>
                    </form>
                </Modal>
            </div>
        </nav>
    )
}

export default Navbar