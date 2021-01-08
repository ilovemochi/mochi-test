import { User } from '@ilovemochi/enums';
import { MakeTestUser } from '@ilovemochi/test-suite';

import { getUserLat, getUserLng } from '../index';

describe('User Getters', () => {
  const user = MakeTestUser();

  it('should return the user latitude', () => {
    const result = getUserLat(user);
    expect(result).toBe(user[User.Location]?.coordinates[1]);
  });
  it('should return the user longitude', () => {
    const result = getUserLng(user);
    expect(result).toBe(user[User.Location]?.coordinates[0]);
  });
});
