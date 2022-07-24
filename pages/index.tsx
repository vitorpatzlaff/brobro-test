import type { NextPage, GetServerSideProps } from 'next'
import {
  LinearProgress as MuiLinearProgress,
  Box as MuiBox,
  Container
} from '@mui/material'
import styled from 'styled-components'
import { useCategories } from '../src/context/categories'
import { useEffect } from 'react'
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

const Home: any = ({ nodes }: { nodes: ArrayOfObjects }) => {
  const { updateCategories, selectedCategory } = useCategories()

  useEffect(() => {
    updateCategories(nodes)
  }, [nodes])

  if (!nodes) {
    return (
      <LinearProgress />
    )
  }
  return (
    <>
      <Container>
        <Box>
          {nodes.map((node: NodeProperties) => {
            if (node.category!.name === selectedCategory || !selectedCategory) {
              return (
                <ProductsList
                  key={node.id!}
                  url={node.images![0].asset!.url!}
                  alt={node.images![0].alt!}
                  name={node.name!}
                  shortDescription={node.shortDescription!}
                />
              )
            }
          })}
        </Box>
      </Container>
    </>
  )
}

const Box = styled(MuiBox)`
  margin: -100px;
  margin-top: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
