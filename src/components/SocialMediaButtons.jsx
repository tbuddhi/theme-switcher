import React from 'react'
import { Box, Button, Stack, styled, Typography } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';

const buttonSides = 38;

const SquareButton = styled(Button)({
  width: buttonSides,
  minWidth: buttonSides,
  height: buttonSides,
  "& .MuiButton-startIcon": { margin: 0 }
})

const SocialMediaButtons = () => {
  return (
    <Box pb={3}>
      <Typography color='GrayText' variant="overline" display='flex' justifyContent='center' py={2}>- OR -</Typography>
      <Stack direction="row" spacing={2}>
        <Box flex={5}>
          <Button disableElevation color='neutral' size="large" fullWidth sx={{ fontSize: '0.6em' }} variant="contained" startIcon={<GoogleIcon htmlColor='#EA4335' />} >
            Sign in with Google
          </Button>
        </Box>
        <Box flex={1} >
          <SquareButton disableElevation color='neutral' variant="contained" startIcon={<FacebookIcon htmlColor='#4267B2' />}></SquareButton>
        </Box>
        <Box flex={1} >
          <SquareButton disableElevation color='neutral' variant="contained" startIcon={<AppleIcon />}></SquareButton>
        </Box>
      </Stack>
    </Box>
  )
}

export default SocialMediaButtons