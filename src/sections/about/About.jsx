import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                I have overall 5+ years experience in IT industry. Currently I am working as a Frontend Developer.
                <p><br/>
                Certifications: Salesforce Certified Administrator,  Salesforce Certified Platform Developer I, Salesforce Certified Omnistudio Developer, Mulesoft Certified Developer, Mulesoft Certified Integration Architect.
                </p>
                </p>
                <p>
                I am interested in learning new things. My hobbies are playing Chess & Carroms.
                </p>
                {/* <a href={CV} download className='btn primary'>Download CV <HiDownload/></a> */}
            </div>
        </div>
    </section>
  )
}

export default About