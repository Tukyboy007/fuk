"use client";

import { homes, pages, tours } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Menu() {
  const pathname = usePathname();
  return (
    <>
      <div className="xl:d-none ml-30 roboto-regular">
        <div className="desktopNav">
          <div className="desktopNav__item">
            <div className="desktopNavSubnav">
              <div className="desktopNavSubnav__content">
                {homes.map((elm, i) => (
                  <div key={i} className="desktopNavSubnav__item text-dark-1">
                    <Link
                      className={pathname == elm.href ? "activeMenu" : ""}
                      href={elm.href}
                    >
                      {elm.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="desktopNav__item">
            <Link href="/destinations">Аялалууд</Link>
          </div>

          <div className="desktopNav__item">
            <a href="/about">Бидний тухай</a>
          </div>
          <div className="desktopNav__item">
            <a href="/terms">Зөвлөмж</a>
          </div>

          {/* <div className="desktopNav__item">
            <a href="#">
              Pages <i className="icon-chevron-down"></i>
            </a>

            <div className="desktopNavSubnav">
              <div className="desktopNavSubnav__content">
                {pages.map((elm, i) => (
                  <div key={i} className="desktopNavSubnav__item text-dark-1">
                    {elm.href ? (
                      <Link href={elm.href}>{elm.title}</Link>
                    ) : (
                      <a href="#">
                        {elm.title} <i className="icon-chevron-right"></i>
                      </a>
                    )}

                    {elm.subnav && (
                      <div className="desktopNavSubnav">
                        <div className="desktopNavSubnav__content">
                          {elm.subnav.map((elm2, i2) => (
                            <div key={i2} className="desktopNavSubnav__item">
                              <Link href={elm2.href}>{elm2.title}</Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          <div className="desktopNav__item">
            <Link href="/contact">Бидэнтэй холбогдох</Link>
          </div>
        </div>
      </div>
    </>
  );
}
