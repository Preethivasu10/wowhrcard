import React, { useState, useContext, useRef } from "react";
import axios from 'axios'; // Import axios for making HTTP requests
import html2canvas from "html2canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faSquareTwitter, faSquareInstagram, faLinkedin, faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import AuthContext from "../Context/AuthContext";
import "./CertificateContainer.css";

function CertificateContainer() {
    const authContext = useContext(AuthContext);
    const [name, setName] = useState(authContext.Name || '');
    const [designation, setDesignation] = useState(authContext.designation || '');
    const [profilePicture, setProfilePicture] = useState(authContext.dp || '');
    const [linkedinURL, setLinkedinURL] = useState(authContext.Linkedin || '');
    
    const certificateRef = useRef(null);

    const getLinkedInName = (url) => {
        const parts = url.split('/');
        return parts[4];
    };

    // Function to handle saving data and downloading the card
    const handleDownloadAndSave = async () => {
        // First, save the data
        try {
            const data = {
                name,
                designation,
                profile_picture: profilePicture,
                linkedin_url: linkedinURL,
            };

            // Send POST request to backend to save data
            const response = await axios.post('http://localhost:3005/save', data);

            if (response.status !== 200) {
                console.error("Error saving data:", response.data);
                // Handle error (e.g., display error message)
                return;
            }
        } catch (error) {
            console.error("Error saving data:", error);
            return;
        }

        // Now, download the card
        if (!certificateRef.current) return;

        try {
            const canvas = await html2canvas(certificateRef.current, {
                scale: 1.5,
                useCORS: true,
            });
            const dataURL = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = dataURL;
            link.download = "proudmembercard.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error("Error capturing or downloading certificate:", error);
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <img
                            style={{ width: "300px", height: "70px" }}
                            src="https://wowhr.in/assets/site_assets/images/wow-hr-logo.png"
                            className="m-4"
                        />
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="rightcontainer ml-5">
                            <button
                                style={{ fontSize: "15px" }}
                                type="button"
                                className="btn btn-success"
                                onClick={handleDownloadAndSave}
                            >
                                Download Card
                            </button>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center mt-4">
                    <div className="leftcontainer col-md-12">
                        <div className="certificate" id="certificate" ref={certificateRef}>
                            <img className="ribbon" src="images/ribbon.png" alt="ribbon" />
                            <div className="links">
                                <a href="https://wowhr.in/">www.wowhr.in</a>
                                <div className="socialmedia">
                                    <div className="icons">
                                        <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "35px", color: "#1877f2" }} />
                                        <FontAwesomeIcon icon={faSquareTwitter} style={{ fontSize: "35px", color: "#6eadff" }} />
                                        <FontAwesomeIcon icon={faSquareInstagram} style={{ fontSize: "35px", color: "rgb(255, 0, 200)" }} />
                                        <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "35px", color: "#1877f2" }} />
                                        <FontAwesomeIcon icon={faSquareYoutube} style={{ fontSize: "35px", color: "red" }} />
                                    </div>
                                    <h2>wowhr</h2>
                                </div>
                            </div>
                            <div className="namecontainer">
                                <p style={{ fontSize: "20px" }} className="name" id="name">
                                    <b>{name}</b>
                                </p>
                                <p style={{ fontSize: "15px" }} id="designation">
                                    <b><i>{designation}</i></b>
                                </p>
                                {linkedinURL !== '' && (
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img className="linkedin-logo-small" src="images/linkedin1.png" alt="LinkedIn Logo" />
                                        <p className="linkedin" id="linkedin">
                                            @<b>{getLinkedInName(linkedinURL)}</b>
                                        </p>
                                    </div>
                                )}
                                {linkedinURL === '' && (
                                    <div style={{ display: "flex", gap: "10px", height: "50px" }}></div>
                                )}
                            </div>
                            <div className="dpcontainer">
                                <img src={profilePicture} alt="" id="dp"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CertificateContainer;
