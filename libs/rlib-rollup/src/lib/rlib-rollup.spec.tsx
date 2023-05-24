import { render } from '@testing-library/react';

import RlibRollup from './rlib-rollup';

describe('RlibRollup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RlibRollup />);
    expect(baseElement).toBeTruthy();
  });
});
