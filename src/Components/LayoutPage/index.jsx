import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import style from './layoutMain.module.css'
import img from '../../Assets/Home/imgSection.png'
import Image from 'next/image'

const LayoutPage = ({children}) => {
  return (
    <div className={style['main-wrapper']}>
        <Navbar/>
        <div className={`container ${style['content-wrapper']}`}>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default LayoutPage