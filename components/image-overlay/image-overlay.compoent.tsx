import style from './image-overlay.module.css'

const ImageOverlay = ({ opacity }: { opacity: string }) => {
    return (
        <div className={style.overlay} style={{ opacity: opacity }}></div>
    )
}

export default ImageOverlay