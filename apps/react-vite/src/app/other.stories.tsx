import type { Meta } from '@storybook/react';
import { RlibVite } from '@vite-sb-paths/rlib-vite';

const Story: Meta<typeof RlibVite> = {
  component: RlibVite,
  title: 'RlibVite',
};
export default Story;

export const Primary = {
  args: {},
};
