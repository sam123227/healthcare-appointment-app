import { Link } from "react-router-dom";
import stethoscope from "../assets/stethoscope.png";

function Home() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-8 min-h-[70vh] flex items-center justify-between">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold text-blue-600 mb-6">
            Healthcare Appointment System
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300">
            Health is the Greatest Wealth
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Book appointments with experienced doctors quickly and easily.
          </p>

          <Link to="/doctors">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition text-lg font-semibold">
              Book Appointment
            </button>
          </Link>
        </div>

        <div className="w-1/2 flex justify-end">
          <img
            src={stethoscope}
            alt="Stethoscope"
            className="w-80"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 pb-16">
        <h2 className="text-3xl font-bold text-center mb-8 mt-20">
          Our Services
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:shadow-xl hover:scale-105 transition">
           <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              🩺 General Checkup
            </h3>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:shadow-xl hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              ❤️ Cardiology
            </h3>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:shadow-xl hover:scale-105 transition">
           <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              🦷 Dentistry
            </h3>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:shadow-xl hover:scale-105 transition">
             <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              👁️ Ophthalmology
            </h3>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:shadow-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              🧠 Neurology
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;