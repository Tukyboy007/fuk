"use client";

import React, { useState } from "react";
import Menu from "../components/Menu";
import Currency from "../components/Currency";
import MobileMenu from "../components/MobileMenu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Header2({ lang, setLang }) {
  const router = useRouter();
  const pageNavigate = (pageName) => {
    router.push(pageName);
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="header -type-2 js-header">
        <div className="header__container container">
          <div className="headerMobile__left">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="header__menuBtn js-menu-button"
            >
              <i className="icon-main-menu"></i>
            </button>
          </div>

          <div className="header__logo">
            <Link href="/" className="header__logo">
              <Image
                width="90"
                height="12"
                src="/img/general/logo3.png"
                alt="logo icon"
                priority
              />
            </Link>

            <Menu lang={lang} />
          </div>

          <div className="headerMobile__right">
            <button
              onClick={() => pageNavigate("/tour-list-1")}
              className="d-flex"
            >
              <i className="icon-search text-18"></i>
            </button>

            <button
              onClick={() => pageNavigate("/login")}
              className="d-flex ml-20"
            >
              <i className="icon-person text-18"></i>
            </button>
          </div>

          <div className="header__right xl:d-none">
            <div className="ml-30">
              <Currency setLang={setLang} />
            </div>
          </div>
        </div>
      </header>
      <MobileMenu
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
        setLang={setLang}
      />
    </>
  );
}
