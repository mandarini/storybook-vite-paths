import type { Meta } from '@storybook/react';
import { App } from './app';
import { jslibVite } from '@vite-sb-paths/jslib-vite';

console.log('jslibVite', jslibVite);

const Story: Meta<typeof App> = {
  component: App,
  title: 'App',
};
export default Story;

export const Primary = {
  args: {},
};
