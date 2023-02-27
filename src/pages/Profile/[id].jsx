import LayoutLoginProfile from '@/Components/LayoutPage/LayoutLoginProfil'
import SectionPage from '@/Components/Section/LandingPage/SectionPage'
import Image from 'next/image'
import style from './style.module.css'
import img from '../../Assets/Home/imgSection.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import img1 from '../../Assets/Profile/porto-1.png'
import MainProfile from '@/Components/LayoutProfile/MainProfile'
import LeftSide from '@/Components/LayoutProfile/LeftSide'
import RightSide from '@/Components/LayoutProfile/RightSide'
import Experience from '../../Assets/Profile/Experience/icon.png'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'


const Profile = () => {
    
    const router = useRouter()
    const { id } = router.query

    const [user, setUser] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:3000/user/${id}`)
            .then((response) => {
                setUser(response.data);

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);



    return (
        <LayoutLoginProfile>
            <div className={`${style.strapBrand} `}>
                <p className='container'></p>
            </div>
            <SectionPage embedSection={style.sectionProfile}>
                <MainProfile>
                    <LeftSide>
                        <div className="profileDesc">
                            <div className={` mx-auto pb-4 pt-2 ${style.picture}`}>
                                <Image src={img} className='img-thumbnail rounded-circle'></Image>
                            </div>
                            <h5 className='fw-bolder'>{user.name}</h5>
                            <span className={style.work}>{user.jabatan}</span>
                            <p className={style.address}><FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "10px" }} />{user.address}</p>
                            <span className={style.worker}>Freelancer</span>
                            <p className={style.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
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
                            <p><FontAwesomeIcon icon={faGithub} /> github.dhimasswara.com </p>
                            <p><FontAwesomeIcon icon={faFacebook} /> Dhimas Pandu Yogaswara</p>
                            <p><FontAwesomeIcon icon={faLinkedin} /> Dhimas Pandu Yogaswara</p>
                            <p><FontAwesomeIcon icon={faLinkedin} /> Dhimas Pandu Yogaswara</p>
                        </div>

                    </LeftSide>

                    <RightSide>

                        <ul className="nav nav-pills mb-3 justify-content-start" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className='navpills-home active' id="pills-Customer-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-Customer" type="button" role="tab" aria-controls="pills-Customer"
                                    aria-selected="true">Portofolio</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className='navpills-home' id="pills-Seller-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-Seller" type="button" role="tab" aria-controls="pills-Seller"
                                    aria-selected="false">Pengalaman Kerja</a>
                            </li>
                        </ul>

                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-Customer" role="tabpanel" aria-labelledby="pills-Customer-tab" tabindex="0">
                                <div class="row g-2">
                                    <div class="col-12 col-md-6 col-lg-4 text-center">
                                        <div class="p-3 border bg-light">
                                            <Image src={img1} className={style.img} />
                                            <p>Project management web</p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4 text-center">
                                        <div class="p-3 border bg-light">
                                            <Image src={img1} className={style.img} />
                                            <p>Solusi</p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4 text-center">
                                        <div class="p-3 border bg-light">
                                            <Image src={img1} className={style.img} />
                                            <p>Project management web</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-Seller" role="tabpanel" aria-labelledby="pills-Seller-tab" tabindex="0">
                                <div class="row jusitfy-content-center">
                                    <div class="col-12 text-center">
                                        <div className={`${style.rowExperience} row `}>
                                            <div className="col-2">
                                                <Image className='img-fluid' src={Experience}></Image>
                                            </div>
                                            <div className="col-9 text-start">
                                                <p className='fw-bolder'>Engineer</p>
                                                <p className>Tokopedia</p>
                                                <p className='text-secondary mb-4'>July 2019 - January 2020</p>
                                                <p className={style.exDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum non tenetur omnis nobis dolores aliquid quod facere ipsum. Provident, voluptate asperiores enim dolorum, sed omnis alias cumque officiis vitae dolore distinctio. Accusantium sunt soluta quam porro, saepe maiores? Reiciendis dolores quis dolore doloremque consequatur commodi ipsam provident id ea. </p>
                                                <hr />
                                            </div>
                                        </div>
                                        <div className={`${style.rowExperience} row `}>
                                            <div className="col-2">
                                                <Image className='img-fluid' src={Experience}></Image>
                                            </div>
                                            <div className="col-9 text-start">
                                                <p className='fw-bolder'>Engineer</p>
                                                <p className>Tokopedia</p>
                                                <p className='text-secondary mb-4'>July 2019 - January 2020</p>
                                                <p className={style.exDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum non tenetur omnis nobis dolores aliquid quod facere ipsum. Provident, voluptate asperiores enim dolorum, sed omnis alias cumque officiis vitae dolore distinctio. Accusantium sunt soluta quam porro, saepe maiores? Reiciendis dolores quis dolore doloremque consequatur commodi ipsam provident id ea. </p>
                                                <hr />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RightSide>
                </MainProfile>

            </SectionPage>
        </LayoutLoginProfile>
    )
}

export default Profile