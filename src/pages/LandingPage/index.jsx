import React from "react";
import LayoutPage from '@/Components/LayoutPage'
import button from '../../Components/Navbar/Navbar.module.css'
import Image from 'next/image'
import img from '../../Assets/Home/imgSection.png'
import img2 from '../../Assets/Home/imgSection2.png'
import SectionPage from '@/Components/Section/LandingPage/SectionPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import style from './Landing.module.css'
import SlideCard from "@/Components/SlideCard";


const LandingPage = () => {

    return (
        <LayoutPage>
            <SectionPage embedSection={style.sectionOne}>
                <div className="main container">
                    <div className="row flex-column-reverse flex-md-row">
                        <div className={`col-md-5 col-12 d-grid align-items-center ${style.sectionOneTitle}`}>
                            <div className="row">
                                <div className="col-md-10">
                                    <h1 className="fw-bolder">Talenta terbaik negri untuk perubahan revolusi 4.0</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                                    <button className={`btn ${button.btn1} mt-5`} >Mulai Dari Sekarang</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-12 d-grid justify-content-md-end justify-content-center mb-4 mb-md-0">
                            <div className={style.imgWrapper}>
                                <div className={style.box1} />
                                <Image className={`${style.imgSection} img-fluid`} src={img} ></Image>
                            </div>

                        </div>
                    </div>
                </div>
            </SectionPage>

            <SectionPage embedSection={style.sectionTwo}>
                <div className="row">
                    <div className="col-md-6 col-12 text-center d-grid justify-content-center">
                        <div className={style.imgWrapper2}>
                            <div className={style.box2} />
                            <Image className={`img-fluid ${style.imgSection2}`} src={img2}></Image>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 mt-4 mt-md-0">
                        <h1 className="fw-bolder">Kenapa harus mencari tallent di peworld</h1>
                        <div className="row mt-4">
                            <div className="col-12">
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Lorem ipsum dolor sit amet. </p>
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Lorem ipsum dolor sit amet. </p>
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Lorem ipsum dolor sit amet. </p>
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Lorem ipsum dolor sit amet. </p>
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Lorem ipsum dolor sit amet. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionPage>

            <SectionPage embedSection={style.sectionThree}>
                <div className="row my-5 flex-column-reverse flex-md-row">
                    <div className="col-12 col-md-6">
                        <h1 className="fw-bolder">Skill Talent</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta modi, impedit nobis vitae commodi fuga.</p>
                        <div className="row mt-4">
                            <div className="col-6">
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Golang </p>
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Java </p>
                                <p><FontAwesomeIcon icon={faCheckCircle} /> HTML </p>
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Javascript </p>
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Python </p>
                            </div>
                            <div className="col-6">
                                <p><FontAwesomeIcon icon={faCheckCircle} /> PHP </p>
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Ruby </p>
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Sephire </p>
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Lorem ipsum dolor sit amet. </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 text-center mb-md-0 mb-4 d-grid justify-content-center">
                        <div className={style.imgWrapper3}>
                            <div className={style.box3}/>
                            <Image className={`${style.imgSection3} img-fluid`} src={img2}></Image>
                        </div>
                    </div>

                </div>
            </SectionPage>

            <SectionPage embedSection={style.sectionFour}>
                <div className="row my-5 justify-content-center">
                    <h1 className='text-center fw-bolder mb-5'>Their opinion about peworld</h1>
                    <div className="col-lg-12 col-md-12 col-12">
                        <SlideCard />
                    </div>
                </div>
            </SectionPage>


            <SectionPage embedSection={style.sectionFive}>
                <div className="row my-5 justify-content-center d-flex align-items-center h-100">
                    <div className="col-12">
                        <div className={style.box}>
                            <div className="row justify-content-around d-flex align-items-center h-100">
                                <div className="col-4 text-light">
                                    <h4>Lorem Ipsum Dolar Sit Amet</h4>
                                </div>
                                <div className="col-4 text-end">
                                    <button className="btn btn-light">
                                        Mulai dari sekarang
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </SectionPage>
        </LayoutPage>
    )
}

export default LandingPage