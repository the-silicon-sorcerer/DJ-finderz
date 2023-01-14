'use client'

import SvgIcon from '../svg-icon/svg-icon.component';
import search from '@app-svg/search.svg'
import options from '@app-svg/options.svg'
import style from './search-box.module.css'
import React from 'react';


const SearchBox = () => {

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <form className={style.container} onSubmit={onSubmit}>
            <SvgIcon Src={search} />
            <input placeholder='Search' />
            <SvgIcon Src={options} />
        </form>
    )
}

export default SearchBox;