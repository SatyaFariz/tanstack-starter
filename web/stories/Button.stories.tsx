import type { Meta, StoryObj } from '@storybook/react';
import Button from '@/components/ui/button';

// Icons for demonstration (you can replace with your preferred icons)
const StarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'outline', 'secondary', 'text'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Text: Story = {
  args: {
    children: 'Text Button',
    variant: 'text',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

export const WithStartIcon: Story = {
  args: {
    children: 'With Icon',
    startIcon: <StarIcon />,
  },
};

export const WithEndIcon: Story = {
  args: {
    children: 'Continue',
    endIcon: <ArrowIcon />,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Both Icons',
    startIcon: <StarIcon />,
    endIcon: <ArrowIcon />,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading...',
    loading: true,
  },
};

export const LoadingWithVariants = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Button variant="primary" loading>
        Primary Loading
      </Button>
      <Button variant="outline" loading>
        Outline Loading
      </Button>
      <Button variant="secondary" loading>
        Secondary Loading
      </Button>
      <Button variant="text" loading>
        Text Loading
      </Button>
    </div>
  ),
};

export const Disabled = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const FullWidth = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const AllVariants = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Button variant="primary">Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="text">Text</Button>
    </div>
  ),
};

export const AllSizes = {
  render: () => (
    <div className="flex gap-4 items-center flex-wrap">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const IconVariations = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Button startIcon={<StarIcon />}>Start Icon</Button>
      <Button endIcon={<ArrowIcon />}>End Icon</Button>
      <Button startIcon={<StarIcon />} endIcon={<ArrowIcon />}>
        Both Icons
      </Button>
      <Button startIcon={<StarIcon />} loading>
        Loading (replaces icons)
      </Button>
    </div>
  ),
};

export const FormButtons = {
  render: () => (
    <form className="flex gap-4">
      <Button type="submit" variant="primary">
        Submit
      </Button>
      <Button type="reset" variant="outline">
        Reset
      </Button>
      <Button type="button" variant="text">
        Cancel
      </Button>
    </form>
  ),
};