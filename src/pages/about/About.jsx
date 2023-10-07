
import bg from "../../assets/images/jason-goodman-Oalh2MojUuk-unsplash.jpg";
const About = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("${bg}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-md" data-aos="zoom-in">
            <h1 className="mb-5 text-2xl md:text-4xl font-bold">
              Welcome to social event
            </h1>
            <h2 className="text-xl underline font-bold">Our Story</h2>
            <p className="mb-5">
              Founded with a vision of making every moment count, social event has been in the business of event management for 20 years.
              Our journey began when a group of event enthusiasts came together,
              driven by a shared desire to turn dreams into realities. Since
              then, we have curated countless gatherings, leaving behind a trail
              of happy memories and satisfied clients.
            </p>
            <button className="btn btn-success btn-sm">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
