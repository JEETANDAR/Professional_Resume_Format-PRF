// Components
import ShowcaseHeader from "../CommoneComponents/ShowcaseHeader";
import Services from "./Services";

// Data
import { AboutMeText, servicesDone } from "../../../Data/iconDataSheet";

export default function AboutMe() {
  return (
    <>
      <ShowcaseHeader text="About me" />
      {/* About me */}
      <section className="about-text">
        {AboutMeText.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </section>
      {/* Service */}
      <section className="service">
        <h3 class="h3 service-title">What i'm doing</h3>
        <ul class="service-list">
          {servicesDone.map((item, index) => (
            <Services {...item} key={index} />
          ))}
        </ul>
      </section>

      {/* Later Work on Testimonials & Clients*/}
    </>
  );
}
