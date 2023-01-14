import IconGallery from '@/components/icon-gallery/icon-gallety.compoent'
import SearchBox from '@/components/search-box/search-box.compoent'
import EventCard from '@/components/event-card/event-card.compoent'

import { API_URL } from '@/utils/config/fetchUrl'
import { EventResponce } from '@/utils/types/general-types'
import data from '@/utils/sample-data/data.json'
import bell from '@app-svg/bell.svg'
import menu from '@app-svg/menu.svg'

import style from './page.module.css'

const getEvents = async (url: string) => {
  const res = await fetch(url)
  return res.json()

}

export default async function Home() {
  const res: EventResponce = await getEvents(`${API_URL}/api/events`)
  const sampleData = data.events[0]

  return (
    <main className={style.main}>
      <IconGallery svgs={[menu, bell]} />
      <SearchBox />
      <div className={style.cardContainer}>
        {res.data.events.map((event) => {
          return <EventCard data={event} />
        })}
      </div>

    </main>
  )
}
