import logoUrl from '../assets/elepha_logo.jpeg'

const Header = () => {
    return (
        <header className='pageHeader'>
            <img className='logo' src={logoUrl} alt="Elepha solutions logo"/>
            <div className='navButtons'>
                <div className='homeNavButton'>
                    <p>Home</p>
                </div>
                <div className='aboutUsNavButton'>
                    <p><a href='#'>About Us</a></p>
                </div>
                <div className='servicesNavButton'>
                    <p>Services</p>
                    <div className="dropdown-content">
                        <div>
                            <a href="#">Link 1</a>
                        </div>
                        <div>
                            <a href="#">Link 2</a>
                        </div>
                        <div>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header