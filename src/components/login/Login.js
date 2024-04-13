import React, { useContext, useState } from 'react'
import './login.css'
import Authcontext from '../Context/AuthContext'
// import axios from 'axios'
import data from '../Files/UserData.json'
import { Link } from 'react-router-dom';

function Login() {

  let authcontext = useContext(Authcontext)


  const [users, setusers] = useState(data.users);

  const [formData, setFormData] = useState({
    instituteName: '',
    website: '',
    designation: '',
    imageFiles: [],
  });

  const [userData, setuserData] = useState({
    name: '',
    designation: '',
    Linkedin: '',
    dp: null,
  });

  const handleChange = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setuserData({ ...userData, image: e.target.files[0] });
  };

  const adduser = (user) => {
    const newuser = {
      ...user,
    };
    const updatedusers = [...users, newuser];
    setusers(updatedusers);
  };
      
        const handleImageDrop = (e) => {
          e.preventDefault();
          setuserData({ ...userData, image: e.target.files[0] });
        };
      
        const handleImageClick = (e) => {
          e.preventDefault();
          document.getElementById('imageInput').click();
        };
      
      
        
      
        // const handleSubmit = (e) => {
        //   e.preventDefault();
        //   const validationErrors = {};
      
        //   if (!formData.instituteName.trim()) {
        //     validationErrors.instituteName = 'name is required';
        //   }
      
        //   setErrors(validationErrors);
      
        //   if (Object.keys(validationErrors).length === 0) {
        //     alert('Form submitted successfully');
        //   }
        // };


          
        const handleSubmit = async (e) => {

          e.preventDefault();
          var name = authcontext.Name
          var designation = authcontext.designation
          var Linkedin = authcontext.Linkedin
          var dp = authcontext.dp
          adduser({
            name,
            designation,
            Linkedin,
            dp,
          });

          console.log(users)
          // const data = new userData();
          // data.append('name', userData.name);
          // data.append('designation', userData.designation);
          // data.append('Linkedin', userData.Linkedin);
          // data.append('dp', userData.dp);
          
          // try {
          //   await axios.post('http://localhost:3000/save_data', data, {
          //     headers: {
          //       'Content-Type': 'multipart/form-data',
          //     },
          //   });
          //   console.log('Data sent successfully');
          // } catch (error) {
          //   console.error('Error sending data:', error);
          // }

        };
  return (
    <div className='loginformcontainer'>
      <img style={{width:"300px",position:"absolute",top:"30px",left:"100px"}} src='https://wowhr.in/assets/site_assets/images/wow-hr-logo.png' alt='f'></img>
      <form className='loginform' onSubmit={handleSubmit} onDrop={handleImageDrop} onDragOver={(e) => e.preventDefault()} style={{borderRadius:"30px"}}>
      <div>
        <h3 className='h1login'>Get Started with WoW HR</h3>
        
        
        <label>NAME:</label>
        <input
        className='name-style'
          type="text"
          name="instituteName"
          placeholder=" Enter your Name"
          autoComplete="off"
          onChange={(e)=>{
            e.preventDefault();
            authcontext.setName(e.target.value);
          }}
        />
        {/* {errors.instituteName && <span>{errors.instituteName}</span>} */}
      </div>
      <div>
        <label>LINKEDIN USERNAME:</label>
        <input
        className='url-style'
          type="text"
          name="website"
          placeholder="Linkedin Username "
          autoComplete="off"
          onChange={(e)=>{
            e.preventDefault();
            authcontext.setlinkedin(e.target.value);
          }}
        />
        {/* Add any validation for the website field if needed */}
      </div>
      <div>
        <label>DESIGNATION:</label>
        <input
        className='designation-style'
          type="text"
          name="designation"
          placeholder=" Enter your Designation"
          autoComplete="off"
          onChange={(e)=>{
            e.preventDefault();
            authcontext.setdesignation(e.target.value);
          }}
        />
        {/* Add any validation for the designation field if needed */}
      </div>
      <div>
        <label>UPLOAD IMAGE:</label>
        <input
        className='image-style'
          id="imageInput"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={(e)=>{
            e.preventDefault();
            authcontext.setdp(URL.createObjectURL(e.target.files[0]));
          }}
        />
        <div
          className="image-drop"
          onClick={handleImageClick}
          onDrop={handleImageDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          {formData.imageFiles.length === 0 && <p style={{color:"white"}}>UPLOAD UR IMAGE HERE</p>}
          {formData.imageFiles.map((file, index) => (
            <div key={index} className="image-preview">
              <img src={URL.createObjectURL(file)} alt={`Image ${index}`} style={{width:"400px", height:"180px", objectFit:"cover"}}/>
            </div>
          ))}
        </div>
      </div>
      <Link to={'ProudMemberCard'}><button className='submit' type="submit">Get Started</button></Link>
      {/* <button className='submit' type="submit">Get Started</button> */}
    </form>
    </div>
  )
}

export default Login