import Header from "./header/Header";
import Home from "./pages/home/Home";
import Topbar from "./topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Header />
      <Home />
    </div>
  );
}

export default App;
