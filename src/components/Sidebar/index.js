import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import LogoJ from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faMusic } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'

const Sidebar =() => {
    
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoJ} alt="logo" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="music-link" to="/music">
                    <FontAwesomeIcon icon={faMusic} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/joel-dsilva0/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/jjdsilva0'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.instagram.com/jdsilva25/'>
                        <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar