import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import {
  Card as MuiCard,
  Divider,
  Typography,
  Skeleton
} from '@mui/material'
import { useCategories } from '../context/categories'

type PropTypes = {
  url: string,
  alt: string,
  name: string,
  shortDescription: string
}

function ProductsList ({ url, alt, name, shortDescription }: PropTypes): JSX.Element {
  const [isCardClicked, isSetCardClicked] = useState<boolean>(false)
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false)
  const { showElement } = useCategories()

  return (
      <>
        <Card
          style={{ display: showElement }}
          onClick={() => isSetCardClicked(!isCardClicked)}
        >
          <div style={{ display: isCardClicked ? 'initial' : 'none' }}>
            <Typography>
              {shortDescription}
            </Typography>
            <Divider />
          </div>
          <div style={{ display: !isCardClicked ? 'initial' : 'none' }}>
            {!isImageLoaded && <Skeleton variant="rectangular" width={300} height={300} />}
            <Image
              src={url}
              alt={alt}
              width={300}
              height={300}
              layout='responsive'
              onLoad={() => setIsImageLoaded(true)}
            />
            <Divider />
            <Typography>
              {name}
            </Typography>
          </div>
        </Card>
      </>
    )
}

const Card = styled(MuiCard)`
  width: 300px;
  height: 350px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  margin: 12px;
`

export default ProductsList