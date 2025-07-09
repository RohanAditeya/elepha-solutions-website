import trainingUrl from '../../assets/training_service/training.png'
import certificationUrl from '../../assets/training_service/certifications.png'
import handsOnTrainingUrl from '../../assets/training_service/hands_on_training.png'
import softSkillsUrl from '../../assets/training_service/soft_skill_training.png'
import './service.css'

const WorkshopsService = () => {
    return (
        <>
            <h1 className="service-heading">
                <blockquote>Upskill individuals and corporate teams with the latest tech skills.</blockquote>
            </h1>
            <main className='service-main'>
                <section>
                    <div>
                        <h2>Corporate Training Programs</h2>
                        <ul>
                            <li>Custom training for employee upskilling</li>
                            <li>Technologies: Python, Java, AWS, DevOps, Cybersecurity, etc.</li>
                        </ul>
                    </div>
                    <img src={trainingUrl} alt='IT Consulting'/>
                </section>
                <section>
                    <img src={certificationUrl} alt='IT Consulting'/>
                    <div>
                        <h2>Certification Courses</h2>
                        <ul>
                            <li>Prep for global certifications: AWS, Azure, PMP, CCNA, etc.</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div>
                        <h2>Job-Oriented Training</h2>
                        <ul>
                            <li>Bootcamps for freshers or job seekers</li>
                            <li>Resume building, mock interviews, placement assistance</li>
                        </ul>
                    </div>
                    <img src={handsOnTrainingUrl} alt='IT Consulting'/>
                </section>
                <section>
                    <img src={softSkillsUrl} alt='IT Consulting'/>
                    <div>
                        <h2>Soft Skills & Leadership</h2>
                        <ul>
                            <li>Communication, team building, project management</li>
                        </ul>
                    </div>
                </section>
            </main>
        </>
    )
}

export default WorkshopsService