"use client";
import { destinationOffers } from "@/data/destinations";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import client from "@/public/api/client";

export default function OfferDestinations({ lang }) {
  const [data, setData] = useState("");
  useEffect(() => {
    client
      .fetch(
        `*[_type == "Product" && category->name == "Онцгой"]{
        "title":title,
        "titleEn":titleEn,
        "subTitle":subTitle,
        "subTitleEn":subTitleEn,
        "slug":slug.current,
        "imageUrl":productImage[].asset->url,
        "price":price,
        "route":route,
        "routeEn":routeEn,
        "duration":duration,
      }`
      )
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <section className="layout-pt-xl roboto-regular">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end">
          <div className="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="" className="text-30">
              {lang == "mn" ? "Онцгой аялал" : "Special travel"}
            </h2>
          </div>

          <div className="col-auto">
            <Link
              href={"/tour-list-1"}
              data-aos="fade-up"
              data-aos-delay=""
              className="buttonArrow d-flex items-center "
            >
              <span> {lang == "mn" ? "Дэлгэрэнгүй" : "See all"}</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="row y-gap-20 pt-40"
        >
          {data != "" && data != undefined
            ? data.map((elm, i) => (
                <div key={i} className="col-xl-3 col-lg-4 col-sm-6">
                  <Link
                    href={`/tour-single-1/${elm.slug}`}
                    className="d-flex items-center -hover-image-scale"
                  >
                    <div className="size-100 -hover-image-scale__image rounded-full">
                      <Image
                        width={260}
                        height={260}
                        src={elm.imageUrl[0]}
                        alt="image"
                        className="img-cover rounded-full"
                      />
                    </div>
                    <div className="ml-20">
                      <div className="text-accent-1">
                        {lang == "mn" ? elm.title : elm.titleEn}
                      </div>
                      <h4 className="text-15 fw-500 mt-5">
                        {lang == "mn" ? elm.subTitle : elm.subTitleEn}
                      </h4>
                    </div>
                  </Link>
                </div>
              ))
            : ""}
        </div>
      </div>
    </section>
  );
}
