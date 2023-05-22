import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="ProjectOne/" element={<Home/>}/>
                <Route path="ProjectOne/about" element={<About/>}/>
                <Route path="ProjectOne/service" element={<Service/>}/>
                <Route path="ProjectOne/contact" element={<Contact/>}/>
            </Routes>
        </div>
    );
}

export default App;
