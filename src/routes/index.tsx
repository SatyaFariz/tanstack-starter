// app/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router';
import Button from '@/components/ui/button';
import TextField, { FieldDescription } from '@/components/ui/textfield';
import { useRef } from 'react';
import Chip from '@/components/ui/chip';
import Checkbox from '@/components/ui/checkbox';
import Spinner from '@/components/ui/spinner';
import IconButton from '@/components/ui/icon-button';

import { Mail } from 'lucide-react';

import Link from '@/components/ui/link';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex items-center justify-center h-dvh p-6">
      <div className="flex flex-col gap-4 max-w-[400px]">
        <IconButton>
          <Mail/>
        </IconButton>
        <Button
          onPress={() => {
            inputRef.current?.focus();
          }}
          // loading
        >
          Click Me
        </Button>

        <TextField
          ref={inputRef}
          label="Email"
          type="email"
          placeholder="Enter your email"
          indicator="*"
          startAdornment={
            <IconButton>
              <Mail size={18}/>
            </IconButton>
          }
          endAdornment={<span className="text-gray-400">kg</span>}
          isInvalid
          errorMessage="Please enter a valid email address."
          // description="This is just a dummy description"
          description={
            <FieldDescription>
              Password <Link>Password</Link>
            </FieldDescription>
          }
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
          <Spinner
            className="text-red-400"
            variant="dots"
          />
        </div>
      </div>
    </div>
  );
}