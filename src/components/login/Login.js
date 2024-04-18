import React, { useContext, useState } from 'react';
import './login.css';
import Authcontext from '../Context/AuthContext';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
<<<<<<< HEAD

//image imported
import logo from './Assets/logo.png';
=======
>>>>>>> f1c7bd585446c90dfb094cac3332e81a937882ef

function Login() {
    const navigate = useNavigate();
    const authcontext = useContext(Authcontext);
<<<<<<< HEAD
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form validation
        const validationErrors = {};
        if (!authcontext.Name.trim()) {
            validationErrors.name = 'Name is required';
        }
        if (!authcontext.designation.trim()) {
            validationErrors.designation = 'Designation is required';
        }

=======

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form validation
        const validationErrors = {};
        if (!authcontext.Name.trim()) {
            validationErrors.name = 'Name is required';
        }
        if (!authcontext.Linkedin.trim()) {
            validationErrors.linkedin = 'LinkedIn username is required';
        }
        if (!authcontext.designation.trim()) {
            validationErrors.designation = 'Designation is required';
        }

>>>>>>> f1c7bd585446c90dfb094cac3332e81a937882ef
        if (Object.keys(validationErrors).length === 0) {
            toast.success(' successful!');
            setTimeout(() => {
                navigate('/ProudMemberCard');
            }, 3000);
        } else {
            setErrors(validationErrors);
            toast.error('form check!');
        }
    };

    const handleImageChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            authcontext.setdp(imageUrl);
        }
    };

    return (
<<<<<<< HEAD
        <>
            <ToastContainer />
            <div className='loginformcontainer1 container-fluid'>
                <div className='row'>
                    <div className='col-lg-6 col-md-4'>
                        <img src={logo} alt='Logo' className='logo_img col-6 col-md-12 col-lg-4' />
                    </div>
                    <div className='col-lg-5 col-md-10'>
                        <div className='card_design container '>
                            <form onSubmit={handleSubmit}>
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <h3 className='h1login'>Get Started with WoW HR</h3>
                                    <label>NAME:</label>
                                    <input
                                        className='name-style'
                                        type="text"
                                        name="instituteName"
                                        placeholder="Enter your Name"
                                        autoComplete="off"
                                        onChange={(e) => {
                                            authcontext.setName(e.target.value);
                                        }}
                                    />
                                    {errors.name && <span className="error">{errors.name}</span>}
                                </div>
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <label>DESIGNATION:</label>
                                    <input
                                        className='designation-style'
                                        type="text"
                                        name="designation"
                                        placeholder="Enter your Designation"
                                        autoComplete="off"
                                        onChange={(e) => {
                                            authcontext.setdesignation(e.target.value);
                                        }}
                                    />
                                    {errors.designation && <span className="error">{errors.designation}</span>}
                                </div>
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <label>UPLOAD IMAGE:</label>
                                    <input
                                        id="imageInput"
                                        type="file"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        onChange={handleImageChange}
                                    />
                                    <div
                                        className="image-drop"
                                        onClick={() => document.getElementById('imageInput').click()}
                                        onDrop={(e) => {
                                            e.preventDefault();
                                            handleImageChange(e);
                                        }}
                                        onDragOver={(e) => e.preventDefault()}
                                    >
                                        {authcontext.dp ? (
                                            <p className='image_text'>Image uploaded</p>
                                        ) : (
                                            <p className='image_text'>UPLOAD IMAGE HERE</p>
                                        )}
                                    </div>
                                </div>
                                <button type="submit" className="submit mb-4">Get Started</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
=======
        <div className='loginformcontainer'>
            <img
                style={{ width: '300px', position: 'absolute', top: '30px', left: '100px' }}
                src='https://wowhr.in/assets/site_assets/images/wow-hr-logo.png'
                alt='Logo'
            />
            <ToastContainer />
            <form
                className='loginform'
                onSubmit={handleSubmit}
                style={{ borderRadius: '30px' }}
            >
                <div>
                    <h3 className='h1login'>Get Started with WoW HR</h3>
                    <label>NAME:</label>
                    <input
                        className='name-style'
                        type="text"
                        name="instituteName"
                        placeholder="Enter your Name"
                        autoComplete="off"
                        onChange={(e) => {
                            authcontext.setName(e.target.value);
                        }}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div>
                    <label>LINKEDIN USERNAME:</label>
                    <input
                        className='url-style'
                        type="text"
                        name="website"
                        placeholder="LinkedIn Username"
                        autoComplete="off"
                        onChange={(e) => {
                            authcontext.setlinkedin(e.target.value);
                        }}
                    />
                    {errors.linkedin && <span className="error">{errors.linkedin}</span>}
                </div>
                <div>
                    <label>DESIGNATION:</label>
                    <input
                        className='designation-style'
                        type="text"
                        name="designation"
                        placeholder="Enter your Designation"
                        autoComplete="off"
                        onChange={(e) => {
                            authcontext.setdesignation(e.target.value);
                        }}
                    />
                    {errors.designation && <span className="error">{errors.designation}</span>}
                </div>
                <div>
                    <label>UPLOAD IMAGE:</label>
                    <input
                        id="imageInput"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                    />
                    <div
                        className="image-drop"
                        onClick={() => document.getElementById('imageInput').click()}
                        onDrop={(e) => {
                            e.preventDefault();
                            handleImageChange(e);
                        }}
                        onDragOver={(e) => e.preventDefault()}
                    >
                        {authcontext.dp ? (
                            <p style={{ color: 'white' }}>Image uploaded</p> // Message indicating image uploaded
                        ) : (
                            <p style={{ color: 'white' }}>UPLOAD UR IMAGE HERE</p>
                        )}
                    </div>
                </div>
                <button className='submit' type="submit">Get Started</button>
            </form>
        </div>
    );
}

export default Login;
>>>>>>> f1c7bd585446c90dfb094cac3332e81a937882ef
