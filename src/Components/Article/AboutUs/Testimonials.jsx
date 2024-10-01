export default function Testimonials({
  imgLocation,
  imgALT,
  clientName,
  clientDescription,
}) {
  return (
    <>
      <li className="testimonials-item">
        <div className="content-card" data-testimonials-item>
          <figure className="testimonials-avatar-box">
            <img
              src={imgLocation}
              alt={imgALT}
              width="60"
              data-testimonials-avatar
            />
          </figure>

          <h4 className="h4 testimonials-item-title" data-testimonials-title>
            {clientName}
          </h4>

          <div className="testimonials-text" data-testimonials-text>
            <p>{clientDescription}</p>
          </div>
        </div>
      </li>
    </>
  );
}
