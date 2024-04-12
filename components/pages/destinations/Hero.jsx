import Image from "next/image";
import React from "react";

export default function Hero({ lang }) {
  return (
    <section className="pageHeader -type-1 font">
      <div className="pageHeader__bg">
        <Image layout="fill" src="/img/pageHeader/1.jpg" alt="image" />
        <Image
          width="1800"
          height="40"
          style={{ height: "auto" }}
          src="/img/hero/1/shape.svg"
          alt="image"
        />
      </div>

      <div className="container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="pageHeader__content">
              <h1 className="pageHeader__title">
                {lang == "mn" ? "Аялалууд" : "Tours"}
              </h1>

              <p className="pageHeader__text">
                {lang == "mn"
                  ? "Таний амьдралын аз жаргалтай хэсэг"
                  : "So here's to the happy times we've known."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
