import * as React from 'react';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from 'src/system/infrastructure/next.types';
import { NoLayout } from 'src/system/app/internal/ui/NoLayout/NoLayout';
import { useEffect } from 'react';

const LogOutPage: NextPageWithLayout = () => {
  const { replace } = useRouter();

  useEffect(
    function redirect() {
      replace('/login');
    },
    [replace]
  );

  return <></>;
};

LogOutPage.getLayout = NoLayout;

export default LogOutPage;
