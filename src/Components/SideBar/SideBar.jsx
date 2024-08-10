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
            {
              socialLinks.map((index, item) => {
                <SocialLinks {...item} index = {index} />
              })
            }
            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
