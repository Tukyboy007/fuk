"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import client from "@/public/api/client";

export default function Hero1({ slug }) {
  const [data, setData] = useState("");

  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "Blog" && slug.current == '${slug}']{
          "imageUrl":productImage.asset->url,
          "subImage":subImages[].asset->url,
          "title":title,
          "subTitle":subTitle,
          "slug":slug.current,
          "author":auther
        }
        `
      )
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  if (data != "")
    return (
      <section className="hero -type-1 -min-2">
        <div className="hero__bg">
          <Image width={1800} height={500} src="/img/hero/1.png" alt="image" />
          <Image
            style={{ height: "auto" }}
            width="1800"
            height="40"
            src={data[0].imageUrl}
            alt="image"
          />
        </div>

        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-12">
              <div className="hero__content">
                <h1 className="hero__title">{data[0].title}</h1>

                <p className="hero__text">{data[0].subTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
