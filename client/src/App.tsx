import Header from "./common/components/Header";
import Routing from "./setup/routes-manager";
import Footer from "common/components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
