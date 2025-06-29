import { createFileRoute, redirect } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import { useLoginWithEmailMutation } from '@/hooks/useLoginWithEmailMutation'
import TextField from '@/components/ui/textfield';
import Button from '@/components/ui/button';
import { z } from 'zod';

// Email validation schema using Zod
const emailSchema = z.string().email();

export const Route = createFileRoute('/backend/login')({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    if (context.userSession) {
      throw redirect({ to: '/backend' })
    }
  },
})

function RouteComponent() {
  const loginMutation = useLoginWithEmailMutation()

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      await loginMutation.mutateAsync(value)
    },
  })
  
  return (
    <form
      className="flex flex-col gap-2 w-full"
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
    >
      <form.Field
        name="email"
        validators={{
          onChange: ({ value }) => {
            if (!value) {
              return 'Email is required';
            } else if (!emailSchema.safeParse(value).success) {
              return 'Please enter a valid email address';
            }
            return undefined;
          },
        }}
        children={(field) => (
          <TextField 
            name="Email" 
            placeholder="Enter your email"
            requirementIndicator="*" 
            type="email"
            defaultValue={field.state.value}
            onChange={(val) => field.handleChange(val)}
            errorMessage={field.state.meta.errors.join(', ')}
            isInvalid={field.state.meta.errors.length > 0}
          />
        )}
      />
      <form.Field
        name="password"
        validators={{
          onChange: ({ value }) => {
            if (!value.trim()) {
              return 'Password is required';
            }
            return undefined;
          },
        }}
        children={(field) => (
          <TextField 
            name="Password" 
            placeholder="Enter your password"
            requirementIndicator="*" 
            type="password" 
            defaultValue={field.state.value}
            onChange={(val) => field.handleChange(val)}
            errorMessage={field.state.meta.errors.join(', ')}
            isInvalid={field.state.meta.errors.length > 0}
          />
        )}
      />
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <Button
            type='submit'
            disabled={!canSubmit}
            loading={isSubmitting}
          >
            Login
          </Button>
        )}
      />
    </form>
  )
}
