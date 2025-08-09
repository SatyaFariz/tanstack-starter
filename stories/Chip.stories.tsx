import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import Chip from '@/components/ui/chip';

// Icons for demonstration
const StarIcon = () => (
  <svg fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const UserIcon = () => (
  <svg fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);

const TagIcon = () => (
  <svg fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
  </svg>
);

const HeartIcon = () => (
  <svg fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
);

const meta = {
  title: 'UI/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outlined'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'base'],
    },
    label: {
      control: { type: 'text' },
    },
  },
  args: {
    onClick: fn(),
    onDelete: fn(),
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Deletable',
  },
};

export const Solid: Story = {
  args: {
    label: 'Deletable',
    variant: 'solid',
    onDelete: fn(),
  },
};

export const Outlined: Story = {
  args: {
    label: 'Deletable',
    variant: 'outlined',
    onDelete: fn(),
  },
};

export const Small: Story = {
  args: {
    label: 'Small Chip',
    size: 'sm',
    onDelete: fn(),
  },
};

export const Base: Story = {
  args: {
    label: 'Base Chip',
    size: 'base',
    onDelete: fn(),
  },
};

export const WithStartIcon: Story = {
  args: {
    label: 'With Icon',
    startIcon: <StarIcon />,
    onDelete: fn(),
  },
};

export const WithEndIcon: Story = {
  args: {
    label: 'Custom End',
    endIcon: <HeartIcon />,
  },
};

export const EndIconOverridesDelete: Story = {
  args: {
    label: 'End Icon Priority',
    onDelete: fn(),
    endIcon: <HeartIcon />,
  },
  parameters: {
    docs: {
      description: {
        story: 'When both endIcon and onDelete are provided, endIcon takes priority and the delete button is not shown.',
      },
    },
  },
};

export const Clickable: Story = {
  args: {
    label: 'Clickable Chip',
    onClick: fn(),
  },
};

export const ClickableWithDelete: Story = {
  args: {
    label: 'Click & Delete',
    onClick: fn(),
    onDelete: fn(),
  },
};

export const WithoutDelete: Story = {
  args: {
    label: 'No Delete Button',
  },
};

export const AllVariants = {
  render: () => (
    <div className="flex gap-4 flex-wrap items-center">
      <Chip label="Solid" variant="solid" onDelete={fn()} />
      <Chip label="Outlined" variant="outlined" onDelete={fn()} />
    </div>
  ),
};

export const AllSizes = {
  render: () => (
    <div className="flex gap-4 flex-wrap items-center">
      <Chip label="Small" size="sm" onDelete={fn()} />
      <Chip label="Base" size="base" onDelete={fn()} />
    </div>
  ),
};

export const IconVariations = {
  render: () => (
    <div className="flex gap-4 flex-wrap items-center">
      <Chip label="Start Icon" startIcon={<UserIcon />} onDelete={fn()} />
      <Chip label="End Icon" endIcon={<TagIcon />} />
      <Chip label="Both Icons" startIcon={<UserIcon />} endIcon={<TagIcon />} />
      <Chip label="Delete Only" onDelete={fn()} />
    </div>
  ),
};

export const InteractiveStates = {
  render: () => (
    <div className="flex gap-4 flex-wrap items-center">
      <Chip label="Static" />
      <Chip label="Clickable" onClick={fn()} />
      <Chip label="Deletable" onDelete={fn()} />
      <Chip label="Both Actions" onClick={fn()} onDelete={fn()} />
    </div>
  ),
};

export const TagsExample = {
  render: () => (
    <div className="flex gap-2 flex-wrap max-w-md">
      <Chip label="React" variant="solid" startIcon={<TagIcon />} onDelete={fn()} />
      <Chip label="TypeScript" variant="outlined" startIcon={<TagIcon />} onDelete={fn()} />
      <Chip label="JavaScript" variant="solid" startIcon={<TagIcon />} onDelete={fn()} />
      <Chip label="CSS" variant="outlined" startIcon={<TagIcon />} onDelete={fn()} />
      <Chip label="HTML" variant="solid" startIcon={<TagIcon />} onDelete={fn()} />
      <Chip label="Node.js" variant="outlined" startIcon={<TagIcon />} onDelete={fn()} />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const FiltersExample = {
  render: () => (
    <div className="flex gap-2 flex-wrap max-w-md">
      <Chip label="All" variant="solid" onClick={fn()} />
      <Chip label="Frontend" variant="outlined" onClick={fn()} />
      <Chip label="Backend" variant="outlined" onClick={fn()} />
      <Chip label="Mobile" variant="outlined" onClick={fn()} />
      <Chip label="DevOps" variant="outlined" onClick={fn()} />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};