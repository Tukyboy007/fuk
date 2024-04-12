import Image from "next/image";
import React from "react";

export default function BannerFour({ lang }) {
  return (
    <section className="layout-pt-xxl layout-pb-xxl relative">
      <div className="sectionBg">
        <Image
          src="/img/cta/3/1.jpg"
          layout="fill"
          alt="image"
          className="img-ratio"
        />
      </div>

      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-70 md:text-40 sm:text-30 text-white fw-700"
            >
              {lang == "mn"
                ? "Үзэсгэлэнт байгаль"
                : "Beautiful nature, fun time "}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay=""
              className="text-white mt-20"
            >
              {lang == "mn"
                ? `Бид таньд Монгол орны үзэсгэлэнт
              ${(<br className="md:d-none" />)} газраар аялуулах аялалуудыг
              бэлтгэсэн.`
                : `We are the beauty of Mongolia field trips prepared.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
