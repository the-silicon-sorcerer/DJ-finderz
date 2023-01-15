import { randomNum } from "@/utils/helper-functions/random-number";
import React from "react";

import SvgIcon from "../svg-icon/svg-icon.component";
import style from "./icon-gallery.module.css";

interface IconGalleryProps {
  svgs: any[];
}

const IconGallery = ({ svgs }: IconGalleryProps) => {
  const keyedSvgs = svgs.map((svg) => {
    return { key: randomNum(10000), svg };
  });
  return (
    <div className={style.container}>
      {keyedSvgs.map((obj) => {
        return <SvgIcon key={obj.key} Src={obj.svg} />;
      })}
    </div>
  );
};

export default IconGallery;
