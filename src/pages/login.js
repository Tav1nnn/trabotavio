import React, { useState } from 'react';
import { z } from "zod";
import './login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const LoginSchema = z.object({
    email: z.string().email({message: 'Email invalido'}),
    password: z.string().min(8, {message: 'Senha com pelo menos 8 caracteres'})
});

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        try {
            LoginSchema.parse({ email, password });
            navigate('/information-api');
        } catch (err) {
            err.errors.forEach(error => {
                toast.error(error.message);
            });
        }

    }

    return (
        <div className='container'>
            <h1>Login</h1>
            <form onSubmit={submitForm}>
                <input type="text" placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Digite sua senha' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className='btnEnviar'>Enviar</button>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Login;