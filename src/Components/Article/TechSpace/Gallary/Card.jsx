// Import the CSS file
import "./Gallery-View.css";

// Importing useState
import { useState } from "react";

const Card = ({ image, imageTitle, description }, index) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  function toggleDescription() {
    setDescriptionVisible((prev) => !prev);
    console.log(typeof description);
  }

  const DescriptionButton = () => {
    if (typeof description === "string") {
      return (
        <>
          {isDescriptionVisible && <p>{description}</p>}
          <button onClick={toggleDescription}>
            <b>
              {isDescriptionVisible
                ? "Collapse Description"
                : "View Description"}
            </b>
          </button>
        </>
      );
    }
  };

  return (
    <div className="Container" key={index}>
      <div className="Certificate">
        <img src={image} alt={imageTitle} />{" "}
        {/* Added alt text for accessibility */}
      </div>
      <div className="Description">
        <h1>{imageTitle}</h1>
        <DescriptionButton />
      </div>
    </div>
  );
};

export default Card;
