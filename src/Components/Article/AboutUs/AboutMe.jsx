// Components
import ShowcaseHeader from "../CommoneComponents/ShowcaseHeader";
import Services from "./Services";
import Testimonials from "./Testimonials";
import TestimonialsOverlayer from "./TestimonialsOverlayer";
import ClientsLogo from "./ClientsLogo";

// Data
import { AboutMeText, servicesDone } from "../../../Data/AboutData";

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
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          {servicesDone.map((item, index) => (
            <Services {...item} key={index} />
          ))}
        </ul>
      </section>

      
      {/* Testimoinals */}

      {/* <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        Use the  testimonials to add them & use TestimonialsOverlayer to display the partial message
      </section> */}

      
      {/* Clients */}

      {/* <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul class="clients-list has-scrollbar">
          Add the logo for the client over here.
        </ul>
      </section> */}
    </>
  );
}
