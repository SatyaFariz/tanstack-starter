import { createFileRoute, redirect, useRouter } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import { useLoginWithEmailMutation } from '@/hooks/useLoginWithEmailMutation'

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
        children={(field) => (
          <input 
            name="Email" 
            placeholder="Enter your email"
            required 
            type="email"
            defaultValue={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      />
      <form.Field
        name="password"
        children={(field) => (
          <input 
            name="Password" 
            placeholder="Enter your password"
            required 
            type="password" 
            defaultValue={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      />
      <button
        type='submit'
      >
        Login
      </button>
    </form>
  )
}
