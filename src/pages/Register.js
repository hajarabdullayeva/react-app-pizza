import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    function login() {
        navigate("/");
    }

    return (
        <form>
            <label for="username">Username </label>
            <input required type="text" id="username" />
            <br />
            <label for="password">Password</label>
            <input required type="password" id="password" />
            <br />
            <button onClick={login}>Submit</button>
        </form>
    );
}
export default Register;
