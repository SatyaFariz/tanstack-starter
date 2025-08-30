// app/routes/index.tsx

import TextField from '@/components/ui/field/textfield';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className="flex items-center justify-center h-dvh p-6">
      <TextField
        label="Password"
        placeholder="Enter your password"
        indicator="*"
        // isInvalid
        errorMessage="Please enter a valid email address."
      />
    </div>
  );
}