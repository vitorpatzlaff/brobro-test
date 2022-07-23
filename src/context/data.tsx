import { createContext, useState } from 'react'

const DataContext = createContext(null)

function DataProvider ({ children }: any) {
  const [data, setData] = useState<[]>([])
  // const [categories, setCategories] = useState<string[]>([])

  if (data) {
    const nonFilteredCategories: string[] = Array.from(data.map((item) => item.category.name))
    const filteredCategories: string[] = [...new Set(nonFilteredCategories)]
    // setCategories(filteredCategories)
  }

  // console.log(categories)
  
  return (
    <DataContext.Provider value={{
      data,
      setData,
      // categories
    }}
    >
      {children}
    </DataContext.Provider>
  )
}

export { DataProvider, DataContext }