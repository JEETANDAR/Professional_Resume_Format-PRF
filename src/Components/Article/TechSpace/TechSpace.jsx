// Components
import ShowcaseHeader from "../CommoneComponents/ShowcaseHeader";
import GallaryView from "./Gallary/GallaryView";

// CSS File
import "./TechSpace.css";

// Data File
import { IconArray } from "./Icons";

export default function TechSpace() {
  const linkArray = IconArray.map((item) => item.iconLink);

  return (
    <>
      <ShowcaseHeader text="TechSpace" />
      <div className="techSpaceNav">
        {/* Icons */}
        <div className="social-card ed-card">
          {IconArray.map((icon, index) => (
            <button
              key={index} // The key should be here, on the button element
              onClick={() => window.open(icon.iconLink, "_blank")}
              className={`Btn ${icon.className}`}
            >
              <span className="BG">{icon.renderIcon}</span>
            </button>
          ))}
        </div>
      </div>
      <GallaryView />
    </>
  );
}
