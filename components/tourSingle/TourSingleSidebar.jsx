"use client";

import React, { useEffect, useState } from "react";
import Calender from "../common/dropdownSearch/Calender";
import Image from "next/image";
import { times } from "@/data/tourSingleContent";
import Link from "next/link";

export default function TourSingleSidebar({ slug }) {
  const dataToSend = {
    slug: slug,
  };
  const prices = {
    adultPrice: 94,
    youthPrice: 84,
    childrenPrice: 20,
    extraService: 40,
    servicePerPerson: 40,
  };

  const [adultNumber, setAdultNumber] = useState(3);
  const [youthNumber, setYouthNumber] = useState(2);
  const [childrenNumber, setChildrenNumber] = useState(4);
  const [isExtraService, setisExtraService] = useState(false);
  const [isServicePerPerson, setIsServicePerPerson] = useState(false);
  const [extraCharge, setExtraCharge] = useState(0);
  useEffect(() => {
    setExtraCharge(0);
    if (isExtraService) {
      setExtraCharge((pre) => pre + prices.extraService);
    }
    if (isServicePerPerson) {
      setExtraCharge((pre) => pre + prices.servicePerPerson);
    }
  }, [isExtraService, isServicePerPerson, setExtraCharge]);

  const [selectedTime, setSelectedTime] = useState("");
  const [activeTimeDD, setActiveTimeDD] = useState(false);

  return (
    <div className="tourSingleSidebar">
      <div className="searchForm -type-1 -sidebar mt-20">
        <div className="searchForm__form">
          <div className="searchFormItem js-select-control js-form-dd js-calendar">
            <div className="searchFormItem__button" data-x-click="calendar">
              <div className="searchFormItem__icon size-50 rounded-12 bg-light-1 flex-center">
                <i className="text-20 icon-calendar"></i>
              </div>
              <div className="searchFormItem__content">
                <h5>Аялалын хугацаа</h5>
                <div>
                  <span className="js-first-date">
                    <Calender />
                  </span>
                  <span className="js-last-date"></span>
                </div>
              </div>
              <div className="searchFormItem__icon_chevron">
                <i className="icon-chevron-down d-flex text-18"></i>
              </div>
            </div>
          </div>

          <div className="searchFormItem js-select-control js-form-dd">
            <div
              className="searchFormItem__button"
              onClick={() => setActiveTimeDD((pre) => !pre)}
              data-x-click="time"
            >
              <div className="searchFormItem__icon size-50 rounded-12 bg-light-1 flex-center">
                <i className="text-20 icon-clock"></i>
              </div>
              <div className="searchFormItem__content">
                <h5>Нийт аялалын цаг</h5>
                <div className="js-select-control-chosen">
                  {selectedTime ? selectedTime : "Choose time"}
                </div>
              </div>
              <div className="searchFormItem__icon_chevron">
                <i className="icon-chevron-down d-flex text-18"></i>
              </div>
            </div>

            <div
              className={`searchFormItemDropdown -tour-type ${
                activeTimeDD ? "is-active" : ""
              }`}
              data-x="time"
              data-x-toggle="is-active"
            >
              <div className="searchFormItemDropdown__container">
                <div className="searchFormItemDropdown__list sroll-bar-1">
                  {times.map((elm, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        setSelectedTime((pre) => (pre == elm ? "" : elm));
                        setActiveTimeDD(false);
                      }}
                      className="searchFormItemDropdown__item"
                    >
                      <button className="js-select-control-button">
                        <span className="js-select-control-choice">{elm}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h5 className="text-18 fw-500 mb-20 mt-20">Төлбөр</h5>

      <div>
        <div className="d-flex items-center justify-between">
          <div className="text-14">
            Том хүн (18+ нас){" "}
            <span className="fw-500">
              ${(prices.adultPrice * adultNumber).toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-15">
        <div className="d-flex items-center justify-between">
          <div className="text-14">
            Хүүхэд (0-12 нас){" "}
            <span className="fw-500">
              ${(prices.childrenPrice * childrenNumber).toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <Link href="/booking-pages">
        <button
          className="button -md -dark-1 col-12 bg-accent-1 text-white mt-20"
          onClick={() => localStorage.setItem("buyItem", slug)}
        >
          Захиалах
          <i className="icon-arrow-top-right ml-10"></i>
        </button>
      </Link>
    </div>
  );
}
