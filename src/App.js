import CountryView from "./components/Country/CountryView";
import CountryViewFormik from "./components/CountryFormik/CountryViewFormik";
import CountryViewReduxSaga from "./components/CountryReduxSaga/CountryViewReduxSaga";
import Navbar from "./components/Navbar";
import { Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/country" element={<CountryView />} />
      <Route path="/country-formik" element={<CountryViewFormik />} />
      <Route path="/country-redux" element={<CountryViewReduxSaga />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
