import { Box } from '@mui/material'
import React from 'react'
import bgLight from '../static/bg_light.webp'
import bgDark from '../static/bg_dark.webp'
import { useSelector } from 'react-redux'

const LeftSideImage = () => {
  const theme = useSelector(state => state.theme)

  return (
    <Box
      sx={{
        backgroundImage: `url(${theme.darkTheme ? bgDark : bgLight})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        width: '100%',
        height: '100%',
        borderRadius: '15px 0 0 15px'
      }}
    ></Box>
  )
}

export default LeftSideImage