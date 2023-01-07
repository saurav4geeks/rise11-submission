import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import Booking from "./components/Booking/Booking";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="body-wrapper">
      <Navbar />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
