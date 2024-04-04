const sections = [
  {
    title: "Аялалын компани",
    links: [
      { id: 1, text: "Бидний тухай", href: "/about" },
      { id: 3, text: "Бидэнтэй холбогдох", href: "/contact" },
      { id: 4, text: "Аялалын зөвлөмж", href: "/terms" },
      { id: 7, text: "Хууль эрх зүй", href: "/terms" },
    ],
  },
  {
    title: "Тусламж",
    links: [{ id: 11, text: "Сошиал лайв чат", href: "#" }],
  },
];

export default function FooterLinks() {
  return (
    <>
      {sections.map((elm, i) => (
        <div key={i} className="col-lg-auto col-6">
          <h4 className="text-20 fw-500">{elm.title}</h4>

          <div className="y-gap-10 mt-20">
            {elm.links.map((elm2, i2) => (
              <a key={i2} className="d-block fw-500" href={elm2.href}>
                {elm2.text}
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
