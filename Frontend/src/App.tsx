import View from "./components/view/View";
import "./App.css"
import Navbar from "./components/navbar/Navbar";

const App = () => {


  return (
    <div className="three-view">
      <Navbar />
      <View />
    </div>
  );
};

export default App;
