import LayoutPage from '@/Components/LayoutPage/LayoutPage'
import SectionPage from '@/Components/Section/LandingPage/SectionPage'
import React from 'react'
import style from './style.module.css'
import img from '../../Assets/Home/imgSection.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'

const index = () => {
    const baseURL = "http://localhost:3000/user";
    const [post, setPost] = React.useState('');
    const [skill, setSkills] = React.useState('');
   

    useEffect(() => {
      axios.get(baseURL)
      .then((response) => {
        setPost(response.data);
      });
    }, []);

    const getAllSkillsById = async () => {
        await axios.get('http://localhost:3000/skills' )
        .then((response) => {
            setSkills(response.data);
        });
    }

    useEffect(() => {
        getAllSkillsById()
      }, []);


    if(!post) return ''
    // if(!skill) return ''


    return (
        <LayoutPage>
            

            <div className={`${style.strapBrand} `}>
                <p className='container'>Top Jobs</p>
            </div>
            <SectionPage>
                <div className={`${style.searching} mt-4 mb-4`}>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className="row py-5">
                    <div className="col-12">
                        <div className="card" style={{ width: "100%" }}>
                            <ul className="list-group list-group-flush">
                                {post.map(users => (
                                <li className="list-group-item py-3">
                                    <div className="row">
                                        <div className="col-sm-2 col-3 col-lg-1 d-flex align-items-center">
                                            <Image className='img-thumbnail' src={img} style={{ width: "100%", height: "auto", borderRadius: "100%" }}></Image>
                                        </div>
                                        <div className={`col-lg-9 col-9 col-sm-10 ${style.body}`}>
                                            <h4>{users.name}</h4>
                                            <span>{users.jabatan}</span>
                                            <p><FontAwesomeIcon icon={faLocationDot} /> {users.address}</p>
                                            <div className={`d-flex d-block ${style.listSkills}`}>
                                                {/* {skill.map(skills => (
                                                <> */}
                                                <p className={`text-wrap btn me-2 ${style.skills}`}>Pyhton</p>
{/*                                         
                                                </>
                                                ))} */}
                                            </div>
                                        </div>
                                        <div className="offset-3 offset-sm-2 offset-lg-0 col-5 col-md-2 d-grid justify-content-md-center justify-content-start align-items-center mt-lg-0 mt-2">
                                            <Link href={`/Profile/${users.id}`} className={`btn text-wrap  btn-block ${style.seeProfil}`}><FontAwesomeIcon icon={faEye} /> Profil</Link>
                                        </div>
                                    </div>
                                </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mb-5 mt-2">
                    <div className="col-5  d-grid justify-content-center" >
                        <nav aria-label="Page navigation example">
                            <ul className={`pagination ${style.pagination}`}>
                                <li className={`page-item ${style.pageItem} me-2`}>
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li className="page-item me-2"><a className="page-link" href="#">1</a></li>
                                <li className="page-item me-2"><a className="page-link" href="#">2</a></li>
                                <li className="page-item me-2">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </SectionPage>
        </LayoutPage>
    )
}

export default index