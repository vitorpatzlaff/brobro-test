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
    <Card
      onClick={() => setCardClicked(!cardClicked)}
    >
      {cardClicked ? (
        <Typography>
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
  )

  // return (
  //   <>
  //     <Card
  //       onClick={() => setCardClicked(!cardClicked)}
  //     >
  //       <Typography display={cardClicked ? 'initial' : 'none'}>
  //         {shortDescription}
  //       </Typography>
  //       <div style={{ display: !cardClicked ? 'initial' : 'none', transitionDuration: 300 }}>
  //         <Image
  //           src={url}
  //           alt={alt}
  //           width={400}
  //           height={400}
  //           priority
  //           layout='responsive'
  //           />
  //         <Divider />
  //         <Typography>
  //           {name}
  //         </Typography>
  //       </div>
  //     </Card>
  //   </>
  // )
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