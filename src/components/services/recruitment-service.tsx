import './service.css'
import techInterviewUrl from '../../assets/recruitment_service/technical_interview.png'
import executiveInterviewUrl from '../../assets/recruitment_service/executive_interview.png'
import developerTestUrl from '../../assets/recruitment_service/developer_test.png'

const RecruitmentService = () => {
    return (
        <>
            <h1 className="service-heading">
                <blockquote>Help companies find and hire tech talent.</blockquote>
            </h1>
            <main className='service-main'>
                <section>
                    <div>
                        <h2>Technical Recruitment Services</h2>
                        <ul>
                            <li>Full-time and contract hiring</li>
                            <li>IT roles: Developers, Network Engineers, Data Analysts, etc.</li>
                        </ul>
                    </div>
                    <img src={techInterviewUrl} alt='Technical Recruitment Service'/>
                </section>
                <section>
                    <img src={executiveInterviewUrl} alt='Executive Search'/>
                    <div>
                        <h2>Executive Search</h2>
                        <ul>
                            <li>CTOs, Project Managers, IT Leaders</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div>
                        <h2>Recruitment Process Outsourcing (RPO)</h2>
                        <ul>
                            <li>End-to-end recruitment management for clients</li>
                        </ul>
                    </div>
                    <img src={developerTestUrl} alt='RPO'/>
                </section>
            </main>
        </>
    )
}

export default RecruitmentService