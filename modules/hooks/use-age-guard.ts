import differenceInYears from 'date-fns/differenceInYears';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Route from '../constants/routes';
import { getUserBirthDate } from '../utils/helper-functions';
import useIsMounted from './use-is-mounted';

const AGE_GUARD_DEFAULT_VALUE = {
  verifyAge: false,
  hideContent: false,
};

const useAgeGuard = (minimumAge: number | null = null) => {
  const [age, setAge] = useState(0);
  const isMounted = useIsMounted();
  const { user, error, loading } = { user: { name: 'name' }, error: {}, loading: true };
  const router = useRouter();

  // Predicates
  const userHasBirthDate = !!user && !!getUserBirthDate(user);
  const predicate = userHasBirthDate && isMounted.current;
  const notSignedIn = loading || !user || error;
  const isUnderAge = minimumAge ? !!age && age < minimumAge : false;

  useEffect(() => {
    if (predicate) setAge(differenceInYears(new Date(), new Date(getUserBirthDate(user))));
  }, [predicate, user]);

  useEffect(() => {
    if (isUnderAge) router.push(Route.Home).then();
  }, [isUnderAge, router]);

  return minimumAge
    ? {
        verifyAge: notSignedIn || !userHasBirthDate,
        hideContent: isUnderAge,
      }
    : AGE_GUARD_DEFAULT_VALUE;
};

export default useAgeGuard;
