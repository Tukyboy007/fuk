"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function BannerTwo({ lang }) {
  return (
    <section className="layout-pt-xl font">
      <div className="container">
        <div className="bg-green-3 py-50 px-50 rounded-12">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <h2
                data-aos="fade-up"
                data-aos-delay=""
                className="text-20 fw-500 text-white"
              >
                {lang == "mn"
                  ? "Хамт олон, найз нөхдийн хямдрал 50%!"
                  : "50% discount for family and friends!"}
              </h2>
            </div>

            <div className="col-auto">
              <button
                data-aos="fade-right"
                data-aos-delay=""
                className="button -md -green-2  bg-white text-accent-12"
              >
                <Link href="/tour-list-1">
                  {lang == "mn" ? "Аялах" : "Submit"}
                  <i className="icon-arrow-top-right ml-10 "></i>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
