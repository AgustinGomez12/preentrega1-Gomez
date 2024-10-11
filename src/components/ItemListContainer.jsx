import "../scss/styles/itemlistcontainer.scss";
import "../scss/styles/base.scss";
import ContainerFlechas from "./ContainerFlechas";
import Titles from "./Titles";
import CarruselAuto from "./CarruselAuto";
import {useEffect, useState } from "react";
import productosData from "../assets/MOCK_DATA (1).json"; 
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"



export const ItemListContainer = ({ greeting, aumentarCuenta,children }) => {
  //Estado para mover el carrusel
  const [position, moverPotitionD] = useState({ left: 0 });
  //Estado para mover el carrusel

  //Promesa falsa

  
  //Promesa falsa

  
  //Estado para productos
  const [productos,mostrarProductos] = useState([])
  //Estado para productos
  const {categoryId} = useParams()
  //Effecto usado para filtrar los productos
  useEffect(()=>{
      let productosFiltrados = []
      if(categoryId){
       productosFiltrados = productosData.filter(f => f.category === categoryId)
    }else{
      productosFiltrados = productosData
    }
    mostrarProductos(productosFiltrados)
  }, [categoryId])
  //Effecto usado para filtrar los productos
 
  return (
    <main>   
      <div className="container-listItem">
        <h2>{greeting}</h2>
        <h2>{children}</h2> 
        <CarruselAuto></CarruselAuto>
        <div/>
        <Titles>
          <h2>Recomendaciones</h2>
        </Titles>
        <div className="items-varios">
          <ContainerFlechas
            position={position}
            moverPotitionD={moverPotitionD}
          />
          <ItemList
            position={position}
            className="container-items"
            productosData={productos}
            aumentarCuenta= {aumentarCuenta}
          >
          </ItemList>
        </div>
      </div>
    </main>
  );
};
