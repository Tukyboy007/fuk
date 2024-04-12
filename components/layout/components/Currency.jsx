"use client";

import { useState, useEffect, useRef } from "react";

const currencies = ["Монгол", "English"];
const lan = ["mn", "en"];

export default function Currency({ parentClass, setLang }) {
  const [currentdd, setCurrentdd] = useState("");
  const ln =
    typeof window !== "undefined" && localStorage.getItem("lang") != null
      ? localStorage.getItem("lang")
      : "en";
  const initialCurrency = ln === "mn" ? "Хэлний сонголт" : "Language";
  const [selectedCurrency, setSelectedCurrency] = useState(initialCurrency);
  const dropDownContainer = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setCurrentdd("");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      ref={dropDownContainer}
      className={`${
        parentClass ? parentClass : "headerDropdown  js-form-dd roboto-regular"
      }`}
    >
      <div
        className="headerDropdown__button"
        onClick={() =>
          setCurrentdd((pre) => (pre == "currency" ? "" : "currency"))
        }
      >
        {selectedCurrency}
        <i className="icon-chevron-down text-18"></i>
      </div>

      <div
        className={`headerDropdown__content ${
          currentdd == "currency" ? "is-active" : ""
        } `}
      >
        <div className="headerDropdown">
          <div className="headerDropdown__container">
            {currencies.map((elm, i) => (
              <div
                onClick={() => {
                  setSelectedCurrency(elm);
                  setCurrentdd("");
                  setLang(lan[i]);
                  localStorage.setItem("lang", lan[i]);
                }}
                key={i}
                className="headerDropdown__item"
              >
                <button className="">{elm}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
