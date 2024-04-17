import { excluded, included } from "@/data/tourSingleContent";
import React, { useEffect, useState } from "react";
import client from "@/public/api/client";

export default function Included({ slug, lang }) {
  const [data, setData] = useState("");
  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "Product" && slug.current == '${slug}']
        {
          "includes":included,
          "includesEn":includedEn,
          "notincludes":notincluded,
          "notincludesEn":notincludedEn,
        }
        `
      )
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const datas = data != null && data != "" ? data[0] : "";
  if (datas != "" && datas != null)
    return (
      <div className="row x-gap-130 y-gap-20 pt-20">
        <div className="col-lg-6">
          <div className="y-gap-15">
            {lang == "en"
              ? datas.includesEn.map((elm, i) => (
                  <div key={i} className="d-flex">
                    <i className="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
                    {elm}
                  </div>
                ))
              : datas.includes.map((elm, i) => (
                  <div key={i} className="d-flex">
                    <i className="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
                    {elm}
                  </div>
                ))}
          </div>
        </div>

        <div className="col-lg-6">
          <div className="y-gap-15">
            {lang == "en"
              ? datas.notincludesEn.map((elm, i) => (
                  <div key={i} className="d-flex">
                    <i className="icon-cross flex-center text-10 size-24 rounded-full text-red-3 bg-red-4 mr-15"></i>

                    {elm}
                  </div>
                ))
              : datas.notincludes.map((elm, i) => (
                  <div key={i} className="d-flex">
                    <i className="icon-cross flex-center text-10 size-24 rounded-full text-red-3 bg-red-4 mr-15"></i>

                    {elm}
                  </div>
                ))}
          </div>
        </div>
      </div>
    );
}
