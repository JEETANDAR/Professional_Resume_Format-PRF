// React Files
import '@ionic/react/css/core.css';
import { IonIcon } from '@ionic/react';
import { bookOutline } from 'ionicons/icons';

// Components
import TimeLineStops from "./TimeLineStops";

// Data
import { timeLineDetails } from "../../../Data/iconDataSheet";

export default function TimeLine({ iconSymbol, iconName }) {
    return (
        <>
            <div className="title-wrapper">
                <div className="icon-box">
                    <IonIcon icon={bookOutline} />
                </div>
                <h3 className="h3">{iconName}</h3>
            </div>
            <ol className="timeline-list">
                {timeLineDetails[iconName] && timeLineDetails[iconName].map((item, index) => (
                    <TimeLineStops key={index} {...item} index={index} />
                ))}
            </ol>
        </>
    );
}
