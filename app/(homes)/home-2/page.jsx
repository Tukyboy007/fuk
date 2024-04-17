"use client";

import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import BannerFour from "@/components/homes/banners/BannerFour";
import BannerTwo from "@/components/homes/banners/BannerTwo";
import BrandsOne from "@/components/homes/brands/BrandsOne";
import DestinationsTwo from "@/components/homes/destinations/DestinationsTwo";
import OfferDestinations from "@/components/homes/destinations/OfferDestinations";
import TopAttractions from "@/components/homes/destinations/TopAttractions";
import FeaturesThree from "@/components/homes/features/FeaturesThree";
import FeturesTwo from "@/components/homes/features/FeturesTwo";
import Hero2 from "@/components/homes/heros/Hero2";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import TourSlider2 from "@/components/homes/tours/TourSlider2";
import FooterTwo from "@/components/layout/footers/FooterTwo";
import Header2 from "@/components/layout/header/Header2";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { set } from "sanity";

export default function page() {
  const [lang, setLang] = useState("en");
  return (
    <>
      <main>
        <Header2 lang={lang} setLang={setLang} />
        <Hero2 lang={lang} />
        {/* <OfferDestinations lang={lang} /> */}
        <TourSlider2 lang={lang} />
        <FeturesTwo lang={lang} />
        <DestinationsTwo lang={lang} />
        <BannerTwo lang={lang} />{" "}
        <div className="background zindex1">
          <Image
            width="920"
            height="700"
            src="/img/general/backroud.jpg"
            alt="image"
          />
        </div>
        <TopAttractions lang={lang} />
        <div className="bg-accent-1-05 zindex2">
          <TestimonialOne lang={lang} />
        </div>
        <BannerFour lang={lang} />
        <FeaturesThree lang={lang} />
        <div className="background zindex1">
          <Image
            width="920"
            height="700"
            src="/img/general/backroud.jpg"
            alt="image"
          />
        </div>
        <ArticlesOne lang={lang} />
        <BrandsOne lang={lang} />
        <FooterTwo lang={lang} />
      </main>
    </>
  );
}
