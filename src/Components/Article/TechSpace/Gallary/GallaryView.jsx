// import Components
import Card from "./Card";

// Importing the data
import { CertificatesArray } from "../../../../Data/Certificates";

export default function GallaryView() {
  return (
    <>
      <div className="GallaryView">
        {CertificatesArray.map((item, index) => (
          <Card {...item} index={index} />
        ))}
      </div>
    </>
  );
}
