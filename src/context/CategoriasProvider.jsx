import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const categoriasContext = createContext()

const CategoriasProvider = ({children}) => {
  const [categorias, setCategorias] = useState([])

  const obtenerCategorias = async () => {
    try {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
      const { data } = await axios(url)
      // console.log(data)
      setCategorias(data.drinks)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    obtenerCategorias()
  },[])

  return(
    <categoriasContext.Provider
      value={{
        categorias
      }}
    >
      {children}
    </categoriasContext.Provider>
  )
}

export {
  CategoriasProvider
}

export default categoriasContext