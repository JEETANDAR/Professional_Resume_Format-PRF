import { IonIcon } from "@ionic/react";

export default function ListInfo({ icon, iconLogo, iconData }) {
  return (
    <li className="contact-item">
      <div className="icon-box">
        <IonIcon icon={icon} />
      </div>

      <div className="contact-info">
        <p className="contact-title">{iconLogo}</p>
        <p
          className="contact-link"
          dangerouslySetInnerHTML={{ __html: iconData }}
        ></p>
      </div>
    </li>
  );
}
