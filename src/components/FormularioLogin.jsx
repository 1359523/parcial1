import React,{ useState } from "react";

export default function FormularioLogin({Login}){    
    
    //Habilitar el boton hasta que se hallan llenado la casillas
    const [codigo, setCodigo] = useState(''); //Se le asigna al codigo ''
    const [usuario, setUsuario] = useState(''); //Le asgina al usuario ''
    const [password, setPassword] = useState(''); //Le asigna a la contrasenia ''
    

    const habilitarBoton = usuario.trim() !== '' && password.trim() !== '' && codigo.trim() !== ''; //trim se utiliza para ignorar los espacios

    const handleSubmit = (e) => {
    e.preventDefault();
    if (habilitarBoton && Login) {
      Login({ codigo, usuario, password });
    }
    };
    //Mostrar las casillas de usuario y de password
    return (
        

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Codigo" value ={codigo} onChange={(e) => setCodigo(e.target.value)} />
            <input type="text" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button disabled={!habilitarBoton}>Iniciar Sesión</button>
        </form>
    );


    /*CODIGO MINIMO PARA QUE EL PRIMER TEST PASE

    //Mostrar las casillas de codigo, usuario y contrasenia
    return (
        <div>
            <input type="text" placeholder="Codigo" />
            <input type="text" placeholder="Usuario" />
            <input type="password" placeholder="Contraseña"/>
            <button disabled>Login</button>
        </div>
    ); */
} 