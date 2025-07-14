import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReelServicePage from "./pages/ReelServicePage";
import AuthPage from "./pages/AuthPage";
import AddReelPage from "./pages/AddReelPage";
import CreatorDashboard from "./pages/CreatorDashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service/:id" element={<ReelServicePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/add-reel" element={<AddReelPage />} />
        <Route path="/dashboard" element={<CreatorDashboard />} />
      </Routes>
    </Router>
  );
}
