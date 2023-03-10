import './scss/_variables.scss';
import './scss/_basics.scss';
import './scss/_buttons.scss';
import Topbar from "./topbar";
import Header from "./component/header";

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Header/>
    </div>
  );
}

export default App;
