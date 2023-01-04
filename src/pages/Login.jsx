import React from 'react'

import ThemeSwitcher from '../components/ThemeSwitcher'
import LeftSideImage from '../components/LeftSideImage'
import RegistrationForm from '../components/RegistrationForm'
import SocialMediaButtons from '../components/SocialMediaButtons'
import { Box, Divider, Paper, Stack, styled } from '@mui/material'
import { useSelector } from 'react-redux'

const LoginPaper = styled(Paper)({
  display: 'flex',
  width: '100vw',
  height: '100vh'
})

const LoginStack = styled(Stack)({
  minHeight: '70vh',
  width: '60vw',
  margin: 'auto',
  borderRadius: '15px'
})

const Login = () => {
  const theme = useSelector(state => state.theme)
  const bgColor = theme.darkTheme ? '#1f0b4f' : '#fff'

  return (
    <LoginPaper square elevation={0}>
      <LoginStack direction="row">
        <Box flex={8}>
          <LeftSideImage />
        </Box>
        <Stack
          flex={4} 
          direction="column"
          justifyContent="space-between"
          spacing={0}
          px={4}
          sx={{ backgroundColor: bgColor, borderRadius: '0 15px 15px 0'}}
        >
          <ThemeSwitcher />
          <RegistrationForm />
          {/* <RegForm /> */}
          <Divider />
          <SocialMediaButtons />
        </Stack>
      </LoginStack>
    </LoginPaper>
  )
}

export default Login