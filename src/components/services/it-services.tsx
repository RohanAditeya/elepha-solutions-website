import itConsultingUrl from '../../assets/it_service/it_consulting.png'
import supportImageUrl from '../../assets/it_service/it_support.png'
import devImageUrl from '../../assets/it_service/development.png'
import cyberImageUrl from '../../assets/it_service/cybersecurity.png'
import cloudImageUrl from '../../assets/it_service/cloud_service.png'
import './service.css'

const ITService = () => {
    return (
        <>
            <h1 className="service-heading">
                <blockquote>Offering end-to-end technology solutions.</blockquote>
            </h1>
            <main className='service-main'>
                <section>
                    <div>
                        <h2>IT Consulting</h2>
                        <ul>
                            <li>Digital transformation advisory</li>
                            <li>IT strategy and planning</li>
                            <li>Cloud adoption roadmap</li>
                        </ul>
                    </div>
                    <img src={itConsultingUrl} alt='IT Consulting'/>
                </section>
                <section>
                    <img src={supportImageUrl} alt='IT Consulting'/>
                    <div>
                        <h2>Managed IT Services</h2>
                        <ul>
                            <li>Infrastructure management</li>
                            <li>Network monitoring and support</li>
                            <li>Help desk & tech support (24/7)</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div>
                        <h2>Software Development</h2>
                        <ul>
                            <li>Web & mobile app development</li>
                            <li>Custom software solutions</li>
                            <li>API integration</li>
                        </ul>
                    </div>
                    <img src={devImageUrl} alt='IT Consulting'/>
                </section>
                <section>
                    <img src={cyberImageUrl} alt='IT Consulting'/>
                    <div>
                        <h2>Cybersecurity Solutions</h2>
                        <ul>
                            <li>Risk assessment & audits</li>
                            <li>Data protection & compliance</li>
                            <li>Endpoint security & monitoring</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div>
                        <h2>Cloud Services</h2>
                        <ul>
                            <li>Cloud migration</li>
                            <li>AWS / Azure / Google Cloud services</li>
                            <li>Cloud backup & disaster recovery</li>
                        </ul>
                    </div>
                    <img src={cloudImageUrl} alt='IT Consulting'/>
                </section>
            </main>
        </>
    )
}

export default ITService