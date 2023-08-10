import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UserSession } from '../../domain/usecases/user.usecase';
import { useQueryMyProfile } from './useQueryMyProfile';
import { systemActions } from './system.store';

export function useUserSession(): UserSession {
  const dispatch = useDispatch();
  const { profile, status } = useQueryMyProfile();

  function getSessionStatus() {
    if (status === 'loading') {
      return 'verifying';
    }

    if (status === 'success' && profile) {
      return 'authenticated';
    }

    return 'unauthenticated';
  }

  useEffect(
    function syncUserSession() {
      if (status !== 'success' || !profile) return;

      dispatch(systemActions.setUser(profile));
    },
    [dispatch, profile, status]
  );

  return {
    user: profile,
    sessionStatus: getSessionStatus()
  };
}
