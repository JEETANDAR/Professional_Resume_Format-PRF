import { IonIcon } from "@ionic/react";

export default function SocialLinks({ iconLink, iconLogo }) {
  return (
    <li className="social-item">
      <a
        href={iconLink}
        className="social-link"
        target="blank"
      >
        <IonIcon icon={iconLogo} />
      </a>
    </li>
  );
}
