import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import {
  Card as MuiCard,
  Divider,
  Typography
} from '@mui/material'

type PropTypes = {
  url: string,
  alt: string,
  name: string,
  shortDescription: string
}

function ProductsList ({ url, alt, name, shortDescription }: PropTypes): JSX.Element {
  const [cardClicked, setCardClicked] = useState<boolean>(false)

  return (
    <>
      <Card
        onClick={() => setCardClicked(!cardClicked)}
      >
        {cardClicked ? (
          <Typography style={{ bottom: 0 }}>
            {shortDescription}
          </Typography>
        ) : (
          <>
            <Image
              src={url}
              alt={alt}
              width={400}
              height={400}
              priority
              layout='responsive'
              />
            <Divider />
            <Typography>
              {name}
            </Typography>
          </>
        )}
      </Card>
    </>
  )
}

const Card = styled(MuiCard)`
  width: 220px;
  height: 290px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  margin: 12px;
`

export default ProductsList