// Import the CSS file
import "./Gallery-View.css";

// Importing useState
import { useState } from "react";

const Card = ({ image, imageTitle, description }) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  function toggleDescription() {
    setDescriptionVisible((prev) => !prev);
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
    return null;
  };

  return (
    <div className="Container">
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
