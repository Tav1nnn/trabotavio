import React, { useState } from 'react';
import { z } from "zod";
import './login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            toast.success('VAMOOOOO');
        } catch (err) {
            err.errors.forEach(error => {
                if(error.message === 'Invalid email'){
                    toast.error('Invalid email');
                }
                else if(error.message === 'String must contain at least 8 character(s)'){
                    toast.error('Password must be at least 8 characters');
                }else {
                    toast.error('Invalid credentials');
                }
            });
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
            <ToastContainer />
        </div>
    );
}

export default Login;