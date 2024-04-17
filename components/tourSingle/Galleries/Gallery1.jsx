"use client";

import React, { useState, useEffect } from "react";
import ImageLightBox from "./ImageLightBox";
import Image from "next/image";
import client from "@/public/api/client";
export default function Gallery1({ slug }) {
  const [activeLightBox, setActiveLightBox] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  const [data, setData] = useState("");
  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "Product" && slug.current == '${slug}']
        {
          "imageUrl":productImage[].asset->url
        }
        `
      )
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const url = data != null && data != "" ? data[0].imageUrl : "";

  var images =
    data != "" && data != null
      ? (images = [
          {
            id: 1,
            image: url[0],
          },
          {
            id: 1,
            image: url[1],
          },
          {
            id: 1,
            image: url[2],
          },
          {
            id: 1,
            image: url[3],
          },
        ])
      : "";
  return (
    <>
      <div className="tourSingleGrid -type-1 mt-30">
        <div className="tourSingleGrid__grid mobile-css-slider-2">
          {data != "" && data != null ? (
            <>
              <Image width={1155} height={765} src={url[0]} alt="image" />
              <Image width={765} height={375} src={url[1]} alt="image" />
              <Image width={375} height={375} src={url[2]} alt="image" />
              <Image width={375} height={375} src={url[3]} alt="image" />
            </>
          ) : (
            ""
          )}
        </div>

        <div className="tourSingleGrid__button">
          <div
            style={{ cursor: "pointer" }}
            className="js-gallery"
            data-gallery="gallery1"
          >
            <span
              onClick={() => setActiveLightBox(true)}
              className="button -accent-1 py-10 px-20 rounded-200 bg-dark-1 lh-16 text-white"
            >
              See all photos
            </span>
          </div>
          <a href={url[0]} className="js-gallery" data-gallery="gallery1"></a>
          <a href={url[1]} className="js-gallery" data-gallery="gallery1"></a>
          <a href={url[2]} className="js-gallery" data-gallery="gallery1"></a>
        </div>
      </div>
      <ImageLightBox
        images={images}
        activeLightBox={activeLightBox}
        setActiveLightBox={setActiveLightBox}
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
      />
    </>
  );
}
