import IconGallery from "@/components/icon-gallery/icon-gallety.compoent";
import SearchBox from "@/components/search-box/search-box.compoent";
import EventCard from "@/components/event-card/event-card.compoent";

import { API_URL } from "@/utils/config/fetchUrl";
import { EventResponce } from "@/utils/types/general-types";
import data from "@/utils/sample-data/data.json";
import bell from "@app-svg/bell.svg";
import menu from "@app-svg/menu.svg";
import PageSetter from "@/components/page-setter/page-setter.compoent";

import style from "./page.module.css";

const getEvents = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

export default async function Home() {
  const res: EventResponce = await getEvents(
    `${process.env.API_URL}/events?populate=*`
  );
  const sampleData = data;
  return (
    <>
      <PageSetter pageName="home" />
      <main className={style.main}>
        <IconGallery svgs={[menu, bell]} />
        <SearchBox />
        <div className={style.cardContainer}>
          {res.data.map((event) => {
            return <EventCard key={event.id} data={event.attributes} />;
          })}
        </div>
      </main>
    </>
  );
}
