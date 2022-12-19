import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import "../container/home.css";
import mainImg from "../assets/img1.jpg";
import Img from "../assets/img2.jpg";
import Contacts from './Contacts';
import Modal from "react-modal";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { AiOutlineClose } from "react-icons/ai";
import Giveaway from './Giveaway';
import Pettable from './Pettable';


Modal.setAppElement('#root');





function Home() {

    const [open, setOpen] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [view, setView] = useState("dogs");


    const SignupSchema = Yup.object().shape({
        pettype: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        breed: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        number: Yup.string()
            .min(1, 'Too Short!')
            .max(15, 'Too Long!')
            .required('Required'),

    });


    return (
        <>
            <Navbar />
            <div className='main mt-5 p-5' id='home'>
                <div className='container'>
                    <div className='row'>
                        <div className='col '>
                            <h2 className='restitle'>Welcome to the Animal Shelter !</h2>
                            <br />
                            <p className="respra">Glad that you care for the animals so much.We make sure that you'll not repent your decision
                                of adopting your favorite pet !!  </p>
                            <div className='col '>
                                <img src={mainImg} alt="PetImage" className='hideimage' />
                            </div>
                            <div className="b1">
                                <button type='button' className='btn' onClick={() => setOpen(true)}>Adopt</button>
                                <button type='button' className='btn bg-secondary ' onClick={() => setOpen3(true)}>What all pets do we have ?</button>
                            </div>
                            {/* modal for What all pets do we have ?*/}

                            <Modal isOpen={open3} onRequestClose={() => setOpen3(false)} >
                                <div className='closebutton'>
                                    <AiOutlineClose onClick={() => setOpen3(false)} size={20} />
                                </div>
                                <div className='fromfield'>
                                    <h2 className='headtitle'>What all pets do we have ?</h2>
                                    <br />
                                    <div className='hidetable'>
                                        <h6 onClick={() => setView("dogs")}
                                            style={{ color: view === "dogs" ? "blue" : "" }} >DOGS </h6>

                                        <h6 onClick={() => setView("cats")}
                                            style={{ color: view === "cats" ? "blue" : "" }}>CATS</h6>
                                    </div>
                                    {view === "dogs" ? <Pettable /> : <Pettable />}

                                </div>
                            </Modal>
                            {/* modal for Adopt*/}
                            <Modal isOpen={open} onRequestClose={() => setOpen(false)}>
                                <div className='closebutton'>
                                    <AiOutlineClose onClick={() => setOpen(false)} size={20} />
                                </div>
                                <div className='fromfield'>
                                    <h2 className='headtitle'>Adopt a pet</h2>
                                    <br />
                                    <br />
                                    <Formik
                                        initialValues={{
                                            pettype: "",
                                            breed: "",
                                            firstName: '',
                                            email: '',
                                            number: '',
                                        }}
                                        validationSchema={SignupSchema}
                                        onSubmit={(values, { resetForm }) => {
                                            localStorage.setItem("data", JSON.stringify(values));
                                            resetForm({ values: "" })
                                        }}
                                    >
                                        {({ errors, touched }) => (
                                            <Form>
                                                <h5 className='headtitle'>What pet do you want to adopt ?</h5>
                                                <br />
                                                <div className="col-md-4 ">
                                                    <label className="form-label">Pet Type</label><span className='star'>*</span>
                                                    <Field name="pettype" as="select" className="form-select">
                                                        <option value="">Choose...</option>
                                                        <option value="Dog">Dog</option>
                                                        <option value="Cat">Cat</option>
                                                    </Field>
                                                    {errors.pettype && touched.pettype ? (
                                                        <div className='error'>{errors.pettype}</div>
                                                    ) : null}
                                                </div>
                                                <br />
                                                <div className="col-md-4 ">
                                                    <label className="form-label">Breed</label><span className='star'>*</span>
                                                    <Field name="breed" as="select" className="form-select">
                                                        <option value="">Choose...</option>
                                                        <option value="Lab">Lab</option>
                                                        <option value="PersianCat">Persian cat</option>
                                                    </Field>
                                                    {errors.breed && touched.breed ? (
                                                        <div className='error'>{errors.breed}</div>
                                                    ) : null}
                                                </div>
                                                <br />
                                                <br />
                                                <h5 className='headtitle'>Please fill in your details</h5>
                                                <br />
                                                <div className="col-md-4 ">
                                                    <label className="form-label">Full Name</label><span className='star'>*</span>
                                                    <Field name="firstName" className="form-control" />
                                                    {errors.firstName && touched.firstName ? (
                                                        <div className='error'>{errors.firstName}</div>
                                                    ) : null}
                                                </div>
                                                <br />
                                                <div className="col-md-4 ">
                                                    <label className="form-label">Email</label><span className='star'>*</span>
                                                    <Field name="email" type="email" className="form-control " />
                                                    {errors.email && touched.email ? (
                                                        <div className='error'>{errors.email}</div>
                                                    ) : null}
                                                </div>
                                                <br />
                                                <div className="col-md-4 ">
                                                    <label className="form-label">Phone</label><span className='star'>*</span>
                                                    <Field name="number" type="number" className="form-control " />
                                                    {errors.number && touched.number ? <div className='error'>{errors.number}</div> : null}
                                                </div>
                                                <div className='submitbutton'>
                                                    <button type='submit' className='btn'>REQUEST FOR ADOPTION</button>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </Modal>
                        </div>
                        <div className='col '>
                            <img src={mainImg} alt="PetImage" className='petimg' />
                        </div>
                    </div>
                </div>
            </div>
            <Giveaway />
            <div className='main mt-5 p-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col  '>
                            <img src={Img} alt="" className='lastimg' />
                        </div>
                        <div className='col '>
                            <p className="contents">Lorem epsum fbsdifcbij fkjebfkjebfkejbfewkjbfwkejbfwkefefb wef wef efnwekjfbkewjfb wkje febf weubfwef wiuefb ewfu webfuwe bfewufb efb ebf uewbfiuwefbwefweiuf wueibf iuwbefiu efewiufbwiuefbi euwbiuebfe bfe fejsdefsjnekdf ksjdnf kjsdnfkjesdnf kjsekdfjeskfjc fksdjfcekejsdfjkes efjebsf beskdb efkjebf kjbejk fbwekjsf bkewb </p>

                        </div>
                    </div>
                </div>
            </div>
            <Contacts />
        </>
    )
}

export default Home