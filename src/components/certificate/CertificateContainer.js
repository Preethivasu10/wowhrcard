import { useContext, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import {faSquareTwitter} from '@fortawesome/free-brands-svg-icons'
import {faSquareInstagram} from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import AuthContext from '../Context/AuthContext';

function CertificateContainer() {

  let authcontext = useContext(AuthContext);

  const CertificateRef = useRef(null);
  
  const handleDownload = () => {
    if (!CertificateRef.current) return;

    const opt = {
    
        margin: [0.5, 0.7], // Setting the top and bottom margins, you can adjust the values to find the optimal centering
        filename: 'ProudMemberCard.pdf',
        image: { type: 'png', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' },
        pagebreak: { mode: ['avoid-all'] },
    };

    // Generate the PDF with the configured options
    html2pdf().set(opt).from(CertificateRef.current).save();
};



  return (
    <div className='certificatecontainer'>
<img   style={{width:"350px",height:"70px"}} src='https://wowhr.in/assets/site_assets/images/wow-hr-logo.png'></img>
'
      <div style={{marginRight:"250px"}}className='leftcontainer'>
          <div className='certificate' ref={CertificateRef}>
          <img className='ribbon' src={'images/ribbon.png'} alt="ribbon"></img>
        <div class="links">
            <a href="https://wowhr.in/">www.wowhr.in</a>
            <div class="socialmedia">
                <div class="icons">
                    <FontAwesomeIcon icon={faFacebook} style={{fontSize:"35px",color:"#1877f2"}}/>
                    <FontAwesomeIcon icon={faSquareTwitter} style={{fontSize:"35px",color:"#6eadff"}}/>
                    <FontAwesomeIcon icon={faSquareInstagram} style={{fontSize:"35px",color:"rgb(255, 0, 200)"}}/>
                    <FontAwesomeIcon icon={faLinkedin} style={{fontSize:"35px",color:"#1877f2"}}/>
                    <FontAwesomeIcon icon={faSquareYoutube} style={{fontSize:"35px",color:"red"}}/>
                </div>
                <h2>wowhr</h2>
            </div>
        </div>
        <div class="namecontainer">
            <p style={{fontSize:"20px"}}class="name" id="name">{authcontext.Name}
            </p>
            <p style={{fontSize:"15px"}} id='designation'>{authcontext.designation}</p>
            <div style={{display:"flex",gap:"10px"}}>
                <FontAwesomeIcon icon={faLinkedinIn} style={{fontSize:"25px",color:"white",background:"#1877f2",padding:"7px 9px",borderRadius:"50px",width:"fit-content"}}/>
                <p  style={{padding:"5px 0px"}} class="linkedin" id="linkedin">@{authcontext.Linkedin}</p>
            </div>
        </div>
        <div class="dpcontainer">
            <img src={authcontext.dp} alt="" id="dp"></img>
        </div>
          </div>
      </div>

      <div className='rightcontainer'>
        <button style={{fontSize:"15px"}} type="button" className="btn btn-warning m-5" onClick={handleDownload}> Download Card</button>
      </div>

    </div>
  )
}

export default CertificateContainer