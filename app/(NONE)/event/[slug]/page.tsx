import ImageOverlay from "@/components/image-overlay/image-overlay.compoent";
import SvgIcon from "@/components/svg-icon/svg-icon.component";
import { API_URL } from "@/utils/config/fetchUrl";
import { EventSlug } from "@app-utils/types/general-types";
import Image from "next/image";
import { notFound } from "next/navigation";
import style from "./page.module.css";
import heart from "@app-svg/heart.svg";
import arrow from "@app-svg/arrow.svg";
import BackArrow from "@/components/back-arrow/back-arrow.compoent";

interface EventpageParams {
  params: { slug: string };
}

const getEvent = async (event: string) => {
  const res = await fetch(`${API_URL}/api/events/${event}`, {
    cache: "no-cache",
  });
  return res.json();
};

const EventsPage = async ({ params }: EventpageParams) => {
  const res: EventSlug = await getEvent(params.slug);

  if (!res[0]) {
    return notFound();
  }

  return (
    <div className={style.main}>
      <div className={style.header}>
        <Image className={style.image} fill src={res[0].image} alt="" />
        <ImageOverlay opacity="100%" linear />
        <div className={style.icons}>
          <BackArrow className={style.svg} />
          <SvgIcon className={style.svg} Src={heart} />
        </div>
        <div className={style.titles}>
          <h1 className={style.title}>{res[0].name}</h1>
          <div className={style.times}>
            <p>{res[0].date}</p>
            <p>{res[0].time}</p>
          </div>
        </div>
      </div>
      <div className={style.description}>
        <h3>Description</h3>
        <p>{res[0].description}</p>
      </div>
    </div>
  );
};

export default EventsPage;
