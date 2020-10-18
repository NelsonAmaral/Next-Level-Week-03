import React from 'react';
import { useHistory } from "react-router-dom";

import '../styles/pages/orphanage-complete-registration.css';
export default function OrphanageCompleteRegistration() {
    const history = useHistory();
    async function handleSubmit() {
      
        history.push('/app');
      }
    
    return (
        <form onSubmit={handleSubmit} id="container-main">
            <div className="content-wrapper">

                <main>

                    <h1>Ebaaa!</h1>
                    <p>O cadastro deu certo e foi enviado
                    ao administrador para ser aprovado.
                    Agora é só esperar :)</p>
                    <button type="submit">Voltar para o Map</button>
                </main>

            </div>
        </form>
    );

}