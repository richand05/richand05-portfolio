import './banner.css'
import { Link } from 'react-router-dom'

const Banner = (props) => {
    return ( 
        <div className="banner-container">
            <div className='banner-content'>
                <p>{props.text1}</p>
                <p>{props.text2}</p>
                <p className='rol'>{props.text3}</p>
                <div className='btn-container'
                style={{display: props.button ? '': 'none'}}>
                    <Link to='/projects'>
                        <div className='btn'>
                            {props.btn1}
                        </div>
                    </Link>
                    <Link to='/contact'>
                        <div className='btn btn-light'>
                            {props.btn2}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Banner;