import { useState } from "react"
import { Link } from "react-router"
import { GrLinkNext } from "react-icons/gr";

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

const ServiceGrid = () => {
    const [selectedService, setSelectedService] = useState('IT Consulting')
    return (
        <div className="service-grid">
            <div className="service-list">
                <ul className="service-list-medium">
                    <li><button onClick={() => setSelectedService('IT Consulting')}>IT Consulting</button></li>
                    <li><button onClick={() => setSelectedService('Interview As a Service')}>Interview As a Service</button></li>
                    <li><button onClick={() => setSelectedService('Recruitment As a Service')}>Recruitment As a Service</button></li>
                    <li><button onClick={() => setSelectedService('Technical Workshops')}>Technical Workshops</button></li>
                </ul>
                <ul className="service-list-small">
                    <li><Link to="/services/it-consulting"><button>IT Consulting</button></Link></li>
                    <li><Link to="/services/interview-as-a-service"><button>Interview As a Service</button></Link></li>
                    <li><Link to="/services/recruitment-as-a-service"><button>Recruitment As a Service</button></Link></li>
                    <li><Link to="/services/technical-workshops"><button>Technical Workshops</button></Link></li>
                </ul>
            </div>
            <div className="service-description">
                <p>{services.filter(service => service.name === selectedService).map(service => service.description)[0]}</p>
                <Link to={services.filter(service => service.name === selectedService).map(service => service.pagePath)[0]}>Know More <GrLinkNext /></Link>
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <main className="main-home">
            <section className="cover-section">
                <h1 className="">ELEPHA SOLUTIONS</h1>
                <p className="">Empowering your business with technology</p>
            </section>
            <section className="service-section" id="service-section">
                <h2>What We Do</h2>
                <ServiceGrid/>
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