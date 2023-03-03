import LayoutPage from '@/Components/LayoutPage/LayoutPage'
import SectionPage from '@/Components/Section/LandingPage/SectionPage'
import React from 'react'
import style from './style.module.css'
import { useEffect } from 'react'
import axios from 'axios'
import CardWorker from '@/Components/CardListWorker'
import AOS from 'aos';
import 'aos/dist/aos.css';

const index = () => {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, []);

    const [post, setPost] = React.useState('');


    useEffect(() => {
        axios.get('http://localhost:3020/worker')
            .then((response) => {
                setPost(response.data);
                console.log(setPost);
            });
    }, []);

    if (!post) return ''
    // if(!skill) return ''

    return (
        <LayoutPage>
            <div className={`${style.strapBrand} `}>
                <p className='container'>Top Jobs</p>
            </div>
            <SectionPage>
                <div className={`${style.searching} mt-4 mb-4`} data-aos="zoom-out-down">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className={` ${style.btnSearch} btn btn-outline-success"`} type="submit">Search</button>
                        <select className={`${style.Drop} form-selec `} aria-label="Default select example">
                            <option selected className={`${style.btnDrop}`}>Sort</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        {/* <div className={`${style.Drop} dropdown`}>
                            <button className={`${style.btnDrop} dropdown btn dropdown-toggle`} type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button className="dropdown-item" type="button">Action</button></li>
                                <li><button className="dropdown-item" type="button">Another action</button></li>
                                <li><button className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </div> */}
                        <div className={style.garisVertical}></div>
                    </form>
                </div>
                <div className="row py-5" data-aos="zoom-out-up">
                    <div className="col-12">
                        <div className="card" style={{ width: "100%" }}>
                            <ul className="list-group list-group-flush">
                                {post.map((users, index) => (
                                    <CardWorker
                                        name={users.name}
                                        address={users.place}
                                        jabatan={users.jobdesk}
                                        id={users.id}
                                        i={index}
                                    />
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