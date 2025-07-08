import logoUrl from '../assets/Elepha_Logo.png'
import { Link } from 'react-router'

const Header = () => {
    return (
        <header className='pageHeader'>
            <Link to="/"><img className='logo' src={logoUrl} alt="Elepha solutions logo"/></Link>
            <div className='navButtons'>
                <div className='aboutUsNavButton'>
                    <p><a href='#about-us-section'>About Us</a></p>
                </div>
                <div className='servicesNavButton'>
                    <p><a href='#service-section'>Services</a></p>
                </div>
            </div>
        </header>
    )
}

export default Header