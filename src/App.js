import Dashboard from "./Pages/Dashboard/index";
import Appbar from "./Components/DashboardLayout/Appbar/index";
import "./global.css";
function App() {
  return (
    <div
      style={{
        backgroundImage: `url("https://wallpapercave.com/wp/wp3183635.jpg")`,
      }}
    >
      <Appbar />

      <Dashboard />
    </div>
  );
}

export default App;
