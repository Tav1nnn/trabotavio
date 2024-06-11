import React, { useState } from 'react';
import { z } from "zod";
import './login.css';

const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
});

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = (e) => {
        e.preventDefault();

        try {
            LoginSchema.parse({ email, password });
            alert('Login successful!');
        } catch (err) {
            const errorMessages = err.errors.map(error => error.message);
            alert(errorMessages);
        }

    }

    return (
        <div className='container'>
            <h1>Login</h1>
            <form onSubmit={submitForm}>
                <input type="text" placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Digite sua senha' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Login;