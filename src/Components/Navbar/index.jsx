import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="navbar bg-body-tertiary bg-danger">
            <div className="container">
                <Link className="navbar-brand" href="#">
                    <FontAwesomeIcon 
                    icon={faBuilding}
                    style={{marginRight : "10px", fontSize: 25, color : 'purple'}}
                    />
                    <span className='fw-bolder' style={{fontSize: 25}}>Peworld</span>
                </Link>
                <div className="">
                    <button className="btn btn-outline-success me-2" type="button">Masuk</button>
                    <button className="btn btn-outline-success me-2" type="button">Daftar</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar