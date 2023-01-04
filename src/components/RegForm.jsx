import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';

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

const RegForm = () => {

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

  const onSubmitHandler = (values) => {
    console.log(values);
  };
  // console.log(errors);

  return (
    <Box sx={{ maxWidth: '30rem' }}>
      <Typography variant='h4' component='h1' sx={{ mb: '2rem' }}>
        Register
      </Typography>
      <Box
        component='form'
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <TextField
          sx={{ mb: 2 }}
          label='Name'
          size='small'
          fullWidth
          required
          error={!!errors['name']}
          helperText={errors['name'] ? errors['name'].message : ''}
          {...register('name')}
        />
        <TextField
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
        <TextField
          sx={{ mb: 2 }}
          label='Password'
          size='small'
          fullWidth
          required
          type='password'
          error={!!errors['password']}
          helperText={errors['password'] ? errors['password'].message : ''}
          {...register('password')}
        />

        <Button
          variant='contained'
          fullWidth
          type='submit'
          sx={{ py: '0.8rem', mt: '1rem' }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default RegForm;