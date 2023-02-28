import LayoutLoginProfile from '@/Components/LayoutPage/LayoutLoginProfil'
import SectionPage from '@/Components/Section/LandingPage/SectionPage'
import style from '../EditWorker/editProfile.module.css'
import React from 'react'
import Image from 'next/image'
import img from '../../Assets/Home/imgSection.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPencil } from '@fortawesome/free-solid-svg-icons'
import InputFormEdit from '@/Components/Form/InputFormEdit'


const EditRecruiter = () => {
    return (
        <LayoutLoginProfile>
            <div className={`${style.strapBrand} `}>
                <p className='container'></p>
            </div>
            <SectionPage embedSection={style.sectionProfile}>
                <div className="row justify-content-between">
                    <div className={`col-10 col-md-3 ${style.left} sticky-md-top`} style={{ top: "30px" }}>
                        <div className={`row`}>
                            <div className={`col-12 ${style.rowOneLeft}`}>
                                <div className="profileDesc">
                                    <div className={` mx-auto pb-4 pt-2 d-flex flex-column ${style.picture}`}>
                                        <Image src={img} className='img-thumbnail rounded-circle'></Image>
                                        <button style={{backgroundColor: "white", border: "none", marginTop: "10px"}}><FontAwesomeIcon icon={faPencil}/><span style={{marginLeft: "10px"}}>Edit</span></button>
                                    </div>
                                    <h5 className='fw-bolder'>Dhimas Pandu Y</h5>
                                    <span className={style.work}>Front End Developer</span>
                                    <p className={style.address}><FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "10px" }} /> Lorem Ipsum</p>
                                    <span className={style.worker}>Freelancer</span>
                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className={`d-grid col-12 ${style.rowTwoLeft}`}>
                                <button className={`btn mb-2 ${style.btn}`}>Simpan</button>
                                <button className={`btn ${style.btn}`}>Batal</button>
                            </div>
                        </div>
                    </div>
                    <div className={`col-8 col-md-8 ${style.right}`}>
                        <div className="row">
                            <div className={`col-12`}>
                                <div className={`row inputEdit justify-content-center mb-5 ${style.themeRow} ${style.rowOneRight}`}>
                                    <div className="col-11">
                                        <h3 className='pt-4'>Data Diri</h3>
                                        <hr className={style.hr} />
                                        <InputFormEdit type={'text'} title={'Nama Lengkap'} name={'title'} placeholder={'Masukan nama lengkap'} className="mb-0" />
                                        <InputFormEdit type={'text'} title={'Job Desk'} name={'title'} placeholder={'Masukan nama lengkap'} />
                                        <InputFormEdit type={'text'} title={'Domisili'} name={'title'} placeholder={'Masukan nama lengkap'} />
                                        <InputFormEdit type={'textarea'} title={'Deskripsi'} name={'title'} placeholder={'Masukan nama lengkap'} />
                                        <InputFormEdit type={'text'} title={'Tempat'} name={'title'} placeholder={'Masukan nama lengkap'} />
                                        <InputFormEdit type={'text'} title={'Tempat'} name={'title'} placeholder={'Masukan nama lengkap'} />
                                        <InputFormEdit type={'text'} title={'Tempat'} name={'title'} placeholder={'Masukan nama lengkap'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </SectionPage>
        </LayoutLoginProfile>
    )
}

export default EditRecruiter