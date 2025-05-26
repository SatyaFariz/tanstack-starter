// app/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router';
import Button from '@/components/ui/button';
import TextField from '@/components/ui/textfield';
import { useRef } from 'react';

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
        >
          Click Me
        </Button>

        <TextField
          ref={inputRef}
          label="Email"
          type="email"
          placeholder="Enter your email"
          requirementIndicator="required"
          startAdornment="@"
          endAdornment={<span className="text-gray-400">kg</span>}
          errorMessage="Please enter a valid email address"
          description="Your email will not be shared with anyone."
        />
        </div>
    </div>
  );
}