import type { Meta, StoryObj } from '@storybook/react';
import Spinner from '@/components/ui/spinner';

const meta: Meta<typeof Spinner> = {
  title: 'UI/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile spinner component with multiple variants and sizes for loading states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the spinner',
      defaultValue: 'md',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'ring', 'ios', 'dots'],
      description: 'Visual variant of the spinner',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    size: 'md',
  },
};

// Size variants
export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

// Variant stories
export const Ring: Story = {
  args: {
    variant: 'ring',
    size: 'md',
  },
};

export const iOS: Story = {
  args: {
    variant: 'ios',
    size: 'md',
  },
};

export const Dots: Story = {
  args: {
    variant: 'dots',
    size: 'md',
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="md" />
        <span className="text-sm text-gray-600">Default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="ring" size="md" />
        <span className="text-sm text-gray-600">Ring</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="ios" size="md" />
        <span className="text-sm text-gray-600">iOS</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="dots" size="md" />
        <span className="text-sm text-gray-600">Dots</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all available spinner variants.',
      },
    },
  },
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" />
        <span className="text-sm text-gray-600">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="md" />
        <span className="text-sm text-gray-600">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-sm text-gray-600">Large</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available spinner sizes.',
      },
    },
  },
};

// Custom styling story
export const CustomStyling: Story = {
  args: {
    variant: 'ring',
    size: 'lg',
    className: 'text-red-500',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of custom styling using the className prop.',
      },
    },
  },
};