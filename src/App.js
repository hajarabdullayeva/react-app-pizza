import Login from "./components/Header";
import "./style/style.scss"
import {Routes, Route} from "react-router-dom";
import {routes} from "./routes"
function App() {
    return (
        <div className="App">
            <Login/>

            {routes.map(route => (
                <Routes>
                    <Route path={route.path} element={route.components}>
                    </Route>
                </Routes>
            ))}

        </div>
    );
}

export default App;
