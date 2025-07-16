import logoUrl from '../assets/Elepha_Logo.png'
import { Link } from 'react-router'
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { useState } from 'react';

const Header = () => {
    const [burgerDropDownVisible, setBurgerDropDownVisible] = useState(false)
    const [burgerServiceDropdownVisible, setBurgerServiceDropDownVisible] = useState(false)
    return (
        <header className='pageHeader'>
            <Link onClick={() => setBurgerDropDownVisible(false)} to="/"><img className='logo' src={logoUrl} alt="Elepha solutions logo"/></Link>
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
            <div className='burger-menu-container'>
                <IconContext.Provider value={{ className: "header-burger-menu" }}>
                    <GiHamburgerMenu onClick={() => setBurgerDropDownVisible((currentValue) => !currentValue)} />
                </IconContext.Provider>
                {
                    burgerDropDownVisible
                    && 
                    <div className='burger-dropdown-content'>
                        <ul>
                            <li><Link onClick={() => setBurgerDropDownVisible(false)} to='/about'>About Us</Link></li>
                            <li onClick={() => setBurgerServiceDropDownVisible((currentValue) => !currentValue)}>
                                Services
                                {
                                    burgerServiceDropdownVisible
                                    &&
                                    <ul className='burger-service-dropdown'>
                                        <li><Link onClick={() => setBurgerDropDownVisible(false)} to="/services/it-consulting">IT Consulting</Link></li>
                                        <li><Link onClick={() => setBurgerDropDownVisible(false)} to="/services/interview-as-a-service">Interview As a Service</Link></li>
                                        <li><Link onClick={() => setBurgerDropDownVisible(false)} to="/services/recruitment-as-a-service">Recruitment As a Service</Link></li>
                                        <li><Link onClick={() => setBurgerDropDownVisible(false)} to="/services/technical-workshops">Technical Workshops</Link></li>
                                    </ul>
                                }
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header