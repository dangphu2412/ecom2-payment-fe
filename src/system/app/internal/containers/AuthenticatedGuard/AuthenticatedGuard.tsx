import { PropsWithChildren, ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUserSession } from '../../useUserSession';

export function AuthenticatedGuard({
  children
}: PropsWithChildren): ReactElement {
  const { push } = useRouter();
  const { sessionStatus } = useUserSession();

  useEffect(
    function interceptUnAuthenticatedUser() {
      if (sessionStatus !== 'unauthenticated') {
        return;
      }

      push('/login');
    },
    [push, sessionStatus]
  );

  return <>{sessionStatus === 'authenticated' && children}</>;
}
