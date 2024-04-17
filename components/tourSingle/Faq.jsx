"use client";

import { faqData } from "@/data/tourSingleContent";
import React, { useState, useEffect } from "react";
import client from "@/public/api/client";

export default function Faq({ slug, lang }) {
  const [data, setData] = useState("");
  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "Product" && slug.current == '${slug}']
        {
          "askQuestion":askQuestion,
          "askQuestionEn":askQuestionEn,
          "askQuestionEx":askQuestion,
          "askQuestionExEn":askQuestionEn,
        }
        `
      )
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const datas = data != null && data != "" ? data[0] : "";
  console.log(datas);
  const [currentActiveFaq, setCurrentActiveFaq] = useState(0);
  if (datas != "" && datas != null)
    return (
      <>
        {datas.askQuestion.map((elm, i) => (
          <div key={i} className="col-12">
            <div
              className={`accordion__item px-20 py-15 border-1 rounded-12 ${
                currentActiveFaq == i ? "is-active" : ""
              } `}
            >
              <div
                className="accordion__button d-flex items-center justify-between"
                onClick={() =>
                  setCurrentActiveFaq((pre) => (pre == i ? -1 : i))
                }
              >
                <div className="button text-16 text-dark-1">
                  {lang == "en" ? datas.askQuestionEn[i] : datas.askQuestion[i]}
                </div>

                <div className="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                  <i className="icon-plus"></i>
                  <i className="icon-minus"></i>
                </div>
              </div>

              <div
                className="accordion__content"
                style={currentActiveFaq == i ? { maxHeight: "150px" } : {}}
              >
                <div className="pt-20">
                  <p>
                    {lang != "en"
                      ? datas.askQuestionEx[i]
                      : datas.askQuestionExEn[i]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
}
