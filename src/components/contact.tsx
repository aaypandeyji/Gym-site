import React from "react";

export function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "65dcc2c8-becc-4225-81dc-2c035cb0bf6c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(`❌ ${data.message}`);
    }
  };

  return (
    <>
    <hr  />
      <div className="md:flex justify-center items-center min-h-screen bg-gray-100 px-4">
        <div className="w-full max-w-2xl bg-white p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center text-violet-800">
            Contact Us
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
                Message
              </label>
              <textarea
                name="message"
                required
                placeholder="Type your message*"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600 resize-none"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-violet-800 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
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
        <div className="flex bg-blue-300 p-6 rounded-lg shadow-md mt-10 ">
          <div className="w-full ">
            <h4 className="text-2xl text-white text-center font-bold">GET IN TOUCH</h4>
            <br />
            <p className="text-base text-center leading-relaxed">
              WE ARE ALWAYS READY TO HEAR FROM YOU OUR TEAM IS ALWAYS READY TO HEAR FROM YOU. WE MAKE IT A POINT TO RESPOND WITHIN 24 HOURS ON WEEKDAYS AND 48 HOURS ON WEEKEND
            </p>
          </div>
        </div>
        <hr className="mb-4" />
    </>
  );
}

export default Contact;
