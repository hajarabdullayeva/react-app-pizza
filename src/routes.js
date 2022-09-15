import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

export const routes = [
    {
        name: "Home",
        components: <Home/>,
        path: "/"
    },
    {
        name: "Login",
        components: <Login/>,
        path: "/login"
    }, {
        name: "Register",
        components: <Register/>,
        path: "/register"
    }
]
