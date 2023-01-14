import Image from "next/image"
import style from './svg-icon.module.css'

interface SvgIconProps {
    Src: string
    className?: string | boolean
}

const SvgIcon = ({ Src, className = '' }: SvgIconProps) => {
    return (
        <button className={`${style.container} ${className}`}>
            <Src />
        </button>
    )
}

export default SvgIcon