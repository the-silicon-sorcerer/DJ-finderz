"use client";

import arrow from "@app-svg/arrow.svg";
import SvgIcon from "../svg-icon/svg-icon.component";
import { useRouter } from "next/navigation";

import style from "./back-arrow.module.css";

const BackArrow = ({ className }: { className: string }) => {
  const router = useRouter();

  return (
    <div onClick={() => router.back()}>
      <SvgIcon className={style.svg} Src={arrow} />;
    </div>
  );
};

export default BackArrow;
