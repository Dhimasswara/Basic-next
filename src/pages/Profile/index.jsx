import LayoutPage from '@/Components/LayoutPage'
import SectionPage from '@/Components/Section/LandingPage/SectionPage'
import Image from 'next/image'
import style from './style.module.css'
import img from '../../Assets/Home/imgSection.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Profile = () => {
    return (
        <LayoutPage>


            <div className={`${style.strapBrand} `}>
                <p className='container'></p>
            </div>
            <SectionPage embedSection={style.sectionProfile}>
                <div class="row justify-content-between">
                    <div class={`col-10 col-md-3 ${style.leftSide}`}>
                        <div className="profileDesc">
                            <div className={` mx-auto pb-4 pt-2 ${style.picture}`}>
                                <Image src={img} className='img-thumbnail rounded-circle'></Image>
                            </div>
                            <h5 className='fw-bolder'>Dhimas Pandu Y</h5>
                            <span>Front End Developer</span>
                            <p><FontAwesomeIcon icon={faLocationDot} /> Lorem Ipsum</p>
                            <span>Freelancer</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                            <div className="hireButton d-grid">
                                <button className={`btn ${style.btn}`}> Hire</button>
                            </div>
                        </div>
                        <div className="skills pt-5">
                            <h5 className="fw-bolder">Skills</h5>
                            <div className="listSkills">
                                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>Python</p>
                                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>Python</p>
                                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>Python</p>
                                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>Python</p>
                                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>Python</p>
                                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>Python</p>
                            </div>
                        </div>
                        <div className="contact">
                            <h5 className="fw-bolder pt-5 pb-2">Contact</h5>
                            <p><FontAwesomeIcon icon={faGithub}/> github.dhimasswara.com </p>
                            <p><FontAwesomeIcon icon={faFacebook}/> Dhimas Pandu Yogaswara</p>
                            <p><FontAwesomeIcon icon={faLinkedin}/> Dhimas Pandu Yogaswara</p>

                        </div>
                    </div>
                    <div class={`col-8 col-md-8  ${style.rightSide}`}>

                    </div>
                </div>
            </SectionPage>
        </LayoutPage>
    )
}

export default Profile