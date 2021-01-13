import { Theme } from '@design-system';
import styled from 'styled-components';
import { color, system, variant } from 'styled-system';

const SelectField = styled('select')<{
  width: string;
  center: string;
  padding: string;
  variant: keyof Theme['fieldWrappers'];
}>(
  color,
  {
    margin: '1rem 0',
    width: '100%',
    border: 'none',
    outline: 'none',
    background: 'transparent',
  },
  variant({ scale: 'fieldWrappers' }),
  system({
    width: {
      property: 'width',
    },
    center: {
      properties: ['textAlign', 'textAlignLast'],
    },
    padding: {
      properties: ['paddingLeft', 'paddingRight'],
    },
  })
);

export default SelectField;
