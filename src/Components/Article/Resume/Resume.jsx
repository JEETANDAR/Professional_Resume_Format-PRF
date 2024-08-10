import ShowcaseHeader from "../CommoneComponents/ShowcaseHeader";
import TimeLine from "./TimeLine";

// Data
import { timeLine } from "../../../Data/iconDataSheet"

export default function Resume() {
    return (
        <>
        <ShowcaseHeader text="Resume"/>
        {timeLine.map((item, index) => (
            <TimeLine {...item}/>
        ))}
        </>
    );
}