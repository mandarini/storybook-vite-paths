import type { Meta } from '@storybook/react';
import { App } from './app';
import { jslibRollup } from '@vite-sb-paths/jslib-rollup';

console.log('jslibRollup', jslibRollup());

const Story: Meta<typeof App> = {
  component: App,
  title: 'App',
};
export default Story;

export const Primary = {
  args: {},
};
