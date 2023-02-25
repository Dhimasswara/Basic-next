import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faFireExtinguisher, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" href="#">
                        <FontAwesomeIcon
                            icon={faBuilding}
                            style={{ marginRight: "10px", fontSize: 25, color: 'purple' }}
                        />
                        <span className='fw-bolder' style={{ fontSize: 25 }}>Peworld</span>
                    </Link>
                    <button className={`navbar-toggler ${style.navbarToggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-brands fa-xing"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className='d-grid d-lg-block ms-lg-auto mt-4 mt-md-0'>
                            <button className={`btn btn-outline-success me-md-2 me-0 mb-2 mb-lg-0 ${style.btn1}`} type="button">Masuk</button>
                            <button className={`btn btn-outline-success me-md-2 me-0 ${style.btn1}`} type="button">Daftar</button>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar