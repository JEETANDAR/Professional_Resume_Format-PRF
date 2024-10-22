// import Components
import Card from "./Card";

// importing useState
import { useState } from "react";

// Importing the data
import {
  CertificatesArray,
  CertificatesValues,
} from "../../../../Data/CertificatesData";

// importing SVG file
import searchIcon from "../../../../assets/svgFiles/Gallery/searchIcon.svg";

export default function GallaryView() {
  const [filterValue, setFilterValue] = useState(CertificatesValues[0]);

  function filterMethod() {}

  return (
    <>
      {/* <div className="FilterFunction">
        <div />
        <div />
        <div>
          <div className="filterBox">
            <h1>Filter</h1>
            <span>
              <img src={searchIcon} alt="" srcset="" />
            </span>
          </div>
          <div className="filter-dropdown" >
            {CertificatesValues.map((options, index) => (
              <button key={index}>
                {options}
              </button>
            ))}
          </div>
        </div>
      </div> */}
      <h3 className="h3 certificates-title">Certificates</h3>
      <div className="GallaryView">
        {CertificatesArray.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </div>
    </>
  );
}
