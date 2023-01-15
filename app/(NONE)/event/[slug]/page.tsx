import ImageOverlay from "@/components/image-overlay/image-overlay.compoent";
import SvgIcon from "@/components/svg-icon/svg-icon.component";
import { API_URL } from "@/utils/config/fetchUrl";
import { EventResponce, EventSlug } from "@app-utils/types/general-types";
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
  const res = await fetch(`${process.env.API_URL}/events?populate=*`, {
    cache: "no-cache",
  });
  return res.json();
};

const EventsPage = async ({ params }: EventpageParams) => {
  const res: EventResponce = await getEvent(params.slug);

  const data = res.data.filter((event) => {
    return event.attributes.slug === params.slug;
  });

  console.log(data);

  if (!data[0]) {
    return notFound();
  }

  return (
    <div className={style.main}>
      <div className={style.header}>
        <Image
          className={style.image}
          fill
          src={data[0].attributes.image.data.attributes.url}
          alt=""
        />
        <ImageOverlay opacity="100%" linear />
        <div className={style.icons}>
          <BackArrow className={style.svg} />
          <SvgIcon className={style.svg} Src={heart} />
        </div>
        <div className={style.titles}>
          <h1 className={style.title}>{data[0].attributes.name}</h1>
          <div className={style.times}>
            <p>{data[0].attributes.date}</p>
            <p>{data[0].attributes.time}</p>
          </div>
        </div>
      </div>
      <div className={style.description}>
        <h3>Description</h3>
        <p>{data[0].attributes.description}</p>
      </div>
    </div>
  );
};

export default EventsPage;
