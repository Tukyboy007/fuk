import React, { useState, useEffect } from "react";
import client from "@/public/api/client";

export default function OthersInformation({ slug, lang }) {
  const [data, setData] = useState("");
  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "Product" && slug.current == '${slug}']
        {
          "duration":duration,
          "durationEn":durationEn,
          "groupSize":groupSize,
          "age":age,
          "lang":language
        }
        `
      )
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const datas = data != "" && data != null ? data[0] : "";
  return (
    <>
      <div className="col-lg-3 col-6">
        <div className="d-flex items-center">
          <div className="flex-center size-50 rounded-12 border-1">
            <i className="text-20 icon-clock"></i>
          </div>

          <div className="ml-10">
            <div className="lh-16">
              {lang == "en" ? "Duration" : "Аялалын хугацаа"}
            </div>
            <div className="text-14 text-light-2 lh-16">{datas.duration}</div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-6">
        <div className="d-flex items-center">
          <div className="flex-center size-50 rounded-12 border-1">
            <i className="text-20 icon-teamwork"></i>
          </div>

          <div className="ml-10">
            <div className="lh-16">
              {lang == "eng" ? "Group Size" : "Аялалгчдийн тоо"}
            </div>
            <div className="text-14 text-light-2 lh-16">{datas.groupSize}</div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-6">
        <div className="d-flex items-center">
          <div className="flex-center size-50 rounded-12 border-1">
            <i className="text-20 icon-birthday-cake"></i>
          </div>

          <div className="ml-10">
            <div className="lh-16">
              {lang == "en" ? "Ages" : "Насны хязгаар"}
            </div>
            <div className="text-14 text-light-2 lh-16">{datas.age}</div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-6">
        <div className="d-flex items-center">
          <div className="flex-center size-50 rounded-12 border-1">
            <i className="text-20 icon-translate"></i>
          </div>

          <div className="ml-10">
            <div className="lh-16Languages">
              {lang == "eng" ? "Languages" : "Хэл"}
            </div>
            <div className="text-14 text-light-2 lh-16">{datas.lang}</div>
          </div>
        </div>
      </div>
    </>
  );
}
