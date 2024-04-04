import FooterOne from "@/components/layout/footers/FooterOne";
import Header2 from "@/components/layout/header/Header2";
import PageHeader from "@/components/tours/PageHeader";
import TourList1 from "@/components/tours/TourList1";
import React from "react";

export const metadata = {
  title: "Tour-list-1 || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Header2 />
        <PageHeader />
        <TourList1 />
        <FooterOne />
      </main>
    </>
  );
}
