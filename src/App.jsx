import {useEffect, useState } from "react";
import {BrowserRouter, Routes, Route}from "react-router-dom";
import Footer from "./pages/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import BookAppointment from "./pages/BookAppointment";
import Appointments from "./pages/Appointments";
import './App.css'

function App() {
  const [appointments, setAppointments] = useState(() => {
  const savedAppointments = localStorage.getItem("appointments");

  return savedAppointments ? JSON.parse(savedAppointments) : [];
});
useEffect(() => {
  localStorage.setItem(
    "appointments",
    JSON.stringify(appointments)
  );
}, [appointments]);
  return(
    <BrowserRouter>
    <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">
      <Routes>
        <Route path ="/" element={<Home />}></Route>
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/book" element={<BookAppointment appointments={appointments} setAppointments={setAppointments} />} />
        <Route path="/appointments" element={<Appointments appointments={appointments} setAppointments={setAppointments} />} />
      </Routes>
      </main>
      <Footer />
    </div>
    </BrowserRouter>
    
  );
}

export default App;