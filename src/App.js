import React from 'react';
import FormularioLogin from './components/FormularioLogin';
import './App.css'; //Importar estilos simples

export default function App() {
  return(
    <div className="Page">
      <header className='Page-Header'>
        <h1>FIN TRUST - INICIAR SESIÓN</h1>
      </header>

      <main className='Page-Main'>
        <FormularioLogin />
      </main>

    </div>
  );
}