import DatePicker, { Calendar } from "react-multi-date-picker";
import React, { useState, useEffect } from "react";
import client from "@/public/api/client";

export default function DateCalender({ slug }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!slug) return;

    client
      .fetch(
        `
        *[_type == "Product" && slug.current == '${slug}']
        {
            "datestart": datestart,
            "dateend": dateend
        }
        `
      )
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, [slug]);

  const defaultDateRange =
    data?.length > 0
      ? [
          new Date(...data[0].datestart.split("-").map(Number)),
          new Date(...data[0].dateend.split("-").map(Number)),
        ]
      : [];

  return (
    <>
      <div className="calenderTourSongle">
        <Calendar
          numberOfMonths={2}
          range
          inputClass="custom_input-picker"
          containerClassName="custom_container-picker"
          value={defaultDateRange}
          disabled={true}
          key={slug} // add key prop if rendering multiple instances
        />
      </div>
    </>
  );
}
