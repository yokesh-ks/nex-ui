import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' } },
    },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    hideLabel: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Full name',
    placeholder: 'John Doe',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email address',
    type: 'email',
    placeholder: 'you@example.com',
    helperText: "We'll never share your email with anyone.",
  },
};

export const WithError: Story = {
  args: {
    label: 'Email address',
    type: 'email',
    value: 'invalid-email',
    error: 'Please enter a valid email address.',
  },
};

export const HiddenLabel: Story = {
  args: {
    label: 'Search',
    hideLabel: true,
    placeholder: 'Search...',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled input',
    value: 'Cannot edit',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small input',
    size: 'sm',
    placeholder: 'Small size',
  },
};

export const Large: Story = {
  args: {
    label: 'Large input',
    size: 'lg',
    placeholder: 'Large size',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full width input',
    fullWidth: true,
    placeholder: 'Takes full container width',
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Input label="Default" placeholder="Default state" />
      <Input
        label="With helper"
        helperText="This is helper text"
        placeholder="With helper text"
      />
      <Input
        label="With error"
        error="This field is required"
        placeholder="Error state"
      />
      <Input label="Disabled" disabled value="Disabled input" />
    </div>
  ),
};
