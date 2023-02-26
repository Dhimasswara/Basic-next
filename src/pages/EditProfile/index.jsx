import LayoutLoginProfile from '@/Components/LayoutPage/LayoutLoginProfil'
import SectionPage from '@/Components/Section/LandingPage/SectionPage'
import style from './editProfile.module.css'
import React from 'react'
import Image from 'next/image'
import img from '../../Assets/Home/imgSection.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import InputFormEdit from '@/Components/Form/InputFormEdit'


const EditProfile = () => {
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
                                    <div className={` mx-auto pb-4 pt-2 ${style.picture}`}>
                                        <Image src={img} className='img-thumbnail rounded-circle'></Image>
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
                                        <InputFormEdit type={'text'} title={'Nama Lengkap'} name={'title'} placeholder={'Masukan nama lengkap'} />
                                        <InputFormEdit type={'text'} title={'Job Desk'} name={'title'} placeholder={'Masukan nama lengkap'} />
                                        <InputFormEdit type={'text'} title={'Domisili'} name={'title'} placeholder={'Masukan nama lengkap'} />
                                        <InputFormEdit type={'text'} title={'Tempat'} name={'title'} placeholder={'Masukan nama lengkap'} />
                                        <InputFormEdit type={'textarea'} title={'Deskripsi'} name={'title'} placeholder={'Masukan nama lengkap'} />
                                    </div>
                                </div>
                                <div className={`row inputEdit justify-content-center mb-5 ${style.themeRow} ${style.rowOneRight}`}>
                                    <div className="col-11">
                                        <h3 className='pt-4'>Skill</h3>
                                        <hr className={style.hr} />
                                        <div className="row">
                                            <div className="col-9 col-md-10">
                                                <InputFormEdit type={'no-title'} name={'title'} placeholder={'Ex: Java'} />
                                            </div>
                                            <div className="col-3 col-md-2 d-grid align-items-center">
                                                <button className='btn btn-warning' style={{ height: "50px" }}>Simpan</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`row inputEdit justify-content-center mb-5 ${style.themeRow} ${style.rowOneRight}`}>
                                    <div className="col-11 mb-5">
                                        <h3 className='pt-4'>Pengalaman Kerja</h3>
                                        <hr className={style.hr} />
                                        <InputFormEdit type={'text'} title={'Nama Lengkap'} name={'title'} placeholder={'Masukan nama lengkap'} />
                                        <div className="row" style={{ marginTop: "-20px", marginBottom: "-20px" }}>
                                            <div className="col">
                                                <InputFormEdit type={'text'} title={'Nama Lengkap'} name={'title'} placeholder={'Masukan nama lengkap'} />
                                            </div>
                                            <div className="col">
                                                <InputFormEdit type={'text'} title={'Nama Lengkap'} name={'title'} placeholder={'Masukan nama lengkap'} />
                                            </div>
                                        </div>
                                        <InputFormEdit type={'text'} title={'Nama Lengkap'} name={'title'} placeholder={'Masukan nama lengkap'} />
                                        <InputFormEdit type={'textarea'} title={'Deskripsi'} name={'title'} placeholder={'Masukan nama lengkap'} />
                                        <hr />
                                        <div className="button d-grid">
                                            <button className='btn btn-warning d-grid' style={{ height: "50px", lineHeight: "36px" }}>Simpan</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={`row inputEdit justify-content-center mb-5 ${style.themeRow} ${style.rowOneRight}`}>
                                    <div className="col-11 mb-5">
                                        <h3 className='pt-4'>Portofolio</h3>
                                        <hr className={style.hr} />
                                        <InputFormEdit type={'text'} title={'Nama Lengkap'} name={'title'} placeholder={'Masukan nama lengkap'} />
                                        <InputFormEdit type={'text'} title={'Nama Lengkap'} name={'title'} placeholder={'Masukan nama lengkap'} />
                                        <div className={`d-flex d-block ${style.areaRadio}`}>
                                        <label className={`form-check-label ${style.radioLabel} d-flex align-items-center rounded border`} for="inlineRadio1">
                                            <input className={`form-check-input ${style.radioInput}`} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>  
                                            <span>Aplikasi Mobile</span>
                                        </label>
                                        <label className={`form-check-label ${style.radioLabel} d-flex align-items-center rounded border`} for="inlineRadio2">
                                            <input className={`form-check-input ${style.radioInput}`} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>  
                                            <span>Web Browser</span>
                                        </label>
                                        </div>
                                        <hr />
                                        <div className="button d-grid">
                                            <button className='btn btn-warning d-grid' style={{ height: "50px", lineHeight: "36px" }}>Simpan</button>
                                        </div>
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

export default EditProfile