"use client";

import { articles } from "@/data/articles";
import { blogs } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import client from "@/public/api/client";
import { useEffect, useState } from "react";

export default function ArticlesOne({ lang }) {
  const [data, setData] = useState("");

  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "Blog"]{
          "imageUrl":productImage.asset->url,
          "subImage":subImages[].asset->url,
          "title":title,
          "titleEn":titleEn,
          "subTitle":subTitle,
          "subTitleEn":subTitleEn,
          "slug":slug.current,
          "author":author,
          "authorEn":authorEn,
          
        }
        `
      )
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <section className="layout-pt-xl layout-pb-xl font">
      <div className="container">
        <div className="row justify-between items-end y-gap-10">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-30 md:text-24 "
            >
              {lang == "mn" ? "Мэдээ мэдээлэл" : "Blog Section"}
            </h2>
          </div>

          <div className="col-auto">
            <Link
              href={"/blog-list-1"}
              data-aos="fade-right"
              data-aos-delay=""
              className="buttonArrow d-flex items-center  "
            >
              <span>{lang == "mn" ? "Нийтлэл унших" : "See all"}</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="row y-gap-30 pt-40 sm:pt-20"
        >
          {data != undefined && data != ""
            ? data.slice(0, 3).map((elm, i) => (
                <div key={i} className="col-lg-4 col-md-6">
                  <Link
                    href={`/blog-single/${elm.slug}`}
                    className="blogCard -type-1"
                  >
                    <div className="blogCard__image ratio ratio-41:30">
                      <Image
                        layout="fill"
                        src={elm.imageUrl}
                        alt="image"
                        className="img-ratio rounded-12"
                      />

                      <div className="blogCard__badge">{elm.badge}</div>
                    </div>

                    <div className="blogCard__content mt-30">
                      <div className="blogCard__info text-14">
                        <div className="lh-13">{elm.date}</div>
                        <div className="blogCard__line"></div>
                        <div className="lh-13">
                          By {lang == "mn" ? elm.author : elm.authorEn}
                        </div>
                      </div>

                      <h3 className="blogCard__title text-18 fw-500 mt-10 text">
                        {lang == "mn" ? elm.title : elm.titleEn}
                      </h3>
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
