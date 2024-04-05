"use client";

import SingleOne from "@/components/tourSingle/pages/SingleOne";
import FooterTwo from "@/components/layout/footers/FooterTwo";
import Header1 from "@/components/layout/header/Header1";
import PageHeader from "@/components/tourSingle/PageHeader";
import TourSlider from "@/components/tourSingle/TourSlider";
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
  const [data, setData] = useState("");
  const { slug } = params; // Destructure slug from params
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(slug);
      console.log(data);
    };
    fetchData();
  }, [slug]); // Make useEffect depend on slug

  return (
    <>
      <main>
        <Header1 />
        <PageHeader />
        <SingleOne tour={data} />
        <TourSlider />
        <FooterTwo />
      </main>
    </>
  );
}
