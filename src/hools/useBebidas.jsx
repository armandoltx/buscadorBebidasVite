import React, { useContext } from 'react'
import BebidasContext from '../context/BebidasProvider'

const useBebidas = () => {
  const context = useContext(BebidasContext)

  if(!context) {
    throw new Error('useCategorias must be used within a CategoriasProvider')
  }

  return context
}

export default useBebidas