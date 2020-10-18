import React from 'react';
import '../styles/pages/login.css';
import Logo from '../images/logotipo.svg';

export default function Login() {
    return (
        <div id="container-main">
            <div id="container-logo">
                <img src={Logo} alt="Happy" />
                <div className="location">
                    <strong>Suzano</strong>
                    <span>São Paulo</span>
                </div>
            </div>
            <div id="form-login">
                <div className="input-block">
                    <label htmlFor="email">E-mail: </label>
                    <input
                        id="email"

                    />
                    <div className="input-block">
                        <label htmlFor="senha">Senha: </label>
                        <input
                            id="senha"
                            type="password"
                        />
                    </div>
                </div>
                <button className="btnLogin" type="submit">Enter</button>
            </div>
        </div>
    );
}