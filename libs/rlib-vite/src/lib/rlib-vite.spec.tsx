import { render } from '@testing-library/react';

import RlibVite from './rlib-vite';

describe('RlibVite', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RlibVite />);
    expect(baseElement).toBeTruthy();
  });
});
