import { HealthyOptions, WineTasting } from '../svg';

export default [
  {
    section: 'save',
    ImageName: () => <WineTasting />,
  },
  {
    section: 'orders',
    ImageName: () => <HealthyOptions />,
  },
] as const;

export const lastInfoData = {
  section: 'deliver',
};
