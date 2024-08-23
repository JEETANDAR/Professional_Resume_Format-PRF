// The Title for each Page
import ShowcaseHeader from "../CommoneComponents/ShowcaseHeader";

// Components
import TimeLine from "./Timeline/TimeLine";
import Skills from "./Skills/Skills";
// Data
import { timeLine } from "../../../Data/ResumeData";
import { mySkills } from "../../../Data/ResumeData";

export default function Resume() {
  return (
    <>
      <ShowcaseHeader text="Resume" />
      {timeLine.map((item, index) => (
        <TimeLine {...item} key={index}/>
      ))}

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          {mySkills.map((item, index) => (
            <Skills {...item} key={index} />
          ))}
        </ul>
      </section>
    </>
  );
}
