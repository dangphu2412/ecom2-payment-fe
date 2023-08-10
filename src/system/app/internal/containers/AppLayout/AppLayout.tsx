import { PropsWithChildren, ReactElement } from 'react';
import { Header } from './Header/Header';
import { Box } from '@chakra-ui/react';
import { AuthenticatedGuard } from '../AuthenticatedGuard/AuthenticatedGuard';
import { Footer } from './Footer/Footer';

export function AppLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <AuthenticatedGuard>
      <Header />

      <Box maxW="container.xl" margin="auto">
        {children}
      </Box>

      <Footer />
    </AuthenticatedGuard>
  );
}
