"use client";
import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import SpacialOffer from "@/components/homes/others/SpacialOffer";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import FooterTwo from "@/components/layout/footers/FooterTwo";
import Header2 from "@/components/layout/header/Header2";
import Hero from "@/components/pages/destinations/Hero";
import Information from "@/components/pages/destinations/Information";
import TourList1 from "@/components/pages/destinations/TourList";
import TourSlider2 from "@/components/homes/tours/TourSlider2";
import React, { useState } from "react";

export default function page() {
  const [lang, setLang] = useState("en");
  return (
    <>
      <main>
        <Header2 lang={lang} setLang={setLang} />
        <Hero lang={lang} />
        <SpacialOffer lang={lang} />
        <TourSlider2 lang={lang} />
        <TourList1 lang={lang} />
        <TestimonialOne lang={lang} />
        <Information lang={lang} />
        <ArticlesOne lang={lang} />
        <FooterTwo lang={lang} />
      </main>
    </>
  );
}
