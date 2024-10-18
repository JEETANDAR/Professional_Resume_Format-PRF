export default function TimeLineStops({ title, year, description }, index) {
  return (
    <>
      <li className="timeline-item" key={index}>
        <h4 className="h4 timeline-item-title">{title}</h4>

        <span>{year}</span>

        <p className="timeline-text">{description.slice(0, 8) == "https://" ? <a href={description} target="_blank">Click Here</a> : description}</p>
      </li>
    </>
  );
}
