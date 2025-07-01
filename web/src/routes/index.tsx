// app/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router';
import Button from '@/components/ui/button';
import TextField from '@/components/ui/textfield';
import { useRef } from 'react';
import Chip from '@/components/ui/chip';
import Checkbox from '@/components/ui/checkbox';
import Spinner from '@/components/ui/spinner';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex items-center justify-center h-dvh">
      <div className="flex flex-col gap-4">
        <Button
          onPress={() => {
            inputRef.current?.focus();
          }}
          loading
        >
          Click Me
        </Button>

        <TextField
          ref={inputRef}
          label="Email"
          type="email"
          placeholder="Enter your email"
          requirementIndicator="(optional)"
          startAdornment="@"
          endAdornment={<span className="text-gray-400">kg</span>}
          errorMessage="Please enter a valid email address"
          description="Your email will not be shared with anyone."
        />

        <div className="flex gap-2 flex-wrap max-w-md">
          <Chip label="All" variant="solid" />
          <Chip label="Frontend" variant="outlined" />
          <Chip label="Backend" variant="outlined" />
          <Chip label="Mobile" variant="outlined" />
          <Chip label="DevOps" variant="outlined" />
        </div>

        <div>
          <Checkbox
          >
            Accept Terms and Conditions
          </Checkbox>
        </div>

        <div>
          <Spinner className="bg-red-400"/>
        </div>
      </div>
    </div>
  );
}