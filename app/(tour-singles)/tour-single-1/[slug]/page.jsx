"use client";

import SingleOne from "@/components/tourSingle/pages/SingleOne";
import FooterTwo from "@/components/layout/footers/FooterTwo";
import Header2 from "@/components/layout/header/Header2";
import PageHeader from "@/components/tourSingle/PageHeader";
import TourSlider2 from "@/components/homes/tours/TourSlider2";
import React, { useEffect, useState } from "react";
// Import any other necessary components

import client from "@/public/api/client";

async function getData(slug) {
  try {
    const result = await client.fetch(`
    *[_type == "Product" && slug.current == "${slug}"]
    {
    "title":title,
    "slug":slug.current,
    "image":productImage[].asset->url
    }
    `);
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default function Page({ params }) {
  const [lang, setLang] = useState("en");
  const [data, setData] = useState("");
  const { slug } = params;
  useEffect(() => {
    const fetchData = async () => {
      setData(await getData(slug));
    };
    fetchData();
  }, [slug]);
  return (
    <>
      <main>
        <Header2 lang={lang} setLang={setLang} />
        <PageHeader />
        <SingleOne slug={params.slug} lang={lang} />
        <TourSlider2 />
        <FooterTwo />
      </main>
    </>
  );
}
