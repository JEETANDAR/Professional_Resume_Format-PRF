export default function Services({
  imgPath,
  imgText,
  serviceTitle,
  serviceDescription,
}) {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        <img src={imgPath} alt={imgText} width="40" />
      </div>

      <div className="service-content-box">
        <h4 className="h4 service-item-title">{serviceTitle}</h4>

        <p className="service-item-text">{serviceDescription}</p>
      </div>
    </li>
  );
}
