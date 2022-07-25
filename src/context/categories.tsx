import { createContext, useState, useContext, useEffect } from 'react'
import type { NodeProperties } from '../../pages'

const CategoriesContext = createContext<any>({})

export function CategoriesProvider ({ children }: any) {
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>()
  const [showElement, setShowElement] = useState<string>('none')

  useEffect(() => {
    setShowElement('initial')
  }, [showElement])

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
      selectedCategory,
      showElement
    }}
    >
      {children}
    </CategoriesContext.Provider>
  )
}

export function useCategories () {
  return useContext(CategoriesContext)
}