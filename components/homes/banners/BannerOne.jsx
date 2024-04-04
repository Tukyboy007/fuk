import Image from "next/image";
import React from "react";

export default function BannerOne() {
  return (
    <section className="cta -type-1 font">
      <div className="cta__bg">
        <Image width={1530} height={500} src="/img/cta/1/bg.png" alt="image" />
      </div>

      <div className="container">
        <div className="row justify-between">
          <div className="col-xl-5 col-lg-6">
            <div className="cta__content">
              <h2
                data-aos="fade-up"
                data-aos-delay=""
                className="text-40 md:text-24 lh-13 text-white"
              >
                Хямдралтай
                <br className="lg:d-none" />
                үйлчлүүлэхийг хүсвэл
              </h2>

              <p
                data-aos="fade-up"
                data-aos-delay=""
                className="mt-10 text-white"
              >
                Бид таний мэйл хаягруу аялалын мэдээллийг үргэлж илгээх болно.
                <br className="lg:d-none" />
              </p>

              <div
                data-aos="fade-up"
                data-aos-delay=""
                className="text-18 text-white mt-40 md:mt-20"
              >
                Шинэ мэдээллийг цаг алдалгүй авахыг хүсвэл
              </div>

              <div className="mt-10">
                <div className="singleInput -type-2 row x-gap-10 y-gap-10">
                  <div className="col-md-auto col-12">
                    <input type="email" placeholder="Мэйл хаяг" className="" />
                  </div>
                  <div className="col-md-auto col-12">
                    <button
                      data-aos="fade-right"
                      data-aos-delay=""
                      className="button -md -accent-1 bg-white col-12 text-accent-2"
                    >
                      Илгээх
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-6">
            <div className="cta__image">
              <Image
                width={667}
                height={500}
                src="/img/cta/1/1.png"
                alt="image"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
