import EventCard from "@/components/event-card/event-card.compoent";
import { API_URL } from "@app-utils/config/fetchUrl";
import { EventResponce } from "@app-utils/types/general-types";
import Link from "next/link";
import SearchBox from "@/components/search-box/search-box.compoent";
import sampleData from "@app-utils/sample-data/data.json";

import style from "./page.module.css";
import PageSetter from "@/components/page-setter/page-setter.compoent";

const getEvents = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

const EventsPage = async () => {
  const res: EventResponce = await getEvents(
    `${process.env.API_URL}/events?populate=*`
  );
  return (
    <>
      <PageSetter pageName="events" />
      <div className={style.header}>
        <SearchBox />
      </div>
      <div className={style.container}>
        {res.data.map((e) => {
          return <EventCard key={e.id} data={e.attributes} />;
        })}
      </div>
    </>
  );
};

export default EventsPage;
