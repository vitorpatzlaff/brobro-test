// Aqui é o state global, a context api. ela recebe a informação pega lá naquele getServerSideProps e compartilha, ela também pega as categorias para que o filtro funcione

import { createContext, useState, useContext, useEffect } from 'react'
import type { NodeProperties } from '../../pages'

const CategoriesContext = createContext<any>({})

export function CategoriesProvider ({ children }: any) {
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>()

  function updateCategories (nodes: {}[]) {
    const nonFilteredCategories: string[] = Array.from(nodes.map((node: NodeProperties) => node.category!.name!))
    const filteredCategories: string[] = [...new Set(nonFilteredCategories)]
    setCategories(filteredCategories)
  }
  // Aqui é criado um array com as categorias, o qual é recebido pelo header.tsx
  
  function chosenCategory (category: string) {
    setSelectedCategory(category)
  }
  // Aqui a categoria é selecionada para que o index.tsx renderize apenas quem tem esta categoria

  return (
    <CategoriesContext.Provider value={{
      updateCategories,
      categories,
      chosenCategory,
      selectedCategory
    }}
    >
      {children}
    </CategoriesContext.Provider>
  )
}

export function useCategories () {
  return useContext(CategoriesContext)
}