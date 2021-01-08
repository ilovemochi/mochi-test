import { Location, User } from '@ilovemochi/enums';
import { IUser } from '@ilovemochi/types';
import { __, compose, gt, head, last, length, o, pathOr } from 'ramda';

// eslint-disable-next-line import/prefer-default-export
export const userHasCoordinates = compose(
  gt(__, 0),
  length,
  pathOr([], [User.Location, Location.Coordinates])
);

// User Getters
export const getUserLat = o<IUser, [number, number] | [null], number | null>(
  last,
  pathOr([null], [User.Location, Location.Coordinates])
);
export const getUserLng = o<IUser, [number, number] | [null], number | null>(
  head,
  pathOr([null], [User.Location, Location.Coordinates])
);
