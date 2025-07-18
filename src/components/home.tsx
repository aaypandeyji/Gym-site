import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import C1 from "../assets/c1.jpg";
import C2 from "../assets/c2.jpg";
import C3 from "../assets/c3.jpg";
import C4 from "../assets/c4.jpg";
import H1 from "../assets/h1.jpg";
import H2 from "../assets/h2.jpg";
import H3 from "../assets/h3.jpg";
import H4 from "../assets/h4.jpg";
import H5 from "../assets/h5.jpg";
import Gym from "../assets/dumbbells.gif"
import Weight from "../assets/weight-lifting.gif"
import Rope from "../assets/battle-rope.gif"
import Push from "../assets/push-ups.gif"
import Training from "../assets/training.gif"
import Treadmill from "../assets/treadmill.gif"
import Lifting from "../assets/weightlifting.gif"


interface SlickSliderProps {
  images: string[];
}

const SlickSlider: React.FC<SlickSliderProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className=" w-full md:h-[600px]">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "1000", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Home: React.FC = () => {
  const [Loading, setLoading] = useState(true);
  const images: string[] = [H1, H2];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000)
    return () => clearTimeout(timer);
  }, []);

  if(Loading){
    return (
      <div className="flex items-center justify-center min-h-screen bg-black transition-opacity duration-1000 ease-in-out">
        <div className="text-center animate-fadeIn">
        <img src={Gym} alt="Loading..." className="w-24 h-24 mx-auto animate-bounce bg-transparent" />
        <p className="text-white mt-4 font-semibold tracking-wide">
          Getting Gains Ready...
        </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="justify-between items-center gap-4">
        {/* Image Slider */}
        <SlickSlider images={images} />

        {/* Info Section */}
        <div className="flex flex-col md:flex-row bg-gray-50 p-6 rounded-lg shadow-md mt-10 max-w-5xl mx-auto">
          {/* Image */}
          <div className="md:w-1/2 w-full flex justify-center items-center mb-4 md:mb-0">
            <img
              src={H5}
              className="w-full max-w-md h-[280px] object-cover rounded"
            />
          </div>
          
          {/* Text */}
          <div className="md:w-1/2 w-full md:pl-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Exercise can be fun … and social!
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              <span>
                Exercise and physical activity can be enjoyable. They give you a chance to unwind, enjoy the outdoors, or simply engage in activities that make you happy. So, take a dance class, hit the hiking trails or join a soccer team. Find a physical activity you enjoy, and just do it. Bored? Try something new, or do something with friends or family.
              </span>
              <br />
              <span>
                Regular physical activity can help you fall asleep faster, get better sleep and deepen your sleep. Just don’t exercise too close to bedtime, or you may be too energized to go to sleep.
              </span>
            </p>
          </div>
        </div>
        <br />
        <br />

          {/* Images Animated Grid */}
            <div
              data-aos="zoom-in"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6"
            >
              {[
                { src: Weight },
                { src: Rope},
                { src: Push},
                { src: Training},
                { src: Treadmill},
                { src: Lifting},
              ].map(({ src}, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={src}
                    className="max-w-md w-50 h-40 object-cover rounded shadow-lg"
                  />
                </div>
              ))}
            </div>

        {/* Article Section */}
        <div className="px-6 py-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold underline underline-offset-4 mb-4">
            The Benefits of Joining a Gym vs. Working Out at Home
          </h2>
          <hr className="mb-4" />
          <p className="text-justify text-base leading-relaxed mb-6">
            Making the decision to start exercising is easy. It gets more complicated when you actually have to do it, the first question being: Where are you going to exercise? It's easy to join a gym, of course, but you have to pay for that.
          </p>
          <p className="text-justify text-base leading-relaxed mb-6">
            It's also easy to set up a home gym, but it comes with a lot of distractions. Whichever you decide, to be successful, you have to actually follow through—and part of that is working out in the environment that fits your needs and budget the most. You shouldn't push yourself to work out every day without a break because your body needs rest and recovery days to repair muscle fibres and strengthen itself between workouts.
          </p>
          <hr className="mb-6" />
        </div>

        {/* Info Section */}
        <div className="flex flex-col md:flex-row bg-gray-50 p-6 rounded-lg shadow-md mt-10 max-w-7xl mx-auto">
          {/* Image */}
          <div className="md:w-1/2 w-full flex justify-center items-center mb-4 md:mb-0">
            <img
              src={H3}
              alt="Vision and Mission"
              className="w-full max-w-md h-[280px] object-cover rounded"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 w-full md:pl-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Our Legacy
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              <span>
                Armstrong Gym is a globally renowned fitness brand that has made its mark in India. With a strong legacy dating back to 1965 in Venice Beach, California, Armstrong Gym has become synonymous with fitness excellence and innovation. Armstrong Gym India carries the legacy ahead in the home country since its inception in 2002. World-class fitness facilities and a comprehensive range of workout programs tailored to meet the needs of diverse fitness enthusiasts is what sets us apart from others.
              </span>
              <br />
              <span>
                Armstrong Gym India, a part of this esteemed legacy, has expanded its presence across various cities, aiming to empower individuals to achieve their fitness goals, regardless of their fitness levels or aspirations. It's a fitness haven that combines state-of-the-art equipment, expert trainers, and a supportive community to foster a holistic approach to wellness.
              </span>
            </p>
          </div>
        </div>

        {/* Bottom image before the footer */}
        <div className="relative text-white mt-10">
          {/* Background image */}
          <div
            className="absolute h-full w-full inset-0 bg-cover bg-bottom opacity-50 z-0"
            style={{ backgroundImage: `url(${H4})` }}
          ></div>

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

          {/* Content */}
          <div className="relative container mx-auto px-4 py-12 z-10">
            {/* Title Section */}
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-yellow-400 mb-3">
                Armstrong Gym Fitness Institute - (AGFI)
              </h1>
              <h3 className="text-2xl font-bold text-white mb-2">
                Become a Certified Fitness Professional Today
              </h3>
              <h4 className="text-lg font-medium text-white">
                Physical Activity Can Improve Your Health
              </h4>
            </div>

            {/* Images Grid */}
            <div
              data-aos="zoom-in"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { src: C3, label: "AGFI Online" },
                { src: C1, label: "Short Courses" },
                { src: C2, label: "ACE" },
                { src: C4, label: "AGFI Offline" },
              ].map(({ src, label }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={src}
                    alt={label}
                    className="w-full  object-cover rounded shadow-lg"
                  />
                  <p className="mt-3 text-lg font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default Home;
