import { useNavigate } from "react-router-dom";

function Doctor() {
  const doctors = [
    { id: 1, name: "Dr. Baskota", speciality: "Cardiologist", fee: 3500 },
    { id: 2, name: "Dr. Shrestha", speciality: "Neurosurgeon", fee: 4500 },
    { id: 3, name: "Dr. Sharma", speciality: "General Physician", fee: 1200 },
    { id: 4, name: "Dr. Bhattarai", speciality: "Dentist", fee: 1800 },
    { id: 5, name: "Dr. Joshi", speciality: "Ophthalmologist", fee: 2000 },
  ];
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Our Doctors
      </h1>

      <div className="grid grid-cols-2 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold">
              {doctor.name}
            </h2>

            <p className="text-gray-600 mt-2">
              {doctor.speciality}
            </p>

            <p className="font-semibold mt-3">
              Consultation Fee: Rs. {doctor.fee}
            </p>

            <button onClick={() =>navigate("/book", {
            state: {
                doctor: doctor.name,
            },
        })
    }
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Book Appointment
          </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctor;