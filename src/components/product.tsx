// Como o nome diz, este componente serve para renderizar a lista. Ele é uma daqueles cards, o index.tsx verifica as categorias e renderiza os que batem com isto.

import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import {
  Card as MuiCard,
  Divider,
  Typography,
  Skeleton
} from '@mui/material'

type PropTypes = {
  url: string,
  alt: string,
  name: string,
  shortDescription: string
}

function Product ({ url, alt, name, shortDescription }: PropTypes): JSX.Element {
  const [isCardClicked, isSetCardClicked] = useState<boolean>(false)
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false)

  return (
      <>
        <Card
          onClick={() => isSetCardClicked(!isCardClicked)}
        >
          <div style={{ display: isCardClicked ? 'initial' : 'none' }}>
            <Typography>
              {shortDescription}
            </Typography>
            <Divider />
          </div>
          <div style={{ display: !isCardClicked ? 'initial' : 'none' }}>
            {!isImageLoaded && (
              <>
                <Skeleton variant="rectangular" width={300} height={300} />
                <Skeleton variant="rectangular" width={300} height={41} style={{ marginTop: 5 }} />
              </>
            )}
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
  && {
    width: 300px;
    height: 346px;
    padding: 5px;
    text-align: center;
    cursor: pointer;
    margin: 12px;
  }
`

export default Product
