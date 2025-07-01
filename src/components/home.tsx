import { FaMessage } from "react-icons/fa6";
import { IconContext } from "react-icons";
import ContactUsPopUp from "./contact-popup";
import { useState } from "react";

const MessagePopUp = ({ isContactPopupSelected, handleMessagePopupClick }: { isContactPopupSelected:boolean, handleMessagePopupClick: () => void }) => {
    return (
        <>
            {isContactPopupSelected && <ContactUsPopUp/>}
            <IconContext.Provider value={{size: "1.5em"}}>
                <div className="flex justify-center items-center rounded-full z-999 fixed right-7 bottom-7 bg-gray-100/50 max-w-sm min-h-[65px] min-w-[65px]" onClick={handleMessagePopupClick}>
                    <FaMessage/>
                </div>
            </IconContext.Provider>
        </>
    )
}

const MainSection = () => {
    return (
        <main className="flex-none lg:flex-2 md:bg-center bg-cover text-center text-white flex flex-col place-content-between">
            <h1 className="text-2xl min-h-24 flex justify-center-safe"><a className="tracking-widest pt-8 font-semibold">ELEPHA SOLUTIONS</a></h1>
            <p className="font-[0] text-5xl min-h-64 pt-10 lg:pt-0">Empowering your business with technology</p>
        </main>
    )
}

const FooterSection = () => {
    return (
        <footer className="flex-1 text-gray-300/75 flex flex-col">
            <h2 className="flex-1 text-3xl text-center pt-15">Contact Us</h2>
            <p className="flex-1 md:flex-2 text-xs text-center font-semibold">Copyright &copy; {new Date().getFullYear()} Elepha Solutions - All Rights Reserved</p>
        </footer>
    )
}

const Home = () => {
    const [isContactPopupSelected, setIsContactPopupSelected] = useState(false)
    const handleMessagePopupClick = () => {
        setIsContactPopupSelected(currentElement => !currentElement)
    }
    return (
        <>
            <div className={`${isContactPopupSelected ? 'blur-md' : ''} flex flex-col justify-between w-screen h-screen`}>
                <MainSection/>
                <FooterSection/>
            </div>
            <MessagePopUp isContactPopupSelected={isContactPopupSelected} handleMessagePopupClick={handleMessagePopupClick}/>
        </>
    )
}

export default Home