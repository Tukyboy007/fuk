"use client";

import { destinationsThree } from "@/data/destinations";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import client from "@/public/api/client";

export default function TopAttractions({ lang }) {
  const [data, setData] = useState("");

  useEffect(() => {
    client
      .fetch(
        '*[_type == "HomeSlider"] {"imageUrl": sliderImage.asset->url,"title":sliderTitle,"miniTitle":sliderMiniTitle, "titleEn" : titleEn}'
      )
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end">
          <div className="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="" className="text-30">
              {lang == "mn" ? "Үзэсгэлэнт газрууд" : "Top routes"}
            </h2>
          </div>
          <div className="col-auto">
            {/* <Link
              href={"/tour-list-1"}
              data-aos="fade-right"
              data-aos-delay=""
              className="buttonArrow d-flex items-center "
            >
              <span>Бүгдийг харах</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link> */}
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="row y-gap-30 justify-between pt-40 sm:pt-20"
        >
          {destinationsThree.map((elm, i) => (
            <div key={i} className="col-lg-4 col-sm-6">
              <Link
                href="/tour-list-1"
                className="d-flex items-center -hover-image-scale"
              >
                <div className="size-100 relative rounded-12 -hover-image-scale__image">
                  <Image
                    layout="fill"
                    src={elm.imgSrc}
                    alt="image"
                    className="img-ratio rounded-12"
                  />
                </div>
                <div className="ml-30">
                  <h3 className="text-18 fw-500">
                    {lang == "mn" ? elm.title : elm.titleEn}
                  </h3>
                  <p className="text-14">
                    {elm.tours}+ {lang == "mn" ? "Аялалууд" : "Travels"}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
