"use client";

import { menuData } from "@/data/mobileMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Currency from "./Currency";
const socialMediaLinks = [
  { id: 1, class: "icon-facebook", href: "#" },
  { id: 2, class: "icon-twitter", href: "#" },
  { id: 3, class: "icon-instagram", href: "#" },
  { id: 4, class: "icon-linkedin", href: "#" },
];
const en = [
  ["Tours", "/destinations"],
  ["About Us", "/about"],
  ["terms", "/terms"],
  ["Contact", "/contact"],
];
const mn = [
  ["Аялалууд", "/destinations"],
  ["Бидний тухай", "/about"],
  ["Зөвлөмж", "/terms"],
  ["Бидэнтэй холбогдох", "/contact"],
];
export default function MobileMenu({
  setLang,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  const [lan, setLan] = useState(en);
  const ln =
    typeof window !== "undefined" && localStorage.getItem("lang") != null
      ? localStorage.getItem("lang")
      : "en";
  const choose = ln == "en" ? en : mn;
  return (
    <div
      data-aos="fade"
      data-aos-delay=""
      className={`menu js-menu ${mobileMenuOpen ? "-is-active" : ""} `}
      style={
        mobileMenuOpen
          ? { opacity: "1", visibility: "visible" }
          : { pointerEvents: "none", visibility: "hidden" }
      }
    >
      <div
        onClick={() => setMobileMenuOpen(false)}
        className="menu__overlay js-menu-button"
      ></div>

      <div className="menu__container">
        <div className="menu__header">
          <Currency setLang={setLang} />

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="js-menu-button"
          >
            <i className="icon-cross text-10"></i>
          </button>
        </div>

        <div className="menu__content">
          <ul
            className="menuNav js-navList -is-active"
            style={{ maxHeight: "calc(100vh - 262px)", overflowY: "auto" }}
          >
            {choose.map((elm, i) => (
              <li key={i} className="menuNav__item -has-submenu js-has-submenu">
                <Link
                  onClick={() =>
                    setActiveSub((pre) => (pre == elm.label ? "" : elm.label))
                  }
                  href={elm[1]}
                >
                  <span className={""}>{elm[0]}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="menu__footer">
          <i className="icon-headphone text-50"></i>

          <div className="text-20 lh-12 fw-500 mt-20">
            <div>Speak to our expert at</div>
            <div className="text-accent-1">1-800-453-6744</div>
          </div>

          <div className="d-flex items-center x-gap-10 pt-30">
            {socialMediaLinks.map((elm, i) => (
              <div key={i}>
                <a href={elm.href} className="d-block">
                  <i className={elm.class}></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
