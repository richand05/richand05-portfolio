import './footer.css';
import  { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return ( 
        <footer className='footer-container'>
            <div className='icon-container'>
                <a href='https://www.instagram.com/richand05/' target="_blank">
                    <div className='icon fb-bg'>
                        <FaInstagram/>
                    </div>
                </a>
                <a href='https://www.linkedin.com/in/andreeramosbenites/' target="_blank">
                    <div className='icon fb-bg'>
                        <FaLinkedin/>
                    </div>
                </a>
                <a href = "mailto: andreerb_1997@outlook.com" target="_blank">
                    <div className='icon fb-bg'>    
                        <FaEnvelope/>
                    </div>
                </a> 
              
            </div>
            <div className='copy-data'>
                Copyright &copy;2023 Richand | Richard Andree Ramos Benites
            </div>
        </footer>
     );
}
 
export default Footer;