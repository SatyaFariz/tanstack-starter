// app/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router';
import Button from '@/components/ui/button';
import TextField from '@/components/ui/textfield';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className="flex items-center justify-center h-dvh">
      <div className="flex flex-col gap-4">
        <Button
          onPress={() => {
            alert('Hello, world!');
          }}
        >
          Click Me
        </Button>

        <TextField
          label="Email"
          type="email"
          placeholder="Enter your email"
          requirementIndicator="required"
          // validationState="invalid"
          errorMessage="Please enter a valid email address"
          description="Your email will not be shared with anyone."
        />
        </div>
    </div>
  );
}