"use client";

import { destinationsTwo } from "@/data/destinations";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import client from "@/public/api/client";

export default function DestinationsTwo({ lang }) {
  const [data, setData] = useState("");
  useEffect(() => {
    client
      .fetch(
        `*[_type == "PlanedRoutes"]{
          "imageUrl":productImage.asset->url,
          "location":location,
          "products":products,
          "locationEn":locationEn,
        }`
      )
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <section className="layout-pt-xl font">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end">
          <div className="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="" className="text-30">
              {lang == "mn" ? "Төлөвлөгдсөн аялалууд" : "Planed Travels"}
            </h2>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="row y-gap-30 justify-between xl:justify-center sm:justify-start pt-40 sm:pt-20 mobile-css-slider -w-160"
        >
          {data != "" && data != undefined
            ? data.map((elm, i) => (
                <div key={i} className="col-xl-2 col-lg-3 col-md-4 col-6">
                  <Link href="/tour-list-1" className="-hover-image-scale">
                    <div className="ratio ratio-19:21 rounded-12 -hover-image-scale__image">
                      <Image
                        width={500}
                        height={500}
                        src={elm.imageUrl}
                        alt="image"
                        className="img-ratio rounded-12"
                      />
                    </div>

                    <h3 className="text-18 fw-500 mt-20">
                      {lang == "mn" ? elm.location : elm.locationEn}{" "}
                    </h3>
                    <p className="text-14">
                      {elm.products}+ {lang == "mn" ? "Аялалууд" : "Travels"}
                    </p>
                  </Link>
                </div>
              ))
            : ""}
        </div>
      </div>
    </section>
  );
}
