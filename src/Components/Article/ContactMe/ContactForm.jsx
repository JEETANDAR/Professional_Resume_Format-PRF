import { IonIcon } from "@ionic/react";
import { paperPlane } from 'ionicons/icons'

export default function ContactForm() {
  return (
    <>
      <form action="#" className="form" data-form>
        <div className="input-wrapper">
          <input
            type="text"
            name="fullname"
            className="form-input"
            placeholder="Full name"
            required
            data-form-input
          />

          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Email address"
            required
            data-form-input
          />
        </div>

        <textarea
          name="message"
          className="form-input"
          placeholder="Your Message"
          required
          data-form-input
        ></textarea>

        <button className="form-btn" type="submit" disabled data-form-btn>
          <IonIcon icon={paperPlane} />
          <span>Send Message</span>
        </button>
      </form>
    </>
  );
}
