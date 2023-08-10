import * as React from 'react';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const { push } = useRouter();

  useEffect(
    function goToDefaultPage() {
      push('/analytics');
    },
    [push]
  );

  return <></>;
};

export default Home;
