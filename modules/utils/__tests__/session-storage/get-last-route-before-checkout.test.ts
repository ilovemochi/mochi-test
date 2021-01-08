import Route from '../../../constants/routes';
import { getLastRouteBeforeCheckout } from '../../session-storage';

const makeSut = () => ({ sut: getLastRouteBeforeCheckout });

describe(getLastRouteBeforeCheckout.name, () => {
  it('calls the dependency with the right values', () => {
    const fn = jest.fn().mockReturnValue('data');
    const { sut } = makeSut();
    const result = sut(fn);
    expect(fn).toHaveBeenCalledWith('LAST_PATH_BEFORE_CHECKOUT', `${Route.MochiNight}`);
    expect(result).toBe('data');
  });
});
