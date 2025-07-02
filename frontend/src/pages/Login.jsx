import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utilities/api";

export default function Login({ setLoggedin, setUser }) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        async function sendData(){
            const response = await loginUser(formData.email, formData.password);
            if (response === "Invalid credentials"){
                alert("Invalid credentials. Please try again.");
                return
            }
            else if (response === "Login successful"){
                setLoggedin(true);
                setUser(formData.email);
                alert("Login successful. Welcome!");
                navigate('/'); 
            }
        }

        sendData()
    }

    return (
        <div className="login-page">
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                />
                <button type="submit">Log-in</button>

            </form>
        </div>
    );
}