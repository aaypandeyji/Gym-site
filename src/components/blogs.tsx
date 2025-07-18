import B1 from "../assets/b1.jpg";
import a2 from "../assets/a2.jpg";
import a3 from "../assets/a3.jpg";

const Blogs = () => {
  return (
    <>
      <div className="px-6 py-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Blogs</h1>
        <hr className="mb-6" />

        {/* Info Section 1*/}
        <div className="flex flex-col md:flex-row bg-gray-50 p-6 rounded-lg shadow-md mt-10 max-w-5xl mx-auto">
          {/* Image */}
          <div className="md:w-1/2 w-full flex justify-center items-center mb-4 md:mb-0">
            <img
              src={B1}
              alt="Vision and Mission"
              className="w-full max-w-md h-[280px] object-cover rounded"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 w-full md:pl-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Benefits Of Going to The Gym and Doing Physical Activity
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              <span>
                Exercise helps in maintaining good health. It boosts both physical and mental fitness by improving your mood and keeping chemical/hormonal balance in the body. Here, we discuss the ways how exercise can improve life. Regular exercise can improve cardiovascular health, manage weight, and reduce the risk of chronic diseases. It also boosts mood, reduces stress and anxiety, and enhances sleep quality. Furthermore, gyms can provide a sense of community and motivation for those seeking to improve their fitness.
              </span>
            </p>
          </div>
        </div>


        {/* Info Section 2*/}
        <div className="flex flex-col md:flex-row bg-gray-50 p-6 rounded-lg shadow-md mt-10 max-w-5xl mx-auto">
          {/* Image */}
          <div className="md:w-1/2 w-full flex justify-center items-center mb-4 md:mb-0">
            <img
              src={a2}
              alt="Vision and Mission"
              className="w-full max-w-md h-[280px] object-cover rounded"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 w-full md:pl-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Work Well, Live Well: Mastering Ergonomic Harmony in Your Office
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              <span>
                Regular exercise can improve cardiovascular health, manage weight, and reduce the risk of chronic diseases. It also boosts mood, reduces stress and anxiety, and enhances sleep quality. Furthermore, gyms can provide a sense of community and motivation for those seeking to improve their fitness.
              </span>
            </p>
          </div>
        </div>

        <hr className="mb-4" />

        {/* Info Section 3*/}
        <div className="flex flex-col md:flex-row bg-gray-50 p-6 rounded-lg shadow-md mt-10 max-w-5xl mx-auto">
          {/* Image */}
          <div className="md:w-1/2 w-full flex justify-center items-center mb-4 md:mb-0">
            <img
              src={a3}
              alt="Vision and Mission"
              className="w-full max-w-md h-[280px] object-cover rounded"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 w-full md:pl-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Weight Management
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              <span>
                Exercise Can Help To Maintain Healthy Weight As It Prevents Excess Weight Gain Or Help Maintain Weight Loss. By Engaging In Physical Activity, People Can Burn Calories. The Intensity Of The Activity Assists More Calories To Burn.
              </span>
            </p>
          </div>
        </div>
        <br />
        <br />
        <hr className="mb-4" />

        <h2 className="text-2xl font-semibold leading-relaxed underline underline-offset-4 mb-4">
          Work Well, Live Well: Mastering Ergonomic Harmony in Your Office
        </h2>

        <hr className="mb-4" />

        <p className="text-justify text-base leading-relaxed mb-6">
          In the fast-paced world of today, where office hours seem to stretch endlessly and the demands of productivity are ever-increasing, the importance of a comfortable and ergonomically designed workspace cannot be overstated. Many employees find themselves spending prolonged periods at their desks, often experiencing discomfort, pain, and stress as a result.
        </p>

        <hr className="mb-6" />

        <div className="flex bg-green-200 p-6 rounded-lg shadow-md mt-10 max-w-5xl">
          <div className="w-full ">
            <h4 className="text-2xl text-center font-bold">Our Culture</h4>
            <br />
            <p className="text-base leading-relaxed">
              We believe in people do their best work when they feel like they're a part of a company with strong values. We believe each employee comes with a diverse experience and it is this diverse experience which sets up apart. Freedom of thought and believe is our core motto.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
