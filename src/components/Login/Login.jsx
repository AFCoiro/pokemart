import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Login.css'
import { useState } from 'react';

export const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(formData.email, formData.password);
            navigate('/admin', {replace: true});
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Error al iniciar sesión. Por favor, verifica tus datos.');
        }
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Inicia sesión para acceder a la sección de administración</h2>
            <div className="form-group">
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" value={formData.email} required onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" value={formData.password} required onChange={handleChange}/>
            </div>
            <button type="submit">Iniciar sesión</button>
        </form>
    )
}