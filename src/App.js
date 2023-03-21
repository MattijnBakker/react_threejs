import './scss/_variables.scss';
import './scss/_basics.scss';
import './scss/_buttons.scss';
import Topbar from "./topbar";
import Header from "./component/header";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Topbar/>
                <Header/>
            </div>
        </BrowserRouter>
    );
}

export default App;
