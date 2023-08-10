import '../styles/globals.scss';
import '../styles/typography.module.scss';
import { useHandleError } from 'src/system/app/internal/useHandleError';
import { SystemProvider } from 'src/system/infrastructure/providers/system.provider';
import { AppPropsWithLayout } from 'src/system/infrastructure/next.types';
import { AppLayout } from '../src/system/app/internal/containers/AppLayout/AppLayout';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const handleError = useHandleError();

  const renderLayout =
    Component.getLayout ?? (page => <AppLayout>{page}</AppLayout>);

  return (
    <SystemProvider onError={handleError} pageProps={pageProps}>
      {renderLayout(<Component {...pageProps} />)}
    </SystemProvider>
  );
}

export default MyApp;
