'use client'

import SvgIcon from '../svg-icon/svg-icon.component';
import { Event } from '@/utils/types/general-types';
import heart from '@app-svg/heart.svg'


import style from './event-card.module.css'
import Image from 'next/image';
import ImageOverlay from '../image-overlay/image-overlay.compoent';

const EventCard = ({ data }: { data: Event }) => {
    return (
        <div className={style.container}>
            <Image className={style.image} fill src={data.image} alt='' />
            <ImageOverlay opacity='60%' />
            <div className={style.likeContainer}>
                <SvgIcon className={style.heart} Src={heart} />
            </div>
            <div className={style.metaData}>
                <p>{data.date}</p>
                <h2>{data.name}</h2>
            </div>
        </div>
    )
}

export default EventCard;