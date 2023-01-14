import React from 'react';

import SvgIcon from '../svg-icon/svg-icon.component';
import style from './icon-gallery.module.css'

interface IconGalleryProps {
    svgs: any[]
}

const IconGallery = ({ svgs }: IconGalleryProps) => {
    return (
        <div className={style.container}>
            {svgs.map((svg) => {
                return <SvgIcon Src={svg} />
            })}
        </div>
    )
}

export default IconGallery;

