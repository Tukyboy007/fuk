"use client";
import FooterTwo from "@/components/layout/footers/FooterTwo";
import Header2 from "@/components/layout/header/Header2";
import BookingPages from "@/components/pages/BookingPages";
import React, { useState, useEffect } from "react";

// export const metadata = {
//   title: "Booking-page || ViaTour - Travel & Tour React NextJS Template",
//   description: "ViaTour - Travel & Tour React NextJS Template",
// };

export default function page() {
  const [lang, setLang] = useState("en");
  let buyItem = "";
  if (typeof window !== "undefined") {
    buyItem = localStorage.getItem("buyItem");
  }

  console.log(buyItem);
  return (
    <>
      <main>
        <Header2 lang={lang} setLang={setLang} />
        <BookingPages lang={lang} />
        <FooterTwo />
      </main>
    </>
  );
}
