import { createContext, useState, useContext, useCallback } from 'react'
import type { NodeProperties } from '../../pages'

export type ContextProperties = {
  updateCategories?: void,
  categories?: string[],
  chosenCategory?: void,
  selectedCategory?: string
}

const CategoriesContext = createContext<ContextProperties | {}>({})

export function CategoriesProvider ({ children }: any) {
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>()

  function updateCategories (nodes: {}[]) {
    const nonFilteredCategories: string[] = Array.from(nodes.map((node: NodeProperties) => node.category!.name!))
    const filteredCategories: string[] = [...new Set(nonFilteredCategories)]
    setCategories(filteredCategories)
  }
  
  function chosenCategory (category: string) {
    setSelectedCategory(category)
  }
  

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