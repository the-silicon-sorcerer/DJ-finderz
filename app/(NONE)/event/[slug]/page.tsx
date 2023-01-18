import { notFound } from "next/navigation";
import Image from "next/image";

import { EventResponce } from "@app-utils/types/general-types";

import ImageOverlay from "@/components/image-overlay/image-overlay.compoent";
import BackArrow from "@/components/back-arrow/back-arrow.compoent";
import SvgIcon from "@/components/svg-icon/svg-icon.component";

import heart from "@app-svg/heart.svg";

import style from "./page.module.css";

interface EventpageParams {
  params: { slug: string };
}

const getEvent = async (event: string, params: { slug: string }) => {
  const res = await fetch(`${process.env.API_URL}/events?populate=*`, {
    cache: "no-cache",
  });

  const parsedData: EventResponce = await res.json();

  return parsedData.data.filter((event) => {
    return event.attributes.slug === params.slug;
  });
};

const EventsPage = async ({ params }: EventpageParams) => {
  const filteredEvent = await getEvent(params.slug, params);

  if (!filteredEvent[0]) {
    return notFound();
  }

  return (
    <div className={style.main}>
      <div className={style.header}>
        <Image
          className={style.image}
          fill
          src={filteredEvent[0].attributes.image.data.attributes.url}
          alt=""
        />
        <ImageOverlay opacity="100%" linear />
        <div className={style.icons}>
          <BackArrow className={style.svg} />
          <SvgIcon className={style.svg} Src={heart} />
        </div>
        <div className={style.titles}>
          <h1 className={style.title}>{filteredEvent[0].attributes.name}</h1>
          <div className={style.times}>
            <p>{filteredEvent[0].attributes.date}</p>
            <p>{filteredEvent[0].attributes.time}</p>
          </div>
        </div>
      </div>
      <div className={style.description}>
        <h3>Description</h3>
        <p>{filteredEvent[0].attributes.description}</p>
      </div>
    </div>
  );
};

export default EventsPage;
