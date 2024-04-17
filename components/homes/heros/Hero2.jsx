"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import client from "@/public/api/client";

export default function Hero2({ lang }) {
  const [data, setData] = useState("");

  useEffect(() => {
    client
      .fetch(
        ` *[_type == "HomeSlider"] {
          "imageUrl": sliderImage.asset->url,
          "title":sliderTitle,
          "titleEn":sliderTitleEn,
          "miniTitle":sliderMiniTitle,
          "miniTitleEn":sliderMiniTitleEn
        }`
      )
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <section className="hero -type-2 ">
      <div className="hero__shape">
        <svg
          width="1920"
          height="573"
          viewBox="0 0 1920 573"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.05"
            d="M0 0H1920V515.556C1920 515.556 1665 386.305 960 515.556C255 644.806 0 515.556 0 515.556V0Z"
            fill="#327915"
          />
        </svg>
      </div>

      <div className="container">
        <div className="hero__slider">
          <div className="hero__bg ">
            <Image
              width={900}
              height={700}
              src="/img/hero/2/newbg.jpg"
              alt="image"
            />
          </div>

          <div className="overflow-hidden js-section-slider">
            <div className="hero__slides swiper-wrapper">
              <Swiper
                spaceBetween={30}
                loop={true}
                className="w-100"
                navigation={{
                  prevEl: ".hero2prev",
                  nextEl: ".hero2next",
                }}
                modules={[Navigation]}
                breakpoints={{
                  500: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 1,
                  },
                  1200: {
                    slidesPerView: 1,
                  },
                }}
              >
                {data != "" && data != null
                  ? data.map((elm, i) => (
                      <SwiperSlide key={i}>
                        <div className="hero__slide swiper-slide font">
                          <div className="hero__content">
                            <h1
                              className="hero__title"
                              data-aos="fade-up"
                              data-aos-delay="300"
                            >
                              {lang == "mn" ? elm.title : elm.titleEn}
                            </h1>

                            <p
                              className="hero__text"
                              data-aos="fade-up"
                              data-aos-delay="350"
                            >
                              {lang == "mn" ? elm.miniTitle : elm.miniTitleEn}
                            </p>

                            <button
                              data-aos="fade-right"
                              data-aos-delay="200"
                              className="button -md -green-2 bg-white text-accent-12 mt-30"
                            >
                              <Link href="/tour-list-1">
                                <span>
                                  {lang == "mn" ? "Дэлгэрэнгүй" : "See all"}
                                </span>
                                <i className="icon-arrow-top-right ml-10"></i>
                              </Link>
                            </button>
                          </div>

                          <div className="hero__image">
                            <div className="hero__image_shape">
                              <Image
                                width="40"
                                height="500"
                                src="/img/hero/2/shape.png"
                                alt="image"
                              />
                            </div>

                            <div className="hero__image_mobileShape">
                              <Image
                                width="847"
                                height="40"
                                src="/img/hero/2/shape2.svg"
                                alt="image"
                              />
                            </div>

                            <Image
                              width={1000}
                              height={600}
                              src={elm.imageUrl}
                              alt="image"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  : ""}
              </Swiper>
            </div>
          </div>

          <div className="navAbsolute">
            <button className="navAbsolute__button bg-white js-sliderMain-prev hero2prev">
              <i className="icon-arrow-left text-14"></i>
            </button>

            <button className="navAbsolute__button bg-white js-sliderMain-next hero2next">
              <i className="icon-arrow-right text-14"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
