export default function TimeLineStops({ collegeName, year, description }, index) {
  return (
    <>
      <li class="timeline-item" key={index}>
        <h4 class="h4 timeline-item-title">{collegeName}</h4>

        <span>{year}</span>

        <p class="timeline-text">{description}</p>
      </li>
    </>
  );
}
