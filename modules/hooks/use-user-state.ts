import { useSelector } from 'react-redux';

import {
  getUserData,
  getUserError,
  getUserHasLocation,
  getUserLoading,
} from '../redux/user/user.selectors';

const useUserState = () => {
  const user = useSelector(getUserData);
  const loading = useSelector(getUserLoading);
  const error = useSelector(getUserError);
  const hasLocation = useSelector(getUserHasLocation);

  return { user, error, loading, hasLocation };
};

export default useUserState;
