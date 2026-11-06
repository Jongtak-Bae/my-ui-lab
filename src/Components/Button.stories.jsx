import { fn } from 'storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger'],
    },
    handleClick: { control: false },
  },
  args: {
    label: 'Button',
    variant: 'primary',
    handleClick: fn(),
  },
};

export default meta;

export const Primary = {};

export const Secondary = {
  args: {
    variant: 'secondary',
  },
};

export const Tertiary = {
  args: {
    variant: 'tertiary',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
  },
};
