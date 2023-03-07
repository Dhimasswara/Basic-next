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
import { getDetailWorker } from '@/redux/actions/workerActions'
import { useDispatch } from 'react-redux'
import { updateWorker } from '@/redux/actions/workerActions'
import { createSkill } from '@/redux/actions/skillAction'


const EditProfile = () => {

    // const [isShow, setIsShow] = useState(false)
    const router = useRouter()
    const { id } = router.query
    // console.log(id);

    const dispatch = useDispatch();
    const [worker, setWorker] = useState([]);
    const [skill, setSkill] = useState([]);
    const [portfolio, setPortfolio] = useState({
        name_portfolio: '',
        repo_link: '',
        type_portfolio: 'Aplikasi Mobile',
    });
    console.log(worker);

    useEffect(() => {
        dispatch(getDetailWorker(setWorker, id))
    }, [dispatch, id])

    const handleChange = (e) => {
        setWorker({
            ...worker,
            [e.target.name]: e.target.value,
        });
    };    

    const changePortfolio = (e) => {
        setPortfolio({
            ...portfolio,
            [e.target.name]: e.target.value,
        });
    };  
    
    
    // const handleChangeSkill = (e) => {
    //     setSkill({
    //         ...worker,
    //         [e.target.name]: e.target.value,
    //     });
    // }; 
    
    const handleSubmit = async e => {
        e.preventDefault();
        // console.log(worker);
        dispatch(updateWorker(worker, id));
    };

    const handleSkill = async e => {
        e.preventDefault();
        dispatch(createSkill(skill, id));
    };
    

    const [experience, setExperience] = useState({
      jobdesk: '',
      company_name: '',
      date_start: '2019',
      date_end: '2020',
      description: '',
    })


    // useEffect(() => {
    //     axios
    //         .get(`http://localhost:3020/worker/${id}`)
    //         .then((response) => {
    //             setData(response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, [id]);

    
    const changeExperience = (e) => {
        setExperience({
          ...experience,
          [e.target.name]: e.target.value,
        });
      };


    const handlePortfolio = async e => {
        e.preventDefault();
        // console.log(portfolio);

        if (!portfolio) {
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
            const result = await axios.post(`http://localhost:4000/portfolio/addportfo/${id}`, portfolio )
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
                // console.log(result);
                console.log(result);
        }
    };

    // const handleSkill = async e => {
    //     e.preventDefault();

    //     if (!skill) {
    //         toast.warn('Please input your data!', {
    //             position: "top-center",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //             });
    //     } else {
    //         // console.log(skill);
    //         const result = await axios.post(`http://localhost:4000/skills/addskills/${id}`, {name: skill})
    //             .then(res => {
    //                 console.log(res.data)
    //                 toast.success('Your data has been updated!', {
    //                     position: "top-center",
    //                     autoClose: 2000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                     theme: "light",
    //                     });

    //                     return res.data
    //             })
    //         // console.log(result);
    //     }
    // };

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
            const result = await axios.post(`http://localhost:4000/experience/add/${id}`, { ...experience })
                .then(res => {
                    // console.log(res.data)
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
            // console.log(result);
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
                                        <Image width={150} height={150} crossOrigin='anonymous' src={worker?.image === null ? '' : worker?.image} className='img-thumbnail rounded-circle'></Image>
                                        <button style={{ backgroundColor: "white", border: "none", marginTop: "10px" }}><FontAwesomeIcon icon={faPencil} /><span style={{ marginLeft: "10px" }}>Edit</span></button>
                                    </div>
                                    <h5 className='fw-bolder'>{worker?.name}</h5>
                                    <span className={style.work}>{worker?.jobdesk}</span>
                                    <p className={style.address}><FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "10px" }} />{worker?.place}</p>
                                    <span className={style.worker}>{worker?.jobdesk}</span>
                                </div>
                            </div>
                        </div>
                        <div className={`row ${style.buttonLeft}`}>
                            <div className={`d-grid col-12 ${style.rowTwoLeft}`}>
                                <button className={`btn mb-2 ${style.btn}`} type="button" onClick={handleSubmit}>Simpan</button>
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
                                        <form onSubmit={handleSubmit}>
                                            <InputFormEdit type={'text'} title={'Nama Lengkap'} name={'name'} placeholder={'Masukan nama lengkap'} value={worker?.name} onchange={handleChange} />
                                            <InputFormEdit type={'text'} title={'Job Desk'} name={'jobdesk'} placeholder={'Jobdesk'} value={worker?.jobdesk} onchange={handleChange} />
                                            <InputFormEdit type={'text'} title={'Domisili'} name={'address'} placeholder={'Domisili'} value={worker?.address} onchange={handleChange} />
                                            <InputFormEdit type={'text'} title={'Tempat Kerja'} name={'workplace'} placeholder={'Tempat Kerja'} value={worker?.workplace} onchange={handleChange} />
                                            <InputFormEdit type={'textarea'} title={'Deskripsi'} name={'description'} placeholder={'Deskripsi Pekerjaan'} value={worker?.description} onchange={handleChange} />
                                        </form>
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
                                                <InputFormEdit type={'text'} title={'Nama perusahaan'} name={'company_name'} placeholder={'PT Harus bisa'} value={experience.company_name} onchange={changeExperience} req={'required'}/>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <InputFormEdit type={'text'} title={'Bulan/tahun'} name={'date_start'} placeholder={'Januari 2018'} value={experience.date_start} onchange={changeExperience} req={'required'}/>
                                            </div>
                                        </div>
                                        <InputFormEdit type={'textarea'} title={'Deskripsi Singkat'} name={'description'} placeholder={'Deskripsikan pekerjaan anda'} value={experience.description} onchange={changeExperience} />
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
                                        <InputFormEdit type={'text'} title={'Nama aplikasi'} value={portfolio?.name_portfolio} name={'name_portfolio'} placeholder={'Masukan nama aplikasi'} onchange={changePortfolio} />
                                        <InputFormEdit type={'text'} title={'Link Repository'} value={portfolio?.repo_link} name={'repo_link'} placeholder={'Masukan link repository'} onchange={changePortfolio} />
                                        <div className={`d-md-flex d-grid d-block ${style.areaRadio}`}>
                                            <label className={`form-check-label mb-2 mb-md-0 me-md-2 me-0 ${style.radioLabel} d-flex align-items-center rounded border`} for="inlineRadio1">
                                                <input className={`form-check-input ${style.radioInput}`} type="radio" name="type_portfolio" id="inlineRadio1" value="option1" disabled />
                                                <span>Aplikasi Mobile</span>
                                            </label>
                                            <label className={`form-check-label ${style.radioLabel} d-flex align-items-center rounded border`} for="inlineRadio2">
                                                <input className={`form-check-input ${style.radioInput}`} type="radio" name="type_portfolio" id="inlineRadio2" value="option2" disabled />
                                                <span>Web Browser</span>
                                            </label>
                                        </div>
                                        <hr />
                                        <div className="button d-grid">
                                            <button className='btn btn-warning d-grid' style={{ height: "50px", lineHeight: "36px" }} onClick={handlePortfolio}>Simpan</button>
                                        </div>
                                    </div>
                                </div> 
                                {/* <div className={`row ${style.buttonRight}`}>
                                    <div className={`d-grid col-12 ${style.rowTwoLeft}`}>
                                        <button className={`btn mb-2 ${style.btn}`} onClick={handleSubmit}>Simpan</button>
                                        <button className={`btn ${style.btn}`}>Batal</button>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>



            </SectionPage>
        </LayoutLoginProfile>
    )
}

export default EditProfile