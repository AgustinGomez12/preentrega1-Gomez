import { useState } from "react"
import { ItemListContainer } from "./components/ItemListContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Err404 from "./subCoponents/Err404"
import Registrarse from "./subCoponents/Registrarse"
import IniciarSesion from "./subCoponents/IniciarSesion"
import QuienesSomos from "./subCoponents/QuienesSomos"
import NavBar from "./components/NavBar"

function App() {
  const [cuenta,aumentarCuenta] = useState(0)
  return (
    <BrowserRouter>
    <NavBar cuenta={cuenta}>
    <Routes>
      <Route path="/" element={<ItemListContainer greeting = "INICIO" aumentarCuenta={aumentarCuenta} cuenta={cuenta}/>}/>
      <Route path="*" element={<Err404/>}/>
      <Route path="/category/:Remeras" element={<ItemListContainer greeting = "REMERAS" aumentarCuenta={aumentarCuenta} cuenta={cuenta}/>}/>
      <Route path="/category/:categoryid" element={<ItemListContainer greeting = "PANTALONES" aumentarCuenta={aumentarCuenta} cuenta={cuenta}/>}/>
      <Route path="/category/:categoryid" element={<ItemListContainer greeting = "SHORTS" aumentarCuenta={aumentarCuenta} cuenta={cuenta}/>}/>
      <Route path="/Registrarse" element={<Registrarse/>}/>
      <Route path="/Iniciar sesiòn" element={<IniciarSesion/>}/>
      <Route path="/Quienes Somos" element={<QuienesSomos/>}/>  
    </Routes> 
    </NavBar>   
    </BrowserRouter>
  )
}

export default App


//<NavBar cuenta={cuenta}/>
    //<ItemListContainer greeting = "INICIO" aumentarCuenta={aumentarCuenta}/>