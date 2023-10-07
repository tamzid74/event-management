import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

import photo1 from "../../assets/images/photo1.png";
import photo2 from "../../assets/images/photo2.png";
import photo3 from "../../assets/images/photo3.png";
import photo4 from "../../assets/images/photo4.png";

const Team = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="md:text-6xl text-2xl font-bold mt-10 text-center">
        Meet Our Team
      </h1>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
        <div
          className="w-full max-w-sm rounded-lg"
          data-aos="fade-up"
          data-aos-duration="10000"
        >
          <div className="flex flex-col items-center pb-10">
            <img
              className=" h-72 mb-3 rounded-lg"
              src={photo1}
              alt="Daniel Ramirez"
            />
            <h5 className="mb-1 text-xl font-bold text-gray-900">
              Daniel Ramirez
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Marketing Manager
            </span>
          </div>
        </div>
        <div
          className="w-full max-w-sm rounded-lg"
          data-aos="fade-up"
          data-aos-duration="10000"
        >
          <div className="flex flex-col items-center pb-10">
            <img
              className=" h-72 mb-3 rounded-lg"
              src={photo2}
              alt="Daniel Ramirez"
            />
            <h5 className="mb-1 text-xl font-bold text-gray-900">
              Emily Johnson
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Event Coordinator
            </span>
          </div>
        </div>
        <div
          className="w-full max-w-sm rounded-lg"
          data-aos="fade-up"
          data-aos-duration="10000"
        >
          <div className="flex flex-col items-center pb-10">
            <img
              className=" h-72 mb-3 rounded-lg"
              src={photo3}
              alt="Daniel Ramirez"
            />
            <h5 className="mb-1 text-xl font-bold text-gray-900">
              Michael Roberts
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Entertainment Coordinator
            </span>
          </div>
        </div>
        <div
          className="w-full max-w-sm rounded-lg"
          data-aos="fade-up"
          data-aos-duration="10000"
        >
          <div className="flex flex-col items-center pb-10">
            <img
              className="h-72 mb-3 rounded-lg"
              src={photo4}
              alt="Daniel Ramirez"
            />
            <h5 className="mb-1 text-xl font-bold text-gray-900">
              Sarah Anderson
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Venue Specialist
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
