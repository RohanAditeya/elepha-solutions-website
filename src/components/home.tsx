import { Link } from "react-router"

const services: {name: string, description: string, pagePath: string}[] = [
    {
        name: "IT Consulting",
        description: "Elepha provides IT services and consulting that help businesses evolve, adapt, and lead in an ever-changing digital landscape.",
        pagePath: "/services/it-consulting"
    },
    {
        name: "Interview As a Service",
        description: "Elepha fixes hiring headaches—no‑shows, offer declines, reneges—by supplying on‑demand, tech‑savvy interview specialists, freeing your HR team to focus on higher‑value work.",
        pagePath: "/services/interview-as-a-service"
    },
    {
        name: "Recruitment As a Service",
        description: "Elepha helps you Streamline your hiring process with Recruitment as a Service — faster shortlists, expert interviewers, zero hiring delays",
        pagePath: "/services/recruitment-as-a-service"
    },
    {
        name: "Technical Workshops",
        description: "Accelerate the candidate's technical growth with expert-led workshops tailored to current and future tech demands",
        pagePath: "/services/technical-workshops"
    }
]

const ServiceCard = ({name, description, pagePath}: {name: string, description: string, pagePath: string}) => {
    return (
        <Link to={pagePath}>
            <div className="service-card">
                <p className="service-name">{name}</p>
                <p className="service-description">{description}</p>
            </div>
        </Link>  
    )
}

const Home = () => {
    return (
        <main>
            <section className="cover-section">
                <h1 className="">ELEPHA SOLUTIONS</h1>
                <p className="">Empowering your business with technology</p>
            </section>
            <section className="service-section" id="service-section">
                <h2>What We Do</h2>
                <div className="services-list">
                    {services.map((service, index) => <ServiceCard key={index} name={service.name} description={service.description} pagePath={service.pagePath}/>)}
                </div>
            </section>
            <section className="about-us-section" id="about-us-section">
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