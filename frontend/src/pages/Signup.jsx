import { useState } from "react";
import { signUpUser } from "../utilities/api";
import { useNavigate } from "react-router-dom";
export default function Signup() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''

    })

    const navigate = useNavigate();

    function handelSubmit(e) {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        else if (formData.password.length < 6) {
            alert("Password must be at least 6 characters long!");
            return;
        }
        else if (formData.email.length < 6) {
            alert("Email must be at least 6 characters long!");
            return;
        }

        async function sendData(){
            const response = await signUpUser(formData.email, formData.password);
            if (response === "User already exists") {
                alert("User already exists. Please log-in.");
            }
            else{
                alert("Sign up successful. Please log-in now.");
                navigate('/login'); 

            }
        }

        sendData();

    }

    return (
        <div className="signup-page">
            <h1>Sign-up</h1>
            <form className="signup-form" onSubmit={handelSubmit}>
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
                    onChange={(e) => setFormData({...formData, password: e.target.value })}
                    required
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input 
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value })}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}