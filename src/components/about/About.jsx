import './about.css';
import { FaBitbucket, FaCss3, FaDatabase, FaGitAlt, FaGithub, FaHtml5, FaJava, FaJs, FaReact } from 'react-icons/fa';
import SpringBootIcon from '../../assets/spring-boot.svg';
import Foto from '../../assets/foto.png';

const About = () => {
    return (
        <section className="about-container">
            <div className="aboutme-container">
                <div className='description'>
                    <h2>About me 🤙 __ </h2><br />
                    <p>My name is Richard, I live in Chiclayo, Perú. I am a simple
                        person, who like to learn new things, especially referred to
                        technology (software development).
                    </p>

                    <p>I love to share knowledge, to work in a team, be friendly.
                        I consider myself a person easy to relate, mainly listen to
                        others, this is very important for me.
                    </p>
                </div>
                <div className="photo">
                    <img src={Foto} />
                </div>
            </div>
            <div className="skills-container" style={{ paddingBottom: "0" }}>
                <div className='description'>
                    <h2>Knowledge 🔧 __</h2>
                    <div className='tech' >
                        <FaJava className='red' />
                        <img src={SpringBootIcon} className='green' style={{ width: "1em" }} />
                        <FaHtml5 className='orange' />
                        <FaCss3 className='blue' />
                        <FaJs className='yellow' />
                        <FaReact className='blue' />
                        <FaDatabase className='brown' />
                        <FaGitAlt className='red' />
                        <FaGithub className='blue' />
                        <FaBitbucket className='blue' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;