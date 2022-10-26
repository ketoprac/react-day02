import RegionReduxSaga from "./components/RegionReduxSaga/RegionViewReduxSaga";
import RegionView from "./components/Region/RegionView";
import RegionFormik from "./components/RegionFormik/RegionViewFormik";

function App() {
  return (
    <div className="justify-center">
      {/* <RegionView /> */}
      {/* <CountryView /> */}
      <RegionFormik />
      {/* <RegionReduxSaga /> */}
    </div>
  );
}

export default App;
