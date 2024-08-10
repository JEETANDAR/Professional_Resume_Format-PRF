import { IonIcon } from '@ionic/react';

export default function SocialLinks({ iconLink, iconName }, index) {
  return (
    <li key={index} className="social-item">
      <a href={iconLink} className="social-link">
        <IonIcon name={iconName} />
      </a>
    </li>
  );
}
