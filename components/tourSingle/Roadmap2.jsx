"use client";

import { roadmapData2 } from "@/data/tourSingleContent";
import React, { useState, useEffect } from "react";
import client from "@/public/api/client";
export default function RoadMap2({ slug, lang }) {
  const [data, setData] = useState("");
  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "Product" && slug.current == '${slug}']
        {
          "routes":route,
           "routesEn":routeEn,
           "routeExtend":routeExtend,
           "routeExtendEn":routeExtendEn,
        }
        `
      )
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const datas = data != null && data != "" ? data[0] : "";
  const [activeRoadmap, setActiveRoadmap] = useState(2);
  const [lastIndex, setLastIndex] = useState();

  useEffect(() => {
    if (datas !== "") {
      setLastIndex(datas.routes.length - 1);
    }
  }, [datas]);
  if (datas != "" && datas != null)
    return (
      <div className="roadmap roadMap2">
        {datas.routes.map((elm, i) => (
          <div key={i} className="roadmap__item">
            {i == 0 || i == lastIndex ? (
              <div
                className="roadmap__iconBig"
                onClick={() => setActiveRoadmap((pre) => (pre == i ? -1 : i))}
              >
                <i className={i == 0 ? "icon-pin" : "icon-flag"}></i>
              </div>
            ) : (
              <div
                className="roadmap__icon"
                onClick={() => setActiveRoadmap((pre) => (pre == i ? -1 : i))}
              ></div>
            )}
            <div className="roadmap__wrap">
              <div
                className="roadmap__title "
                onClick={() => setActiveRoadmap((pre) => (pre == i ? -1 : i))}
              >
                {elm}
              </div>
              {datas.routeExtend && (
                <div
                  className={`roadmap__content ${
                    activeRoadmap == i ? "active" : ""
                  } `}
                >
                  {lang == "en" ? datas.routeExtendEn[i] : datas.routeExtend[i]}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
}
