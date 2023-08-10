import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text
} from '@chakra-ui/react';
import classes from './LoginForm.module.scss';
import { LoginModel } from '../../app-models/auth.model';
import { useLogin } from '../../useLogin';
import { persistentStorage } from '../../services/persistent.storage';
import { useNotify } from '../../useNotify';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { CLIENT_ID } from '../../../../domain/constants';
import {
  CredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider
} from '@react-oauth/google';
import { useLoginGoogleMutation } from '../../useLoginGoogleMutation';

export function LoginForm(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<LoginModel>();
  const { push } = useRouter();
  const showNotify = useNotify();
  const { loginGoogle } = useLoginGoogleMutation();
  const { login } = useLogin();

  function submitResolver(model: LoginModel) {
    const loginCredentials = {
      username: model.username,
      password: model.password
    };

    login(loginCredentials, {
      onSuccess: credentials => {
        persistentStorage.setAccessToken(credentials.accessToken);
        push('/');
      },
      onError: () => {
        showNotify({
          title: 'Incorrect username or password',
          status: 'error'
        });
        reset();
      }
    });
  }

  function handleLoginGoogleSuccess(credentialResponse: CredentialResponse) {
    loginGoogle(
      {
        idToken: credentialResponse.credential as string
      },
      {
        onSuccess: credentials => {
          persistentStorage.setAccessToken(credentials.accessToken);
          push('/');
        }
      }
    );
  }

  return (
    <>
      <div className={classes['form-container']}>
        <Heading size="md" className="text-left mb-3" color="primary">
          Welcome back
        </Heading>

        <Text fontSize="sm" className="text-left mb-5">
          Enter your username and password to sign in
        </Text>

        <form onSubmit={handleSubmit(submitResolver)}>
          <FormControl isInvalid={!!errors?.username?.message} isRequired>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              id="username"
              type="text"
              placeholder="Username"
              {...register('username', {
                minLength: 4,
                required: true
              })}
            />

            {errors.username && (
              <div>Username required longer than 6 character</div>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors?.password?.message} isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              {...register('password', {
                minLength: 6,
                required: true
              })}
            />
            {errors.password && (
              <div>Password required longer than 6 character</div>
            )}
          </FormControl>

          <Button
            variant="outline"
            colorScheme="teal"
            type="submit"
            className="w-full mt-5"
          >
            Sign In
          </Button>
        </form>

        <Text fontSize="sm" className="text-center my-5">
          <Link href={'register'}>Register now</Link>
        </Text>

        <GoogleOAuthProvider clientId={CLIENT_ID}>
          <GoogleLogin
            onSuccess={handleLoginGoogleSuccess}
            onError={() => {
              showNotify({
                title: 'Login google failed',
                status: 'error'
              });
            }}
          />
        </GoogleOAuthProvider>
      </div>
    </>
  );
}
