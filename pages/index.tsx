import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  LinearProgress,
  Container,
  Grid,
  Card as MuiCard,
  Typography,
  Divider
} from '@mui/material'
import styled from 'styled-components'

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
    // console.log(nodes)
  }

  if (isLoading) {
    return (
      <LinearProgress />
    )
  }

  return (
    <Container>
      <GridContainer>
        {nodes && nodes.map((node: NodeProperties, index: number) => (
          <Grid item key={node.id} xs>
            <Card>
              <Image src={node.images![0].asset!.url} alt={node.images![0].alt} width={400} height={400} />
              <Divider />
              <Typography>
                {node.name} - {index}
              </Typography>
            </Card>
          </Grid>
        ))}
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

export default Home
