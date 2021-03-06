import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import PriavateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/DashBorad/Dashboard/Dashbord";
import DashboardHome from "./Pages/DashBorad/DashboardHome/DashboardHome";
import MakeAdmin from "./Pages/DashBorad/MakeAdmin/MakeAdmin";
import AddDoctor from "./Pages/DashBorad/AddDoctor/AddDoctor";
import AdminRoute from "./Pages/DashBorad/AdminRoute/AdminRoute";
import Payment from "./Pages/DashBorad/Pay/Payment";
import Doctors from "./Pages/Home/Doctors/Doctors";
import Navigation from "./Pages/Shared/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<PriavateRoute />}>
              <Route path="appointment" element={<Appointment />} />
              <Route path="dashboard/*" element={<Dashboard />}>
                <Route path="home" element={<DashboardHome />} />
                <Route path="payment/:id" element={<Payment />} />
                <Route element={<AdminRoute />}>
                  <Route path="makeAdmin" element={<MakeAdmin />} />
                  <Route path="addDoctor" element={<AddDoctor />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
