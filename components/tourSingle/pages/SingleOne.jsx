import React from "react";
import MainInformation from "../MainInformation";
import OthersInformation from "../OthersInformation";
import Overview from "../Overview";
import Included from "../Included";
import Map from "@/components/tours/Map";
import Faq from "../Faq";
import Rating from "../Rating";
import Reviews from "../Reviews";
import TourSingleSidebar from "../TourSingleSidebar";
import Gallery1 from "../Galleries/Gallery1";
import DateCalender from "../DateCalender";
import RoadMap2 from "../Roadmap2";
import CommentBox from "../CommentBox";

export default function SingleOne({ slug, lang }) {
  return (
    <>
      <section className="">
        <div className="container">
          {/* <MainInformation tour={tour} /> */}
          <Gallery1 slug={slug} />
        </div>
      </section>

      <section className="layout-pt-md js-pin-container">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-lg-8">
              <div className="row y-gap-20 justify-between items-center layout-pb-md">
                <OthersInformation slug={slug} lang={lang} />
              </div>

              <Overview slug={slug} lang={lang} />

              <div className="line mt-60 mb-60"></div>

              <h2 className="text-30">
                {lang == "en" ? "What's included" : " Аялалд багтсан зүйлс"}
              </h2>

              <Included slug={slug} lang={lang} />

              <div className="line mt-60 mb-60"></div>

              <h2 className="text-30">
                {lang == "en" ? "Tour routes" : "Аялалын маршрут"}
              </h2>

              <RoadMap2 slug={slug} lang={lang} />

              <div className="line mt-60 mb-60"></div>

              <h2 className="text-30">
                {lang == "en" ? "Tour duration" : "Аялалын хугацаа"}
              </h2>
              <DateCalender slug={slug} lang={lang} />

              <div className="line mt-60 mb-60"></div>

              <h2 className="text-30">
                {lang == "en" ? "Faq" : "Түгээмэл асуултууд"}
              </h2>

              <div className="accordion -simple row y-gap-20 mt-30 js-accordion">
                <Faq slug={slug} lang={lang} />
              </div>

              <div className="line mt-60 mb-60"></div>
            </div>

            <div className="col-lg-4">
              <div className="d-flex justify-end js-pin-content">
                <TourSingleSidebar slug={slug} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
