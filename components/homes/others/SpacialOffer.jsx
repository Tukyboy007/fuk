import { specialOffers } from "@/data/offer";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import client from "@/public/api/client";

export default function SpacialOffer({ lang }) {
  const [data, setData] = useState("");

  useEffect(() => {
    client
      .fetch(
        `*[_type == "TravelMomen"]{
          "mainImage":TravelMomen.asset->url
        }`
      )
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <section className="layout-pt-xl font">
      <div className="container">
        <div className="row justify-between items-end y-gap-10">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-30 md:text-24"
            >
              {lang == "mn" ? "Аялалын мөчүүд" : "Travel Moment"}
            </h2>
          </div>

          <div className="col-auto">
            <Link
              href={"/tour-list-1"}
              data-aos="fade-left"
              data-aos-delay=""
              className="buttonArrow d-flex items-center "
            ></Link>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="specialCardGrid row y-gap-30 md:y-gap-20 pt-40 sm:pt-20"
        >
          {data != null && data != ""
            ? data.map((elm, i) => (
                <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                  <div className="specialCard">
                    <div className="specialCard__image">
                      <Image
                        width={615}
                        height={300}
                        src={elm.mainImage}
                        alt="image"
                      />
                    </div>

                    {/* <div className="specialCard__content">
                      <div className="specialCard__subtitle">
                        {elm.subtitle}
                      </div>
                      <h3 className="specialCard__title">
                        {elm.title.split(" ").slice(0, 3).join(" ")}
                        <br />
                        {elm.title.split(" ").slice(3).join(" ")}
                      </h3>
                      {elm.text && (
                        <div className="specialCard__text">{elm.text}</div>
                      )}
                    </div> */}
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </section>
  );
}
