import { FaMessage } from "react-icons/fa6";
import { IconContext } from "react-icons";

const MessagePopUp = () => {
    return (
        <IconContext.Provider value={{size: "1.5em"}}>
            <div className="flex justify-center items-center rounded-full z-999 fixed right-7 bottom-7 bg-gray-100/50 max-w-sm min-h-[65px] min-w-[65px]">
                <FaMessage/>
            </div>
        </IconContext.Provider>
    )
}

const MainSection = () => {
    return (
        <main className="flex-none bg-cover text-center text-white flex flex-col place-content-center-safe">
            <h1 className="text-lg min-h-24 flex items-center justify-center-safe"><a className="tracking-widest font-bold">ELEPHA SOLUTIONS</a></h1>
            <p className="text-[40px] min-h-64">Empowering your business with technology</p>
        </main>
    )
}

const FooterSection = () => {
    return (
        <footer className="flex-1 text-gray-300/75 flex flex-col">
            <h2 className="flex-1 text-3xl text-center flex items-center justify-center-safe">Contact Us</h2>
            <p className="flex-1 text-xs text-center">Copyright &copy; {new Date().getFullYear()} Elepha Solutions - All Rights Reserved</p>
        </footer>
    )
}

const Home = () => {
    return (
        <>
            <div className="flex flex-col justify-between w-screen h-screen">
                <MainSection/>
                <FooterSection/>
            </div>
            <MessagePopUp/>
        </>
    )
}

export default Home