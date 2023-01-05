import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { object, string } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Divider, IconButton, InputAdornment, Stack, styled, TextField, Typography } from '@mui/material'
import { useTheme } from '@mui/system'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import axios from 'axios';

const registerSchema = object({
  name: string()
    .nonempty('Name is required')
    .max(32, 'Name must be less than 100 characters'),
  email: string().nonempty('Email is required').email('Email is invalid'),
  password: string()
    .nonempty('Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters')
})

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme()

  const LoginInputField = styled(TextField)({
    marginBottom: '1rem',
    width: '100%',
    "& .MuiInputBase-root": {
      backgroundColor: theme.palette.background.inputBg
    }
  })

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler = (userInfo) => {

    let mockApiUrl = "https://63b6557d58084a7af3af55c8.mockapi.io/api/users"

    axios.post(mockApiUrl, userInfo)
      .then(res => {
        console.log(res.data)
      }).catch(err => console.log(err))
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={theme.custom.registerForm}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: 600, pt: 2 }}
      >
        Sign in to Travelguru
      </Typography>

      <Stack
        direction={'row'}
        alignItems={'center'}
        spacing={1}
        pb={1}
      >
        <Typography
          variant="subtitle2"
          sx={{ color: '#898989' }}
        >
          Don't have an account?
        </Typography>
        <Button
          variant="text"
          sx={{ color: '#f76d73' }}
        >
          Sign up
        </Button>
      </Stack>
      <Divider />

      <Box
        component='form'
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit(onSubmitHandler)}
        py={3}
      >
        <LoginInputField
          label='Full name'
          size='small'
          required
          type='text'
          error={!!errors['name']}
          helperText={errors['name'] ? errors['name'].message : ''}
          {...register('name')}
        />
        <LoginInputField
          label='Email'
          size='small'
          required
          type='email'
          error={!!errors['email']}
          helperText={errors['email'] ? errors['email'].message : ''}
          {...register('email')}
        />
        <LoginInputField
          label='Password'
          size='small'
          required
          type={showPassword ? 'text' : 'password'}
          error={!!errors['password']}
          helperText={errors['password'] ? errors['password'].message : ''}
          {...register('password')}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        <Button
          variant='contained'
          fullWidth
          type='submit'
          color="orange"
          sx={{ height: 40 }}
          elevation={1}
        >
          Register
        </Button>
      </Box>
    </Box>
  )
}

export default RegistrationForm