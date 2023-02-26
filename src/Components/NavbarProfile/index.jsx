import { faMessage, faBuilding, faMailBulk, faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import style from './Navbar.module.css'
import img from '../../Assets/Home/imgSection2.png'
import { useState, useEffect } from 'react'

const NavbarProfile = () => {

    const [item, setItem] = useState(['']);
    console.log(item);

    useEffect(() => {
        const localLength = localStorage.getItem('user');
        if (!localLength) {
            console.log(localLength);

        } else {
            setItem(localLength)
        }

    }, []);

    return (
        <>

            {item !== 'user' ?
                <nav className="navbar bg-body-tertiary navbar-expand-lg">
                    <div className="container">
                        <Link className="navbar-brand" href={'/LandingPage'}>
                            <FontAwesomeIcon
                                icon={faBuilding}
                                style={{ marginRight: "10px", fontSize: 25, color: '#5E50A1' }}
                            />
                            <span className='fw-bolder' style={{ fontSize: 25 }}>Peworld</span>
                        </Link>
                        <button className={`navbar-toggler ${style.navbarToggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa-brands fa-xing"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className='d-grid d-lg-block ms-lg-auto mt-4 mt-md-0'>
                                <Link href={'/Login'} className={`btn btn-outline-success me-md-2 me-0 mb-2 mb-lg-0 ${style.btn1}`} type="button">Masuk</Link>
                                <Link href={'/Register'} className={`btn btn-outline-success me-md-2 me-0 ${style.btn1}`} type="button">Daftar</Link>
                            </div>
                        </div>

                    </div>
                </nav>

                :

                <nav className="navbar bg-body-tertiary navbar-expand-lg">
                    <div className="container">
                        <Link className="navbar-brand" href={'/LandingPage'}>
                            <FontAwesomeIcon
                                icon={faBuilding}
                                style={{ marginRight: "10px", fontSize: 25, color: '#5E50A1' }}
                            />
                            <span className='fw-bolder' style={{ fontSize: 25 }}>Peworld</span>
                        </Link>
                        <button className={`navbar-toggler ${style.navbarToggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa-brands fa-xing"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className='ms-lg-auto mt-4 mt-md-0 d-flex justify-content-center justify-content-md-end'>
                                <button className={`me-5 ${style.message}`}><FontAwesomeIcon icon={faMailBulk} /> </button>
                                <button className={`me-5 ${style.notif}`}><FontAwesomeIcon icon={faBell} /> </button>
                                <div className={style.profile}>
                                    <Image className={`${style.img} img-fluid`} src={img} />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>


            }
        </>
    )
}

export default NavbarProfile