import Image from "next/image"
import style from './svg-icon.module.css'

const SvgIcon = ({ Src }: { Src: any }) => {
    return (
        <div className={style.container}>
            <Src />
        </div>
    )
}

export default SvgIcon