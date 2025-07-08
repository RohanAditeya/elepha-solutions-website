const services: {name: string, description: string}[] = [
    {
        name: "IT Consulting",
        description: "Elepha provides IT services and consulting that help businesses evolve, adapt, and lead in an ever-changing digital landscape."
    },
    {
        name: "Interview As a Service",
        description: "Elepha fixes hiring headaches—no‑shows, offer declines, reneges—by supplying on‑demand, tech‑savvy interview specialists, freeing your HR team to focus on higher‑value work."
    },
    {
        name: "Recruitment As a Service",
        description: "Elepha helps you Streamline your hiring process with Recruitment as a Service — faster shortlists, expert interviewers, zero hiring delays"
    },
    {
        name: "Technical Workshops",
        description: "Accelerate the candidate's technical growth with expert-led workshops tailored to current and future tech demands"
    }
]

const ServiceCard = ({name, description}: {name: string, description: string}) => {
    return (
        <div className="service-card">
            <p className="service-name">{name}</p>
            <p className="service-description">{description}</p>
        </div>
    )
}

const Home = () => {
    return (
        <main>
            <section className="cover-section">
                <h1 className="">ELEPHA SOLUTIONS</h1>
                <p className="">Empowering your business with technology</p>
            </section>
            <section className="service-section">
                <h2>What We Do</h2>
                <div className="services-list">
                    {services.map((service, index) => <ServiceCard key={index} name={service.name} description={service.description}/>)}
                </div>
            </section>
            <section className="about-us-section">
                <div>
                    <h2>About Us</h2>
                    <p>
                        Your Partner in IT Services, Talent Acquisition & Professional Training Delivering quality IT solutions, skilled professionals, and tailored training programs for your growth.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Home