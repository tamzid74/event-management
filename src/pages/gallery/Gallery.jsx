import image1 from '../../assets/images/2150763120.jpg'
import image2 from '../../assets/images/michael-negrete-OYA4jUcconI-unsplash.jpg'
import image3 from '../../assets/images/jon-tyson-CP68p1fZS8k-unsplash.jpg'
import image4 from '../../assets/images/drew-coffman-llWjwo200fo-unsplash.jpg'
import image5 from  '../../assets/images/dylan-sauerwein-ouE5kfwZs4s-unsplash.jpg'
import image6 from '../../assets/images/michael-negrete-OYA4jUcconI-unsplash.jpg'
import image7 from '../../assets/images/senior-people-celebrating-together.jpg'
import image8 from '../../assets/images/valeria-zoncoll-AVGc87j_vNA-unsplash.jpg'
import image9 from '../../assets/images/victoria-rodriguez-YYXqBwvdoeI-unsplash.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Gallery = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4" data-aos="zoom-in">
      <div>
        <img className="h-auto max-w-full rounded-lg" src={image1}  />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={image2}  />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={image3}  />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={image4}  />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={image5}  />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={image6} />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={image7} />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={image8} />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={image9}  />
      </div>
      </div>
    </div>
  );
};

export default Gallery;
