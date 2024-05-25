import MainDashboard from "./MainDashboard";
import "../components/css/dashboard.css";
import Footer from "../components/Footer";
import Header from "../components/header";
export default function Home() {
  return (
    <>
      <Header/>
      <MainDashboard />
      <Footer/>
   </>
  );
}
