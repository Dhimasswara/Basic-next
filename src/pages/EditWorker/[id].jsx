import LayoutLoginProfile from '@/Components/LayoutPage/LayoutLoginProfil'
import SectionPage from '@/Components/Section/LandingPage/SectionPage'
import style from './editProfile.module.css'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import img from '../../Assets/Home/imgSection.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPencil } from '@fortawesome/free-solid-svg-icons'
import InputFormEdit from '@/Components/Form/InputFormEdit'
import { useRouter } from 'next/router'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const EditProfile = () => {

    const router = useRouter()
    const { id } = router.query
    const id_user = parseInt(id);
    console.log(id_user);

    const [data, setData] = useState({});
    const [porfolio, setPortfolio] = useState('');
    const [skill, setSkill] = useState('');
    const [experience, setExperience] = useState({
      jobdesk: '',
      workplace: '',
      date: '',
      desc: ''
    })


    useEffect(() => {
        axios
            .get(`http://localhost:3020/worker/${id}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        console.log(data);
    };

    const changeExperience = (e) => {
        setExperience({
          ...experience,
          [e.target.name]: e.target.value,
        });
      };

    const handleSubmit = async e => {
        e.preventDefault();
        const result = await axios.put(`http://localhost:3020/worker/${id}`, data)
        console.log(result);
    };

    const handlePortfolio = async e => {
        e.preventDefault();

        if (!porfolio) {
            toast.warn('Please input your portfolio!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        } else {
            const result = await axios.post(`http://localhost:3020/portfolio`, {porfolio, id_user})
                .then(res => {
                    console.log(res.data)
                    toast.success('Your data has been updated!', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                })
            console.log(result);
        }
    };

    const handleSkill = async e => {
        e.preventDefault();

        if (!skill) {
            toast.warn('Please input your data!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        } else {
            const result = await axios.post(`http://localhost:3020/skills`, { skill: skill, id_user: id })
                .then(res => {
                    console.log(res.data)
                    toast.success('Your data has been updated!', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                })
            console.log(result);
        }
    };

    const handleExperience = async e => {
        e.preventDefault();

        if (!experience) {
            toast.warn('Please input your data!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        } else {
            const result = await axios.post(`http://localhost:3020/experience`, { ...experience , id_user: id })
                .then(res => {
                    console.log(res.data)
                    toast.success('Your data has been updated!', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                })
            console.log(result);
        }
    };

    return (
        <LayoutLoginProfile>
            <ToastContainer/>
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
                                        <button style={{ backgroundColor: "white", border: "none", marginTop: "10px" }}><FontAwesomeIcon icon={faPencil} /><span style={{ marginLeft: "10px" }}>Edit</span></button>
                                    </div>
                                    <h5 className='fw-bolder'>{data.name}</h5>
                                    <span className={style.work}>{data.jobdesk}</span>
                                    <p className={style.address}><FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "10px" }} />{data.place}</p>
                                    <span className={style.worker}>{data.jobdesk}</span>
                                </div>
                            </div>
                        </div>
                        <div className={`row ${style.buttonLeft}`}>
                            <div className={`d-grid col-12 ${style.rowTwoLeft}`}>
                                <button className={`btn mb-2 ${style.btn}`} onClick={handleSubmit}>Simpan</button>
                                <button className={`btn ${style.btn}`}>Batal</button>
                            </div>
                        </div>
                    </div>
                    <div className={`col-8 col-md-8 ${style.right}`}>
                        <div className="row">
                            <div className={`col-12`}>
                                <div className={`row inputEdit justify-content-center mb-3 mb-md-5 ${style.themeRow} ${style.rowOneRight}`}>
                                    <div className="col-11">
                                        <h3 className='pt-4'>Data Diri</h3>
                                        <hr className={style.hr} />
                                        <InputFormEdit type={'text'} title={'Nama Lengkap'} name={'name'} placeholder={'Masukan nama lengkap'} value={data?.name} onchange={handleChange} />
                                        <InputFormEdit type={'text'} title={'Job Desk'} name={'title'} placeholder={'Jobdesk'} value={data?.jobdesk} onchange={handleChange} />
                                        <InputFormEdit type={'text'} title={'Domisili'} name={'title'} placeholder={'Domisili'} value={data?.place} onchange={handleChange} />
                                        <InputFormEdit type={'text'} title={'Tempat Kerja'} name={'title'} placeholder={'Tempat Kerja'} value={data?.workplace} onchange={handleChange} />
                                        <InputFormEdit type={'textarea'} title={'Deskripsi'} name={'title'} placeholder={'Deskripsi Pekerjaan'} value={data?.Bio} onchange={handleChange} />
                                    </div>
                                </div>
                                <div className={`row inputEdit justify-content-center mb-3 mb-md-5 ${style.themeRow} ${style.rowOneRight}`}>
                                    <div className="col-11">
                                        <h3 className='pt-4'>Skill</h3>
                                        <hr className={style.hr} />
                                        <div className="row">
                                            <div className="col-12 col-md-9">
                                                <InputFormEdit type={'no-title'} name={'skill'} placeholder={'Ex: Java'} onchange={(e) => setSkill(e.target.value)} />
                                            </div>
                                            <div className="col-12 col-md-3 mb-4 mb-md-0 d-grid align-items-center">
                                                <button className='btn btn-warning' style={{ height: "50px" }} onClick={handleSkill}>Simpan</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`row inputEdit justify-content-center mb-3 mb-md-5 ${style.themeRow} ${style.rowOneRight}`}>
                                    <div className="col-11 mb-5">
                                        <h3 className='pt-4'>Pengalaman Kerja</h3>
                                        <hr className={style.hr} />
                                        <form onSubmit={handleExperience}>
                                        <InputFormEdit type={'text'} title={'Posisi'} name={'jobdesk'} placeholder={'Web Developer'} value={experience.jobdesk} onchange={changeExperience} req={'required'}/>
                                        <div className="row" style={{ marginTop: "-20px", marginBottom: "-20px" }}>
                                            <div className="col-12 col-md-6 ">
                                                <InputFormEdit type={'text'} title={'Nama perusahaan'} name={'workplace'} placeholder={'PT Harus bisa'} value={experience.workplace} onchange={changeExperience} req={'required'}/>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <InputFormEdit type={'text'} title={'Bulan/tahun'} name={'date'} placeholder={'Januari 2018'} value={experience.date} onchange={changeExperience} req={'required'}/>
                                            </div>
                                        </div>
                                        <InputFormEdit type={'textarea'} title={'Deskripsi Singkat'} name={'desc'} placeholder={'Deskripsikan pekerjaan anda'} value={experience.desc} onchange={changeExperience} />
                                        <hr />
                                        <div className="button d-grid">
                                            <button type='submit' className='btn btn-warning d-grid' style={{ height: "50px", lineHeight: "36px" }}>Simpan</button>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                                <div className={`row inputEdit justify-content-center mb-3 mb-md-5 ${style.themeRow} ${style.rowOneRight}`}>
                                    <div className="col-11 mb-5">
                                        <h3 className='pt-4'>Portofolio</h3>
                                        <hr className={style.hr} />
                                        <InputFormEdit type={'text'} title={'Nama aplikasi'} name={'porfolio'} placeholder={'Masukan nama aplikasi'} onchange={(e) => setPortfolio(e.target.value)} />
                                        <InputFormEdit type={'text'} title={'Nama Lengkap'} name={'title'} placeholder={'Masukan nama lengkap'} dis={"disabled"} />
                                        <div className={`d-md-flex d-grid d-block ${style.areaRadio}`}>
                                            <label className={`form-check-label mb-2 mb-md-0 me-md-2 me-0 ${style.radioLabel} d-flex align-items-center rounded border`} for="inlineRadio1">
                                                <input className={`form-check-input ${style.radioInput}`} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" disabled />
                                                <span>Aplikasi Mobile</span>
                                            </label>
                                            <label className={`form-check-label ${style.radioLabel} d-flex align-items-center rounded border`} for="inlineRadio2">
                                                <input className={`form-check-input ${style.radioInput}`} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" disabled />
                                                <span>Web Browser</span>
                                            </label>
                                        </div>
                                        <hr />
                                        <div className="button d-grid">
                                            <button className='btn btn-warning d-grid' style={{ height: "50px", lineHeight: "36px" }} onClick={handlePortfolio}>Simpan</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={`row ${style.buttonRight}`}>
                                    <div className={`d-grid col-12 ${style.rowTwoLeft}`}>
                                        <button className={`btn mb-2 ${style.btn}`} onClick={handleSubmit}>Simpan</button>
                                        <button className={`btn ${style.btn}`}>Batal</button>
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