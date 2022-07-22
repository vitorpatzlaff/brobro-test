import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import {
  LinearProgress,
  Container,
  Grid
} from '@mui/material'

type ArrayOfObjects = [{}]

type NodeProperties = {
  name?: string,
  shortDescription?: string,
  id?: string,
  images?: [{
    alt?: string,
    asset?: {
      url?: string
    }
  }],
  category?: {
    _id?: string,
    name?: string
  }
}

const Home: NextPage = () => {
  const [nodes, setNodes] = useState<ArrayOfObjects | null>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('/productsCategory.json')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const nodes: ArrayOfObjects = data.data.nodes
        setNodes(nodes)
        setIsLoading(false)
      })
  }, [])

  if (nodes) {
    console.log(nodes)
  }

  if (isLoading) {
    return (
      <LinearProgress />
    )
  }

  return (
    <Container>
      <Grid>
        {nodes && nodes.map((node: NodeProperties, index: number) => (
          <li>{node.name} - {index}</li>
        ))}
      </Grid>
    </Container>
  )
}

export default Home
