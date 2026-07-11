import { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
function BookAppointment({appointments,setAppointments}){
    const location = useLocation();
    const navigate =useNavigate();
    const[name,setName]= useState("");
    const [doctor, setDoctor] = useState(
    location.state?.doctor || ""
);
    const[date,setDate]=useState("");
    const[time,setTime]=useState("");
    const today =new Date().toISOString().slice(0,10);

function bookAppointment(){

    if(!name || !doctor || !date || !time){
        alert("Please fill all details");
        return;
    }

    if (!/^[A-Za-z\s]+$/.test(name)) {
        alert("Name should contain only letters and spaces.");
        return;
    }
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;

if (!datePattern.test(date)) {
    alert("Please enter a valid date.");
    return;
}

if (date < today) {
    alert("Please select today or a future date.");
    return;
}

    const appointment={
        name,
        doctor,
        date,
        time
    };
    setAppointments([
        ...appointments,
        appointment
    ]);

    setName("");
    setDoctor("");
    setDate("");
    setTime("");
 

    navigate("/appointments");
}


    return(
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-8 mt-10">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8 ">Book Appointment</h1>
        <label className="font-semibold">Patient Name</label>
        <input type="text" placeholder="Enter your Name"value={name} onChange={(e)=>setName(e.target.value)} className="w-full border rounded-lg p-3 mt-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-400" />
     
        <label className="font-semibold">Doctor</label>

{location.state?.doctor ? (
  <input
    type="text"
    value={doctor}
    readOnly
    className="w-full border rounded-lg p-3 mt-2 mb-5 bg-gray-100"
  />
) : (
  <select
    value={doctor}
    onChange={(e) => setDoctor(e.target.value)}
    className="w-full border rounded-lg p-3 mt-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <option value="">Choose Doctor</option>
    <option>Dr. Baskota</option>
    <option>Dr. Shrestha</option>
    <option>Dr. Sharma</option>
    <option>Dr. Bhattarai</option>
    <option>Dr. Joshi</option>
  </select>
)}
      
        <label className="font-semibold">Appointment Date</label>
        <input type="date" min={today} value={date} onChange={(e)=>setDate(e.target.value)} className="w-full border rounded-lg p-3 mt-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
     
        <label className="font-semibold">Appointment Time</label>
        <input type="time" value={time} onChange={(e)=>setTime(e.target.value)} className="w-full border rounded-lg p-3 mt-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
       
        
        <button onClick={bookAppointment} className="w-full bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
          Book Appointment
        </button>
      </div>
    );
    
}
export default BookAppointment;