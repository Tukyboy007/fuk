import React from "react";

export default function PageHeader() {
  return (
    <div className="container">
      <div className="row justify-between py-30 mt-80">
        <div className="col-auto">
          <div className="text-14">
            Home {">"} Tours {">"} Phuket
          </div>
        </div>

        <div className="col-auto">
          <div className="text-14">
            Амьдралынхаа аз жаргалтай дурсамжийг бидэнтэй хамт бүтээгээрэй
          </div>
        </div>
      </div>
    </div>
  );
}
