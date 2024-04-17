"use client";
import React, { useState, useEffect } from "react";
import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import SpacialOffer from "@/components/homes/others/SpacialOffer";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import FooterTwo from "@/components/layout/footers/FooterTwo";
import Header2 from "@/components/layout/header/Header2";
import Hero from "@/components/pages/destinations/Hero";
import Information from "@/components/pages/destinations/Information";
import TourList1 from "@/components/pages/destinations/TourList";
import TourSlider2 from "@/components/homes/tours/TourSlider2";
import Image from "next/image";
import Head from "next/head";

export default function Page() {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    document.title = "AncientMongolia - Travel & UizhenTech Next js project";
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "AncientMongolia - Travel & UizhenTech next js project"
      );
    } else {
      // If the meta tag doesn't exist, create it
      const newDescriptionMeta = document.createElement("meta");
      newDescriptionMeta.setAttribute("name", "description");
      newDescriptionMeta.setAttribute("content", "Page Description");
      document.head.appendChild(newDescriptionMeta);
    }
  }, []);
  return (
    <>
      <Head>
        <title>{"test"}</title>
        <meta name="description" content={"test"} />
      </Head>
      <main>
        <Header2 lang={lang} setLang={setLang} />
        <Hero lang={lang} />
        <SpacialOffer lang={lang} />
        <TourSlider2 lang={lang} />
        <div className="background3 zindex1">
          <Image
            width="820"
            height="700"
            src="/img/general/backgroud3.jpg"
            alt="image"
          />
        </div>
        <div></div>
        <TourList1 lang={lang} />
        <div className="background4 zindex1">
          <Image
            width="820"
            height="500"
            src="/img/general/background3.jpg"
            alt="image"
          />
        </div>
        <TestimonialOne lang={lang} />
        <Information lang={lang} />
        <ArticlesOne lang={lang} />
        <FooterTwo lang={lang} />
      </main>
    </>
  );
}
