import SvgIcon from '../svg-icon/svg-icon.component'

import Home from '../../public/svg/home.svg'
import Profile from '../../public/svg/profile.svg'
import Ticket from '../../public/svg/ticket.svg'
import Location from '../../public/svg/location.svg'

import style from './footer.module.css'

const Footer = () => {
    return (
        <div className={style.viewPortFix} >
            <footer className={`${style.container} `}>
                <SvgIcon Src={Home} />
                <SvgIcon Src={Ticket} />
                <SvgIcon Src={Location} />
                <SvgIcon Src={Profile} />
            </footer>
        </div>
    )
}

export default Footer;