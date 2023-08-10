import React from 'react';
import Head from 'next/head';
import { Container, Grid, GridItem, Image } from '@chakra-ui/react';
import { NextPageWithLayout } from 'src/system/infrastructure/next.types';
import { FullLoader } from 'src/system/app/internal/ui/Loader/Full/FullLoader';
import { NoLayout } from 'src/system/app/internal/ui/NoLayout/NoLayout';
import { LoginForm } from '../src/system/app/internal/containers/LoginForm/LoginForm';
import { useIsMutating } from 'react-query';

const LoginPage: NextPageWithLayout = () => {
  const isLoading = useIsMutating('loginByCredentials') > 0;

  return (
    <>
      <Head>
        <title>Login page example</title>
      </Head>

      <FullLoader isLoading={isLoading} />

      <Container maxW="container.xl">
        <Grid templateColumns="repeat(2, 1fr)" height="100vh">
          <GridItem>
            <LoginForm />
          </GridItem>

          <GridItem>
            <div>
              <Image
                className="h-screen"
                src="/login-background.jpg"
                alt="Background image"
              />
            </div>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

LoginPage.getLayout = NoLayout;

export default LoginPage;
