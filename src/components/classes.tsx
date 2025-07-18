import React from "react";
import DropdownButton from "./DropdownButton";
import z3 from "../assets/z3.jpg";
import z2 from "../assets/z2.jpg";
import z1 from "../assets/z1.jpg";
import z6 from "../assets/z6.jpg";
import z5 from "../assets/z5.jpg";

const Classes: React.FC = () => {
  const [result, setResult] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState("Please choose an option");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "65dcc2c8-becc-4225-81dc-2c035cb0bf6c");

    // Add selected option to formData
    formData.append("courseType", selectedOption);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult(`❌ ${data.message}`);
    }
  };

  // Dropdown Button
  const handleSelect = (value: string) => {
    setSelectedOption(value);
  };

  const options = [
    { label: "Offline Courses", value: "offline courses" },
    { label: "Online Courses", value: "online courses" },
    { label: "Short Courses", value: "short courses" },
    { label: "Zumba Class", value: "zumba class" },
    { label: "Yoga Class", value: "Yoga class" },

  ];

  return (
    <>
      {/* Info Section 1*/}
      <div className="flex flex-col md:flex-row bg-gray-50 p-6 rounded-lg shadow-md mt-10 max-w-5xl mx-auto">
        {/* Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center mb-4 md:mb-0">
          <img
            src={z3}
            className="w-full max-w-md h-[600px] object-cover rounded"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 w-full md:pl-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">ZUMBA</h1>
          <h4 className="text-lg font-semibold">Perfect For</h4>
          <p className="text-lg leading-relaxed text-gray-700">
            <span>
              Everybody and every body! Each Zumba® class is designed to bring
              people together to sweat it on. Those who are looking to feel the
              burn, baby! Looking to strengthen and tone your legs and glutes?
              Step right up.
            </span>
            <br />
            <br />
            <span className="text-lg font-semibold">How It Works</span>
            <span>
              We take the "work" out of workout, by mixing low-intensity and
              high-intensity moves for an interval-style, calorie-burning dance
              fitness party. Once the Latin and World rhythms take over, you'll
              see why Zumba® Fitness classes are often called exercise in
              disguise. Super effective? Check. Super fun? Check and check. We
              combine the awesome toning and strengthening power of Step
              aerobics, with the fun fitness-party that only Zumba® brings to
              the dance-floor.
            </span>
          </p>
        </div>
      </div>
      {/* Info Section 2*/}
      <div className="flex flex-col md:flex-row bg-gray-50 p-6 rounded-lg shadow-md mt-10 max-w-5xl mx-auto">
        {/* Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center mb-4 md:mb-0">
          <img
            src={z2}
            className="w-full max-w-md h-[280px] object-cover rounded"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 w-full md:pl-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">ZUMBA</h1>
          <h4 className="text-lg font-semibold">Benefits</h4>
          <span>
            A total workout, combining all elements of fitness – cardio, muscle
            conditioning, balance and flexibility, boosted energy and a serious
            dose of awesome each time you leave class. Zumba® Step increase
            cardio and calorie burning, while adding moves that define and
            sculpt your core and legs. Lightweight maraca-like Toning Sticks
            enhances sense of rhythm and coordination, while toning target
            zones, including arms, core and lower body.
          </span>
        </div>
      </div>
      {/* Info Section 3*/}
      <div className="flex flex-col md:flex-row bg-gray-50 p-6 rounded-lg shadow-md mt-10 max-w-5xl mx-auto">
        {/* Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center mb-4 md:mb-0">
          <img
            src={z1}
            className="w-full max-w-md h-[280px] object-cover rounded"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 w-full md:pl-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Aqua Zumba</h1>
          <h4 className="text-lg font-semibold">
            Aqua Zumba® blends the Zumba® philosophy with water resistance, for
            one pool party you shouldn’t miss!
          </h4>
          <br />
          <span>
            Those looking to make a splash by adding a low-impact, high-energy
            aquatic exercise to their fitness routine. There is less impact on
            your joints during an Aqua Zumba® class so you can really let loose.
            Water creates natural resistance, which means every step is more
            challenging and helps tone your muscles.
          </span>
        </div>
      </div>
      {/* Info Section 4*/}
      <div className="flex flex-col md:flex-row bg-gray-50 p-6 rounded-lg shadow-md mt-10 max-w-5xl mx-auto">
        {/* Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center mb-4 md:mb-0">
          <img
            src={z6}
            className="w-full max-w-md h-[280px] object-cover rounded"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 w-full md:pl-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">YOGA Class</h1>
          <h4 className="text-lg font-semibold">
            Rewind your soul's energy with Yoga
          </h4>
          <br />
          <span>
            Rediscover Your True Self with Armstrong Yoga Hospitality It's time
            to take a break and refocus on reviving your inner soul, whether
            you're feeling overwhelmed by life's speed or simply want to
            reconnect with your inner self. Every element of your stay — from
            sunrise yoga and guided meditations to Ayurvedic meals and spa
            therapies — is designed to restore balance and cultivate inner
            peace.
          </span>
        </div>
      </div>
      {/* Info Section 5*/}
      <div className="flex flex-col md:flex-row bg-gray-50 p-6 rounded-lg shadow-md mt-10 max-w-5xl mx-auto">
        {/* Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center mb-4 md:mb-0">
          <img
            src={z5}
            className="w-full max-w-md h-[600px] object-cover rounded"
          />
        </div>
        {/* Text */}
        <main className="flex-1 bg-gray-50 p-6 border-2 border-yellow-400  shadow-lg">
          <h2 className="text-3xl font-bold text-center text-black mb-4 border-b-2 border-gray-300 pb-2">
            What are the health benefits of yoga?
          </h2>
          <h4 className="text-lg font-semibold">
            Research suggests that yoga may:
          </h4>
          <p className="text-lg leading-relaxed text-gray-700 space-y-4">
            <span>
              1. Help improve general wellness by relieving stress, supporting
              good health habits, and improving mental/emotional health, sleep,
              and balance.
            </span>
            <br />
            <span>
              2. Relieve neck pain, migraine or tension-type headaches, and pain
              associated with knee osteoarthritis. It may also have a small
              benefit for low-back pain.
            </span>
            <br />
            <span>3. Help people with overweight or obesity lose weight.</span>
            <span>4. Help people quit smoking.</span>
            <br />
            <span>5. Help people manage anxiety symptoms or depression.</span>
            <br />
            <span>
              6. Relieve menopause symptoms.Relieve menopause symptoms.
            </span>
            <br />
            <span>
              7. Be a helpful addition to treatment programs for substance use
              disorders.
            </span>
            <br />
            <span>
              8. Help people with chronic diseases manage their symptoms and
              improve their quality of life.
            </span>
          </p>
        </main>
      </div>

      <br />
      <br />

      <div className="md:flex justify-center items-center min-h-screen  px-4">
        <div className="w-full max-w-2xl bg-white p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-700">
            Schedule a Call With Our Expert or Book a Demo Class
          </h2>
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name*"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="text"
                name="number"
                required
                placeholder="Enter your number*"
                pattern="^[0-9]+$"
                inputMode="numeric"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email*"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>
            <div className="block text-lg font-medium text-gray-700 mb-1">
              <h1 className="mb-4">Type of Course</h1>
              <DropdownButton
                options={options}
                onSelect={handleSelect}
                buttonLabel={selectedOption}
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                required
                placeholder="Type your message*"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600 resize-none"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-violet-600 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
          {result && (
            <p className="text-center mt-6 text-lg font-medium text-gray-700">
              {result}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Classes;
