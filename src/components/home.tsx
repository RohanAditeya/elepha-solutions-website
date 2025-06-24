
const MainSection = () => {
    return (
        <main className="bg-cover text-center text-white flex flex-col place-content-center-safe">
            <h1 className="text-lg min-h-24 flex items-center justify-center-safe"><a className="tracking-widest font-bold">ELEPHA SOLUTIONS</a></h1>
            <p className="text-[40px] min-h-64">Empowering your business with technology</p>
        </main>
    )
}

const FooterSection = () => {
    return (
        <footer className="text-gray-300/75">
            <h2 className="text-3xl text-center flex items-center justify-center-safe">Contact Us</h2>
            <p className="text-xs text-center">Copyright &copy; {new Date().getFullYear()} Elepha Solutions - All Rights Reserved</p>
        </footer>
    )
}

const Home = () => {
    return (
        <>
            <MainSection/>
            <FooterSection/>
        </>
    )
}

export default Home