'use client'

import SvgIcon from '../svg-icon/svg-icon.component'

import Home from '@app-svg/Home.svg'
import Profile from '@app-svg/profile.svg'
import Ticket from '@app-svg/ticket.svg'
import Location from '@app-svg/location.svg'

import style from './footer.module.css'
import Link from 'next/link'
import { useState } from 'react'

const Footer = () => {
    const [currentPage, setCurrent] = useState('home')

    const onClick = (value: string) => {
        setCurrent(value)
    }
    return (
        <div className={style.viewPortFix} >
            <footer className={`${style.container} `}>
                <Link href='/' onClick={() => onClick('home')}>
                    <SvgIcon className={currentPage === 'home' && 'active-element'} Src={Home} />
                </Link>
                <Link href='/events' onClick={() => onClick('events')}>
                    <SvgIcon className={currentPage === 'events' && 'active-element'} Src={Ticket} />
                </Link>
                <Link href='/events' onClick={() => onClick('map')}>
                    <SvgIcon className={currentPage === 'map' && 'active-element'} Src={Location} />
                </Link>
                <Link href='/' onClick={() => onClick('profile')}>
                    <SvgIcon className={currentPage === 'profile' && 'active-element'} Src={Profile} />
                </Link>
            </footer>
        </div>
    )
}

export default Footer;