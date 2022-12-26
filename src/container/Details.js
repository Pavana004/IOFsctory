import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios"
import Navbar from "./Navbar";

const Details = () => {

  const info = useLocation();
  const [open, setOpen] = useState(false);
  const id = info.pathname.split("/")[2];
  const [movieInfo, setMovieInfo] = useState([]);
  const [updatemovie,setUpdatemovie] = useState({
    actor: "",
    producer: "",
})


  const fetchdata = async () => {
    try {

      const res = await axios.get("http://localhost:5000/find/" + id);
      setMovieInfo(res.data);


    } catch (error) {
      alert("error");
    }
  }

  useEffect(() => {
    fetchdata()
  }, [])


  const handlechange = ({target:{name,value}}) => {

    setUpdatemovie({...updatemovie,[name]:value})

}


 const handleSubmit =async ()=>{
     try {
      const res = await axios.put("http://localhost:5000/update/" + id);
      console.log(res)

     } catch (error) {
          
     }
 }

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='top'>
          <div className="button-class">
            <button className='btn' onClick={() => setOpen(true)} >EDIT</button>
          </div>
          <Modal isOpen={open} onRequestClose={() => setOpen(false)} >
                    <div className='closebutton'>
                        <AiOutlineClose onClick={() => setOpen(false)} size={20} />
                    </div>
                    <form onSubmit={handleSubmit}  >
                        <div className='row'>
                            <div className="col-md-3 ">
                                <label className="form-label">Actor_name</label>
                                <input
                                    type="text"
                                    name='actor'
                                    className='form-control'
                                    value={updatemovie.actor}
                                    placeholder='actor-name'
                                    onChange={handlechange} />
                            </div>
                            <div className="col-md-3 ">
                                <label className="form-label">Producer_name</label>
                                <input
                                    type="text"
                                    name='producer'
                                    className='form-control'
                                    value={updatemovie.producer}
                                    placeholder='producer_name'
                                    onChange={handlechange} />
                            </div>
                            <div className="button-class">
                                <button type='submit' className='btn '>Submit</button>
                            </div>
                        </div>
                    </form>
                </Modal>
          <h4>ACTORS</h4>
          <div className="card1" >
            <div className='row'>
              <div className='col'>
                <h5 className="card-text">ACTORS NAME : {movieInfo.actor}</h5>
                <br />
                <h5 className="card-text">ACTORS DOB : {movieInfo.actor_dob}</h5>
                <br />
              </div>
              <div className='col'>
                <h5 className="card-text">GENDER : {movieInfo.actor_gender}</h5>
                <br />
                <h5 className="card-text">BIO : {movieInfo.actor_bio}</h5>
              </div>
            </div>
          </div>
          <br />
          <br />
          <h4>MOVIES</h4>
          <div className="card1" >
            <div className='row'>
              <div className='col'>
                <img src={movieInfo.poster} className="card-img" alt="..." />
              </div>
              <div className='col'>
                <h5 className="card-text">MOVIE NAME : {movieInfo.movie_name}</h5>
                <br />
                <h5 className="card-text">RELEASE : {movieInfo.year}</h5>
                <br />
                <h5 className="card-text">PLOT : {movieInfo.plot}</h5>
              </div>
            </div>
          </div>
          <br />
          <br />
          <h4>PRODUCERS</h4>
          <div className="card1" >
            <div className='row'>
              <div className='col'>
                <h5 className="card-text">PRODUCERS NAME :{movieInfo.producer}</h5>
                <br />
                <h5 className="card-text">PRODUCERS DOB :{movieInfo.producer_dob}</h5>
                <br />
              </div>
              <div className='col'>
                <h5 className="card-text">GENDER :{movieInfo.producer_gender}</h5>
                <br />
                <h5 className="card-text">BIO :{movieInfo.producer_bio}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details