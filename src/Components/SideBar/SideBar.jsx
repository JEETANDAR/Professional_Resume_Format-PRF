import profilePhote from "../../assets/images/my-avatar.png";

// Imporing the components
import ListInfo from "./ListInfo";
import SocialLinks from "./SocialLinks";

// Importing all the Data.
import { iconDS, socialLinks } from "../../Data/iconDataSheet";
const skills = [
  "Backend Development",
  "python developer",
  "React developer",
  "Linux newbie",
  "AI enthusiast",
];


export default function SideBar() {
  return (
    <>
      <aside className="sidebar" data-sidebar>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img src={profilePhote} alt="Richard hanrick" width="80" />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Richard hanrick">
              Arden Diago
            </h1>
          <p class="title">Developer</p>
          </div>
          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>

            <ion-icon name="chevron-down"></ion-icon>
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
