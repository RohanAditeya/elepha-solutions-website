const ContactUsPopUp = () => {
    return (
        <div className="flex flex-col top-10 right-10 min-h-[80dvh] min-w-[80dvw] lg:min-w-[20dvw] z-999 bg-white fixed justify-between">
            <div className="flex-2 bg-gray-400">
                <p>
                    Elepha Solutions
                </p>
            </div>
            <form className="flex-8 flex flex-col">
                <div className="flex flex-col flex-1 justify-evenly">
                    <p className="flex justify-around">
                        <input className="border-1 min-w-9/10" type="text" name="user_name" placeholder="Name*" required/>
                    </p>
                    <p className="flex justify-around">
                        <input className="border-1 min-w-9/10" type="email" name="user_email" placeholder="Email*" required/>
                    </p>
                </div>
                <p className="flex-2 flex justify-around">
                    <textarea className="border-1 min-w-9/10" name="email_body" placeholder="How can we help?*...." required>
                    </textarea>
                </p>
                <div className="flex-1 flex justify-center items-center">
                    <div className="min-w-9/10">
                        <button className="bg-black font-bold text-white min-w-1/1 min-h-[5cqh] text-base">SEND</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactUsPopUp