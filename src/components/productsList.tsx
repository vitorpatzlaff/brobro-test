import Image from 'next/image'
import styled from 'styled-components'
import {
  Card as MuiCard,
  Divider,
  Grid,
  Typography
} from '@mui/material'

type PropTypes = {
  url: string,
  alt: string,
  name: string
}

function ProductsList ({ url, alt, name }: PropTypes): JSX.Element {
  return (
    <Grid item xs>
      <Card>
        <Image src={url} alt={alt} width={400} height={400} priority />
        <Divider />
        <Typography>
          {name}
        </Typography>
      </Card>
    </Grid>
  )
}

const Card = styled(MuiCard)`
  min-width: 200px;
  max-width: 250px;
  height: 300px;
  padding: 5px;
`

export default ProductsList