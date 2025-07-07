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
                    <p>About Us</p>
                </div>
                <div className='servicesNavButton'>
                    <p>Services</p>
                </div>
            </div>
        </header>
    )
}

export default Header