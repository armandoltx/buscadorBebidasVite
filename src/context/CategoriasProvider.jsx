import React, { useState, useEffect, createContext } from 'react'

const categoriasContext = createContext()

const CategoriasProvider = ({children}) => {

  return(
    <categoriasContext.Provider
      value={{}}
    >
      {children}
    </categoriasContext.Provider>
  )
}

export {
  CategoriasProvider
}

export default categoriasContext