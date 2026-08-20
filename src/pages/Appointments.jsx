function Appointments({ appointments, setAppointments }) {

  function deleteAppointment(index) {
    if (confirm("Are you sure you want to delete this appointment?")) {
      const updatedAppointments = appointments.filter((appointment, i) => i !== index);
      setAppointments(updatedAppointments);
    }
  }

  if (appointments.length === 0) {
    return (
      <div className="max-w-4xl mx-auto mt-10 text-center">
        <h2 className="text-3xl font-bold text-blue-600">
          My Appointments
        </h2>

        <p className="mt-4 text-lg">
          Total Appointments: {appointments.length}
        </p>

        <p className="mt-6 text-gray-500 text-xl">
          No appointments yet.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h2 className="text-4xl font-bold text-center text-blue-600 mb-4">
        My Appointments
      </h2>

      <p className="text-center text-lg mb-8">
        Total Appointments: {appointments.length}
      </p>

      <div className="grid gap-6">

        {appointments.map((appointment, index) => (

          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6"
          >

            <h3 className="text-2xl text-gray-800 dark:text-gray-300 font-bold">
              Patient Name : {appointment.name}
            </h3>

            <p className="text-gray-800 dark:text-gray-300 mt-2">
              <strong>Doctor Name :</strong> {appointment.doctor}
            </p>

            <p className="text-gray-800 dark:text-gray-300">
              <strong>Date :</strong> {appointment.date}
            </p>

            <p className="text-gray-800 dark:text-gray-300"><strong>
              Time :</strong>{" "}
              {new Date(`2000-01-01T${appointment.time}`).toLocaleTimeString([], {
               hour: "numeric",
               minute: "2-digit",
               hour12: true,
              })}
            </p>

            <button
              onClick={() => deleteAppointment(index)}
              className="mt-5 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Appointments;