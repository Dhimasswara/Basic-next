import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import style from './Footer.module.css'
import React from 'react'

const Footer = () => {
  return (
    <div className={style.Footer}>
        <div className="container">
            <div className="brand">
                <FontAwesomeIcon icon={faBuilding} style={{fontSize: 30}}/>
                <span style={{fontSize: 30}} >Peworld</span>

                <div className="row description">
                    <div className="col-8">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum beatae eum quod dicta, blanditiis quidem, nulla fugit repellendus veritatis tempore ullam sint officia. Veritatis quibusdam quam sit! Laudantium, facilis, odit debitis consequatur ut expedita aliquam, molestiae perferendis sunt distinctio asperiores quod magnam quas eum libero ratione quis hic maiores! Quis?</p>
                    </div>
                </div>

                <hr style={{border: "1.5px solid white"}}/>
            </div>
        </div>
    </div>
  )
}

export default Footer