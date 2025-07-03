import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import Checkbox from '@/components/ui/checkbox';

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isSelected: {
      control: { type: 'boolean' },
    },
    isIndeterminate: {
      control: { type: 'boolean' },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default checkbox',
  },
};

export const Checked: Story = {
  args: {
    children: 'Checked checkbox',
    isSelected: true,
  },
};

export const Indeterminate: Story = {
  args: {
    children: 'Indeterminate checkbox',
    isIndeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled checkbox',
    isDisabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    children: 'Disabled checked',
    isSelected: true,
    isDisabled: true,
  },
};

export const DisabledIndeterminate: Story = {
  args: {
    children: 'Disabled indeterminate',
    isIndeterminate: true,
    isDisabled: true,
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const LongLabel: Story = {
  args: {
    children: 'This is a very long label that demonstrates how the checkbox works with longer text content',
  },
  parameters: {
    layout: 'padded',
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox>Unchecked</Checkbox>
      <Checkbox isSelected>Checked</Checkbox>
      <Checkbox isIndeterminate>Indeterminate</Checkbox>
      <Checkbox isDisabled>Disabled unchecked</Checkbox>
      <Checkbox isSelected isDisabled>Disabled checked</Checkbox>
      <Checkbox isIndeterminate isDisabled>Disabled indeterminate</Checkbox>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// export const InteractiveDemo: Story = {
//   render: () => {
//     const [checkedItems, setCheckedItems] = React.useState({
//       item1: false,
//       item2: true,
//       item3: false,
//     });

//     const allChecked = Object.values(checkedItems).every(Boolean);
//     const someChecked = Object.values(checkedItems).some(Boolean);
//     const isIndeterminate = someChecked && !allChecked;

//     const handleSelectAll = (isSelected: boolean) => {
//       setCheckedItems({
//         item1: isSelected,
//         item2: isSelected,
//         item3: isSelected,
//       });
//     };

//     const handleItemChange = (key: keyof typeof checkedItems, isSelected: boolean) => {
//       setCheckedItems((prev) => ({
//         ...prev,
//         [key]: isSelected,
//       }));
//     };

//     return (
//       <div className="space-y-3">
//         <Checkbox
//           isSelected={allChecked}
//           isIndeterminate={isIndeterminate}
//           onChange={handleSelectAll}
//         >
//           Select All
//         </Checkbox>
//         <div className="ml-6 space-y-2">
//           <Checkbox
//             isSelected={checkedItems.item1}
//             onChange={(isSelected) => handleItemChange('item1', isSelected)}
//           >
//             Item 1
//           </Checkbox>
//           <Checkbox
//             isSelected={checkedItems.item2}
//             onChange={(isSelected) => handleItemChange('item2', isSelected)}
//           >
//             Item 2
//           </Checkbox>
//           <Checkbox
//             isSelected={checkedItems.item3}
//             onChange={(isSelected) => handleItemChange('item3', isSelected)}
//           >
//             Item 3
//           </Checkbox>
//         </div>
//       </div>
//     );
//   },
//   parameters: {
//     layout: 'padded',
//   },
// };

export const FormExample: Story = {
  render: () => (
    <form className="space-y-4 max-w-md">
      <div>
        <h3 className="text-lg font-semibold mb-3">Newsletter Preferences</h3>
        <div className="space-y-3">
          <Checkbox defaultSelected>
            Weekly newsletter
          </Checkbox>
          <Checkbox>
            Product updates
          </Checkbox>
          <Checkbox>
            Marketing emails
          </Checkbox>
          <Checkbox isIndeterminate>
            Special offers (some selected)
          </Checkbox>
        </div>
      </div>

      <div className="pt-4 border-t">
        <Checkbox>
          I agree to the terms and conditions
        </Checkbox>
      </div>
    </form>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const SizesComparison: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h4 className="font-medium">Standard Size</h4>
        <Checkbox isSelected>Standard checkbox</Checkbox>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium">With Custom Styling</h4>
        <Checkbox isSelected className="text-lg">
          Larger text checkbox
        </Checkbox>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};