import EventCard from '@/components/event-card/event-card.compoent'
import { API_URL } from '@app-utils/config/fetchUrl'
import { EventResponce } from '@app-utils/types/general-types'
import Link from 'next/link'
import SearchBox from '@/components/search-box/search-box.compoent'

import style from './page.module.css'

const getEvents = async (url: string) => {
    const res = await fetch(url)
    return res.json()
}

const EventsPage = async () => {
    const res: EventResponce = await getEvents(`${API_URL}/api/events`)

    return (
        <>
            <div className={style.header}>
                <SearchBox />
            </div>
            <div className={style.container}>
                {res.data.events.map((e) => {
                    return <EventCard data={e} />
                })}
            </div>
        </>
    )
}

export default EventsPage;