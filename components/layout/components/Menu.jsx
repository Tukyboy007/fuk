"use client";

import { homes, pages, tours } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const en = [
  ["Tours", "/destinations"],
  ["About Us", "/about"],
  ["Terms", "/terms"],
  ["Contact", "/contact"],
];
const mn = [
  ["Аялалууд", "/destinations"],
  ["Бидний тухай", "/about"],
  ["Зөвлөмж", "/terms"],
  ["Бидэнтэй холбогдох", "/contact"],
];
export default function Menu() {
  const [lan, setLan] = useState(en);
  const lang =
    typeof window !== "undefined" ? localStorage.getItem("lang") || "en" : "en";
  const choose = lang === "en" ? en : mn;
  return (
    <>
      <div className="xl:d-none ml-30 roboto-regular">
        <div className="desktopNav">
          {choose.map((el, index) => {
            return (
              <div key={index} className="desktopNav__item">
                <Link href={el[1]}>{el[0]}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
