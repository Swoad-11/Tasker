import Footer from "./components/Footer";
import Hero from "./components/Hero";
import TaskTable from "./components/TaskTable/TaskTable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="bg-[#191D26] font-[Inter] text-white">
        <Hero />
        <TaskTable />
        <ToastContainer />
        <Footer />
      </div>
    </>
  );
}

export default App;
