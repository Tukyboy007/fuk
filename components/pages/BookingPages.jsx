import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import client from "@/public/api/client";

export default function BookingPages({ lang }) {
  let slug = "";
  if (typeof window !== "undefined") {
    slug = localStorage.getItem("buyItem");
  }

  const [bookingStage, setBookingStage] = useState(1);
  const [data, setData] = useState("");
  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "Product" && slug.current == '${slug}']
        {
          "title":title
        }
        `
      )
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const datas = data != null && data != "" ? data[0] : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_g8od489",
        "template_bphdfdb",
        e.target,
        "JjNxW5_ScTYmET8VJ"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.error(error.text);
      });
    e.target.reset();
  };
  if (data != "" && data != null)
    return (
      <section className="layout-pt-md layout-pb-lg mt-header">
        <div className="container">
          <form className="row" onSubmit={handleSubmit}>
            <div className="col-lg-8">
              <div className="bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20 mt-30">
                <div>
                  <h2 className="text-30 md:text-24 fw-700">
                    {lang == "en"
                      ? "Choose your options"
                      : "Аялалын захиалга аа хийнэ үү"}
                  </h2>

                  <div className="row y-gap-30 contactForm pt-30">
                    <div className="col-12">
                      <h1 className="text-20 md:text-24 fw-700">
                        {lang == "en"
                          ? "Your choosed tour"
                          : "Та дараах аялалыг сонгосон байна"}
                      </h1>
                      <div className="form-input ">
                        <input
                          type="text"
                          required
                          name="to_tour"
                          value={datas.title}
                        />
                        <label className="lh-1 text-16 text-light-1">
                          {lang == "en" ? datas.title : datas.title}
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-input ">
                        <input type="text" required name="to_name" />
                        <label className="lh-1 text-16 text-light-1">
                          {lang == "en" ? "Full Name" : "Овог Нэр"}
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-input ">
                        <input type="text" name="to_email" required />
                        <label className="lh-1 text-16 text-light-1">
                          {lang == "en" ? "Email" : "Мэйл хаяг"}
                        </label>
                      </div>
                    </div>

                    {/* <div className="col-md-6">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        Phone Number
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        Country
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">City</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        Address 1
                      </label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        Address 2
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        State/Province/Region
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        ZIP code/Postal code
                      </label>
                    </div>
                  </div> */}

                    <div className="col-12">
                      <div className="form-input ">
                        <input required rows="8" name="to_message" />
                        <label className="lh-1 text-16 text-light-1">
                          Tour Content
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="row y-gap-20 items-center justify-between">
                        <div className="col-auto">
                          <div className="text-14">
                            By proceeding with this booking, I agree to tourz
                            Terms of Use and Privacy Policy.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="container d-flex items-center justify-between w-100 mt-60"
                  style={{ maxWidth: "400px" }}
                >
                  <button
                    type="submit"
                    style={{ alignSelf: "end" }}
                    className={`button -md -dark-1 bg-accent-1 text-white
                       ButtonBooking`}
                  >
                    Next
                    <i className="icon-arrow-top-right text-16 ml-10"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="pl-50 md:pl-0">
                <div className="bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20">
                  <h2 className="text-20 fw-500">Your booking details</h2>

                  <div className="d-flex mt-30">
                    <Image
                      width={90}
                      height={84}
                      src="/img/tourSingle/booking/1.png"
                      alt="image"
                    />
                    <div className="ml-20">
                      Zipline 18 Platform and ATV Adventure Tour From Phuket
                    </div>
                  </div>

                  <div className="line mt-20 mb-20"></div>

                  <div className="">
                    <div className="d-flex items-center justify-between">
                      <div className="fw-500">Date:</div>
                      <div className="">06 April 2023</div>
                    </div>

                    <div className="d-flex items-center justify-between">
                      <div className="fw-500">Time:</div>
                      <div className="">10:00 am</div>
                    </div>

                    <div className="d-flex items-center justify-between">
                      <div className="fw-500">Duration:</div>
                      <div className="">12 Days</div>
                    </div>

                    <div className="d-flex items-center justify-between">
                      <div className="fw-500">Tickets:</div>
                      <div className="">Adult x2 = $98</div>
                    </div>

                    <div className="d-flex items-center justify-between">
                      <div className="fw-500"></div>
                      <div className="">Youth x3 = $383</div>
                    </div>

                    <div className="d-flex items-center justify-between">
                      <div className="fw-500"></div>
                      <div className="">Children x6 = $394</div>
                    </div>
                  </div>

                  <div className="line mt-20 mb-20"></div>

                  <div className="y-gap-15">
                    <div className="d-flex justify-between">
                      <div className="fw-500">Service per booking</div>
                      <div className="">$30.00</div>
                    </div>

                    <div className="d-flex justify-between">
                      <div className="fw-500">
                        Service per person 1 Adult, 2 Youth, 4 Children
                      </div>
                      <div className="">$179.00</div>
                    </div>
                  </div>

                  <div className="line mt-20 mb-20"></div>

                  <div className="">
                    <div className="d-flex items-center justify-between">
                      <div className="fw-500">Subtotal</div>
                      <div className="">$382</div>
                    </div>

                    <div className="d-flex items-center justify-between">
                      <div className="fw-500">Total</div>
                      <div className="">$23</div>
                    </div>

                    <div className="d-flex items-center justify-between">
                      <div className="fw-500">Amount Paid</div>
                      <div className="">$3.482</div>
                    </div>

                    <div className="d-flex items-center justify-between">
                      <div className="fw-500">Amount Due</div>
                      <div className="">$43.242</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
}
