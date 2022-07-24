import { createContext, useState, useContext, useCallback } from 'react'
import type { NodeProperties } from '../../pages'

const DataContext = createContext(null)

export function DataProvider ({ children }: any) {
  // const [data, setData] = useState<{}[]>()
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>()

  function updateCategories (nodes: {}[]) {
    const nonFilteredCategories: string[] = Array.from(nodes.map((node: NodeProperties) => node.category!.name!))
    const filteredCategories: string[] = [...new Set(nonFilteredCategories)]
    setCategories(filteredCategories)
  }
  
  function chosenCategory (category: string) {
    console.log('categorias', categories)
    setSelectedCategory(category)
  }
  

  return (
    <DataContext.Provider value={{
      updateCategories,
      categories,
      chosenCategory,
      selectedCategory
    }}
    >
      {children}
    </DataContext.Provider>
  )
}

export function useData () {
  return useContext(DataContext)
}