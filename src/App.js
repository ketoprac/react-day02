import RegionReduxSaga from "./components/RegionReduxSaga/RegionViewReduxSaga";
import RegionView from "./components/Region/RegionView";
import RegionFormik from "./components/RegionFormik/RegionViewFormik";
import CountryView from "./components/Country/CountryView";
import CountryViewFormik from "./components/CountryFormik/CountryViewFormik";
import CountryViewReduxSaga from "./components/CountryReduxSaga/CountryViewReduxSaga";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <div className="justify-center">
      {/* <CountryView /> */}
      {/* <CountryViewFormik /> */}
      <CountryViewReduxSaga />
      {/* <RegionView /> */}
      {/* <RegionFormik /> */}
      {/* <RegionReduxSaga /> */}
    </div>
    </>
  );
}

export default App;
