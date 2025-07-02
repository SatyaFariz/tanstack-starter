import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TextInput from '@/components/ui/textfield';

// Icons for demonstration
const EmailIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const meta = {
  title: 'UI/TextField',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isInvalid: {
      control: { type: 'boolean' },
    },
    requirementIndicator: {
      control: { type: 'select' },
      options: ['none', 'required', 'optional'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'search', 'tel', 'url'],
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    errorMessage: {
      control: { type: 'text' },
    },
  },
  args: {
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
};

export const WithStartIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    startAdornment: <EmailIcon />,
  },
};

export const WithEndIcon: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    endAdornment: <EyeIcon />,
  },
};

export const WithBothIcons: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    startAdornment: <SearchIcon />,
    endAdornment: <EyeIcon />,
  },
};

export const Required: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    requirementIndicator: 'required',
    startAdornment: <EmailIcon />,
  },
};

export const Optional: Story = {
  args: {
    label: 'Phone Number',
    placeholder: 'Enter your phone number',
    requirementIndicator: 'optional',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    description: 'We\'ll never share your email with anyone else.',
    startAdornment: <EmailIcon />,
  },
};

export const InvalidState: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    isInvalid: true,
    errorMessage: 'Please enter a valid email address',
    startAdornment: <EmailIcon />,
    defaultValue: 'invalid-email',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    isDisabled: true,
    startAdornment: <EmailIcon />,
    defaultValue: 'user@example.com',
  },
};

export const PasswordField: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    startAdornment: <LockIcon />,
    endAdornment: <EyeIcon />,
    requirementIndicator: 'required',
  },
};

export const LoginForm: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <TextInput
        label="Email"
        type="email"
        placeholder="Enter your email"
        startAdornment={<EmailIcon />}
        requirementIndicator="required"
        isInvalid
        errorMessage="Please enter a valid email address"
      />
      <TextInput
        label="Password"
        type="password"
        placeholder="Enter your password"
        startAdornment={<LockIcon />}
        endAdornment={<EyeIcon />}
        requirementIndicator="required"
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <TextInput
        label="Default State"
        placeholder="Default input"
        startAdornment={<EmailIcon />}
      />
      <TextInput
        label="Invalid State"
        placeholder="Invalid input"
        isInvalid
        errorMessage="This field has an error"
        startAdornment={<EmailIcon />}
        defaultValue="invalid-input"
      />
      <TextInput
        label="Disabled State"
        placeholder="Disabled input"
        isDisabled
        startAdornment={<EmailIcon />}
        defaultValue="disabled@example.com"
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="w-64">
        <TextInput
          label="Small Width"
          placeholder="Small width field"
          fullWidth={false}
        />
      </div>
      <div className="w-96">
        <TextInput
          label="Medium Width"
          placeholder="Medium width field"
        />
      </div>
      <div className="w-full max-w-2xl">
        <TextInput
          label="Large Width"
          placeholder="Large width field"
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};