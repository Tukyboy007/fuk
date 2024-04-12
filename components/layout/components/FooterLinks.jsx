const sections = [
  {
    title: "Эртний Монгол",
    titleEn: "Ancient Mongolia",
    links: [
      { id: 1, text: "Бидний тухай", textEn: "About Us", href: "/about" },
      {
        id: 3,
        text: "Бидэнтэй холбогдох",
        textEn: "Contact Us",
        href: "/contact",
      },
      { id: 4, text: "Аялалын зөвлөмж", textEn: "Terms", href: "/terms" },
    ],
  },
];

export default function FooterLinks({ lang }) {
  return (
    <>
      {sections.map((elm, i) => (
        <div key={i} className="col-lg-auto col-6">
          <h4 className="text-20 fw-500">
            {lang == "mn" ? elm.title : elm.titleEn}
          </h4>

          <div className="y-gap-10 mt-20">
            {elm.links.map((elm2, i2) => (
              <a key={i2} className="d-block fw-500" href={elm2.href}>
                {lang == "mn" ? elm2.text : elm2.textEn}
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
