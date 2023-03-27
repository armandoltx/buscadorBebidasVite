import React, { useContext } from 'react'
import categoriasContext from '../context/CategoriasProvider'

const useCategorias = () => {
  const context = useContext(categoriasContext)

  if(!context) {
    throw new Error('useCategorias must be used within a CategoriasProvider')
  }

  return context
}

export default useCategorias