import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'nex-ui',

  colorPrimary: '#6366f1',
  colorSecondary: '#4f46e5',

  appBg: '#f8fafc',
  appContentBg: '#ffffff',
  appBorderColor: '#e2e8f0',
  appBorderRadius: 8,

  fontBase: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  fontCode: '"Fira Code", monospace',

  textColor: '#1e293b',
  textInverseColor: '#f8fafc',
});
