"use client";

import FooterTwo from "@/components/layout/footers/FooterTwo";
import Header2 from "@/components/layout/header/Header2";
import Hero1 from "@/components/blogs/Hero1";
import BlogSingle from "@/components/blogs/BlogSingle";
import { blogs } from "@/data/blogs";
import React, { useEffect, useState } from "react";

import client from "@/public/api/client";

async function getData(slug) {
  try {
    const result = await client.fetch(`
    *[_type == "Blog"]{
      "imageUrl":productImage.asset->url,
      "subImage":subImages[].asset->url,
      "title":title,
      "subTitle":subTitle,
      "slug":slug.current,
        "author":author
    }
    `);
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default function page({ params }) {
  const [lang, setLang] = useState("en");
  const id = params.id;
  const blog = blogs.find((item) => item.id == id) || blogs[0];

  const { slug } = params; // Destructure slug from params
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(params.slug);
    };
    fetchData();
  }, [slug]); // Make useEffect depend on slug

  return (
    <>
      <main>
        <Header2 lang={lang} setLang={setLang} />
        <Hero1 slug={params.slug} />
        <BlogSingle slug={params.slug} />
        <FooterTwo />
      </main>
    </>
  );
}
