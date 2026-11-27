import react from "react";
import { useNavigate } from "react-router";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 onClick={() => navigate("/")}>Home</h1>
      <h2 onClick={() => navigate("/dashboard")}>Dashboard</h2>
      <h2 onClick={() => navigate("/dashboard/second")}>Route two</h2>
      <h2 onClick={() => navigate("/dashboard/three")}>Route three</h2>
      <h2 onClick={() => navigate("/dashboard/four")}>Route four</h2>
    </div>
  );
};
export default HomePage;
