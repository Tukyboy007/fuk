import React, { useEffect, useState } from "react";
import client from "@/public/api/client";

export default function Overview({ slug, lang }) {
  const [data, setData] = useState("");
  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "Product" && slug.current == '${slug}']
        {
          "overview":overview,
          "overviewEn":overviewEn,
          "highlight":highlights,
          "highlightEn":highlightsEn
        }
        `
      )
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const datas = data != null && data != "" ? data[0] : "";
  if (datas != "" && datas != null)
    return (
      <>
        <h2 className="text-30">
          {lang == "en" ? "Tour Overview" : "Аялалын танилцуулга"}
        </h2>
        <p className="mt-20">
          {lang == "en" ? datas.overviewEn : datas.overview}
        </p>

        <h3 className="text-20 fw-500 mt-20">
          {lang == "en" ? "Tour Highlights" : "Аялалын Онцлог"}
        </h3>
        <ul className="ulList mt-20">
          {lang == "en"
            ? datas.highlightEn.map((e, index) => <li>{e}</li>)
            : datas.highlight.map((e, index) => <li>{e}</li>)}
        </ul>
      </>
    );
}
