import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { object, string } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Divider, IconButton, InputAdornment, Stack, styled, TextField, Typography } from '@mui/material'
import { useTheme } from '@mui/system'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import Axios from 'axios';

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
  const [user, setUser] = useState({});
  const theme = useTheme()

  const LoginInputField = styled(TextField)({
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

  const onSubmitHandler = async (values) => {
    console.log(values);

    let mockApiUrl = "https://bde3d9f6-92ef-4d68-9618-82c49e55a679.mock.pstmn.io/createUser"

    Axios.post(mockApiUrl, {
      values,
      headers: {
        Authorization: ``,
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log(res.data)
    }).catch(err => console.log(err))
    // try {
    //   let res = await fetch( mockApiUrl, {
    //     method: "POST",
    //     body: JSON.stringify(values)
    //   });
    //   let resJson = await res.json();
    //   if( res.statusCode === 200){
    //     alert("User added successfully")

    //   }

    // } catch (error) {
    //   console.log(error);
    // }

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
          sx={{ mb: 2 }}
          variant='outlined'
          label='Full name'
          size='small'
          fullWidth
          required
          error={!!errors['name']}
          helperText={errors['name'] ? errors['name'].message : ''}
          {...register('name')}
        />
        <LoginInputField
          sx={{ mb: 2 }}
          label='Email'
          size='small'
          fullWidth
          required
          type='email'
          error={!!errors['email']}
          helperText={errors['email'] ? errors['email'].message : ''}
          {...register('email')}
        />
        <LoginInputField
          sx={{ mb: 2 }}
          label='Password'
          size='small'
          fullWidth
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
          sx={{ height: 40}}
          elevation={1}
        >
          Register
        </Button>
      </Box>
    </Box>
  )
}

export default RegistrationForm