import React from 'react';
import './Login.css'; // Importamos los estilos

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log('Correo:', email);
    console.log('Contraseña:', password);
    alert('Inicio de sesión exitoso');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-image">
          {/* Logo de la empresa */}
          <img src="/logo_DM.png" alt="Logo Empresa" className="logo" />
          <h1>Sistema de Homologación</h1>
          {/* Imagen de equipo médico */}
          <img src="/area_salud.png" alt="Equipo médico" />
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Inicio de sesión</h2>
          <div className="input-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="tuemail@dolphinmedical.com"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="login-options">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Recuérdame</label>
            </div>
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
          <button type="submit" className="login-button">Iniciar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;