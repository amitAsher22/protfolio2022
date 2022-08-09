import "./App.css";
///// components
import RightSide from "./components/RightSide";
import Middle from "./components/Middle";
import LeftSide from "./components/LeftSide";

function App() {
  return (
    <div className="mainApp">
      <RightSide />
      <Middle />
      <LeftSide />
    </div>
  );
}

export default App;
