import profilePhote from "../../assets/images/my-avatar.png";

// Imporing the components
import ListInfo from "./ListInfo";
import SocialLinks from "./SocialLinks";

import { IonIcon } from "@ionic/react";
import { chevronDown } from 'ionicons/icons';

// Importing all the Data.
import { iconDS, socialLinks } from "../../Data/iconDataSheet";

import { useState } from "react";

const skills = [
  "Backend Development",
  "python developer",
  "React developer",
  "Linux newbie",
  "AI enthusiast",
];


export default function SideBar() {
  const [btnActive, setBTNActive] = useState(0);
  
  function butionState() {
    setBTNActive((prev) => !prev);
  }

  if (document.documentElement.clientWidth > 1440) {
    setBTNActive((prev) => !prev);
  }

  return (
    <>
      <aside className={btnActive ? "sidebar active" : "sidebar"} data-sidebar>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img src={profilePhote} alt="Arden Diago" width="80" />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Richard hanrick">
              Arden Diago
            </h1>
          <p className="title">Developer</p>
          </div>
          <button className="info_more-btn" data-sidebar-btn onClick={butionState}>
            <span>Show Contacts</span>

            <IonIcon icon={chevronDown} />
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            {iconDS.map((item, index) => (
              <ListInfo {...item} key={index} />
            ))}
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            {socialLinks.map((item, index) => (
              <SocialLinks key={index} {...item} />
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
