export default function Testimonials({
  imgLocation,
  imgALT,
  clientName,
  clientDescription,
}) {
  return (
    <>
      <li className="testimonials-item">
        <div class="content-card" data-testimonials-item>
          <figure class="testimonials-avatar-box">
            <img
              src={imgLocation}
              alt={imgALT}
              width="60"
              data-testimonials-avatar
            />
          </figure>

          <h4 class="h4 testimonials-item-title" data-testimonials-title>
            {clientName}
          </h4>

          <div class="testimonials-text" data-testimonials-text>
            <p>{clientDescription}</p>
          </div>
        </div>
      </li>
    </>
  );
}
