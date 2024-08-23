

export default function Skills({SkillName, SkillPercentage}) {
    return (
        <>
        <li className="skills-item">
        <div className="title-wrapper">
                <h5 className="h5">{SkillName}</h5>
                <data value="80">{SkillPercentage} %</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{width: `${SkillPercentage}%`}}></div>
              </div>
        </li>
        </>
    );
}