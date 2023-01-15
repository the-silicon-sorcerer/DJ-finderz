"use client";

import SvgIcon from "../svg-icon/svg-icon.component";

import Home from "../../public/svg/home.svg";
import Profile from "@app-svg/profile.svg";
import Ticket from "@app-svg/ticket.svg";
import Location from "@app-svg/location.svg";

import style from "./footer.module.css";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { PageContext } from "@/contexts/pageContext/page.context";

const Footer = () => {
  const { page } = useContext(PageContext);

  return (
    <div className={style.viewPortFix}>
      <footer className={`${style.container} `}>
        <Link href="/">
          <SvgIcon className={page === "home" && "active-element"} Src={Home} />
        </Link>
        <Link href="/events">
          <SvgIcon
            className={page === "events" && "active-element"}
            Src={Ticket}
          />
        </Link>
        <Link href="/events">
          <SvgIcon
            className={page === "map" && "active-element"}
            Src={Location}
          />
        </Link>
        <Link href="/">
          <SvgIcon
            className={page === "profile" && "active-element"}
            Src={Profile}
          />
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
