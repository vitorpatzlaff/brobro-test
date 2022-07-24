import type { NextPage, GetServerSideProps } from 'next'
import Image from 'next/image'
import {
  LinearProgress as MuiLinearProgress,
  Container,
  Grid,
  Card as MuiCard,
  Typography,
  Divider
} from '@mui/material'
import styled from 'styled-components'
import { useData } from '../src/context/data'
import { useCallback, useEffect } from 'react'
import ProductsList from '../src/components/productsList'

type ArrayOfObjects = [{}]

export type NodeProperties = {
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

const Home: NextPage = ({ nodes }: { nodes: ArrayOfObjects }) => {
  // const [nodes, setNodes] = useState<ArrayOfObjects | null>()
  // const [isLoading, setIsLoading] = useState<boolean>(false)

  // useEffect(() => {
  //   setIsLoading(true)
  //   fetch('/productsCategory.json')
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((data) => {
  //       const nodes: ArrayOfObjects = data.data.nodes
  //       setNodes(nodes)
  //       setIsLoading(false)
  //     })
  // }, [])

  const { updateCategories, selectedCategory } = useData()
  console.log('categoria selecionada:', selectedCategory)

  useEffect(() => {
    updateCategories(nodes)
  }, [nodes])

  if (!nodes) {
    return (
      <LinearProgress />
    )
  }
  return (
    <Container>
      <GridContainer>
        {nodes.map((node: NodeProperties) => {
          if (node.category!.name === selectedCategory) {
            return (
              <ProductsList
                key={node.id!}
                url={node.images![0].asset!.url!}
                alt={node.images![0].alt!}
                name={node.name!}
              />
            )
          } else if (!selectedCategory) {
            return (
              <ProductsList
                key={node.id!}
                url={node.images![0].asset!.url!}
                alt={node.images![0].alt!}
                name={node.name!}
              />
            )
          }
        })}
      </GridContainer>
    </Container>
  )
}

const GridContainer = styled(Grid).attrs({
  container: true,
  spacing: 8
})`
  margin-top: 150px;
`

const Card = styled(MuiCard)`
  min-width: 200px;
  height: 300px;
  padding: 5px;
`

const LinearProgress = styled(MuiLinearProgress)`
  margin-top: 85px;
  margin-left: -10px;
  margin-right: -10px;
`

export const getServerSideProps: GetServerSideProps = async () => {
  const res: Response = await fetch('https://mocki.io/v1/f4db0fcf-2b01-4efe-bf36-30872946a4c9')
  const data: {} = await res.json()
  const { data: { nodes } }: any = data

  return {
    props: { nodes }
  }
}

export default Home
