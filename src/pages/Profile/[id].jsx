import LayoutLoginProfile from '@/Components/LayoutPage/LayoutLoginProfil'
import SectionPage from '@/Components/Section/LandingPage/SectionPage'
import Image from 'next/image'
import style from './style.module.css'
import img from '../../Assets/Home/imgSection5.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPenFancy, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import img1 from '../../Assets/Profile/porto-1.png'
import MainProfile from '@/Components/LayoutProfile/MainProfile'
import LeftSide from '@/Components/LayoutProfile/LeftSide'
import RightSide from '@/Components/LayoutProfile/RightSide'
import Experience from '../../Assets/Profile/Experience/icon.png'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Delete from '@/Components/ModalDelete/Delete'
import Edit from '@/Components/ModalEdit'


const Profile = () => {

    const router = useRouter()
    const { id } = router.query
    console.log(id);

    const [isShow, setIsShow] = useState(false)
    const [user, setUser] = useState([])
    const [skill, setSkill] = useState([])
    const [experience, setExperience] = useState([])
    const [portfolio, setPortfolio] = useState([])

    // function showInput(inputIdComment) {
    //     const inputComment = document.querySelector(`#input${inputIdComment}`);
    //     console.log(inputIdComment);
    //     inputComment.classList.toggle(`d-none`)
    // }


    const renderUser = async () => {
        await axios
            .get(`http://localhost:3020/worker/${id}`)
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        renderUser()
    }, [id]);


    useEffect(() => {
        axios
            .get(`http://localhost:3020/skills/?id_user=${id}`)
            .then((response) => {
                setSkill(response.data);

            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    useEffect(() => {
        axios
            .get(`http://localhost:3020/portfolio/?id_user=${id}`)
            .then((response) => {
                setPortfolio(response.data);

            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    useEffect(() => {
        axios
            .get(`http://localhost:3020/experience/?id_user=${id}`)
            .then((response) => {
                setExperience(response.data);

            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);


    return (
        <LayoutLoginProfile id={id}>
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
                            <span className={style.work}>{user.jobdesk}</span>
                            <p className={style.address}><FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "10px" }} />{user.place}</p>
                            <span className={style.worker}>{user.jobdesk}</span>
                            <p className={style.bio}>{user.Bio}</p>
                            <div className="hireButton d-grid">
                                <button className={`btn ${style.btn}`}> Hire</button>
                            </div>
                        </div>
                        <div className="skills pt-5">
                            <h5 className="fw-bolder">Skills</h5>
                            <div className="listSkills">
                                {skill?.map(item => (
                                    <>
                                        <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>{item.skill}</p>
                                    </>
                                ))}
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
                                <div className="row g-2">
                                    {portfolio.map((ex, i) => (
                                        <div className="col-12 col-md-6 col-lg-4 text-center" key={i}>
                                            <div className="px-3 pt-3 border bg-body-tertiary position-relative"
                                                onMouseEnter={() => setIsShow(i)}
                                                onMouseLeave={() => setIsShow(false)}
                                            >

                                                {isShow === i &&
                                                    <div className={`buttonAction `} >
                                                        <Edit
                                                            embedClass={style.btnEditPortfolio}
                                                            id={ex.id}
                                                        >
                                                            <FontAwesomeIcon icon={faPenFancy} style={{ fontSize: "15px", padding: "5px 6px 2px 6px" }}></FontAwesomeIcon>
                                                        </Edit>
                                                        <Delete 
                                                            embedClass={style.btnDeletePortfolio} 
                                                            id={ex.id}
                                                        >
                                                            <FontAwesomeIcon icon={faTrash} style={{ fontSize: "15px", padding: "5px 6px 2px 6px" }}></FontAwesomeIcon>
                                                        </Delete>
                                                    </div>
                                                }

                                                <Image src={img1} className={style.img} />
                                                <p className='pt-4'>{ex.porfolio}</p>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-Seller" role="tabpanel" aria-labelledby="pills-Seller-tab" tabindex="0">
                                <div className="row jusitfy-content-center">
                                    <div className="col-12 text-center">
                                        {experience?.map((ex, i) => (
                                            <div className={`${style.rowExperience} row `} key={i}
                                            onMouseEnter={() => setIsShow(i)}
                                            onMouseLeave={() => setIsShow(false)}
                                            >
                                                <div className="col-2">
                                                    <Image className='img-fluid' src={Experience} alt=""></Image>
                                                </div>
                                                <div className="col-9 text-start position-relative"
                                                
                                                >
                                                    <p className='fw-bolder'>{ex.jobdesk}</p>
                                                    <p className>{ex.workplace}</p>
                                                    <p className='text-secondary mb-4'>{ex.date}</p>
                                                    <p className={style.exDescription}>{ex.desc}</p>
                                                    <hr />

                                                    {isShow === i &&
                                                        <div className={`buttonAction `} >
                                                            <Edit
                                                                embedClass={style.btnEditPortfolio}
                                                                id={ex.id}
                                                            >
                                                                <FontAwesomeIcon icon={faPenFancy} style={{ fontSize: "15px", padding: "5px 6px 2px 6px" }}></FontAwesomeIcon>
                                                            </Edit>
                                                            <Delete 
                                                                embedClass={style.btnDeletePortfolio} 
                                                                id={ex.id}
                                                            >
                                                                <FontAwesomeIcon icon={faTrash} style={{ fontSize: "15px", padding: "5px 6px 2px 6px" }}></FontAwesomeIcon>
                                                            </Delete>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        ))}
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