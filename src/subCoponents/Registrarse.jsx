import React from 'react'
import NavBar from '../components/NavBar'
import "../scss/styles/registro.scss"
import ContainerObjets from './ContainerObjets'
const Registrarse = () => {
  return (
    <main className='main-registrarse'>
        <NavBar/>
        <div className='container-registro'>
            <h2>
                Registrate
            </h2>
            <div className='container-imputs'>
                 <label htmlFor="">Nombre completo
                 <input placeholder='Ej:Agustin Gomez' type="text" />
                 </label>
                 
                 <label htmlFor="">Email
                 <input placeholder='Ej:pepito@gamil.com' type="email" />
                 </label>

                 <label htmlFor="">Crear contaseña
                    <input placeholder='Ingrese una contraseña' type="password" />
                    <input placeholder='Confirma contaseña' type="password" />
                 </label>
                <button>Enviar</button>
            </div>
        </div>
    </main>
  )
}

export default Registrarse