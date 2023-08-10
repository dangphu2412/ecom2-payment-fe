import { Audio } from 'react-loader-spinner';
import React from 'react';
import classes from './FullLoader.module.scss';
import classNames from 'classnames';

type FullLoaderProps = {
  isLoading?: boolean;
  className?: string;
};

export function FullLoader({
  isLoading,
  className
}: FullLoaderProps): React.ReactElement {
  return (
    <>
      {isLoading && (
        <div className={classNames(classes['loader-wrapper'], className)}>
          <Audio height="100" width="100" color="grey" ariaLabel="loading" />
        </div>
      )}
    </>
  );
}
