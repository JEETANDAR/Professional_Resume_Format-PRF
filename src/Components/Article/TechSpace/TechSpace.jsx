// Components
import ShowcaseHeader from "../CommoneComponents/ShowcaseHeader";

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
              key={index}
              // onClick={() => window.open(icon.iconLink, '_blank')}
              className={`Btn ${icon.className}`}
            >
              {icon.renderIcon}
              <span className="BG" />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
