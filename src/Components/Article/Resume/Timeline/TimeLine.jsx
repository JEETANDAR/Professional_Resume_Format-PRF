// React Files
import { IonIcon } from '@ionic/react';
// import { bookOutline, code } from 'ionicons/icons';

// Components
import TimeLineStops from "./TimeLineStops";

// Data
import { timeLineDetails } from '../../../../Data/ResumeData';

export default function TimeLine({ iconSymbol, iconName }) {
    return (
        <>
            <div className="title-wrapper">
                <div className="icon-box">
                    <IonIcon icon={iconSymbol} />
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
