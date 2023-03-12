import "./App.css";
//NOTE: Components
import AddTaskForm from "./Components/AddTaskForm";

import { Routes, Route } from "react-router";

//NOTE: pages
import HomePage from "./Pages/HomePage";
import Header from "./Components/Header";
import PendingPage from "./Pages/PendingPage";
import DonePage from "./Pages/DonePage";
import DeletePage from "./Pages/DeletePage";

function App() {
  return (
    <div className="d-flex flex-column">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pending" element={<PendingPage />} />
        <Route path="/done" element={<DonePage />} />
        <Route path="/delete" element={<DeletePage />} />
      </Routes>
    </div>
  );
}

export default App;
