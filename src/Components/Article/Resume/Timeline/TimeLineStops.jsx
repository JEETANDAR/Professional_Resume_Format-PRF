export default function TimeLineStops({ collegeName, year, description }, index) {
  return (
    <>
      <li className="timeline-item" key={index}>
        <h4 className="h4 timeline-item-title">{collegeName}</h4>

        <span>{year}</span>

        <p className="timeline-text">{description}</p>
      </li>
    </>
  );
}
