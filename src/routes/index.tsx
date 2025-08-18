// app/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router';
import Button from '@/components/ui/button';
import TextField, { FieldDescription } from '@/components/ui/textfield';
import { useRef, useState } from 'react';
import Chip from '@/components/ui/chip';
import Checkbox from '@/components/ui/checkbox';
import Spinner from '@/components/ui/spinner';
import IconButton from '@/components/ui/icon-button';

import { Mail, Eye, Key } from 'lucide-react';

import Link from '@/components/ui/link';
import Switch from '@/components/ui/switch';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const [showsPassword, setShowsPassword] = useState(false);
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex items-center justify-center h-dvh p-6">
      <div className="flex flex-col gap-4 max-w-[400px]">
        <div className="flex gap-3">
          <Link to="/backend">
            <Mail/>
          </Link>

          <IconButton>
            <Mail/>
          </IconButton>

          <IconButton inline>
            <Mail/>
          </IconButton>
        </div>
        <Button
          onPress={() => {
            setShowsPassword((prev) => !prev);
          }}
          // loading
        >
          Click Me
        </Button>

        <TextField
          ref={inputRef}
          label="Password"
          type={showsPassword ? 'text' : 'password'}
          placeholder="Enter your password"
          value={text}
          onChange={setText}
          indicator="*"
          startAdornment={
            <Key size={18}/>
          }
          endAdornment={
            <IconButton size="lg" onPress={() => setShowsPassword((prev) => !prev)}>
              <Eye size={18}/>
            </IconButton>
          }
          // isInvalid
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
          <Switch
          >
            Accept Terms and Conditions
          </Switch>
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