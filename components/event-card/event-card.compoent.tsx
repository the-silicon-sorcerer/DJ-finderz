"use client";

import SvgIcon from "../svg-icon/svg-icon.component";
import { Event } from "@/utils/types/general-types";
import heart from "@app-svg/heart.svg";
import Link from "next/link";

import style from "./event-card.module.css";
import Image from "next/image";
import ImageOverlay from "../image-overlay/image-overlay.compoent";
import { API_URL } from "@/utils/config/fetchUrl";

const EventCard = ({ data }: { data: Event }) => {
  return (
    <div className={style.container}>
      <Image className={style.image} fill src={data.image} alt="" />
      <Link href={`${API_URL}/event/${data.slug}`}>
        <ImageOverlay opacity="60%" />
        <div className={style.likeContainer}>
          <SvgIcon className={style.heart} Src={heart} />
        </div>
        <div className={style.metaData}>
          <p>{data.date}</p>
          <h2>{data.name}</h2>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
