import a4 from "../assets/a4.jpg";
import a1 from "../assets/a1.jpg";
import a5 from "../assets/a5.jpg"
import a6 from "../assets/a6.jpg"
import a7 from "../assets/a7.jpg"
import Stopwatch from "../assets/stopwatch.gif"
import Calendar from "../assets/calendar.gif"
import Gym from "../assets/gym-logo.gif"
import Membership from "../assets/membership.gif"

const About = () => {
  return (
    <>
      <img src={a4} alt="About us" className="w-full md:h-52 object-cover" />
      <div className="px-6 py-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center leading-relaxed mb-4">
          About Us
        </h2>

        <hr className="mb-4" />

        <p className="text-justify text-xl leading-relaxed mb-6">
          Armstrong Gym Fitness Institute was started on World Health Day on 7th April 2006. It's been more than a decade of educating people in fitness. Every year 1000+ students pass out of the institute. Armstrong Gym Fitness Institute offers the most exciting and up-to-date curriculum as well as ongoing training in all aspects of the fitness industry.
        </p>

        <span className="text-justify text-xl leading-relaxed mb-6">
          Armstrong Gym Fitness Institute is the only Advanced fast test results and complete career development. Becoming a <b> Armstrong Gym Fitness Institute </b> certified Advanced Personal trainer is your foundation for success. It offers you complete approach to fitness, wellness and business skills. Make an investment in yourself and become a Armstrong Gym Fitness Institute certified <b>Personal Trainer</b>.
        </span>
        <br />
        <br />
        <br />

        {/* Animated Image 1*/}
        <div className="md:w-full flex justify-center items-center mb-4 md:mb-0">
        <img src={Stopwatch} 
          className="w-50 max-w-md h-40 object-cover rounded"
        />
        </div>

        {/* Card 1 */}
        <div className="flex flex-col md:flex-row bg-gray-50 p-6 rounded-lg shadow-md">
          {/* Image Section */}
          <div className="md:w-1/2 w-full flex justify-center items-center mb-4 md:mb-0">
            <img
              src={a1}
              alt="Vision and Mission"
              className="w-full max-w-md h-70 object-cover rounded"
            />
          </div>
          {/* Text Section */}
          <div className="md:w-1/2 w-full md:pl-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 ">
              Vision & Mission
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              <span>
                Armstrong Gym is a nurturing ground for an individual who is passionate about fitness and wants to embark on the journey of spreading authentic fitness. We believe in promoting and spreading fitness across and providing the required guidance for individuals who wish to excel in this field.
              </span>
              <br />
              <br />
              <span>
                Our mission is to build a community of skilled, experienced and
                empathetic trainers who understand that fitness is a continuous
                journey and there always in continuous education.
              </span>
            </p>
          </div>
        </div>

        <br />
        <br />
        {/* Animated Image 2 */}
        <div className="md:w-full flex justify-center items-center mb-4 md:mb-0">
          <img src={Membership} 
          className="w-50 max-w-md h-40 object-cover rounded"
        />
        </div>
        {/* Card 2 */}
        <div className="flex flex-col md:flex-row bg-gray-50 p-6 rounded-lg shadow-md">
          {/* Image Section */}
          <div className="md:w-1/2 w-full flex justify-center items-center mb-4 md:mb-0">
            <img
              src={a5}
              alt="Vision and Mission"
              className="w-full max-w-md h-70 object-cover rounded"
            />
          </div>
          {/* Text Section */}
          <div className="md:w-1/2 w-full md:pl-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 ">
              Corporate Membership
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              <span>
                Don’t have time to go to the gym? We get the gym to you. Gold's Gym India offers corporate membership programs tailored for companies looking to promote employee wellness and fitness. These programs are designed to encourage a healthier workforce by providing BMI screening, diet and nutrition counselling, fitness activities and seminars for building a healthier lifestyle.
              </span>
            </p>
          </div>
        </div>

        <br />
        <br />
        {/* Animated Image 3 */}
        <div className="md:w-full flex justify-center items-center mb-4 md:mb-0">
          <img src={Gym} 
          className="w-50 max-w-md h-40 object-cover rounded"
        />
        </div>
        {/* Card 3 */}
        <div className="flex flex-col md:flex-row bg-gray-50 p-6 rounded-lg shadow-md">
          {/* Image Section */}
          <div className="md:w-1/2 w-full flex justify-center items-center mb-4 md:mb-0">
            <img
              src={a6}
              alt="Vision and Mission"
              className="w-full max-w-md h-70 object-cover rounded"
            />
          </div>
          {/* Text Section */}
          <div className="md:w-1/2 w-full md:pl-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 ">
              Personal Training
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              <span>
                Armstrong Gym India is known for the competent personal trainers and extraordinary personal training offered by them. The individuals seeking for serious goal-oriented fitness, personalized guidance, motivation, and specialized workout plans, Armstrong Gym India personal training program is for them.
              </span>
            </p>
          </div>
        </div>

        <br />
        <br />
        {/* Animated Image 4 */}
        <div className="md:w-full flex justify-center items-center mb-4 md:mb-0">
          <img src={Calendar} 
          className="w-50 max-w-md h-40 object-cover rounded"
        />
        </div>
        {/* Card 4 */}
        <div className="flex flex-col md:flex-row bg-gray-50 p-6 rounded-lg shadow-md">
          {/* Image Section */}
          <div className="md:w-1/2 w-full flex justify-center items-center mb-4 md:mb-0">
            <img
              src={a7}
              alt="Vision and Mission"
              className="w-full max-w-md h-70 object-cover rounded"
            />
          </div>
          {/* Text Section */}
          <div className="md:w-1/2 w-full md:pl-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 ">
              Group Program
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              <span>
                Armstrong Gym India provides a variety of group fitness programs such as dance fitness, yoga, HIIT, and much more tailored to cater to diverse fitness preferences and goals. These group programs offer a supportive environment and a sense of community while engaging participants in fun and effective workouts.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
