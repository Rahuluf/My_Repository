import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Tickets from "../pages/Tickets";
import PrivateRoute from "./PrivateRoute";
import TicketCreate from "../pages/TicketCreate";
import TicketEdit from "../pages/TicketEdit";
import TicketView from "../pages/TicketView";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/about"
        element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        }
      />
      <Route
        path="/tickets"
        element={
          <PrivateRoute>
            <Tickets />
          </PrivateRoute>
        }
      />
      <Route
        path="/ticket/create"
        element={
          <PrivateRoute>
            <TicketCreate />
          </PrivateRoute>
        }
      />
      <Route
        path="/ticket/view/:id"
        element={
          <PrivateRoute>
            <TicketView />
          </PrivateRoute>
        }
      />
      <Route
        path="/ticket/edit/:id"
        element={
          <PrivateRoute>
            <TicketEdit />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}