"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState, useRef } from "react";
import Stars from "@/components/common/Stars";
import { filterTour } from "@/data/tours";
import Image from "next/image";
import Link from "next/link";
import client from "@/public/api/client";

const travelStayles = ["Fast", "Steady", "Furious", "Grind"];
export default function TourSlider2({ lang }) {
  const [ddActive, setDdActive] = useState(false);
  const [travelStyle, setTravelStyle] = useState("");
  const [filtered, setFiltered] = useState(filterTour);
  const [data, setData] = useState("");

  useEffect(() => {
    client
      .fetch(
        `*[_type == "Product" && featured == true]{
          "title":title,
          "titleEn":titleEn,
          "subTitle":subTitle,
          "subTitleEn":subTitleEn,
          "slug":slug.current,
          "imageUrl":productImage[].asset->url,
          "price":price,
          "priceEn":priceEn,
          "route":route,
          "routeEn":routeEn,
          "duration":duration,
          "durationEn":durationEn,
        }`
      )
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    setFiltered(filterTour);
  }, [travelStyle]);
  const dropDownContainer = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setDdActive(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <section className="layout-pt-xl font">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end y-gap-10">
          <div className="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="" className="text-30">
              {lang == "mn" ? "Таньд санал болгох" : "Interesting travel"}
            </h2>
          </div>
        </div>

        <div className="relative pt-40 sm:pt-20">
          <div className="overflow-hidden js-section-slider">
            <div
              data-aos="fade-right"
              data-aos-delay=""
              className="swiper-wrapper "
            >
              <Swiper
                spaceBetween={30}
                className="w-100"
                loop="true"
                navigation={{
                  prevEl: ".js-slider1-prev",
                  nextEl: ".js-slider1-next",
                }}
                modules={[Navigation, Pagination]}
                breakpoints={{
                  500: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
              >
                {data != "" && data != undefined
                  ? data.map((elm, i) => (
                      <SwiperSlide key={i}>
                        <Link
                          href={`/tour-single-1/${elm.slug}`}
                          className="tourCard -type-1 d-block border-1 bg-white hover-shadow-1 overflow-hidden rounded-12 bg-white -hover-shadow font"
                        >
                          <div className="tourCard__header">
                            <div className="tourCard__image ratio ratio-28:20">
                              <Image
                                width={421}
                                height={301}
                                src={elm.imageUrl[0]}
                                alt="image"
                                className="img-ratio"
                              />
                            </div>

                            <button className="tourCard__favorite">
                              <i className="icon-heart"></i>
                            </button>
                          </div>
                          <div className="tourCard__content px-20 py-10">
                            <div className="tourCard__location d-flex items-center text-13 text-light-2">
                              <i className="icon-pin d-flex text-16 text-light-2 mr-5 font">
                                {lang == "mn" ? elm.route[0] : elm.routeEn[0]}
                              </i>
                            </div>

                            <h3 className="tourCard__title text-16 fw-500 mt-5">
                              <span>
                                {lang == "mn" ? elm.title : elm.titleEn}
                              </span>
                            </h3>

                            <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                              <div className="d-flex items-center">
                                <i className="icon-clock text-16 mr-5"></i>
                                {lang == "mn" ? elm.duration : elm.durationEn}
                              </div>

                              <div>
                                {lang == "mn" ? "Төлбөр" : "Price"}
                                <span className="text-16 fw-500">
                                  {lang == "mn" ? "₮" : "$"}
                                  {lang == "mn" ? elm.price : elm.priceEn}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))
                  : ""}
              </Swiper>
            </div>
          </div>

          <div className="navAbsolute">
            <button className="navAbsolute__button bg-white js-slider1-prev">
              <i className="icon-arrow-left text-14"></i>
            </button>

            <button className="navAbsolute__button bg-white js-slider1-next">
              <i className="icon-arrow-right text-14"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
