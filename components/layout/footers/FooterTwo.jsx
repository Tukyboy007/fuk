import React from "react";
import Paymentcards from "../components/Paymentcards";
import FooterLinks from "../components/FooterLinks";
import Socials from "../components/Socials";
import Image from "next/image";

export default function FooterTwo({ lang }) {
  return (
    <footer className="footer -type-1 -dark bg-green-33 text-white font down">
      <div className="footer__main">
        <div className="footer__bg">
          <Image
            width="1800"
            height="627"
            src="/img/footer/1/bg.svg"
            alt="image"
          />
        </div>

        <div className="container">
          <div className="footer__info">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="row y-gap-20 items-center">
                  <div className="col-auto">
                    <i className="icon-headphone text-50"></i>
                  </div>

                  <div className="col-auto">
                    <div className="text-20 fw-500">
                      {lang == "mn"
                        ? "Бидэнтэй холбогдох дугаар"
                        : "Contact Us"}
                      <span className="">+976-991-196-28</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="footerSocials">
                  <div className="footerSocials__title">
                    {lang == "mn" ? "Бидэнтэй нэгдэх" : " Subscribe"}
                  </div>

                  <div className="footerSocials__icons">
                    <Socials />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__content">
            <div className="row y-gap-40 justify-between">
              <div className="col-lg-4 col-md-6">
                <h4 className="text-20 fw-500">
                  {lang == "mn" ? "Холбоо барих" : "Phone Number"}
                </h4>

                <div className="y-gap-10 mt-20">
                  <a className="d-block" href="#">
                    {lang == "mn"
                      ? `Монгол улс, Улаанбаатар хот, Чингэлттэй Дүүрэг 25дугаар
                    хороо.`
                      : "Mongolia, Ulaanbaatar city, Chinggeltei District 25th khoroo"}
                  </a>
                  <a className="d-block" href="#">
                    AncientMonolgia@gmail.com.com
                  </a>
                </div>
              </div>

              <FooterLinks lang={lang} />

              <div className="col-lg-3 col-md-6">
                <h4 className="text-20 fw-500">
                  {lang == "mn" ? "Мэдээ" : "News"}
                </h4>
                <p className="mt-20"></p>

                <div className="footer__newsletter">
                  <input
                    type="Email"
                    placeholder={lang == "mn" ? "Таны мэйл хаяг" : "Email"}
                  />
                  <button>{lang == "mn" ? "Илгээх" : "Submit"}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer__bottom">
          <div className="row y-gap-5 justify-between items-center">
            <div className="col-auto">
              <div>© Copyright UizhenTech {new Date().getFullYear()}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
