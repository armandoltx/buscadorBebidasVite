import React, { useContext } from 'react'
import CategoriasContext from '../context/CategoriasProvider'

const useCategorias = () => {
  const context = useContext(CategoriasContext)

  if(!context) {
    throw new Error('useCategorias must be used within a CategoriasProvider')
  }

  return context
}

export default useCategorias