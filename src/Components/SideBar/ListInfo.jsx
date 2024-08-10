import React from 'react';
import '@ionic/react/css/core.css';
import { IonIcon } from '@ionic/react';

export default function ListInfo({ icon, iconName, iconData }) {
  return (
    <li className="contact-item">
      <div className="icon-box">
        {typeof icon != String ? <IonIcon icon={icon} /> : icon}
      </div>

      <div className="contact-info">
        <p className="contact-title">{iconName}</p>
        <p className="contact-link" dangerouslySetInnerHTML={{ __html: iconData }}></p>
      </div>
    </li>
  );
}
