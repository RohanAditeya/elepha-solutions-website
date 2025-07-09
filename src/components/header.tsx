import logoUrl from '../assets/Elepha_Logo.png'
import { Link } from 'react-router'

const Header = () => {
    return (
        <header className='pageHeader'>
            <Link to="/"><img className='logo' src={logoUrl} alt="Elepha solutions logo"/></Link>
            <div className='navButtons'>
                <div className='aboutUsNavButton'>
                    <p><Link to='/about'>About Us</Link></p>
                </div>
                <div className='servicesNavButton'>
                    <p><a href='#service-section'>Services</a></p>
                    <div className='dropdown-content'>
                        <ul>
                            <li><Link to="/services/it-consulting">IT Consulting</Link></li>
                            <li><Link to="/services/interview-as-a-service">Interview As a Service</Link></li>
                            <li><Link to="/services/recruitment-as-a-service">Recruitment As a Service</Link></li>
                            <li><Link to="/services/technical-workshops">Technical Workshops</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header